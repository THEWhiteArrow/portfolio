import { Component } from 'react'
import { data } from '../scripts/projectData'
import ProjectTile from './ProjectTile'
import Title from './Title'
import '../styles/Projects.css'

export default class Projects extends Component {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <section className="Projects min-h-screen h-full flex bg-black text-white"  >
                <div className="container py-8 relative">
                    <Title content='Projects' colorType='white' />


                    <div className='Projects-projects flex flex-row flex-wrap justify-evenly'>

                        {data.slice(0, 3).map((project, i) => <ProjectTile key={project.title} {...project} shorten={false} />)}
                    </div>
                </div>

            </section>
        )
    }
}


// <div className="Projects"  >
//     <div className='Projects-container'>
//         <Title content='Project' colorType='black' className="Projects-title" />
//         <div className='Projects-projects'>
//             {projectsData.map(project => <ProjectTile key={project.title} {...project} />)}
//         </div>
//     </div>
// </div>


