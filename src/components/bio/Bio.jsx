import React from "react";
import { MdMilitaryTech } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa"
import { TbCertificate } from "react-icons/tb";
import { MdBadge } from "react-icons/md"
import { MdOutlineDesignServices } from "react-icons/md"
import { BsTools } from "react-icons/bs"
import "../bio/bio.css";

function Bio() {
  return (
    <>
      <div className="bio_container" id="bio">
        <div className="bio_tile military_tile">
          <span className="bio_tile_icon">
            <MdMilitaryTech />
          </span>
          <h2 className="bio_tile_title">Air Force Vet</h2>
          <small className="bio_subtitle">Service Medal</small>
        </div>
        <div className="bio_tile education_tile">
        <span className="bio_tile_icon">
            <FaGraduationCap />
          </span>
          <h2 className="bio_tile_title">Education</h2>
          <small className="bio_subtitle">B.S. Software Development</small>
        </div>
        <div className="bio_tile cert_tile">
        <span className="bio_tile_icon">
            <MdBadge />
          </span>
          <h2 className="bio_tile_title">Certifications</h2>
          <small className="bio_subtitle">3+ IT Certifications</small>
        </div>
        <div className="bio_tile exp_tile">
        <span className="bio_tile_icon">
            <BsTools />
          </span>
          <h2 className="bio_tile_title">Experience</h2>
          <small className="bio_subtitle">Design: 7+ | WebDev: 2+</small>
          {/* <small className="bio_subtitle">WebDev: 2+ years</small> */}
        </div>
      </div>
    </>
  );
}

export default Bio;
