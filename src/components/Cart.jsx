import { useCartContext } from "../context/CartContext";
import { productos } from "../data/data";

function Cart(){

    const {cartList} = useCartContext()
    return(
        
        <div>
{cartList.map(productos => <li key = {productos.id}
>nombre: {productos.nombre}
cantidad: {productos.cantidad}
</li>)}
        </div>
    )

}

export default Cart