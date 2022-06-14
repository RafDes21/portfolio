import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import "./navbar.scss"

const NavbarComp = () => {
  const [show, setSohw]=useState(false)

  const navBarRet=()=>{
if (window.scrollY > 100){
  setSohw(true)
}else{
  setSohw(false)
}
  }
  useEffect(() => {
  window.addEventListener("scroll",navBarRet)
  
    return () => {
      
    }
  }, [])
  
  return (
    <Navbar bg="light" expand="lg"  className ={show?"cambio":"header"}>
      <Container>
        <Navbar.Brand ><img className='logo-header' src="https://www.aluracursos.com/assets/api/formacoes/512/front-end.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="ms-auto">
           <Nav.Link className='item' href="#acercaDeMi">Acerca de mí</Nav.Link>
           <Nav.Link className='item' href="#proyects">Proyectos</Nav.Link>
           <Nav.Link className='item' href="#herramientas">Herramientas</Nav.Link>
           <Nav.Link className='item' href="#contact">Contacto</Nav.Link>
           </Nav>
         </Navbar.Collapse>
     </Container>
    </Navbar>
 )
}
export default NavbarComp
    
    

