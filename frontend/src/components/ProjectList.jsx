import React, { useState } from 'react'
import ProjectCard from './ProjectCard'

const ProjectList = ( { count, articles, home } ) => {
    const [counter, setCounter] = useState(count)
  return (
    <div className='project-list'> 
        {articles.map((article, index) => ( 
            (index < counter) ? 
            <ProjectCard
            key={index}
            title={article.title}
            date={article.date}
            description={article.description}
            article={article.article}
            image={article.images[0].image1}
            alt={article.images[0].alt1}
            />
            : null
        ))}
        {home ? 
        <a href='/recentwork'><button className='see_all'>See All</button></a> 
        :
        <div className='project-list_button-container'>
        <button className='light_button'
        onClick={() => setCounter(counter+3)}>See More</button>
        </div>
        }
    </div>
  )
}

export default ProjectList