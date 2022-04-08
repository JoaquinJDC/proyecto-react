import { createContext, useContext, useState } from "react";
import { productos } from "../data/data";

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
        }





    }
    const removeCart = () =>{
        setCartList([])
    }

  
return(

    <CartContext.Provider value={{
        cartList,
        addToCart,
        removeCart

    }}>
    {children}
    </CartContext.Provider>
)
}

export default CartContextProvider
