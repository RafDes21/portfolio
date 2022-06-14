import Button from 'react-bootstrap/Button';
import React from 'react'
import Form from 'react-bootstrap/Form';
import "./contact.scss"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

export const Contact = () => {
   useEffect(() => {
      AOS.init();
   }, [])
   return (
      <Form className='form' id="contact" data-aos="fade-up-right">
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>NOMBRE</Form.Label>
            <Form.Control type="text" placeholder="Nombre completo" />
            <Form.Text className="text-muted">
            
            </Form.Text>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>EMAIL</Form.Label>
            <Form.Control type="email" placeholder="email" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>MENSAJE</Form.Label>
            <Form.Control as="textarea" rows={3} />
         </Form.Group>
         <Button variant="outline-info" type="submit">
         Enviar
         </Button>
     </Form>
    )
  }
  export default Contact
     
     
        
     
           
  

    
  
    
     
