import Project from './Project'
import './ProjectSection.css'
import projectsData from './projectData'

export default function ProjectSection() {
    return (
        <div className="ProjectSection">
            <h2 className="ProjectSection-title">Projects</h2>
            <div className='ProjectSection-projects'>
                {projectsData.map(project => <Project key={project.title} {...project} />)}
            </div>
        </div>
    )
}