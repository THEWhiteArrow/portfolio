import { Component } from 'react'
import Project from './Project'
import './ProjectSection.css'
import projectsData from './projectData'
import Title from './Title'


type Props = {
    style?: object,
    scrollTop?: number,
    handleHeight?: Function
}

type MyState = { scrollTop?: number, height?: number };
export default class ProjectSection extends Component<Props, MyState> {
    constructor(props: Props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount(): void {
        const height = document.querySelector('.ProjectSection')?.clientHeight
        this.setState({ height })
        if (this.props.handleHeight)
            this.props.handleHeight(height)
    }
    render() {
        const { scrollTop, style } = this.props
        return (
            <div className="ProjectSection" style={style}>
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




