import React from "react";
import { SiCss3 } from "react-icons/si";

function ExperienceTile({ title, level, icon }) {
  return (
    <div className="experience_details">
      <SiCss3 className="experience_details-icon" />

      <div className="experience_discription">
        <h4>{title}</h4>
        <small>{level}</small>
      </div>
    </div>
  );
}

export default ExperienceTile;
