import React from "react";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z3it27h",
        "template_y412sgs",
        form.current,
        "ylFxpCKhZl-y9L4tb"
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
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>sidiitn516@gmail.com</h5>
            <a
              href="mailto:sidiitn516@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send Email
            </a>
          </article>
          {/* <article className='contact_option'>
          <FaFacebookMessenger className="contact_option-icon"/>
            <h4>Messenger</h4>
            <h5>kjabckjba@gmail.com</h5>
            <a href="https://m.me/" target="_blank"></a>
          </article> */}
          <article className="contact_option">
            <IoLogoWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            {/* <h5>8179688516</h5> */}
            <a
              href="https://api.whatsapp.com/send?phone=+918179688516"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            minLength={3}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Mail"
            required
            minLength={5}
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            minLength={5}
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
