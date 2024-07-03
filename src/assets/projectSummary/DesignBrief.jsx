import React from "react";
import "../projectSummary/designBrief.css";
import { useProjects } from "../../context/ProjectContext";

function DesignBrief() {
  const { currentSelectedProject } = useProjects();

  const objective = [];
  const guideline = [];
  const deliverable = [];

  {
    currentSelectedProject.objectives.forEach((item) => {
      return objective.push(item);
    });
  }

  {
    currentSelectedProject.guidelines.forEach((item) => {
      return guideline.push(item);
    });
  }

  {
    currentSelectedProject.deliveribles.forEach((item) => {
      return deliverable.push(item);
    });
  }

  return (
    <>
      <h1 className="brief_header_title">
        Design Brief: {currentSelectedProject.title}
      </h1>
      <h2 className="brief_title">Project Overview:</h2>
      <p className="brief_p">{currentSelectedProject.summary}</p>
      <h2 className="brief_title">Design Objectives:</h2>
      <ul className="brief_ul">
        {objective.map((item) => (
          <li className="brief_li" key={item}>{item}</li>
        ))}
      </ul>
      <h2 className="brief_title">Target Audience:</h2>
      <p className="brief_p">{currentSelectedProject.target}</p>
      <h2 className="brief_title">Brand Guidelines:</h2>
      <ul className="brief_ul">
        {guideline.map((item) => (
          <li className="brief_li" key={item}>{item}</li>
        ))}
      </ul>
      <h2 className="brief_title">Deliverables:</h2>
      <ul className="brief_ul">
        {deliverable.map((item) => (
          <li className="brief_li" key={item}>{item}</li>
        ))}
      </ul>
      <h2 className="brief_title">Timeline:</h2>
      <p className="brief_p">{currentSelectedProject.timeline}</p>
    </>
  );
}

export default DesignBrief;
