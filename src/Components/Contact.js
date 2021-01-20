import React from "react";
import emailjs from "emailjs-com";
import { Form, Button } from "react-bootstrap";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_49ov9zs",
        "template_i2n1a7i",
        e.target,
        "user_2xg7Ijvj5d4DbEOLiqS9Z"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="contact" id="contact">
      <div>Get in touch with me</div>
      <Form className="contact-form" onSubmit={sendEmail}>
        <Form.Control type="text" placeholder="Name" name="user_name" />

        <Form.Control type="email" placeholder="Email" name="user_email" />

        <Form.Control as="textarea" placeholder="Message" name="message" />
        <Button type="submit" value="Send">
          Submit
        </Button>
      </Form>
    </div>
  );
}
