import React from "react";
import "./footer.css";
import LogoSVG from "../../assets/pd_logo.svg";
import CV from '../../assets/cv.pdf'

const Footer = () => {
  return (
    <footer className="footer_container" id="footer">
      <div className="footer_content">
        <a href="#nav" className="footer_logo">
          <img src={LogoSVG} alt="Logo"></img>
        </a>

        <ul className="permalinks">
          <li>
            <a href="#nav">Home</a>
          </li>
          <li>
            <a href="#bio">About</a>
          </li>
          <li>
            <a href="#gallary">Portfolio</a>
          </li>
          <li>
            <a
              href="https://github.com/apresas"
              target="_blank"
              className="github_btn"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href={CV} download>
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="footer_copyright">
        <small>&copy; PresasDesigns. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
