import { useState } from 'react'

import './ContainerStyles/Contador.css'
import { Button } from 'react-bootstrap';

const ItemCount = ({ initial, cantidad, Anadir }) => {
    const [stock, traerStock] = useState(initial);
    
    const ModificarProducto =(num)=> {
        traerStock( stock + num )
        
    }


    
        return( <div className='contador-container'>
            <div className='contador-container-contador' >
                
              
                <label >{stock}</label><br/>
                <Button variant='primary'
                 onClick={() => ModificarProducto(-1)}
                disabled={stock === 0 }>-
                 
                </Button>

                <Button variant='primary'
                 onClick={() => ModificarProducto(+1)}
                 disabled={stock === cantidad}>+ 
                </Button>
                
            </div>
            
            <Button variant='success'
                 onClick={() => Anadir (stock)}
                 >añadir
                </Button>

               
                
                
        </div>
        )
    }
    export default ItemCount