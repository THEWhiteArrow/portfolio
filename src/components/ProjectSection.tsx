import { Component } from 'react'
import Project from './Project'
import '../styles/ProjectSection.css'
import projectsData from '../scripts/projectData'
import Title from './Title'


export default class ProjectSection extends Component {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div className="ProjectSection"  >
                <div className='ProjectSection-container'>
                    <Title content='Project' colorType='black' className="ProjectSection-title" />
                    <div className='ProjectSection-projects'>
                        {projectsData.map(project => <Project key={project.title} {...project} />)}
                    </div>
                </div>
            </div>
        )
    }
}




