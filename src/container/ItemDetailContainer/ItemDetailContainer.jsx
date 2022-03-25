import { useEffect, useState } from "react"
import ItemDetail from "../../components/ItemDetail/ItemDetail"

import { getFetch } from "../../data/data"
import React from "react"
function ItemDetailContainer() {
const [Productos, setProductos] = useState({})

  useEffect (() => {
    getFetch
    .then(resp => setProductos(resp.find(prod => prod.id === 1)) )
    .catch(err => console.log(err))
  }, [])
 
  return (
    <>
    <ItemDetail Productos={Productos}/>
    </>
  )
}

export default ItemDetailContainer