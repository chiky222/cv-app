import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Skills = ({ topic }) => {
  return (
    <>
      <h2 className='title-topic'>{topic[1]?.title}</h2>
      <ul className='lista-skills'>
        {topic[1]?.description.map(desc => (
          <li key={uuidv4()}>{desc}</li>
        ))}
      </ul>
    </>
  )
}

export default Skills