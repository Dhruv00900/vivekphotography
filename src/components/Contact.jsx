import React, { useRef } from 'react';
import '../styles/Contact.css';

function Contact() {
  const form = useRef();

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    // Construct WhatsApp message
    const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. Message: ${message}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp API link
    const whatsappURL = `https://wa.me/918140430305?text=${encodedMessage}`;

    // Redirect user to WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendToWhatsApp} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
