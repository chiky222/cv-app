import React from 'react'

const Educacion = ({ topic }) => {
  return (
    <>
      <h2 className='title-topic'>{topic[4]?.title}</h2>
      <div className='section-educacion'>
        <h4 className='subtitle'>{topic[4]?.description[0].entidad}</h4>
        <h6 className='subtitle-tema'>{topic[4]?.description[0].tema}</h6>
        <p className="subtext">{topic[4]?.description[0].description}</p>
      </div>
      <div className='section-educacion'>
        <h4 className='subtitle'>{topic[4]?.description[1].entidad}</h4>
        <h6 className='subtitle-tema'>{topic[4]?.description[1].tema}</h6>
        <p className="subtext">{topic[4]?.description[1].description}</p>
      </div>
      <div className='section-educacion'>
        <h4 className='subtitle'>{topic[4]?.description[2].entidad}</h4>
        <h6 className='subtitle-tema'>{topic[4]?.description[2].tema}</h6>
        <a href='https://www.coderhouse.com/certificados/637e5535e5fc24000e3a6e82' target={"_blank"} rel={"noopener noreferrer"}><p className="subtext">{topic[4]?.description[2].description}</p></a>
      </div>
      <div className='section-educacion'>
        <h4 className='subtitle'>{topic[4]?.description[3].entidad}</h4>
        <h6 className='subtitle-tema'>{topic[4]?.description[3].tema}</h6>
        <a href='https://www.coderhouse.com/certificados/632344cddd7c6d001d12f76d' target={"_blank"} rel={"noopener noreferrer"}><p className="subtext">{topic[4]?.description[3].description}</p></a>
      </div>
      <div className='section-educacion'>
        <h4 className='subtitle'>{topic[4]?.description[4].entidad}</h4>
        <h6 className='subtitle-tema'>{topic[4]?.description[4].tema}</h6>
        <a href='https://www.udemy.com/certificate/UC-41458a0e-fd96-4632-9153-68f3249fed2e/' target={"_blank"} rel={"noopener noreferrer"}><p className="subtext">{topic[4]?.description[4].description}</p></a>
      </div>
      <div className='section-educacion'>
        <h4 className='subtitle'>{topic[4]?.description[5].entidad}</h4>
        <h6 className='subtitle-tema'>{topic[4]?.description[5].tema}</h6>
        <a href='https://www.sololearn.com/certificates/course/en/25912639/1172/landscape/png' target={"_blank"} rel={"noopener noreferrer"}><p className="subtext">{topic[4]?.description[5].description}</p></a>
      </div>
      <div className='section-educacion'>
        <h4 className='subtitle'>{topic[4]?.description[6].entidad}</h4>
        <h6 className='subtitle-tema'>{topic[4]?.description[6].tema}</h6>
        <a href='https://freecodecamp.org/certification/elcri/javascript-algorithms-and-data-structures' target={"_blank"} rel={"noopener noreferrer"}><p className="subtext">{topic[4]?.description[6].description}</p></a>
      </div>
      <div className='section-educacion'>
        <h4 className='subtitle'>{topic[4]?.description[7].entidad}</h4>
        <h6 className='subtitle-tema'>{topic[4]?.description[7].tema}</h6>
        <a href='https://www.linkedin.com/learning/certificates/c2e2bd0bd56efcfe38f0a4f1b311aaef552640546c07019416fd8ce44dc8970e?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bg8dYMIaKQMCl1OiO7344iQ%3D%3D' target={"_blank"} rel={"noopener noreferrer"}><p className="subtext">{topic[4]?.description[7].description}</p></a>
      </div>
    </>
  )
}

export default Educacion