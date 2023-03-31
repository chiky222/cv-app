import React from 'react'

const Historial = ({ topic }) => {
  return (
    <>
      <h2 className='title-topic'>{topic[2]?.title}</h2>
      <div className='section-historial'>
        <h4 className='subtitle'>{topic[2]?.description[0].title}</h4>
        <p className="subtext">{topic[2]?.description[0].description}</p>
      </div>
      <div className='section-historial'>
        <h4 className='subtitle'>{topic[2]?.description[1].title}</h4>
        <p className="subtext">{topic[2]?.description[1].description}</p>
      </div>
    </>
  )
}

export default Historial