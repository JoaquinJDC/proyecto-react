import { useState } from 'react'
import './ContainerStyles/Contador.css'

const ItemCount = ({ initial, cantidad, Anadir }) => {
    const [stock, setStock] = useState(initial);
    
    const ModificarProducto =(num)=> {
        setStock( stock + num )
    }


    
        return( <div className='contador-container'>
            <div className='contador-container-contador' >
                
              
                <label >{stock}</label><br/>
                <button
                 onClick={() => ModificarProducto(-1)}
                disabled={stock === 0 }>-
                 
                </button>

                <button
                 onClick={() => ModificarProducto(+1)}
                 disabled={stock === cantidad}>+ 
                </button>
                
            </div>
            
            <button
                 onClick={() => Anadir (stock)}
                 >añadir
                </button>
        </div>
        )
    }
    export default ItemCount