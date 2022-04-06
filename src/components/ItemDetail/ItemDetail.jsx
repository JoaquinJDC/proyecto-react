import React from 'react'
import ItemCount from '../../container/ItemCount'
import Intercambiabilidad from '../Intecambialidad';



function ItemDetail({productos}) {
  
 
  return (
    
    <>
    <img src={productos.imagen}></img>
    <div>{productos.nombre}</div>
    <div>${productos.precio}</div>
    <div>Cantidad={productos.cantidad}</div>
   
    <Intercambiabilidad/>
    </>
  )

}

export default ItemDetail
