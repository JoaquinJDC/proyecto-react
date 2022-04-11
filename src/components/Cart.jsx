import { useCartContext } from "../context/CartContext";
import '../container/ContainerStyles/cart.css'

function Cart(){

    const {cartList,removeCart,deleteItemToCart,} = useCartContext()
    return(
        
        <div>
            
{cartList.map(productos => <li key = {productos.id} 
><img className="icon" src={productos.imagen} />
{productos.nombre} <h> - </h>
Cantidad: {productos.cantidad}


</li>)}
<button className='btn btn-outline-success' onClick={removeCart}> Vaciar Carrito</button>
        </div>
    )

}

export default Cart