import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ltonaik', 'template_i69sosc', form.current, 'al442KbFaIOncJySK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
    };
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className='container contact__container'>
      <div className="contact__options">
      <article className="contact__option">
        <MdOutlineEmail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>deepanshirana405@gmail.com</h5>
        <a href='mailto:deepanshirana405@gmail.com' target='_blank' rel="noreferrer">Send a message</a>
      </article>
      <article className="contact__option">
        <RiMessengerLine className='contact__option-icon'/>
        <h4>Messenger</h4>
        <h5>deepanshirana</h5>
        <a href='https://m.me/100080821298092' target='_blank'rel="noreferrer">Send a message</a>
      </article>
      <article className="contact__option">
        <BsWhatsapp className='contact__option-icon'/>
        <h4>Whatsapp</h4>
        <a href='https://api.whatsapp.com/send?phone+919467076012' target='_blank'rel="noreferrer">Send a message</a>
      </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your Full Name' required />
        <input type='email' name='email' placeholder='Your email' required />
        <textarea name='message' rows='7' placeholder='Your Message'></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact