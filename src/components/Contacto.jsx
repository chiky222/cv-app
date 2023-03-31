import React from 'react';
import Instagram from '../img/Instagram.svg';
import LinkedIn from '../img/LinkedIn.svg';
import Github from '../img/Github.svg';

const Contacto = ({ topic }) => {
  return (
    <>
      <h2 className='title-topic'>{topic[5]?.title}</h2>
      <div className='section-referencias'>
        <a href={topic[5]?.description[0].link} target={'_blank'} rel={"noreferrer noopener"} ><img className='icono' src={Instagram} alt={topic[5]?.description[0].red} /></a>
        <a href={topic[5]?.description[1].link} target={'_blank'} rel={"noreferrer noopener"} ><img className='icono' src={LinkedIn} alt={topic[5]?.description[1].red} /></a>
        <a href={topic[5]?.description[2].link} target={'_blank'} rel={"noreferrer noopener"} ><img className='icono' src={Github} alt={topic[5]?.description[2].red} /></a>
      </div>
      <div className='section-tel'>
        <h4 className='subtitle'>{topic[5]?.description[3].name}</h4>
        <h6 className='subtitle'>{topic[5]?.description[3].number}</h6>
      </div>
    </>
  )
}

export default Contacto