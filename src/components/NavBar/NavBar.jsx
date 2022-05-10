import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import CartWidjet from '../CartWidjet'





function NavBar() {
  return (
    
    <Navbar bg="light" expand="lg">
       <img src="https://images.sk-static.com/images/media/img/col6/20190925-165829-291369.jpg" alt="" width="80" height="80" class="d-inline-block align-text-top"/>
  <Container fluid>
    <Navbar.Brand>Valhalla</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
       <NavLink className="nav-link" to=''>
        Inicio
        </NavLink>
        <NavLink className="nav-link" to='/categoria/pizza'>
        Pizza
        </NavLink>
        <NavLink className="nav-link" to='/categoria/empanadas'>
        Empanadas
        </NavLink>
       
        <NavLink className="nav-link" to='/productos'>
        Todos los productos
        </NavLink>
  
      </Nav>
      <NavLink to='Cart'>
        <CartWidjet/>
        </NavLink>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar