import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProyectComp from './ProyectComp'
import "./proyects.scss"

export const ProyectsComp = () => {
  return (
    <Container fluid className='proyects'>
      <Row style={{width:"80%"}}>
        <ProyectComp/>
        <ProyectComp/>
        <ProyectComp/>
      </Row>
    </Container>
  )
}
