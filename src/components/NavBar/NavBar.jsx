import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidjet from '../CartWidjet'




function NavBar() {
  return (
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    
      <img src="https://images.sk-static.com/images/media/img/col6/20190925-165829-291369.jpg" alt="" width="80" height="80" class="d-inline-block align-text-top"/>
      
    
  
      
  <div class="container-fluid">
    
    <a class="navbar-brand" href="#">Valhalla </a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <NavLink className="nav-link" to=''>
        Inicio
        </NavLink>
        <NavLink className="nav-link" to='/categoria/pizza'>
        Pizza
        </NavLink>
        <NavLink className="nav-link" to='/categoria/empanadas'>
        Empanadas
        </NavLink>
        <NavLink className="nav-link" to=''>
        Locales
        </NavLink>
        <NavLink className="nav-link" to=''>
        contacto
        </NavLink>
      </ul> 
      <NavLink to='Cart'>
        <CartWidjet/>
        </NavLink>
      
    </div>
  </div>
</nav>

  )
}

export default NavBar