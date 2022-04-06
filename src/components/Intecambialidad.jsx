import { useState } from "react";
import { Link } from "react-router-dom";
import { productos } from "../data/data";

const ItemCount = ({ initial, cantidad, Anadir }) => {
    const [stock, setStock] = useState(initial);
    
    const ModificarProducto =(num)=> {
        setStock( stock + num )
        
    }
        return( 
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
                <button
                 onClick={() => Anadir (stock)}
                 >añadir
                </button>
            </div>               
        
        )
    }
    
    const Anadir = (stock) => {
        alert(`Has agregado ${stock} productos al carrito!`);
      };
    
const InputCount= ()=> {

    return (
        <Link to='/cart' >
            <button 
                className="btn btn-outline-primary" 
                onClick={()=>console.log('ir a cart') } 
            >Ir al Cart o Terminar compra</button>
        </Link>
        
    )
}

 
const ButtonCount= ({handleInter})=> {
    return <button 
                className="btn btn-outline-success" 
                onClick={handleInter}
               
            >Agregar Al carrito</button>          
}

const Intercambiabilidad = () => {

    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{
        setInputType('input')
    }
    
    return (
        <div>
            <h2></h2>
            
            {<ItemCount cantidad={productos.cantidad} Anadir={Anadir} initial={0}  />
                              
            }
             {  inputType === 'button' ? 
                    <ButtonCount   handleInter={handleInter} />
                : 
                    <InputCount />
                }
        </div>
    )
}

export default Intercambiabilidad
