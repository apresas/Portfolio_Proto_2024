import React, { useState } from "react";
import "./portfolio.css";
import data from "../../data/projectData.json";
import { GrStar } from "react-icons/gr";
import Carousel from "./carousel/Carousel";
import { AnimatePresence } from "framer-motion";
import ProjectModal from "../modal/ProjectModal";
import { useProjects } from "../../context/ProjectContext";

const Portfolio = () => {
  const { sortCategoryUI, sortCategoryGraphic, sortCategoryDev, active } =
    useProjects();

  return (
    <>
      <section id="portfolio" className="container">
        <div className="portfolio_header">
          <h3>My Recent Work</h3>
          <h1>Portfolio</h1>
          <span className="stars stars_left">
            {" "}
            <span>
              <GrStar />
            </span>{" "}
            <span>
              <GrStar />
            </span>{" "}
            <span>
              <GrStar />
            </span>{" "}
          </span>
        </div>
        <div className=" portfolio_container">
          <div className=" portfolio_actions">
            <button className={active === "1" ? "active" : "category_btn" } id={"1"} onClick={sortCategoryGraphic}>
              Graphics
            </button>
            <button className={active === "2" ? "active" : "category_btn"} id={"2"} onClick={sortCategoryUI}>
              UI/UX
            </button>
            <button className={active === "3" ? "active" : "category_btn"} id={"3"} onClick={sortCategoryDev}>
              Development
            </button>
          </div>
          <div className="carousel_container">
            <Carousel />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
