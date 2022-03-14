import { useState } from "react"

function ItemListContainer({greeting, titulo}) {
    const [ count, setCount ] = useState ( 0 )
const manejarcount =()=>{
    setCount( count + 1 )

}
    return(
        <div>
            {greeting}<hr />
            {}
            <label >{count}</label><br/>
            <button onClick={manejarcount}>click</button>
        </div>
    )
}
export default ItemListContainer