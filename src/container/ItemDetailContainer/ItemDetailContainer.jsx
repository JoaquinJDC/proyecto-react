import { useEffect, useState } from "react"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { getFetch } from "../../data/data"
import React from "react"
import { useParams } from "react-router-dom"
import { getFirestore,doc,getDoc } from 'firebase/firestore'

function ItemDetailContainer() {
const [productos, traerProductos] = useState({})

const {detalleId} = useParams()


useEffect(() => { 
  const querydb = getFirestore()
  const queryProd = doc(querydb, 'productos',detalleId)
  getDoc(queryProd)
  .then(resp => traerProductos ({ id: resp.id, ...resp.data()}))

},[])

 
  return (
    <>
   
    <ItemDetail productos={productos}/>
    </>
  )
}

export default ItemDetailContainer  