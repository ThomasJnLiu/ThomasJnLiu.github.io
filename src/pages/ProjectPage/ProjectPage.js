import React from "react";
import articleContent from "../../data/content";
import NotFoundPage from "../NotFoundPage";
import "./ProjectPage.css";
const ProjectPage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);

  if (!article) return <NotFoundPage />;
  return (
    <>
      <div className="content">
        <h1>{article.title}</h1>
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
