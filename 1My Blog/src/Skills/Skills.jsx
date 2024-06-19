import React from "react";
import Skill from "./Skill";
import "./skills.css";
import skills from "../data/skills";
import Title from "../Title/Title";

function Skills() {
  return (
    <section className="skills-section">
      <Title text="my skills" />
      <div className="skills-container">
        {skills.map((skill, i) => (
          <Skill
            icon={<skill.icon />}
            title={skill.title}
            description={skill.description}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
