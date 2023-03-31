import React from 'react'

const Perfil = ({ topic }) => {
  return (
    <>
      <h2 className='title-topic'>{topic[0]?.title}</h2>
      <p className='text-perfil'>{topic[0]?.description}</p>
    </>
  )
}

export default Perfil