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
        <img
          className="proj-page-header-img"
          src={process.env.PUBLIC_URL + article.img[0]}
        />
        <div className="proj-page-title">
          <h1>{article.title}</h1>
          <p>
            YEAR: 2018 <br /> TOOLS USED: placeholder <br />
            TEAM: placeholder
          </p>
        </div>
        {article.layout.map((layout, key) => (
          <ProjectsPageCard
            content={article.content[key]}
            image={article.img[key]}
            heading={article.heading[key]}
            variation={article.layout[key]}
          />
        ))}
        {/* <ProjectsPageCard
          content={article.content[0]}
          image={article.img[0]}
          heading={article.heading[0]}
          variation={article.layout[0]}
        />
        <ProjectsPageCard
          content={article.content[1]}
          image={article.img[1]}
          heading={article.heading[1]}
          variation={article.layout[1]}
        />
        <ProjectsPageCard
          content={article.content[2]}
          image={article.img[2]}
          heading={article.heading[2]}
          variation={article.layout[2]}
        /> */}
        {article.content.map((paragraph, key) => (
          <p key={key}>{paragraph}</p>
        ))}
        {/* {article.img.map((path, key) => (
        <img key={key} src={process.env.PUBLIC_URL + path} alt="test" />
      ))} */}
        {/* <img src={process.env.PUBLIC_URL + "/img/innovation-4.jpg"} /> */}
        {/* {article.img
          ? article.img.map((path, key) => (
              <img key={key} src={process.env.PUBLIC_URL + path} alt={key} />
            ))
          : null} */}
      </div>
    </>
  );
};

export default ProjectPage;
