import { useState } from 'react'

    function ItemCount({greeting, titulo}) {
        const [ stock, setStock ] = useState ( 0 )
    const AgregarProducto =(num)=> {
        setStock( stock + num )
    }
    const SacarProducto =(num)=> {
        setStock( stock + num )
        
    }
    const Anadir = (stock) => {
        alert(`Agregaste ${stock} al carrito`)
    }

    
    const cantidad = 10
    
        return(
            <div>
                
                {greeting}<hr />
                {}
                <label >{stock}</label><br/>
                <button
                 onClick={() => SacarProducto(-1)}
                disabled={stock === 0 }>-
                 
                </button>

                <button
                 onClick={() => AgregarProducto(+1)}
                 disabled={stock === cantidad}>+ 
                </button>

                <button
                 onClick={() => Anadir (stock)}
                 >añadir
                </button>
                
            </div>
        )
    }
    export default ItemCount