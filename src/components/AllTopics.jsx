import React from 'react'
import Contacto from './Contacto'
import Educacion from './Educacion'
import Historial from './Historial'
import Perfil from './Perfil'
import Referencias from './Referencias'
import Skills from './Skills'
import topics from '../data/topics.json';

const AllTopics = () => {
  return (
    <div className='all-topics'>
        <div className='subarea-per'><Perfil topic={topics} /></div>
        <div className='subarea-ski'><Skills topic={topics} /></div>
        <div className='subarea-his'><Historial topic={topics} /></div>
        <div className='subarea-ref'><Referencias topic={topics} /></div>
        <div className='subarea-edu'><Educacion topic={topics} /></div>
        <div className='subarea-con'><Contacto topic={topics} /></div>
    </div>
  )
}

export default AllTopics