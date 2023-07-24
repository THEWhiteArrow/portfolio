import { ProjectDataType } from "../scripts/projectData"

type PropsType = {
    shorten: boolean
}
type Props = PropsType & ProjectDataType

export default function Project(props: Props) {
    const { title, description, imgName, imgAlt, shadowColor, shorten } = props

    const image = require(`../assets/image/${imgName}`)

    return (
        <div className={`Project p-5 min-w-10 max-w-25 relative`}>
            {/* strange bug while development - to have shadowColors working you need to run those colors as strings and the put variable in their name */}
            <div className={`Project-img-container  w-full my-5 shadow-[${shadowColor}] shadow-md `}  >
                {/* <div className={`Project-img-container  w-full my-5 shadow-md shadow-[${shadowColor}] `}  > */}
                <img src={image} alt={imgAlt} className="w-full h-48 object-cover" />
            </div>
            <h3 className="Project-title text-3xl text-center px-2">{title}</h3>

            {!shorten && <p className="mt-10 text-justify text-xl">{description}</p>}
        </div >
    )
}