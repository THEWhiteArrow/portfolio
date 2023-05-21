import SkillItem from './SkillItem'
import './Skills.css'

type Props = {
    style?: {}
}
export default function Skills(props: Props) {
    type Options = 'Beginner' | 'Advanced' | 'Expert'
    const skills: { name: string, proficiency: Options }[] = [
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
    return (
        <div className='Skills' style={props.style}>
            <div className='Skills-container'>

                <h2 className='title'>
                    Skills
                </h2>

                <div className='Skills-items'>
                    {skills.map(skill => <SkillItem key={skill.name} {...skill} />)}
                </div>
            </div>

        </div>
    )
}