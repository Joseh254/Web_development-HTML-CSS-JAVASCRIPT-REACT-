import React from "react";
import "./hero.css";
import img from "../assets/profile-img.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-textbox">
        <p className="hero-textbox__p hero-textbox-p-left">
          <img src={img} alt="my avatar" className="hero-avatar-img" />
          Hello, I am
        </p>
        <h2 className="hero__name">{`Joseph Mbugua`}</h2>
        <p className="hero-textbox__p">I am a full-stack web developer</p>
      </div>
    </section>
  );
}

export default Hero;
