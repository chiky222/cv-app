import React from 'react';
import foto from '../img/foto3.png';

const Foto = () => {
  return (
    <div className='foto-container'>
        <img src={foto} alt="foto" className='foto-item'/>
    </div>
  )
};

export default Foto;