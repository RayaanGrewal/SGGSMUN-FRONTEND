import React , { useState }  from 'react';
import {Modal , Button  , Row , Col } from 'react-bootstrap';
import Iframe from 'react-iframe'

function ContactModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Button variant="outline-primary" onClick={handleShow}>
        Contact
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h1 style={{color :"#2f3542" , fontStyle: "italic"}}>Contact</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
            <Col>
        <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13717.980235142097!2d76.8088787!3d30.7325927!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x537791bc76da9bb1!2sShri%20Guru%20Gobind%20Singh%20Collegiate%20School!5e0!3m2!1sen!2sin!4v1627540821097!5m2!1sen!2sin"
        width="170px"
        height="170px"
        display="initial"/>
        </Col>

        <Col>
          <h6>Secretary-General (Ayaan Singh Anand): 98726 40489</h6>
          <h6>Director-General (Saanya Chhabra): 84272 72670</h6>
          <h6>Convener (Harshita Pathania): 79731 06942</h6>
          <h6>HoD Registrations (Trishaa Gupta): +91 77430 08048</h6>
          <h6>Email ID: sggsmun2021@gmail.com</h6>
          <h6>Instagram: sggsmun</h6>
        </Col>
      </Row>

        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default ContactModal;
