import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./proyect.scss"
import {Col} from 'react-bootstrap';

const ProyectComp = () => {
  return (
    
   <Col id="proyects">
      <Card className='proyect' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            card's content.
          </Card.Text>
          <div className='proyect-botons'>
            <Button variant="primary">Git Hub</Button>
            <Button variant="primary">Link Public</Button>
          </div>
          </Card.Body>
      </Card>
    </Col>
  )
}
export default ProyectComp
          

