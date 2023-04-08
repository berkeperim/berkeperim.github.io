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
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>berke.perim@gmail.com</h5>
            <a href="mailto:berke.perim@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsInstagram/>
            <h4>Instagram</h4>
            <h5>berke.perim</h5>
            <a href="https://instagram.com/berke.perim" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin/>
            <h4>LinkedIn</h4>
            <h5>berke-perim</h5>
            <a href="https://www.linkedin.com/in/berke-perim" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea name="message" id="" placeholder="Your Message" rows="7" required></textarea>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact