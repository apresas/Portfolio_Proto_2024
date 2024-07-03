import React, { useState } from "react";
import "./projectModal.css";
import { motion } from "framer-motion";
import ModalBackDrop from "../backdrop/ModalBackDrop";
import { useProjects } from "../../context/ProjectContext";
import DesignBrief from "../../assets/projectSummary/designBrief";

function ProjectModal() {
  const {
    addCurrentProject,
    getProjects,
    openProjectInfoModal,
    closeProjectInfoModal,
    projectInfoModalID,
    currentSelectedProject,
    showProjectInfoModal,
    currentProject,
    setShowProjectInfoModal,
  } = useProjects();

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 450,
      },
    },
    exit: {
      y: "-100vh",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <ModalBackDrop
      show={showProjectInfoModal}
      onHide={closeProjectInfoModal}
      onClick={closeProjectInfoModal}
    >
      <motion.div
        key="project_info_modal"
        className="project_info_modal"
        onClick={(event) => event.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <header className="project_modal_header">
          <h1>{currentSelectedProject.title}</h1>
          <h2>
            Langauages:
            <span className="modal_lang_span">
              {currentSelectedProject.lang}
            </span>
          </h2>
        </header>
        <section className="project_modal_content">
          {/* <h2 className='modal_article_header'>Case Study</h2> */}
          <div className="modal_image_container">
            <img src={currentSelectedProject.hero} alt="hero image" />
          </div>
          <div className="modal_content_container">
            <article className="modal_article article_summary">
              <DesignBrief currentSelectedProject={currentSelectedProject} />
            </article>
            <article className="modal_article article_wireframe">
              <h3 className="modal-section-header">Wire Frames:</h3>
              <img src={currentSelectedProject.image} alt="project image" />
              <p>
                {currentSelectedProject.wireframe +
                  " " +
                  currentSelectedProject.title}
              </p>
            </article>
            <article className="modal_article article_flowchart">
              <h3 className="modal-section-header">Flowchart:</h3>
              <img src={currentSelectedProject.image} alt="project image" />
              <p>
                {currentSelectedProject.flowchart +
                  " " +
                  currentSelectedProject.title}
              </p>
            </article>
            <article className="modal_article article_prototype">
              <h3 className="modal-section-header">Prototypes:</h3>
              <img src={currentSelectedProject.image} alt="project image" />
              <p>
                {currentSelectedProject.prototype +
                  " " +
                  currentSelectedProject.title}
              </p>
            </article>
            <article className="modal_article article_summary"></article>
          </div>
        </section>
      </motion.div>
    </ModalBackDrop>
  );
}

export default ProjectModal;
