import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',   // Replace with your service ID
      'YOUR_TEMPLATE_ID',  // Replace with your template ID
      form.current,
      'YOUR_PUBLIC_KEY'   // Replace with your public key (user ID)
    ).then((result) => {
      console.log('Email successfully sent!', result.text);
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      console.error('Failed to send email.', error.text);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
