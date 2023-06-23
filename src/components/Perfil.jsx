import React from "react";
import proyectos from "../img/proyectos.PNG";

const Perfil = ({ topic }) => {
  return (
    <>
      <h2 className="title-topic">{topic[0]?.title}</h2>
      <a
        href="https://crisferrer.netlify.app/"
        target={"_blank"}
        rel={"noreferrer noopener"}
      >
        <img className="proyectos" src={proyectos} alt="proyectos" />
      </a>
      <p className="text-perfil">{topic[0]?.description}</p>
    </>
  );
};

export default Perfil;
