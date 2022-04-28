
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

    const {listaCarrito,removerCarrito,borrarProductoCarrito,agregar,total} = useCartContext()

    const generarOrden  = (e) =>{
      
      e.preventDefault();
   
      let orden = {}
        
      orden.buyer = {Datos:{datosFormulario}}
      orden.total = {total}

        orden.items = listaCarrito.map(item => {
          const id = item.id
          const cantidad = item.cantidad
          const nombre = item.nombre
          const precio = item.precio * item.cantidad
          
        
          return {id,nombre,precio,cantidad}
          
        })
      
        
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
  
            {listaCarrito.length === 0 ? (
            <p>Tu carrito esta vacio</p>
          ) : (
            <div>
             
              {listaCarrito.map((item) => (
                <cart key={item.id} item={item} />
              ))}
            </div>
          )}
          <div>
      {listaCarrito.lenght}
      
</div>

{listaCarrito.map(item => <li key = {item.id} 
><img className="icon" src={item.imagen} />
{item.nombre} <h> - </h>
Cantidad: {item.cantidad} <h> - </h>
precio: {item.precio}
<button className='btn btn-outline-success' onClick={() => borrarProductoCarrito(item)}>-</button>
<button className='btn btn-outline-success' onClick={() => agregar(item)}>+</button>

</li>)}

<button className='btn btn-outline-success' onClick={removerCarrito}> Vaciar Carrito</button>

<h2>Total: {total}</h2>
        </div>
    )

}

export default Cart