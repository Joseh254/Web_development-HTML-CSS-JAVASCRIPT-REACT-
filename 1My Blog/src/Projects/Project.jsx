import React from "react";
import { LuExternalLink } from "react-icons/lu";
import { FaGithubSquare } from "react-icons/fa";

function Project({ thumbnail, title, excerpt, liveUrl, codeUrl }) {
  return (
    <div className="project">
      <div className="project__image-wrapper">
        <img
          src={thumbnail}
          alt="project thumbnail"
          className="project__image"
        />
      </div>
      <h2 className="project__title-outside">{title}</h2>
      <div className="project__body">
        <h3 className="project__title">{title}</h3>
        <p className="project__excerpt">{excerpt}</p>
        <div className="project__urls">
          <a href={liveUrl} className="project__url project__url--live">
            <LuExternalLink /> live url
          </a>
          <a href={codeUrl} className="project__url project__url--code">
            <FaGithubSquare /> code url
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
