import React from "react";
import "./experience.css";
import Tile from "./ExperienceTile";
// import { BsPatchCheckFill } from "react-icons/bs";
import { FaSass } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { BsDiagram3Fill } from "react-icons/bs";
import { SiFigma } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <span className="shadow shadow_top" />
      <div className="experience_header">
        <h3>Tools / Technologies</h3>
        <h1>Experience</h1>
      </div>
      <div className="experience_container">
        <section className="experience_tiles">
          <div className="html_tile">
            <SiHtml5 className="experience_tiles-icon html" />
          </div>
          <div className="experience_discription">
            <h4>html</h4>
            <small>Experienced</small>
          </div>
        </section>
        <section className="experience_tiles">
          <div className="css_tile">
            <SiCss3 className="experience_tiles-icon css" />
          </div>
          <div className="experience_discription">
            <h4>css</h4>
            <small>Experienced</small>
          </div>
        </section>
        <section className="experience_tiles">
          <FaSass className="experience_tiles-icon sass" />
          <div className="experience_discription">
            <h4>sass</h4>
            <small>Intermediate</small>
          </div>
        </section>
        <section className="experience_tiles">
          <div className="bs_tile">
            <FaBootstrap className="experience_tiles-icon bs" />
          </div>
          <div className="experience_discription">
            <h4>bootstrap</h4>
            <small>Intermediate</small>
          </div>
        </section>
        <section className="experience_tiles">
          <SiJavascript className="experience_tiles-icon js" />
          <div className="experience_discription">
            <h4>javascript</h4>
            <small>Experienced</small>
          </div>
        </section>
        <section className="experience_tiles">
          <SiReact className="experience_tiles-icon rea" />
          <div className="experience_discription">
            <h4>react</h4>
            <small>Intermediate</small>
          </div>
        </section>
        <section className="experience_tiles">
          <SiGithub className="experience_tiles-icon git" />
          <div className="experience_discription">
            <h4>git</h4>
            <small>Intermediate</small>
          </div>
        </section>
        <section className="experience_tiles">
          <SiNodedotjs className="experience_tiles-icon node" />
          <div className="experience_discription">
            <h4>nodejs</h4>
            <small>Intermediate</small>
          </div>
        </section>
        <section className="experience_tiles">
          <div className="ps_tile">
            <SiAdobephotoshop className="experience_tiles-icon ps" />
          </div>
          <div className="experience_discription">
            <h4>photoshop</h4>
            <small>Experienced</small>
          </div>
        </section>
        <section className="experience_tiles">
          <div className="ai_tile">
            <SiAdobeillustrator className="experience_tiles-icon ai" />
          </div>
          <div className="experience_discription">
            <h4>illustrator</h4>
            <small>Experienced</small>
          </div>
        </section>
        <section className="experience_tiles">
          <div className="xd_tile">
            <SiAdobexd className="experience_tiles-icon xd" />
          </div>
          <div className="experience_discription">
            <h4>xd</h4>
            <small>Experienced</small>
          </div>
        </section>
        <section className="experience_tiles">
          <SiFigma className="experience_tiles-icon fig" />
          <div className="experience_discription">
            <h4>figma</h4>
            <small>Intermediate</small>
          </div>
        </section>
      </div>
      <span className="shadow shadow_bottom" />
    </section>
  );
};

export default Experience;
