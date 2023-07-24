import { Component } from 'react'
import { data } from '../scripts/projectData'
import ProjectTile from './ProjectTile'
import Title from './Title'
import '../styles/Projects.css'
import CustomLink from './CustomLink'

import { GlobalState } from '../App'

export default class Projects extends Component<GlobalState> {
    constructor(props: GlobalState) {
        super(props)
    }


    render() {
        let projectDisplayCount = 3
        let width = this.props.windowWidth
        console.log(width)
        if (width < 500) projectDisplayCount = 1
        else if (width < 768) projectDisplayCount = 1
        else if (width < 1024) projectDisplayCount = 1
        else if (width < 1280) projectDisplayCount = 2
        else if (width < 1536) projectDisplayCount = 3

        return (
            <section className="Projects min-h-screen h-full flex bg-black text-white"  >
                <div className="container py-8 relative">
                    <Title content='Projects' colorType='white' />


                    <div className='Projects-projects mt-4 flex flex-row flex-wrap justify-evenly'>
                        {data.slice(0, projectDisplayCount).map((project, i) => <ProjectTile key={project.title} {...project} shorten={false} />)}
                    </div>

                    <div className='flex flex-row flex-wrap justify-evenly relative'>
                        {data.slice(projectDisplayCount, 2 * projectDisplayCount).map((project, i) => <ProjectTile key={project.title} {...project} shorten={true} />)}
                        <div className="absolute w-full h-full top-0 left-0 fadeLikeMedium flex justify-center items-end">
                            <CustomLink to="" className="animate-none p-4 stroke-white">See MORE!</CustomLink>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}


