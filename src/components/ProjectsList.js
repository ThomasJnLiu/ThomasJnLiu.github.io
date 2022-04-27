import React from "react";
import { Link } from "react-router-dom";
import ProjectsListCard from "./ProjectsListCard/ProjectsListCard";
import MoreButton from "./MoreButton/MoreButton";

const ProjectsList = ({ articles }) => (
  <>
    <div className="projects-list-card">
      <Link to={`/Projects/OCAD%20Artist%20Alley%20Site%202`}>
        <div className="image-container">
          <img
            src={
              process.env.PUBLIC_URL +
              "/img/ocad-artist-alley/artist-alley-1.png"
            }
          />
        </div>{" "}
      </Link>
      <div className="project-preview">
        <div className="project-title">
          <h1>OCAD Artist Alley Site</h1>
          <p>YEAR: 2021</p>
        </div>
        <p>
          Single Page Application for hosting student works made with React and
          Firebase.
          <br></br>
          <MoreButton projectName="OCAD Artist Alley Site 2" />
        </p>
      </div>
    </div>
    {/* {articles.map((article) => (
      <ProjectsListCard ProjectInfo={article} />
    ))} */}
  </>
);

export default ProjectsList;
