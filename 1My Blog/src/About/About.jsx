import React from "react";
import Title from "../Title/Title";
import "./about.css";
import johnDoeImg from "../assets/john-doe.jpg";

function About() {
  return (
    <div className="about-section">
      <div className="about-textbox">
        <Title text="about me" />
        <p className="about-textbox__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          autem asperiores nihil eveniet pariatur aliquam? Id dolor reiciendis
          ipsam magnam omnis soluta quisquam sint error quod nisi, totam, eum
          labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Inventore autem asperiores nihil eveniet pariatur aliquam? Id dolor
          reiciendis ipsam magnam omnis soluta quisquam sint error quod nisi,
          totam, eum labore. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Inventore autem asperiores nihil eveniet pariatur aliquam? Id
          dolor reiciendis ipsam magnam omnis soluta quisquam sint error quod
          nisi, totam, eum labore. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Inventore autem asperiores nihil eveniet pariatur
          aliquam? Id dolor reiciendis ipsam magnam omnis soluta quisquam sint
          error quod nisi, totam, eum labore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Inventore autem asperiores nihil eveniet
          pariatur aliquam? Id dolor reiciendis ipsam magnam omnis soluta
          quisquam sint error quod nisi, totam, eum labore. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Inventore autem asperiores
          nihil eveniet pariatur aliquam? Id dolor reiciendis ipsam magnam omnis
          soluta quisquam sint error quod nisi, totam, eum labore.
        </p>
      </div>
      <div className="about-image-wrapper">
        <img src={johnDoeImg} alt="john doe" className="about__image" />
      </div>
    </div>
  );
}

export default About;
