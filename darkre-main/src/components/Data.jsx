import React, { createContext, useState } from "react";


export const DataContext = createContext();

// This context provider is passed to any component requiring the context
export const DataProvider = ({ children }) => {
  const [Data, setData] = useState([{
    "id":1,
    "titre":"Maison a Mourouj 5", 
    "ville":"Ben Arous", 
    "type":"S+4", 
    "Meuble":true,
    "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro et itaque culpa, ",
    "prix":"250"
    

},
{
    "id":2,
    "titre":"Maison a Mourouj 5", 
    "ville":"Ben Arous", 
    "type":"S+4", 
    "Meuble":false,
    "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro et itaque culpa, ",
    "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro et itaque culpa, ",
    "prix":"250"

},
{
    "id":3,
    "titre":"Maison a Mourouj 5", 
    "ville":"Ben Arous", 
    "type":"S+4", 
    "Meuble":true,
    "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro et itaque culpa, ",
    "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro et itaque culpa, ",
    "prix":"250"

},
{
    "id":4,
    "titre":"Maison a Mourouj 5", 
    "ville":"Ben Arous", 
    "type":"S+4", 
    "Meuble":true,
    "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro et itaque culpa, ",
    "prix":"380"

},
{
    "id":5,
    "titre":"Maison a Mourouj 5", 
    "ville":"Ben Arous", 
    "type":"S+4", 
    "Meuble":true,
    "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro et itaque culpa, ",
    "prix":"2500"

},
{
    "id":6,
    "titre":"Maison a Mourouj 5", 
    "ville":"Ben Arous", 
    "type":"S+4", 
    "Meuble":true,
    "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro et itaque culpa, ",
    "prix":"780"

},
{
    "id":7,
    "titre":"Maison a Mourouj 5", 
    "ville":"Ben Arous", 
    "type":"S+4", 
    "Meuble":true,
    "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro et itaque culpa, ",
    "prix":"260"

},
{
    "id":8,
    "titre":"Maison a Mourouj 5", 
    "ville":"Ben Arous", 
    "type":"S+4", 
    "Meuble":true,
    "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro et itaque culpa, ",
    "prix":"250"

},
{
    "id":9,
    "titre":"Maison a Mourouj 5", 
    "ville":"Ben Arous", 
    "type":"S+4", 
    "Meuble":true,
    "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro et itaque culpa, ",
    "prix":"270"
},
{
    "id":10,
    "titre":"Maison a Mourouj 5", 
    "ville":"Ben Arous", 
    "type":"S+4", 
    "Meuble":true,
    "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro et itaque culpa, ",
    "prix":"350"

},
{
    "id":11,
    "titre":"Maison a Mourouj 5", 
    "ville":"Ben Arous", 
    "type":"S+4", 
    "Meuble":true,
    "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro et itaque culpa, ",
    "prix":"760"

},
{
    "id":13,
    "titre":"Maison a Mourouj 5", 
    "ville":"Ben Arous", 
    "type":"S+4", 
    "Meuble":true,
    "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro et itaque culpa, ",
    "prix":"710"

},
{
    "id":14,
    "titre":"Maison a Mourouj 5", 
    "ville":"Ben Arous", 
    "type":"S+4", 
    "Meuble":true,
    "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro et itaque culpa, ",
    "prix":"1050"

},
{
    "id":15,
    "titre":"Maison a Mourouj 5", 
    "ville":"Ben Arous", 
    "type":"S+4", 
    "Meuble":true,
    "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro et itaque culpa, ",
    "prix":"50"

},
{
    "id":3,
    "titre":"Maison a Mourouj 5", 
    "ville":"Ben Arous", 
    "type":"S+4", 
    "Meuble":true,
    "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro et itaque culpa, ",
    "prix":"950"

},
{
    "id":12,
    "titre":"Maison a Mourouj 5", 
    "ville":"Ben Arous", 
    "type":"S+4", 
    "Meuble":true,
    "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro et itaque culpa, ",
    "prix":"450"

},
{
    "id":1,
    "titre":"Maison a Mourouj 5", 
    "ville":"Ben Arous", 
    "type":"S+4", 
    "Meuble":true,
    "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro et itaque culpa, ",
    "prix":"200"

},
{
    "id":2,
    "titre":"Maison a Mourouj 5", 
    "ville":"Ben Arous", 
    "type":"S+4", 
    "Meuble":true,
    "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro et itaque culpa, ",
    "prix":"250"

},
{
    "id":3,
    "titre":"Maison a Mourouj 5", 
    "ville":"Ben Arous", 
    "type":"S+4", 
    "Meuble":true,
    "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro et itaque culpa, ",
    "prix":"130"

},
{
    "id":12,
    "titre":"Maison a Mourouj 5", 
    "ville":"Ben Arous", 
    "type":"S+4", 
    "Meuble":false,
    "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro et itaque culpa, ",
    "prix":"100"

}
]);



  return (
    <DataContext.Provider
      value={{
        Data,
        setData,
       }}
    >
      { children }
    </DataContext.Provider>
  );
};