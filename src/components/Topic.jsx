import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import topics from "../data/topics.json";
import Perfil from "./Perfil";
import Skills from "./Skills";
import Historial from "./Historial";
import Referencias from "./Referencias";
import Educacion from "./Educacion";
import Contacto from "./Contacto";
import AllTopics from "./AllTopics";
import { animateScroll as scroll } from "react-scroll";
// import pdf from "../files/CV-pdf.pdf";
// import png from "../files/CV-png.png";

const Topic = () => {
  const onClickUp = () => {
    scroll.scrollToTop();
  };

  return (
    <HashRouter>
      <div className="topic-gral">
        <div className="topic-container">
          <Routes>
            <Route path="/" element={<Perfil topic={topics} />} />
            <Route path="/skills" element={<Skills topic={topics} />} />
            <Route path="/historial" element={<Historial topic={topics} />} />
            <Route
              path="/referencias"
              element={<Referencias topic={topics} />}
            />
            <Route path="/educacion" element={<Educacion topic={topics} />} />
            <Route path="/contacto" element={<Contacto topic={topics} />} />
            <Route path="/resumen" element={<AllTopics topic={topics} />} />
          </Routes>
        </div>
        <div className="download-buttons">
          {/* <button className="boton-up">
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              download="CV pdf - Cristian Ferrer"
            >
              Descargar PDF
            </a>
          </button>
          <button className="boton-up">
            <a
              href={png}
              target="_blank"
              rel="noopener noreferrer"
              download="CV png - Cristian Ferrer"
            >
              Descargar PNG
            </a>
          </button> */}
        </div>
        <div className="end-container">
          <button className="boton-up" onClick={onClickUp}>
            Inicio
          </button>
          <p className="text-end">Creado por Cristian Ferrer</p>
        </div>
      </div>
    </HashRouter>
  );
};

export default Topic;
