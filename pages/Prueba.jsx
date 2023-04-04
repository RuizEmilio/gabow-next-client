import React from 'react'
import Carta from "../components/Carta";

const data = [
    {
        id: 1,
        label: "CECyT 9",
        value: 19.453541614839263,
        type: "escuela"
    },
    {
        id: 2,
        label: 'Town Center',
        value: 19.50353658790755,
        type: "plaza"
    },
    {
        id: 3,
        label: 'Casa',
        value: 19.50351231231234124755,
        type: "Edificio"
    },
    {
        id: 4,
        label: 'Cama',
        value: 20.50353658790755,
        type: "Dormir"
    },
];

const Prueba = () => {
  return (
    <>
        {data.map((item) => (
            <Carta key={item.id} id={item.id} nombre={item.label} coor={item.value} tipo={item.type}/>
        ))}
    </>
  )
}

export default Prueba
