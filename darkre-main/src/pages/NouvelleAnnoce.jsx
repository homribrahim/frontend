import React,{useState} from 'react'
import axios from 'axios'

const NouvelleAnnoce = () => {
const [Message,setMessage]=useState()
const [AfficheMessage,setAfficheMessage]=useState("")
  const [Image,SetImage] = useState({
    "img1":"",
    "img2":"",
    "img3":"",
    "img4":"",
    "img5":""

  });
  const [NameImage,SetNameImage] = useState({
    "img1":"images/img.png",
    "img2":"images/img.png",
    "img3":"images/img.png",
    "img4":"images/img.png",
    "img5":"images/img.png"

  });
  const pathname = window.location.pathname 
  console.log(pathname)

  const File =(e)=>{
    let newImage={...Image}
    let newNameImage={...NameImage}
    newImage[e.target.name]=(e.target.files[0]);
    newNameImage[e.target.name]=URL.createObjectURL(e.target.files[0]);
    SetImage(newImage); 
    SetNameImage(newNameImage)
  }
 const Post= async(e)=>{
  e.preventDefault()
  setAfficheMessage(true)
  let title=document.getElementsByName("title")[0].value
  let description = document.getElementsByName("description")[1].value
  let numero = document.getElementsByName("numero")[0].value
  let typeElements = document.getElementsByName("type")
  let categorieElements = document.getElementsByName("categorie")
 for(let i=0;i<=3;i++){
  if(typeElements[i].checked){
    var type = typeElements[i].value;
  }
 }
 for(let i=0;i<=1;i++){
  if(categorieElements[i].checked){
    var  categorie = categorieElements[i].value;
  }
 }
 let villeElements = document.getElementsByName("ville");
 for(let i=0;i<=23;i++){
  if(villeElements[0][i].selected){
    var ville = villeElements[0][i].value;
  }
 }
 let prix =document.getElementsByName("prix")[0].value
 let meubleBool = document.getElementsByName("meuble")
 let meuble
if(meubleBool[0].checked){
   meuble = true
}
else{
   meuble = false
}
 const protocol =window.location.protocol
 const host1 = window.location.hostname
//  let url =protocol+"//"+host1+":8080/apiStuff"
// let url ="https://backenddarkre.herokuapp.com/apiStuff"
let url = process.env.REACT_APP_API_URL
console.log(protocol)
const formData = new FormData();
formData.append("title", title);
formData.append("description", description);
formData.append("phone", numero);
formData.append("categorie", categorie);
formData.append("meuble", meuble);
formData.append("type", type);
formData.append("ville", ville);
formData.append("price", prix);
formData.append("img1",Image["img1"])
formData.append("img2",Image["img2"])
formData.append("img3",Image["img3"])
formData.append("img4",Image["img4"])
formData.append("img5",Image["img5"])

try {
   const resp = await axios.post(url,formData)
    console.log(resp)
    setMessage(true)
    setAfficheMessage("Votre Maison a été Bien ajouté")
} catch (error) {
  console.log("erreur")
  setMessage(false)
  setAfficheMessage("Un erreur est survenue")
  console.log(AfficheMessage)
}
}

    return (
      
        <div className="pt-24 ">
        <form   onSubmit={Post} className="mx-auto md:w-1/2 sm:w-3/4 relative rounded-md shadow-xl bg-white flex flex-col items-center justify-center py-16">
      <div className="flex items-center justify-center text-blue">
        <legend className="mb-28 title md:text-4xl sm:text-xl text-lg font-bold">
          Votre Annonce
        </legend>
      </div>
      <div className="flex items-center my-5 relative left-8">
        <label for="title" className="sm:text-xl text-sm font-bold text-blue"
          >Title:
        </label>
        <input required
        name="title"
          type="text"
          placeholder="Ecrire le Titre"
          className="
            border-solid border-black border-2
            pl-9
            py-1
            ml-3
            rounded-xl
            focus:outline-none
            focus:ring-2
            focus:ring-blue-800
            focus:border-transparent
          "
        />
      </div>
      <div className="flex items-center my-5">
        <label for="title" className="sm:text-xl text-sm font-bold text-blue"
          >Description:
        </label>
        <input
        required
        name="description"
          type="text"
          placeholder="Ecrire le description"
          className="
            border-solid border-black border-2
            pl-9
            py-1
            ml-3
            rounded-xl
            h-32
            focus:outline-none
            focus:ring-2
            focus:ring-blue-800
            focus:border-transparent
          "
        />
      </div>
      <div className="flex items-center my-5 relative left-5">
        <label for="title" className="sm:text-xl text-sm font-bold text-blue"
          >Numero:
        </label>
        <input
        required
        name="numero"
          type="text"
          placeholder="Ecrire le Numero"
          className="
            border-solid border-black border-2
            pl-9
            py-1
            ml-3
            rounded-xl
            focus:outline-none
            focus:ring-2
            focus:ring-blue-800
            focus:border-transparent
          "
        />
      </div>

      <div className="my-5 relative -left-2">
        <label for="" className="sm:text-xl text-sm font-bold text-blue mr-2"
          >Categories:</label>
        <input required type="radio" id="maison" name="categorie" value="Maison" />
        <label className="font-semibold sm:mr-5 mr-2" for="maison">Maison</label>

        <input
        required
        name="categorie"
          type="radio"
          id="appartement"
          name="categorie"
          value="appartement"
          className="font-extralight  "
        />
        <label className="font-semibold " for="Appartement">Appartement</label>
      </div>
      <div className="my-5 relative -left-2">
        <label for="" className="sm:text-xl text-sm font-bold text-blue mr-2"
          >Meublé:</label>
        <input required type="radio" id="oui" name="meuble"  />
        <label className="font-semibold sm:mr-5 mr-2" for="oui">Oui</label>

        <input
        required
        name="meuble"
          type="radio"
          id="non"
          name="meuble"
          className="font-extralight  "
        />
        <label className="font-semibold " for="non">Non</label>
      </div>
      <div className="my-5 relative sm:left-10 left-5">
        <label for="" className="sm:text-xl text-sm font-bold text-blue  mr-2 "
          >Type:</label>
        <input type="radio" id="s1" name="type" value="S+1" required/>
        <label for="s1" className="font-semibold sm:mr-5 mr-2">S+1</label>

        <input type="radio" id="s2" name="type" value="S+2" className="" />
        <label for="s2" className="font-semibold sm:mr-5 mr-2">S+2</label>

        <input type="radio" id="s3" name="type" value="S+3" />
        <label for="s3" className="font-semibold sm:mr-5 mr-2">S+3</label>

        <input type="radio" id="s4" name="type" value="S+4" className="font-bold" />
        <label for="s4" className="font-semibold sm:mr-5 mr-2">S+4</label>
      </div>
      <div>
        <label
          for="ville"
          className="sm:text-xl text-sm font-bold text-blue relative -left-2"
          >Ville:
        </label>
        <select
          name="ville"
          id="ville"
          className="
            border-solid border-black border-2
            rounded-lg
            px-5
            focus:outline-none
            focus:ring-2
            focus:ring-blue-800
            focus:border-transparent
          "
        >
          <option value="Ariana">Ariana</option>
          <option value="Bizerte">Bizerte</option>
          <option value="Ben Arous">Ben Arous</option>
          <option value="Beja">Beja</option>
          <option value="Gafsa">Gafsa</option>
          <option value="Gbeli">Gbeli</option>
          <option value="Gabes">Gabes</option>
          <option value="Jandouba">Jendouba</option>
          <option value="Kairouan">Kairouan</option>
          <option value="Keef">Keef</option>
          <option value="Kasserine">Kasserine</option>
          <option value="Mahdia">Mahdia</option>
          <option value="Monastir">Monastir</option>
          <option value="Manouba">Manouba</option>
          <option value="Mednin">Mednin</option>
          <option value="Nabeul">Nabeul</option>
          <option value="Sfax">Sfax</option>
          <option value="Sousse">Sousse</option>
          <option value="Siliana">Siliana</option>
          <option value="Sidi Bouzid">Sidi Bouzid</option>
          <option value="Tataouine">Tataouine</option>
          <option value="Tunis">Tunis</option>
          <option value="Tozeur">Tozeur</option>
          <option value="Zaghouen">Zaghouen</option>
        </select>
      </div>
      <div className="flex items-center my-5">
        <label for="title" className="sm:text-xl text-sm font-bold text-blue"
          >Prix:
        </label>
        <input
        required
        name = "prix"
          type="text"
          placeholder="Prix"
          className="
            border-solid border-black border-2
            pl-9
            w-36
            py-1
            ml-3
            rounded-xl
            focus:outline-none
            focus:ring-2
            focus:ring-blue-800
            focus:border-transparent
          "
        />
      </div>

      <div className="flex flex-col items-center my-5">
        <label for="title" className="sm:text-xl pb-5 text-sm font-bold text-blue"
          >Images:
        </label>
        <div className="flex  grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
        <div className="flex relative top-1 my-3 ">
           <input type="file" accept="image/*" id="file" name="img1" onChange={File} className="custom-file-input w-10  " />
       <img src={NameImage.img1} className="w-16 h-16 mx-2" alt={NameImage.img1} /></div>
       <div className="flex relative top-1 my-3">
           <input type="file" accept="image/*"  name="img2"   onChange={File} className="custom-file-input w-10 " />
       <img src={NameImage.img2} className="w-16 h-16 mx-2" alt={NameImage.img2} /></div>
       <div className="flex relative top-1 my-3">
           <input type="file" accept="image/*"  name="img3" onChange={File}  className="custom-file-input w-10 " />
       <img src={NameImage.img3} className="w-16 h-16 mx-2" alt={NameImage.img3} /></div>
       <div className="flex relative top-1 my-3">
           <input type="file" accept="image/*"  name="img4" onChange={File}  className="custom-file-input w-10 " />
       <img src={NameImage.img4} className="w-16 h-16 mx-2" alt={NameImage.img4} /></div>
       <div className="flex relative top-1 my-3">
           <input type="file" accept="image/*"  name="img5"  onChange={File} className="custom-file-input w-10 " />
       <img src={NameImage.img5} className="w-16 h-16 mx-2" alt={NameImage.img5} /></div>
      
      </div></div>
  <input type="submit" value="Deposer"  className="  bg-blue py-3 px-6 rounded-2xl text-white md:text-lg text-sm  absolute right-5 bottom-5  "  />
    </form>

   {Message==true ? <div class=" text-center my-10 bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-10" role="alert">
       <p class="font-bold text-3xl">Bravo !</p>
       <p class="text-lg">{AfficheMessage}</p>
     </div> : Message==false &&  <div class=" text-center my-10 bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-10" role="alert">
       <p class="font-bold text-3xl">Desole !</p>
       <p class="text-lg">{AfficheMessage}</p>
     </div>}
        </div>
    )
}

export default NouvelleAnnoce
