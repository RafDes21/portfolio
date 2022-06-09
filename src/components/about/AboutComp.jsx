import React from 'react'
import "./about.scss"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const AboutComp = () => {
  return (
    <>
      <Card className='Card'>
         <Card.Body>
         <Card.Title>Israel Tineo</Card.Title>
         <Card.Text>
          Mi camino por el mundo del desarrollo empezó
         con un curso de programación inical,  lo cual me encanto y recuerdo hasta el día de hoy una frase de mi profesor en el primer día de clase <i>"la programación es resolver los problemas de los demás"</i>.
         Posteriormente decidí preparame en las tecnologias mas demandadas por la industria. Me formé como <b>Desarrollador Front-End usando como libreria React.Js</b>, y siguiendo el camino, actualmente estoy capacitandome como Back-end, con el objetivo de volverme Full Stack. Aparte, mis pasatiempos es jugar al ajedrez, leer libros, y hacer deporte.
          <i><strong> Me agrada mucho enseñar a los demás</strong> </i>lo que voy aprendiendo, también aprovecho ayudar y colaborar por vía de grupos de redes (Whatsapp y facebook).
        </Card.Text>
        <Button variant="primary"> Descargar CV</Button>
        </Card.Body>
      </Card>
    </>
  )
}
export default AboutComp
         

