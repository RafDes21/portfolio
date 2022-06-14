import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import "./footer.scss";
import { BiCopyright } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row>
        <Col className="footer-redes">
          <Nav.Link
            href="https://www.instagram.com/tineoisrael/"
            target="_blank"
          >
            <FaInstagram className="footer__instagram" />
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/israelfrontend"
            target="_blank"
          >
            <AiOutlineLinkedin className="footer__linkedin" />
          </Nav.Link>
          <Nav.Link
            href="https://api.whatsapp.com/send?phone=541122521870"
            target="_blank"
          >
            <ImWhatsapp className="footer__whatsapp" />
          </Nav.Link>
        </Col>
      </Row>
      <Row>
        <Col className="footer-copy">
          <BiCopyright className="footer__copy" /> Developer Front-End/React
          Israel Tineo
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
