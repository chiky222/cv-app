import React from 'react'

const Referencias = ({ topic }) => {
  return (
    <>
      <h2 className='title-topic'>{topic[3]?.title}</h2>
      <div className='section-referencias-contacto'>
        <h4 className='subtitle'>{topic[3]?.description[0].empresa}</h4>
        <h6 className='subtitle-name'>{topic[3]?.description[0].responsable}</h6>
        <p className="subtext">{topic[3]?.description[0].contacto}</p>
      </div>
      <div className='section-referencias-contacto'>
        <h4 className='subtitle'>{topic[3]?.description[1].empresa}</h4>
        <h6 className='subtitle-name'>{topic[3]?.description[1].responsable}</h6>
        <p className="subtext">{topic[3]?.description[1].contacto}</p>
      </div>
    </>
  )
}

export default Referencias