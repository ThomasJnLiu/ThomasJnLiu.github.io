import React from "react";
import articleContent from "../data/content";
import ProjectsList from "../components/ProjectsList";

const ProjectListPage = () => (
  <>
    <h1>Articles</h1>
    <ProjectsList articles={articleContent} />{" "}
  </>
);

export default ProjectListPage;
