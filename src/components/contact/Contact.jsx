import React, { useRef } from "react";
import "./contact.css";
import { CiMail } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
// import { BsMailbox2 } from "react-icons/bs"
import Wiggles from "../../assets/wiggles_img.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ljhvnr2",
        "template_haph84m",
        form.current,
        "WhDvKpDXFJnh8lOwR"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Success!");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="contact_header">
        <h3>Get in Touch</h3>
        <h1>Contact Me</h1>
      </div>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <img
              className="contact_portrait"
              src={Wiggles}
              alt="contact portrait"
            />

            <div className="contact_content_container">
              <div className="contact_icon">
                <HiOutlineDocumentText className="contact_option-icon" />
              </div>
              <h4>Resume</h4>
              <h5>.pdf</h5>
              <a
                href="mailto:aj@presasdesigns.com"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
            </div>
            <div className="contact_content_container">
              <div className="contact_icon">
                <MdOutlineEmail className="contact_option-icon" />
              </div>
              <h4>Email</h4>
              <h5>aj@presasdesigns.com</h5>
              <a
                href="mailto:aj@presasdesigns.com"
                target="_blank"
                rel="noreferrer"
              >
                Send an Email
              </a>
            </div>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form className="contact_form" ref={form} onSubmit={sendEmail}>
          <div className="name_row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />
          </div>
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="form_btn btn btn_primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
