import React from "react";
import "./Style.css";

function Main(props) {
  return (
    <div className="container">
      <section className="img--section">
        <img src="./Image/1.jpg" alt="Busniess" className="image--main" />
      </section>
      <section className="text--section">
        <h2 className="text-h2">Laura Smith</h2>
        <h3 className="text-h3">Frontend Developer </h3>
        <h5 className="text-h5"> laurasmith.website </h5>
      </section>
      <button className="btn">Email</button>
      <p className="title1">About</p>
      <p className="text-para1">
        {" "}
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </p>
      <p className="title2">Interests</p>
      <p className="text-para2">
        {" "}
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </div>
  );
}

export default Main;
