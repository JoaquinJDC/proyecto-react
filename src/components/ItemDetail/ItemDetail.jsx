
import { useEffect, useState } from 'react';
import ItemCount from '../../container/ItemCount'
import { useCartContext } from '../../context/CartContext';
import Intercambiabilidad from '../Intecambialidad';



  

function ItemDetail({productos}) {

  const {addToCart, cartList} = useCartContext()


  
  function Anadir (stock) {
    console.log(cartList) 
    console.log(stock)
    addToCart({ ...productos, cantidad : stock })
    
  };

  return (
    
    <>
    <img src={productos.imagen}></img>
    <div>{productos.nombre}</div>
    <div>${productos.precio}</div>
    <div>Cantidad={productos.cantidad}</div>
    <ItemCount cantidad={productos.cantidad} Anadir={Anadir} initial={0}  />
    <Intercambiabilidad/>
    </>
  )

}

export default ItemDetail
