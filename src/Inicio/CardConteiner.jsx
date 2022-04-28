import CardNuevos from "./CardNuevos"
import CardPedidos from "./CardPedidos"

import CardSabores from "./CardSabores"
import './card.css'

function CardConteiner(){
    return(
    <div className="alinear">
        
        <CardNuevos/>
        
        
        <CardPedidos/>
        
       
        <CardSabores/>
        
        </div>
    )
}
export default CardConteiner