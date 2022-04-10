import { useCartContext } from "../context/CartContext";


function Cart(){

    const {cartList,removeCart,deleteItemToCart,} = useCartContext()
    return(
        
        <div>
            
{cartList.map(productos => <li key = {productos.id} 
>nombre: {productos.nombre}
<hr></hr>
cantidad: {productos.cantidad}


</li>)}
<button className='btn btn-outline-success' onClick={removeCart}> Vaciar Carrito</button>
        </div>
    )

}

export default Cart