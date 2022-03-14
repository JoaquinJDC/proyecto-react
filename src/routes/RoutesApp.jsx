import { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import ItemListContainer from '../container/ItemListContainer'

import React from 'react'


export default function RoutesApp() {
  return (
      <>
       <NavBar/>
    <ItemListContainer greeting='Hola soy ItemListContainer'></ItemListContainer>
    </>

   

  )
}
