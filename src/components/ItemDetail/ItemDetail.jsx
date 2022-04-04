import React from 'react'
import ItemCount from '../../container/ItemCount'
import Intercambiabilidad from '../Intecambialidad';



function ItemDetail({productos}) {
  
    const Anadir = (stock) => {
      alert(`Has agregado ${stock} productos al carrito!`);
    };
  return (
    
    <>
    <img src={productos.imagen}></img>
    <div>{productos.nombre}</div>
    <div>${productos.precio}</div>
    <div>Cantidad={productos.cantidad}</div>
    <ItemCount cantidad={productos.cantidad} Anadir={Anadir} initial={0} />
    <Intercambiabilidad/>
    </>
  )

}

export default ItemDetail
