import { Component } from 'react'
import projectsData from '../scripts/projectData'
import Project from './Project'
import Title from './Title'


export default class Showoff extends Component {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div className="Showoff"  >
                <div className='Showoff-container'>
                    <Title content='Project' colorType='black' className="Showoff-title" />
                    <div className='Showoff-projects'>
                        {projectsData.map(project => <Project key={project.title} {...project} />)}
                    </div>
                </div>
            </div>
        )
    }
}




