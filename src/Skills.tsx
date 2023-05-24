import { Component, ReactNode } from 'react'
import SkillItem from './SkillItem'
import './Skills.css'
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
        type Options = 'Beginner' | 'Advanced' | 'Expert'
        type SkillType = { name: string, proficiency: Options }
        const skills: SkillType[] = [
            { name: 'js', proficiency: 'Expert' },
            { name: 'html', proficiency: 'Expert' },
            { name: 'css', proficiency: 'Expert' },
            { name: 'react', proficiency: 'Beginner' },
            { name: 'ts', proficiency: 'Beginner' },
            { name: 'gcp', proficiency: 'Advanced' },
            { name: 'github', proficiency: 'Expert' },
            { name: 'py', proficiency: 'Advanced' },
            { name: 'cpp', proficiency: 'Advanced' },
            { name: 'azure', proficiency: 'Beginner' },
            { name: 'bootstrap', proficiency: 'Advanced' },
            { name: 'docker', proficiency: 'Beginner' },
            { name: 'express', proficiency: 'Advanced' },
            { name: 'figma', proficiency: 'Beginner' },
            { name: 'netlify', proficiency: 'Advanced' },
            { name: 'postgres', proficiency: 'Advanced' },
            { name: 'stackoverflow', proficiency: 'Advanced' },
            { name: 'vscode', proficiency: 'Expert' },

        ]
        const compareFn = (a: SkillType, b: SkillType) => {
            if (a.proficiency == b.proficiency) {
                if (a.name < b.name) return -1;
                else return 1;
            }
            else {
                if (a.proficiency < b.proficiency) return -1;
                else return 1;
            }
        }
        return (
            <div className='Skills' style={this.props.style}>
                <div className='Skills-container'>

                    <Title content='Skills' colorType='white' />

                    <div className='Skills-items'>
                        {skills.sort(compareFn).map(skill => <SkillItem key={skill.name} {...skill} />)}
                    </div>
                </div>

            </div>
        )
    }
}

