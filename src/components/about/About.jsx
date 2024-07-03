import React from "react";
import "./about.css";
import Wiggles from '../../assets/wiggles_img.png';
import { FaAward } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { BiCertification } from "react-icons/bi";

function About() {
  return (
    <section id="about">
    <div className="about_header">
    <h3>Get To Know</h3>
    <h1 className='about_title'>About Me</h1>
    </div>
    <div className="container about_container">
      <div className="about_me">
        <img className='about_portrait' src={Wiggles} alt="about_portrait" />
      </div>
      <div className="about_content">
        <div className="about_cards">
          <article className="about_card">
            <FaAward className="about_icon" />
            <h5>Experience</h5>
            <small>3+ Years Coding Experience</small>
          </article>
          <article className="about_card">
            <TbCertificate className="about_icon" />
            <h5>Education</h5>
            <small>Bachelors: Computer Science</small>
          </article>
          <article className="about_card">
            <BiCertification className="about_icon" />
            <h5>Certifications</h5>
            <small>Project+ | A+ | 3 CIW Certs...</small>
          </article>
        </div>
        <p>
          Hi, I'm AJ and I'm a Designer. Ever since I was young I've been
          absolutely hooked by the creative process and have spent most of my
          time designing, coding, or writing music. When im not creating I'm
          spending time with my bulldog Pete, hanging out with my family,
          working out or watching sports. I look forward to hearing from you
          and I'm eager to get to work on developing a product that looks
          sharp while meeting all of your technical requirements!
        </p>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </div>
  </section>
  )
}

export default About