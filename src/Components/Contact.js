import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Form, Button, Alert } from "react-bootstrap";

export default function Contact() {
  const [validemail, setValidmail] = useState(true);
  const [validname, setValidname] = useState(true);
  const [validemailres, setValidemailres] = useState("");
  const [validenameres, setValidnameres] = useState("");
  const [validmessage, setValidmessage] = useState(true);
  const [show, setShow] = useState(false);
  const [contactrequestres, setContactrequestres] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    if (e.target.elements.namedItem("user_name").value === "") {
      setValidnameres("Name is required");
      setValidname(false);
    } else if (
      !/^[\w-_.]{5,}$/.test(e.target.elements.namedItem("user_name").value)
    ) {
      setValidnameres(
        "Name can only have alphabets, numericals, '-', '_' and '.' and should have min length of 5."
      );
      setValidname(false);
    } else if (e.target.elements.namedItem("user_email").value === "") {
      setValidemailres("Email is required");
      setValidmail(false);
      setValidname(true);
    } else if (
      !/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/.test(
        e.target.elements.namedItem("user_email").value
      )
    ) {
      setValidemailres("Email given is not valid");
      setValidmail(false);
    } else if (e.target.elements.namedItem("message").value === "") {
      setValidmessage(false);
      setValidmail(true);
    } else {
      setValidmail(true);
      setValidmessage(true);
      setValidname(true);
      setContactrequestres("Sending...");
      setShow(true);
      emailjs
        .sendForm(
          "service_49ov9zs",
          "template_i2n1a7i",
          e.target,
          "user_2xg7Ijvj5d4DbEOLiqS9Z"
        )
        .then(
          (result) => {
            console.log(result.status);
            if (result.status === 200) {
              setContactrequestres("Your request recieved.");
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
    }
  }
  return (
    <div className="contact" id="contact">
      <div data-aos="fade-right">Get in touch with me</div>
      <Form
        data-aos="fade-up-right"
        className="contact-form"
        onSubmit={sendEmail}
      >
        <Form.Control type="text" placeholder="Name" name="user_name" />
        {validname ? <></> : <div>{validenameres}</div>}

        <Form.Control placeholder="Email" name="user_email" />
        {validemail ? <></> : <div>{validemailres}</div>}
        <Form.Control as="textarea" placeholder="Message" name="message" />
        {validmessage ? <></> : <div>Message cannot be empty</div>}
        <Alert show={show} onClose={() => setShow(false)} dismissible>
          {contactrequestres}
        </Alert>
        <Button type="submit" value="Send">
          Submit
        </Button>
      </Form>
    </div>
  );
}
