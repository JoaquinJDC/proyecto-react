import React from 'react'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'
import ItemList from './ItemList'


export default function ItemListContainer() {
  return (
    <div>Las mas pedidas!
        <ItemList/>
        <ItemDetailContainer/>

    
    </div>
  )
}
