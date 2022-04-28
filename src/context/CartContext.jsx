import { createContext, useContext, useState } from "react";


 const CartContext = createContext([]) 

export const useCartContext = () => useContext(CartContext)


    


function CartContextProvider({children}){
    const [listaCarrito, traerListaCarrito] = useState([])

   
    const agregarACarrito = (producto) => {
      const enCarrito = listaCarrito.find(
          (productoEnCarrito) => productoEnCarrito.id === producto.id
      )
        if (enCarrito) {
            traerListaCarrito(
                listaCarrito.map((productoEnCarrito) => {
                    if(productoEnCarrito.id === producto.id){
                        return{...enCarrito, cantidad: enCarrito.cantidad + producto.cantidad}
                    } else return productoEnCarrito
                })
            )
        }else{
            traerListaCarrito([...listaCarrito, {...producto, cantidad:producto.cantidad}])
        }}

    const totalprod = listaCarrito?.reduce((previous,current) => previous + current.cantidad,0)
const total = listaCarrito.reduce((previous,current) => previous + current.cantidad  * current.precio, 0)
const borrarProductoCarrito = (producto) => {
    const enCarrito = listaCarrito.find(
        (productoEnCarrito) => productoEnCarrito.id === producto.id)




        if (enCarrito.cantidad === 1) {
            traerListaCarrito(
                listaCarrito.filter((productoEnCarrito) => productoEnCarrito.id !== producto.id)

            )
            
            }else{
                traerListaCarrito(
                    listaCarrito.map((productoEnCarrito) =>{
                    if (productoEnCarrito.id === producto.id) {
                        return{...enCarrito, cantidad: enCarrito.cantidad -1}
                    }else return productoEnCarrito
                })
                )
            }
        


    }
    const agregar = (producto) => {
        const enCarrito = listaCarrito.find(
            (productoEnCarrito) => productoEnCarrito.id === producto.id)
    
            if (enCarrito.cantidad === 0) {
                traerListaCarrito(
                    listaCarrito.filter((productoEnCarrito) => productoEnCarrito.id !== producto.id)
    
                )
                
                }else{
                    traerListaCarrito(
                        listaCarrito.map((productoEnCarrito) =>{
                        if (productoEnCarrito.id === producto.id) {
                            return{...enCarrito, cantidad: enCarrito.cantidad +1}
                        }else return productoEnCarrito
                    })
                    )
                }
            
    
    
        } 
        
                
                

        
        

  
    const removerCarrito = () =>{
        traerListaCarrito([])
    }

  
return(

    <CartContext.Provider value={{
        listaCarrito,
        agregarACarrito,
        borrarProductoCarrito,
        removerCarrito,
        agregar,
        total,
        totalprod

    }}>
    {children}
    </CartContext.Provider>
)
}

export default CartContextProvider
