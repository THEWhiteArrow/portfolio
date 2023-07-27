import { Component } from 'react'
import { data } from '../scripts/projectData'
import ProjectTile from './ProjectTile'
import Title from './Title'
import CustomLink from './CustomLink' 
import '../styles/Projects.css'


import { GlobalState } from '../App'

type MyState = {
    projectsInLine: number,
    projectsDisplayed: number
}

export default class Projects extends Component<GlobalState, MyState> {
    constructor(props: GlobalState) {
        super(props)
        this.state = {
            projectsInLine: 3,
            projectsDisplayed: 3
        }
    }

    handleClickMore = (e: any) => {
        e.preventDefault()
        e.stopPropagation()
        this.setState({ projectsDisplayed: this.state.projectsDisplayed + this.state.projectsInLine })
    }
    handleClickLess = (e: any) => {
        e.preventDefault()
        e.stopPropagation()
        this.setState({ projectsDisplayed: this.state.projectsDisplayed - this.state.projectsInLine })
    }


    render() {
        let width = this.props.windowWidth
        if (width < 500) this.setState(st => { if (st.projectsInLine != 1) { return { projectsInLine: 1, projectsDisplayed: 1 }; } })
        else if (width < 768) this.setState(st => { if (st.projectsInLine != 1) { return { projectsInLine: 1, projectsDisplayed: 1 }; } })
        else if (width < 1024) this.setState(st => { if (st.projectsInLine != 1) { return { projectsInLine: 1, projectsDisplayed: 1 }; } })
        else if (width < 1280) this.setState(st => { if (st.projectsInLine != 2) { return { projectsInLine: 2, projectsDisplayed: 2 }; } })
        else if (width < 1536) this.setState(st => { if (st.projectsInLine != 3) { return { projectsInLine: 3, projectsDisplayed: 3 }; } })

        let readMore = null

        if (this.state.projectsDisplayed < data.length || true) {
            readMore = (

                <div className='relative flex flex-col py-10' >
                    <div className='flex flex-row flex-wrap justify-evenly'>
                        {data.slice(this.state.projectsDisplayed, this.state.projectsDisplayed + this.state.projectsInLine).map((project, i) => <ProjectTile key={i} {...project} shorten={true} />)}
                    </div>

                    <div className="absolute w-full h-full top-0 left-0 fadeLikeMedium flex justify-center text-xl">
                        {this.state.projectsDisplayed != this.state.projectsInLine && <CustomLink to="" className="mt-auto mb-3 mx-2 animate-none w-fit p-4 stroke-white self-center" onClick={this.handleClickLess}>See less</CustomLink>}
                        {this.state.projectsDisplayed < data.length && <CustomLink to="" className="mt-auto mb-3 mx-2 animate-none w-fit p-4 stroke-white self-center" onClick={this.handleClickMore}>See MORE!</CustomLink>}

                    </div>

                </div>
            )
        }

        return (
            <section id="projects" className="Projects min-h-screen h-full flex bg-black text-white"  >
                <div className="container py-8 mb-10 relative"> 
                    <Title content='Projects' colorType='white' /> 


                    <div className='Projects-projects my-10 flex flex-row flex-wrap justify-evenly'>
                        {data.slice(0, this.state.projectsDisplayed).map((project, i) => <ProjectTile key={i} {...project} shorten={false} />)}
                    </div>

                    {readMore}
                </div>

            </section>
        )
    }
}


