import { useState } from "react";
import { Link } from "react-router-dom";



    

    
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

    const handleInter=(stock)=>{
        
        setInputType('input')
        alert(`Has agregado ${stock} productos al carrito!`);
        
        
    }
    
    return (
        <div>
            <h2></h2>
            {
                              
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
