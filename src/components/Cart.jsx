import { useCartContext } from "../context/CartContext";
import '../container/ContainerStyles/cart.css'

function Cart(){

    const {cartList,removeCart,deleteItemToCart,add,total} = useCartContext()
    return(
        
        <div>
            <h2>Tu Carrito</h2>
            {cartList.length === 0 ? (
            <p>Tu carrito esta vacio</p>
          ) : (
            <div>
              {cartList.map((item) => (
                <cart key={item.id} item={item} />
              ))}
            </div>
          )}
          <div>
      {cartList.lenght}
</div>

{cartList.map(item => <li key = {item.id} 
><img className="icon" src={item.imagen} />
{item.nombre} <h> - </h>
Cantidad: {item.cantidad} <h> - </h>
precio: {item.precio}
<button className='btn btn-outline-success' onClick={() => deleteItemToCart(item)}>-</button>
<button className='btn btn-outline-success' onClick={() => add(item)}>+</button>

</li>)}

<button className='btn btn-outline-success' onClick={removeCart}> Vaciar Carrito</button>
<h2>Total: {total}</h2>
        </div>
    )

}

export default Cart