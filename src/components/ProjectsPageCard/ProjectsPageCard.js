import React from "react";
import "./ProjectsPageCard.css";

const ProjectsPageCard = ({ content, image, variation }) => {
  return (
    <div className="proj-page-card">
      <p>{content}</p>
      <img src={process.env.PUBLIC_URL + image} />
    </div>
  );
};

export default ProjectsPageCard;
