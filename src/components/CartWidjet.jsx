import { useCartContext } from "../context/CartContext";
import { Badge } from 'react-bootstrap';

export default function CartWidjet() {


  const {totalprod} = useCartContext()





  return (
    <div>
      <Badge pill bg="success">
      {totalprod}
      </Badge>
     
  
         <a class="navbar-brand" href="#">
      <img src="https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-icon-shopping-cart-black-design.png" alt="" width="40" height="40"/>
    </a>
    </div>
  )
}