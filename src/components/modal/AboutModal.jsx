import React from "react";
import { motion } from "framer-motion";
import Backdrop from "../backdrop/ModalBackDrop";
import "./modal.css";
import { MdClose } from "react-icons/md";
import Experience from "../experience/Experience"

const dropIn = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    x: "100vw",
    opacity: 0,
  },
};

function AboutModal({ handleClose, title }) {
  return (
    <Backdrop onClose={handleClose} onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal about_modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <section className="modal_controls">
          <h2 className="section_title">About</h2>
          <button className="close_btn" onClick={handleClose}>
            <MdClose />
          </button>
        </section>
        <section className="modal_header_about">
          <small>Hello I'm,</small>
          <h1 className="modal_title">A.J. Presas</h1>
        </section>
        <div className="hero_image_container">
          <img src="../../assets/Ohio_Portrait.png" alt="" />
        </div>
        <div className="modal_description_container">
          <p className="modal_description">
            I am a Las Vegas based designer, specialising in Branding,
            Graphic/Web Design and Illustration with a strong background in Web
            Development. I has a wide breathe of experience ranging from Package
            Design, Print Design, Product Design, ect. I make music as a hobbie
            / side hussle. I'm an avid Ohio sports fan.{" "}
          </p>
          <span>
            Get in touch: <a href="">aj@presasdesigns.com</a>
          </span>
        </div>
        <Experience />
        {/* <div className="modal_grid">
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
        </div> */}
      </motion.div>
    </Backdrop>
  );
}

export default AboutModal;
