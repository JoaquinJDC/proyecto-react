import { useCartContext } from "../context/CartContext";
import '../container/ContainerStyles/cart.css'


function Cart(){

    const {cartList,removeCart,deleteItemToCart,add,total} = useCartContext()

    const generarOrden  = (e) =>{
      
      e.preventDefault();
   
      let orden = {}
        
      orden.buyer = {nombre: 'Joaquin', email: 'j@gmail.com', phone: '02324469313'}
      orden.total = {total}

        orden.items = cartList.map(item => {
          const id = item.id
          const nombre = item.nombre
          const precio = item.precio * item.cantidad
        
          return {id,nombre,precio}
          
        })
      
        console.log(orden)

    }
  
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
<button className='btn btn-outline-success' onClick={generarOrden}>generar Orden</button>
<h2>Total: {total}</h2>
        </div>
    )

}

export default Cart