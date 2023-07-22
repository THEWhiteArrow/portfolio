import { Component, ReactNode } from 'react'
import SkillItem from './SkillItem'
import '../styles/Skills.css'
import Title from './Title'

type Props = {
    style?: {}
    handleHeight?: Function
}

export default class Skills extends Component<Props>{
    componentDidMount(): void {
        if (this.props.handleHeight)
            this.props.handleHeight(document.querySelector('.Skills')?.clientHeight)
    }

    render(): ReactNode {
        enum Options {
            'Beginner',
            'Advanced',
            'Expert'
        }
        type SkillType = { name: string, proficiency: Options }
        const values = {

        }
        const skills: SkillType[] = [
            { name: 'javascript', proficiency: Options.Expert },
            { name: 'html', proficiency: Options.Expert },
            { name: 'css', proficiency: Options.Expert },
            { name: 'github', proficiency: Options.Expert },
            { name: 'vscode', proficiency: Options.Expert },
            { name: 'java', proficiency: Options.Expert },
            { name: 'react', proficiency: Options.Advanced },
            { name: 'typescript', proficiency: Options.Advanced },
            { name: 'gcp', proficiency: Options.Advanced },
            { name: 'python', proficiency: Options.Advanced },
            { name: 'cpp', proficiency: Options.Advanced },
            { name: 'azure', proficiency: Options.Beginner },
            { name: 'bootstrap', proficiency: Options.Advanced },
            { name: 'docker', proficiency: Options.Beginner },
            { name: 'express', proficiency: Options.Advanced },
            { name: 'figma', proficiency: Options.Beginner },
            { name: 'netlify', proficiency: Options.Advanced },
            { name: 'postgres', proficiency: Options.Advanced },
            { name: 'stackoverflow', proficiency: Options.Advanced },
            { name: 'mongodb', proficiency: Options.Advanced },

        ]
        const compareFn = (a: SkillType, b: SkillType) => a.proficiency > b.proficiency ? -1 : 1

        return (
            <div className='Skills' style={this.props.style}>
                <div className='Skills-container'>

                    <Title content='Skills' colorType='white' />

                    <div className='Skills-items'>
                        {skills.sort(compareFn).map(skill => <SkillItem key={skill.name} name={skill.name} proficiency={Options[skill.proficiency]} />)}
                    </div>
                </div>

            </div>
        )
    }
}

