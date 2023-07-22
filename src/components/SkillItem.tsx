type Props = {
    name: string,
    proficiency: string,
}
export default function SkillItem(props: Props) {
    const url = `https://skillicons.dev/icons?i=${props.name}`
    return (
        <div className="SkillItem">
            <div className="SkillItem-img-container">

                <img src={url} alt={'skill ' + props.name} />
            </div>
            <div className="SkillItem-info">
                {props.name}
                <br />
                {props.proficiency}
            </div>
        </div>
    )
}