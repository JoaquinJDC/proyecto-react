import { useEffect, useState } from "react"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { getFetch } from "../../data/data"
import React from "react"
import { useParams } from "react-router-dom"
import Intercambiabilidad from "../../components/Intecambialidad"
function ItemDetailContainer() {
const [productos, setProductos] = useState({})

const {detalleId} = useParams()
console.log(detalleId)

  useEffect (() => {
    getFetch
    .then(resp => setProductos(resp.find(detalle => detalle.id === detalleId)) )
    .catch(err => console.log(err))
  }, [detalleId])
 
  return (
    <>
   
    <ItemDetail productos={productos}/>
    </>
  )
}

export default ItemDetailContainer  