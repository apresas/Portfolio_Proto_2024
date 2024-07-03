import React from "react";
import { motion } from "framer-motion";
import Backdrop from "../backdrop/ModalBackDrop";
import "./modal.css";
import { MdClose } from "react-icons/md";
import { useProjects } from "../../context/ProjectContext";

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

function WorkModal({ handleClose, work }) {
  const { currentWork } = useProjects();

  //   console.log(currentWork)

  return (
    <Backdrop onClose={handleClose} onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal work_modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <section className="modal_controls">
          <h2 className="section_title">{currentWork[0].clients}</h2>
          <button className="close_btn" onClick={handleClose}>
            <MdClose />
          </button>
        </section>
        <section className="modal_header">
          <p> {currentWork[0].summary}</p>
          <ul>
            <li>Date: {currentWork[0].date}</li>
            <li>Client: {currentWork[0].clients}</li>
            <li>Role: {currentWork[0].role}</li>
            <li className="tags_li">Tags: {currentWork[0].tags.map(tag => (
                <li>{tag}</li>
            ))}</li>
            <li></li>
          </ul>
          {/* <h1 className="modal_title">{currentWork[0].title}</h1> */}
        </section>
        <div className="placeholder"></div>
        <div className="work_modal_grid">
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
        </div>

      </motion.div>
    </Backdrop>
  );
}

export default WorkModal;
