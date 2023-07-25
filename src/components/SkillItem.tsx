type Props = {
    name: string,
    proficiency: string,
}
export default function SkillItem(props: Props) {
    const url = `https://skillicons.dev/icons?i=${props.name}`
    return (
        <div className="SkillItem mt-20 h-20 w-20  lg:mt-32 lg:h-32 lg:w-32 flex flex-col justify-center items-center hover:animation-pause">

            <div className="SkillItem-img-container relative h-full flex justify-center">
                <img className='h-full relative' src={url} alt={'skill ' + props.name} />
            </div>
            <div className="SkillItem-info text-center">
                {props.name} <br />  {props.proficiency}
            </div>

        </div>
    )
}