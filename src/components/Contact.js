import React from "react";
import "../styles/Contact.css";
import {Row, Col, Form, Button} from "react-bootstrap";

const Contact = () => {

  return (
    <div id="contact">
      <Row>
        <Col>
        <Form  action="https://formsubmit.co/7d21ae184aa877d438856b60089643d9" method="POST">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button className="submit" variant="primary" type="submit">
            Send
          </Button>
        </Form>
        </Col>

        <Col>
          links
        </Col>
      </Row>
    </div>
  )

}

export default Contact;