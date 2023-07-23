import { Component } from 'react'
import projectsData from '../scripts/projectData'
import Project from './Project'
import Title from './Title'


export default class Show extends Component {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div className="Show"  >
                <div className='Show-container'>
                    <Title content='Project' colorType='black' className="Show-title" />
                    <div className='Show-projects'>
                        {projectsData.map(project => <Project key={project.title} {...project} />)}
                    </div>
                </div>
            </div>
        )
    }
}




