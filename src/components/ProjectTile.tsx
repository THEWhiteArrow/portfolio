import { ProjectDataType } from "../scripts/projectData"

type PropsType = {
    shorten: boolean
}
type Props = PropsType & ProjectDataType

export default function Project(props: Props) {
    const { title, description, imgName, imgAlt, shadowColor, shorten } = props

    const image = require(`../assets/image/${imgName}`)
    // let hider = null
    // if (!display)
    //     hider = (
    //         <div className="absolute w-full h-full top-0 left-0 fadeLikeMedium"></div>
    //     )

    return (
        <div className={`Project p-5 min-w-10 max-w-25 relative`}>
            {/* {hider} */}
            <div className={`Project-img-container  w-full my-5 shadow-md shadow-[${shadowColor}] `}  >
                <img src={image} alt={imgAlt} className="w-full h-48 object-cover" />
            </div>
            <h3 className="Project-title text-3xl text-center px-2">{title}</h3>

            {!shorten && <p className="mt-10 text-justify text-xl">{description}</p>}
        </div >
    )
}