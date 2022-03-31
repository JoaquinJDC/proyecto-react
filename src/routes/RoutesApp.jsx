import { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import ItemListContainer from '../container/ItemListContainer'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import React from 'react'
import ItemDetailContainer from '../container/ItemDetailContainer/ItemDetailContainer'
import CartWidjet from '../components/CartWidjet'



export default function RoutesApp() {
  return (
      <BrowserRouter>
      <NavBar/>
      <Routes>
<Route path="/" element={<ItemListContainer/>} />
<Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
<Route path="/cart" element={<CartWidjet/>}/>
<Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
     
      </Routes>  
    </BrowserRouter>

   

  )
}
