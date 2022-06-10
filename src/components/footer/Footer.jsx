import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./footer.scss"
import { BiCopyright } from "react-icons/bi";
import { FaInstagram} from "react-icons/fa";
import {AiOutlineLinkedin} from "react-icons/ai";
import { ImWhatsapp} from "react-icons/im";


const Footer = () => {
  return (
    <Container fluid className='footer'>
      <Row>
        <Col className='footer-redes'>
          <FaInstagram className='footer__instagram'/><AiOutlineLinkedin className='footer__facebook'/><ImWhatsapp className='footer__whatsapp'/>
        </Col>
      </Row>
      <Row>
       <Col className='footer-copy'>
          <BiCopyright  className='footer__copy'/> Developer Front-End/React Israel Tineo
       </Col>
      </Row>
    </Container>
  )
}
export default Footer

