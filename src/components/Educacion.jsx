import React from "react";

const Educacion = ({ topic }) => {
  return (
    <>
      <h2 className="title-topic">{topic[4]?.title}</h2>
      {topic[4].description.map((item, index) => {
        return (
          <div className="section-educacion" key={item?.entidad + `${index}`}>
            <h4 className="subtitle">{item?.entidad}</h4>
            <h6 className="subtitle-tema">{item?.tema}</h6>
            <a href={item?.link} target={"_blank"} rel={"noopener noreferrer"}>
              <p className="subtext">{item?.description}</p>
            </a>
          </div>
        );
      })}
    </>
  );
};

export default Educacion;
