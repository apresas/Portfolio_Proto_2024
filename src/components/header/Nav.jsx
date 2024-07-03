import React from "react";
import "./nav.css";
import logo from "../../assets/pd_logo.png";
import LogoSVG from "../../assets/pd_logo.svg";
import { RiMessage2Line } from "react-icons/ri";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { useProjects } from "../../context/ProjectContext";

function Nav() {
  const {
    openAboutModal
  } = useProjects();


  // onClick={() => (aboutModalOpen ? aboutClose() : aboutOpen())}

  return (
    <>
      <nav id="nav" className="nav navbar">
        <div className="container nav_container">
          <section className="logo_section">
            <div className="logo_container">
              <img src={LogoSVG} alt="Logo" className="logo" />
            </div>
            <label>
              <span>presas</span>designs
            </label>
          </section>
          <div className="nav_links">
            <div onClick={openAboutModal}>
            <a href="#bio">About</a>
            </div>
            <a href="#gallary">Github</a>
            <a href="#experience">Linkedin</a>
            <span>
              <a href="#contact">Contact <RiMessage2Line /></a>
            </span>
          </div>
          <span className="nav_underline" />
        </div>
      </nav>
    </>
  );
}

export default Nav;
