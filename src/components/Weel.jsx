import React from 'react';
import Foto from './Foto';
import { animateScroll as scroll } from 'react-scroll';

const Weel = () => {

  const onClickGo = () => {
    scroll.scrollTo(500);
  }

  return (
    <div className='weel-container'>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <nav>
            <a onClick={onClickGo} href='/#/'><span className="text-item" id='perfil' >Perfil</span></a>
            <a onClick={onClickGo} href='/#/skills'><span className="text-item" id='skills' >Skills</span></a>
            <a onClick={onClickGo} href='/#/historial'><span className="text-item" id='historial' >Trayectoria</span></a>
            <a onClick={onClickGo} href='/#/referencias'><span className="text-item" id='referencias' >Referencias</span></a>
            <a onClick={onClickGo} href='/#/educacion'><span className="text-item" id='educacion' >Educación</span></a>
            <a onClick={onClickGo} href='/#/contacto'><span className="text-item" id='contacto' >Contacto</span></a>
            <a onClick={onClickGo} href='/#/resumen'><span className="text-item" id='resumen' >Resumen</span></a>
            <Foto />
        </nav>
    </div>
  )
}

export default Weel