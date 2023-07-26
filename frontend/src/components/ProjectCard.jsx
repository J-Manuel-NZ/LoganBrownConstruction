import React from 'react'
import '../pages/index.css'
import '../../node_modules/animate.css/animate.css'

const ProjectCard = ({image, alt, date, title, description}) => {
  return (
    <div className='project-card  animate__animated animate__fadeIn animate__slower'>
        <img src={image} alt={alt} />
        <div className='project-card_content'>
            <p className="project-card_date">{date}</p>
            <h2 className="project-card_title">{title}</h2>
            <p className="project-card_description">{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard