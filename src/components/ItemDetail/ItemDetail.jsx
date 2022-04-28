
import { react } from 'react';
import ItemCount from '../../container/ItemCount'
import { useCartContext } from '../../context/CartContext';




  

function ItemDetail({productos}) {

  const {agregarACarrito, listaCarrito} = useCartContext()


  
  function Anadir (stock) {
   
 
    agregarACarrito({ ...productos, cantidad : stock })
    
  };

  return (
    
    <>
    <img src={productos.imagen}></img>
    <div>{productos.nombre}</div>
    <div>${productos.precio}</div>
    <div>Cantidad={productos.cantidad}</div>
    <ItemCount cantidad={productos.cantidad} Anadir={Anadir} initial={0}  />
   
    </>
  )

}

export default ItemDetail
