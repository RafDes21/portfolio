import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavbarComp = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="ms-auto">
           <Nav.Link href="#home">Acerca de mí</Nav.Link>
           <Nav.Link href="#link">Proyectos</Nav.Link>
           <Nav.Link href="#link">Herramientas</Nav.Link>
           <Nav.Link href="#link">Contacto</Nav.Link>
           </Nav>
         </Navbar.Collapse>
     </Container>
    </Navbar>
 )
}
export default NavbarComp
    
    

