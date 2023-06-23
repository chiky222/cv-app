import React from "react";
import { v4 as uuidv4 } from "uuid";
import html from "../img/html-5.svg";
import css from "../img/css-3.svg";
import js from "../img/javascript.svg";
import tailwind from "../img/tailwind.svg";
import react from "../img/react.svg";
import reactNative from "../img/reactNative.svg";
import typeScript from "../img/typescript.svg";
import three from "../img/threejs.svg";
import gsap from "../img/green.svg";
import git from "../img/git.svg";

const logos = [
  html,
  css,
  js,
  tailwind,
  react,
  reactNative,
  typeScript,
  three,
  gsap,
  git,
];

const Skills = ({ topic }) => {
  return (
    <>
      <h2 className="title-topic">{topic[1]?.title}</h2>
      <ul className="lista-skills">
        {topic[1]?.description.map((desc) => (
          <li key={uuidv4()}>{desc}</li>
        ))}
      </ul>
      <div className="logos-skills">
        {logos.map((logo, index) => (
          <img src={logo} alt={topic[1]?.title} key={uuidv4()} />
        ))}
      </div>
    </>
  );
};

export default Skills;
