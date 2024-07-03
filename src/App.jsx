import React, { useState } from "react";
import Nav from "./components/header/Nav";
// import Header from "./components/header/Header";
// import About from './components/about/About'
// import Portfolio from "./components/portfolio/Portfolio";

// import Experience from "./components/experience/Experience";

// import Skills from "./components/skills/Skills";

import Gallary from "./components/gallary/Gallary";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import AboutModal from "./components/modal/AboutModal";
import WorkModal from "./components/modal/WorkModal";

import ProjectModal from "./components/modal/ProjectModal";
import { useProjects } from "./context/ProjectContext";
import { AnimatePresence } from "framer-motion";

function App() {
  const {
    // addCurrentProject,
    getProjects,
    openProjectInfoModal,
    // closeProjectInfoModal,
    projectInfoModalID,
    currentSelectedProject,
    showProjectInfoModal,
    currentProject,
    setShowProjectInfoModal,
    aboutModalOpen,
    aboutClose,
    workModalOpen,
    workClose,
    openWorkModal,
    closeWorkModal,
    currentWork,
    cw,
    closeAboutModal,
    openAboutModal,
  } = useProjects();

  return (
    <>
      <Nav />
      <Gallary />
      <Contact />
      <Footer />

      <AnimatePresence initial={false}>
        {aboutModalOpen && (
          <AboutModal
            modalOpen={openAboutModal}
            handleClose={closeAboutModal}
          />
        )}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {workModalOpen && (
          <WorkModal
            modalOpen={openWorkModal}
            handleClose={closeWorkModal}
            work={cw}
          />
        )}
      </AnimatePresence>

      {/* <Header />
      <Skills />
      <Portfolio />
      <About />   
      <Bio />

      <Experience />
      <Contact />
      <Footer /> */}
      {/* <AnimatePresence>
        {showProjectInfoModal && (
          <ProjectModal
            show={showProjectInfoModal}
            handelClick={() => setShowProjectInfoModal(false)}
            // handelClose={closeProjectInfoModal}
            setShowProjectInfoModal={setShowProjectInfoModal}
            currentSelectedProject={currentSelectedProject}
            projectInfoModalID={projectInfoModalID}
            getProjects={getProjects}
          />
        )}
      </AnimatePresence> */}
    </>
  );
}

export default App;
