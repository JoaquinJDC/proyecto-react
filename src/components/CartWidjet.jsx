import { useCartContext } from "../context/CartContext";

export default function CartWidjet() {


  const {totalprod} = useCartContext()





  return (
    <div>
     {totalprod}
  
         <a class="navbar-brand" href="#">
      <img src="https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-icon-shopping-cart-black-design.png" alt="" width="40" height="40"/>
    </a>
    </div>
  )
}