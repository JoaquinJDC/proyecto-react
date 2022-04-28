
import NavBar from '../components/NavBar/NavBar'
import ItemListContainer from '../container/ItemListContainer'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import React from 'react'
import ItemDetailContainer from '../container/ItemDetailContainer/ItemDetailContainer'
import Cart from '../components/Cart'
import CartContextProvider from '../context/CartContext'
import Inicio from '../Inicio/Inicio'
import Footer from '../Inicio/Footer'


export default function RoutesApp() {
  return (
      <BrowserRouter>
     <CartContextProvider>
      <NavBar/>
      <Routes>
<Route path="/" element={<Inicio/>} />
<Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
     
      </Routes>  
      
      </CartContextProvider>
      <Footer/>
    </BrowserRouter>
    

   

  )
}
