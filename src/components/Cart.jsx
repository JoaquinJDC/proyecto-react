
import { useState } from 'react'
import { useCartContext } from "../context/CartContext";
import '../container/ContainerStyles/cart.css'
import {addDoc, collection, getFirestore} from 'firebase/firestore'

 

function Cart(){
  const [datosFormulario, traerDatosFormulario] = useState({
    nombre:'',
    email:'',
    telefono:''
  })

    const {cartList,removeCart,deleteItemToCart,add,total} = useCartContext()

    const generarOrden  = (e) =>{
      
      e.preventDefault();
   
      let orden = {}
        
      orden.buyer = {Datos:{datosFormulario}}
      orden.total = {total}

        orden.items = cartList.map(item => {
          const id = item.id
          const cantidad = item.cantidad
          const nombre = item.nombre
          const precio = item.precio * item.cantidad
          
        
          return {id,nombre,precio,cantidad}
          
        })
      
        console.log(orden)
        const db = getFirestore()
        const queryCollection = collection(db,'orders')
        addDoc(queryCollection,orden)

    }
  
const handleChange=(event)=>{
  traerDatosFormulario({
    ...datosFormulario,
    [event.target.name]: event.target.value
    
  })
}

    console.log(datosFormulario)
    return(
        
        <div>
            <h2>Tu Carrito</h2>
         <form onSubmit={generarOrden}>
           
           
           <input  name='nombre' type="text" placeholder='Nombre'
        
            onChange={handleChange}
         />
           <input  name='email' type="text" placeholder="Email"
           onChange={handleChange} 
            />
           <input  name='telefono' type="text" placeholder="Telefono"
             onChange={handleChange} 
            />
           <button className='btn btn-outline-success'>generar Orden</button>
         
         </form>
  
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