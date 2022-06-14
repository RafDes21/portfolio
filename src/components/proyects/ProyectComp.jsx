import React from "react";
import "./proyect.scss";
import { Button, Card, Col } from "react-bootstrap";

const ProyectComp = (props) => {
  return (
    <Col id="proyects" >
           <Card  className="proyect" style={{ width: "18rem"}}>
           <Card.Img style={{height:"14rem"}} variant="top" src={props.img} />
           <Card.Body>
              <Card.Title className="titulo">{props.titulo}</Card.Title>
              <div className="proyect-botons">
               <Button href={props.github} target="_blank" variant="outline-info">Git Hub</Button>
                <Button href={props.vercel} target="_blank" variant="outline-info">Link Public</Button>
             </div>
           </Card.Body>
          </Card> */
    </Col>
  );
};
export default ProyectComp;
    



     
      
     
        
       
      
    
        
