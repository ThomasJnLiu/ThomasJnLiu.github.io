import React from "react";
import ProjectsPageCard from "../../components/ProjectsPageCard/ProjectsPageCard";
import articleContent from "../../data/content";
import NotFoundPage from "../NotFoundPage";
import "./ProjectPage.css";
const ProjectPage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);

  if (!article) return <NotFoundPage />;
  return (
    <>
      <div className="content proj-page">
        <div className="proj-page-title">
          {" "}
          <h1>{article.title}</h1>
          <p>
            YEAR: 2018 <br /> TOOLS USED: placeholder <br />
            TEAM: placeholder
          </p>
        </div>

        <ProjectsPageCard content={article.content[0]} image={article.img[0]} />
        <ProjectsPageCard content={article.content[0]} image={article.img[1]} />

        {article.content.map((paragraph, key) => (
          <p key={key}>{paragraph}</p>
        ))}
        {/* {article.img.map((path, key) => (
        <img key={key} src={process.env.PUBLIC_URL + path} alt="test" />
      ))} */}

        {/* <img src={process.env.PUBLIC_URL + "/img/innovation-4.jpg"} /> */}

        {article.img
          ? article.img.map((path, key) => (
              <img key={key} src={process.env.PUBLIC_URL + path} alt={key} />
            ))
          : null}
      </div>
    </>
  );
};

export default ProjectPage;
