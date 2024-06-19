import React from "react";

function Skill({ icon, title, description }) {
  return (
    <div className="skill-card" data-testid="icon-wrapper">
      <div className="skill-icon-wrapper">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="skill-card-bottom-belt"></div>
    </div>
  );
}

export default Skill;
