import { createContext, useContext, useState } from "react";


 const CartContext = createContext([]) 

export const useCartContext = () => useContext(CartContext)




function CartContextProvider({children}){
    const [cartList, setCartList] = useState([])

   
    const addToCart = (item) => {
      const inCart = cartList.find(
          (itemInCart) => itemInCart.id === item.id
      )
        if (inCart) {
            setCartList(
                cartList.map((itemInCart) => {
                    if(itemInCart.id === item.id){
                        return{...inCart, cantidad: inCart.cantidad + item.cantidad}
                    } else return itemInCart
                })
            )
        }else{
            setCartList([...cartList, {...item, cantidad:item.cantidad}])
        }}

    

const deleteItemToCart = (item) => {
    const inCart = cartList.find(
        (itemInCart) => itemInCart.id === item.id)

        if (inCart.cantidad === 1) {
            setCartList(
                cartList.filter((itemInCart) => itemInCart.id !== item.id)

            )
            
            }else{
                setCartList((itemInCart) =>{
                    if (itemInCart.id === item.id) {
                        return{...inCart, cantidad: inCart.cantidad -1}
                    }else return itemInCart
                })
            }
        


    }
            
        
                
                

        
        

  
    const removeCart = () =>{
        setCartList([])
    }

  
return(

    <CartContext.Provider value={{
        cartList,
        addToCart,
        deleteItemToCart,
        removeCart

    }}>
    {children}
    </CartContext.Provider>
)
}

export default CartContextProvider
