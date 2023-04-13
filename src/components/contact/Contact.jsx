import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wwa3pz7', 'template_zaw0kos', form.current, 'd1y88koaz2pBI_XaD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
      <div className="container">
        <div className="section__title">
          <h3>Contact Me</h3>
          <h1>Get In Touch</h1>
        </div>
        <div className="contact__container">
          <div className="contact__options">
            <p>My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
              <a href="mailto:berke.perim@gmail.com" className="btn btn-primary" target="_blank">Send a message</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact