import React from "react";

const Referencias = ({ topic }) => {
  return (
    <>
      <h2 className="title-topic">{topic[3]?.title}</h2>
      {topic[3].description.map((item, index) => {
        return (
          <div
            className="section-referencias-contacto"
            key={item?.id + item?.empresa}
          >
            <h4 className="subtitle">{item?.empresa}</h4>
            <h6 className="subtitle-name">{item?.responsable}</h6>
            <p className="subtext">{item?.contacto}</p>
          </div>
        );
      })}
    </>
  );
};

export default Referencias;
