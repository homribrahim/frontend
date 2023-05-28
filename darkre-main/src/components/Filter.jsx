import React, { useState, useEffect, useRef } from "react";
import RangeSlider from "./RangeSilder";
import Card from "./Card";
import Button from "./Button";
import Pagination from "@material-ui/lab/Pagination";
import usePagination from "./Pagination";
// import {DataContext} from './Data'
import axios from "axios";
import { useLocation } from "react-router-dom";

const Filter = () => {
  const [value, setvalue] = useState([300, 700]);
  const [vide, setVide] = useState(true);
  // =================================
  const ref = useRef();
  const handleBackClick = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  // =================================
  const handleChange = (event, newvalue) => {
    setvalue(newvalue);
  };

  // const data = useContext(DataContext);
  const [result, setResult] = useState([]);
  const [products, setProducts] = useState([]);

  let [page, setPage] = useState(1);
  const FetchData = async (Url) => {
    try {
      // const protocol =window.location.protocol
      // const host1 = window.location.hostname

      // let url = "https://backenddarkre.herokuapp.com/apiStuff"
      let url = process.env.REACT_APP_API_URL;
      const response = await axios.get(url + Url);
      console.log(response);
      if (response.data.data.length == 0) {
        setVide(false);
      } else {
        setResult(response.data.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleResize = () => {
    let PER_PAGE = null;
    if (window.outerWidth > 1280) {
      PER_PAGE = 12;
      return PER_PAGE;
    } else if (window.outerWidth > 1024) {
      PER_PAGE = 9;
      return PER_PAGE;
    } else if (window.outerWidth > 768) {
      PER_PAGE = 6;
      return PER_PAGE;
    } else {
      PER_PAGE = 3;
      return PER_PAGE;
    }
  };

  // window.addEventListener("DOMContentLoaded", );

  let PER_PAGE = handleResize();

  const _DATA = usePagination(result, PER_PAGE);
  const count = Math.ceil(result.length / PER_PAGE);

  const handleChangePage = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  // ********************Filter***********
  const FilterVille = async (e) => {
    let ville = e.target.getAttribute("name");
    let Url = "/ville/" + ville;
    //  console.log(result)

    try {
      // const protocol =window.location.protocol
      // const host1 = window.location.hostname
      // let url ="https://backenddarkre.herokuapp.com/apiStuff"
      let url = process.env.REACT_APP_API_URL;
      const response = await axios.get(url + Url);

      if (response.data.length == 0) {
        setVide(false);
      } else {
        setVide(true);
        setResult(response.data);
      }
    } catch (e) {
      console.error(e);
    }
    handleBackClick();
  };
  const FilterCategorieItems = async (location) => {
    let Categorie = location.state.categorie;
    let type = location.state.type;
    let Url = "/filter/by?categorie=" + Categorie + "&type=" + type;
    // console.log(Url)

    try {
      // const protocol =window.location.protocol
      // const host1 = window.location.hostname
      // let url ="https://backenddarkre.herokuapp.com/apiStuff"
      let url = process.env.REACT_APP_API_URL;
      const response = await axios.get(url + Url);
      console.log(response.data);
      if (response.data.length == 0) {
        setVide(false);
      } else {
        setVide(true);
        setResult(response.data);
      }
      handleBackClick();
    } catch (e) {
      console.error(e);
    }
  };
  let location = useLocation();

  if (location.state != null) {
    if (location.state.st) {
      FilterCategorieItems(location);
      location.state.st = false;
    }
  }

  const FilterPrice = async (e) => {
    let PriceMin = value[0];
    let PriceMax = value[1];
    let Url = "/price/interval?pricemin=" + PriceMin + "&pricemax=" + PriceMax;
    try {
      // const protocol =window.location.protocol
      // const host1 = window.location.hostname
      // let url ="https://backenddarkre.herokuapp.com/apiStuff"
      let url = process.env.REACT_APP_API_URL;
      const response = await axios.get(url + Url);

      if (response.data.length == 0) {
        setVide(false);
      } else {
        setVide(true);
        setResult(response.data);
      }
    } catch (e) {
      console.error(e);
    }
    handleBackClick();
  };

  const FilterCategorie = async (e) => {
    let categorie = e.target.getAttribute("name");
    console.log(categorie);
    let Url = "/categorie/" + categorie;
    try {
      // const protocol =window.location.protocol
      // const host1 = window.location.hostname
      // let url ="https://backenddarkre.herokuapp.com/apiStuff"
      let url = process.env.REACT_APP_API_URL;
      const response = await axios.get(url + Url);

      if (response.data.length == 0) {
        setVide(false);
      } else {
        setVide(true);
        setResult(response.data);
      }
    } catch (e) {
      console.error(e);
    }
    handleBackClick();
  };
  useEffect(() => {
    FetchData("/");

    setResult(products);

    console.log(result);
  }, []);
  //******************************** */
  return (
    <>
      <div ref={ref}>.</div>
      <div className="flex flex-row  mt-10">
        <div className="relative left-0 md:w-1/6   ">
          <div className="bg-white  font-bold divide-y divide-blue-800 shadow-2xl   py-6 ">
            <h1 className="uppercase text-blue  text-xl pb-3 text-center tracking-wider   ">
              Categories
            </h1>
            <ul className="text-left text-sm  xl:text-md font-semibold md:mx-10 mx-8  py-5 cursor-pointer ">
              <li name="Maison" onClick={FilterCategorie}>
                Maison
              </li>
              <li name="Appartement" onClick={FilterCategorie}>
                Appartement
              </li>
            </ul>
          </div>
          <div className="bg-white  font-bold divide-y divide-blue-800 shadow-2xl   py-6 mt-10 ">
            <h1 className="uppercase text-blue  text-xl pb-3 text-center tracking-wider   ">
              Gouvernorat
            </h1>
            <ul className="text-left text-sm  xl:text-md font-semibold md:mx-10 mx-8  py-5 cursor-pointer ">
              <li name="Ariana" onClick={FilterVille}>
                Ariana
              </li>
              <li name="Bizerte" onClick={FilterVille}>
                Bizerte
              </li>
              <li name="Ben Arous" onClick={FilterVille}>
                Ben Arous
              </li>
              <li name="Beja" onClick={FilterVille}>
                Beja
              </li>
              <li name="Gafsa" onClick={FilterVille}>
                Gafsa
              </li>
              <li name="Gbeli" onClick={FilterVille}>
                Gbeli
              </li>
              <li name="Gabes" onClick={FilterVille}>
                Gabes
              </li>
              <li name="Jandouba" onClick={FilterVille}>
                Jendouba
              </li>
              <li name="Kairouan" onClick={FilterVille}>
                Kairouan
              </li>
              <li name="Keef" onClick={FilterVille}>
                Keef
              </li>
              <li name="Kasserine" onClick={FilterVille}>
                Kasserine
              </li>
              <li name="Mahdia" onClick={FilterVille}>
                Mahdia
              </li>
              <li name="Monastir" onClick={FilterVille}>
                Monastir
              </li>
              <li name="Manouba" onClick={FilterVille}>
                Manouba
              </li>
              <li name="Mednin" onClick={FilterVille}>
                Mednin
              </li>
              <li name="Nabeul" onClick={FilterVille}>
                Nabeul
              </li>
              <li name="Sfax" onClick={FilterVille}>
                Sfax
              </li>
              <li name="Sousse" onClick={FilterVille}>
                Sousse
              </li>
              <li name="Siliana" onClick={FilterVille}>
                Siliana
              </li>
              <li name="Sidi Bouzid" onClick={FilterVille}>
                Sidi Bouzid
              </li>
              <li name="Tataouine" onClick={FilterVille}>
                Tataouine
              </li>
              <li name="Tunis" onClick={FilterVille}>
                Tunis
              </li>
              <li name="Tozeur" onClick={FilterVille}>
                Tozeur
              </li>
              <li name="Zaghouen" onClick={FilterVille}>
                Zaghouen
              </li>
            </ul>
          </div>
          <div className="bg-white flex flex-col items-center  font-bold divide-y divide-blue-800 shadow-2xl mt-10  py-6">
            <h1 className="uppercase text-blue  text-xl pb-2 text-center tracking-wider ">
              Price Filter
            </h1>
            <ul className="text-center  font-semibold   pt-10 ">
              <RangeSlider handleChange={handleChange} value={value} />
              <div className="flex justify-center">
                <li className="md:text-xl text-md font-semibold py-5">
                  {value[0]}DT - {value[1]}DT
                </li>
              </div>

              <div
                className="bg-blue py-2 rounded-2xl w-36 "
                onClick={FilterPrice}
              >
                <p className="  text-white md:text-lg text-sm   ">Filtrer</p>
              </div>
            </ul>
          </div>
        </div>

        <div className="flex flex-col w-5/6 ">
          {vide ? (
            <>
              <div className=" relative grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  grid-cols-1   justify-items-center  mx-10 ">
                {_DATA.currentData().map((item) => (
                  <Card Maison={item} />
                ))}
              </div>
              <Pagination
                count={count}
                page={page}
                onChange={handleChangePage}
                color="primary"
                className="mx-auto"
              />{" "}
            </>
          ) : (
            <div
              class=" text-center my-10 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-10"
              role="alert"
            >
              <p class="font-bold text-3xl">Desole !</p>
              <p class="text-lg"> Votre recherche N'existe pas</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Filter;
