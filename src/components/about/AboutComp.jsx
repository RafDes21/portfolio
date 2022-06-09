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
         Ya hace como diez años radico en Argentina, soy de nacionalidad Peruana. Mi desición por el mundo del desarrollo empezó
         con un curso de programación inical, a lo que me encanto y recuerdo hasta el día de hoy una frase de mi profesor en el primer día de clase <i>"la programación es resolver los problemas de los demás"</i>,
         luego terminé mi formación como <b>Front-End usando como libreria React</b>. Aparte, mis pasatiempos es jugar al ajedrez, leer libros, y hacer deporte.
          <i><strong> Me gusta mucho enseñar a los demás,</strong> </i>lo que voy aprendiendo, también aprovecho ayudar y colaborar por vía de grupos de de redes (Whatsapp), y facebook. Ya que estoy en varios grupos de estos.
        </Card.Text>
        <Button variant="primary"> Descargar CV</Button>
        </Card.Body>
      </Card>
    </>
  )
}
export default AboutComp
         

