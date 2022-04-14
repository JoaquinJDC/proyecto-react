import { useEffect, useState } from "react"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { getFetch } from "../../data/data"
import React from "react"
import { useParams } from "react-router-dom"
import { getFirestore,doc,getDoc } from 'firebase/firestore'

function ItemDetailContainer() {
const [productos, setProductos] = useState({})

const {detalleId} = useParams()
console.log(detalleId)

useEffect(() => { 
  const querydb = getFirestore()
  const queryProd = doc(querydb, 'productos',detalleId)
  getDoc(queryProd)
  .then(resp => setProductos ({ id: resp.id, ...resp.data()}))

},[])
console.log(productos)
 
  return (
    <>
   
    <ItemDetail productos={productos}/>
    </>
  )
}

export default ItemDetailContainer  