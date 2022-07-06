import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Form } from 'react-bootstrap';
import Title from '../Title/Title';

const Contact = () => (
  <section id="contact">
    <Container>
      <Title title="Contact" />

      <Fade bottom duration={1000} delay={800} distance="30px">
        <div className="contact-wrapper">
          <Form
            className="contact-wrapper__form"
            action="https://formsubmit.co/j.zakowicz99@gmail.com"
            method="post"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className="contact-wrapper__input"
                size="lg"
                type="text"
                name="name"
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className="contact-wrapper__input"
                size="lg"
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className="contact-wrapper__input"
                size="lg"
                type="text"
                name="subject"
                placeholder="Subject"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control
                className="contact-wrapper__textarea"
                size="lg"
                as="textarea"
                name="message"
                placeholder="Message"
                rows={10}
              />
            </Form.Group>
            <button
              className="contact-wrapper__button cta-btn cta-btn--resume"
              size="lg"
              type="submit"
            >
              Submit
            </button>
          </Form>
        </div>
      </Fade>
    </Container>
  </section>
);

export default Contact;
