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
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="ms-auto">
           <Nav.Link href="#acercaDeMi">Acerca de mí</Nav.Link>
           <Nav.Link href="#proyects">Proyectos</Nav.Link>
           <Nav.Link href="#herramientas">Herramientas</Nav.Link>
           <Nav.Link href="#contact">Contacto</Nav.Link>
           </Nav>
         </Navbar.Collapse>
     </Container>
    </Navbar>
 )
}
export default NavbarComp
    
    

