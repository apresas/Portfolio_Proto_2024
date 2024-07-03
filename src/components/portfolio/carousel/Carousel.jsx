import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import data from "../../../data/projectData.json";
import "./carousel.css";
import { AnimatePresence } from "framer-motion";
import { useProjects } from "../../../context/ProjectContext";
import ProjectModal from "../../modal/ProjectModal";
import { HiOutlineArrowsExpand } from "react-icons/hi";
// import useBodyScrollLock from "../../../hooks/useBodyScrollLock";

function Carousel() {
  const {
    addCurrentProject,
    getProjects,
    currentProject,
    openProjectInfoModal,
    projectCategory,
  } = useProjects();

  const [width, setWidth] = useState(0);
  const carousel = useRef();



  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 50);
    // console.log(width)
  }, [width]);


  // const[isLocked,toggle] = useBodyScrollLock();

  return (
    <>
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width}}
          className="inner_carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          {data
            .filter((data) => data.category.includes(projectCategory))
            .map((i) => {
              return (
                <motion.div className="item" key={i.id}>
                  <a
                    className="expand_btn"
                    onClick={openProjectInfoModal}
                    key={i.id}
                    id={i.id}
                    category={i.category}
                    image={i.image}
                    hero={i.hero}
                    title={i.title}
                    lang={i.lang}
                    github={i.github}
                    demo={i.demo}
                    summary={i.summary}
                    wirefarme={i.wireframe}
                    prototype={i.prototype}
                    flowchart={i.flowchart}
                    conclusion={i.conclusion}
                  >
                    <HiOutlineArrowsExpand />
                  </a>
                  <img src={i.image} alt="project image" />
                  <div className="portfolio_info">
                    <h4>{i.title}</h4>
                    <h5>{i.lang}</h5>
                    <div className="portfolio_item-cta">
                      <a
                        href={i.github}
                        className="btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </motion.div>
      </motion.div>
      {/* <AnimatePresence>
        {showProjectInfoModal && (
          <ProjectModal
            show={showProjectInfoModal}
            handelClick={() => setShowProjectInfoModal(false)}
            handelClose={closeProjectInfoModal}
            currentSelectedProject={currentSelectedProject}
            projectInfoModalID={projectInfoModalID}
            getProjects={getProjects}
          />
        )}
      </AnimatePresence> */}
    </>
  );
}

export default Carousel;
