import React from "react";
import Instagram from "../img/Instagram.svg";
import LinkedIn from "../img/LinkedIn.svg";
import Github from "../img/Github.svg";
import phone from "../img/phone.svg";

const Contacto = ({ topic }) => {
  const svgImportadosRedes = [Instagram, LinkedIn, Github];

  return (
    <>
      <h2 className="title-topic">{topic[5]?.title}</h2>
      <div className="section-referencias">
        {topic[5].description.map((item, index) => {
          return (
            <a
              href={item?.link}
              target={"_blank"}
              rel={"noreferrer noopener"}
              key={item?.red}
            >
              <img
                className="icono"
                src={svgImportadosRedes[index]}
                alt={item?.red}
              />
            </a>
          );
        })}
      </div>

      <div className="section-tel">
        <img className="phone-contact" src={phone} alt="phone" />
        <h4 className="subtitle">{topic[6]?.name}</h4>
        <h6 className="subtitle">{topic[6]?.number}</h6>
      </div>
    </>
  );
};

export default Contacto;
