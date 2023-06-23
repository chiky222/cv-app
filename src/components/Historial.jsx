import React from "react";

const Historial = ({ topic }) => {
  return (
    <>
      <h2 className="title-topic">{topic[2]?.title}</h2>
      {topic[2]?.description.map((item) => {
        return (
          <div className="section-historial" key={item?.title}>
            <h4 className="subtitle">{item?.title}</h4>
            <p className="subtext">{item?.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default Historial;
