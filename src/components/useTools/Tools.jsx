import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ToolLog from './ToolLog'
import "./tools.scss"


const Tools = () => {
  const logos =[
    {
        id:1,
        imagen:"https://cdn-icons-png.flaticon.com/512/174/174854.png",
        nombre:"logo html"
    },
    {
        id:2,
        imagen:"https://cdn-icons-png.flaticon.com/512/732/732190.png",
        nombre:"logo css"
    },
    {
      id:3,
      imagen:"https://www.jovenesprogramadores.cl/wp-content/uploads/2020/07/JavaScript.png",
      nombre:"logo Javascript"
  },
  {
    id:4,
    imagen:"https://iconape.com/wp-content/png_logo_vector/git-icon.png",
    nombre:"logo github "
},
{
  id:5,
  imagen:"https://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png",
  nombre:"logo Sass"
},
{
  id:6,
  imagen:"https://crowdcast-prod.imgix.net/-KHhIzuATU2K4OVPd2sP/event-cover-5388?w=800",
  nombre:"logo Bootstrap-React"
},
{
  id:7,
  imagen:"https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
  nombre:"logo Bootstrap"
},
{
  id:8,
  imagen:"https://brandlogos.net/wp-content/uploads/2020/09/react-logo-512x512.png",
  nombre:"logo React"
},


]
return (
  <Container className='tools' id="herramientas">
    <Row style={{position:"relative"}}>
      <ToolLog logos={logos}/>
    </Row>
  </Container>
)}
    



  



export default Tools