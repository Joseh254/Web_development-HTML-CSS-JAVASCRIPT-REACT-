import React from "react";
import Title from "../Title/Title";
import Project from "./Project";
import restaurantProjectImg from "../assets/restaurant-project-img.jpg";
import "./projects.css";
import projects from "../data/projects";

function Projects() {
  return (
    <section>
      <Title text="my projects" />
      <div className="projects__container">
        {projects.map((project, i) => (
          <Project
            key={i}
            thumbnail={project.image}
            title={project.title}
            excerpt={project.excerpt}
            codeUrl={project.codeUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
