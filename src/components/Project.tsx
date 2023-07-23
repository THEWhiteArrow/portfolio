
type Props = {
    title?: string,
    description?: string,
    imgUrl?: string,
    imgAlt?: string
}
export default function Project(props: Props) {
    const { title, description, imgUrl, imgAlt } = props
    // const image = require(`../assets/${imgUrl}`)
    return (
        <div className="Project">
            <div className="Project-img-container">
                {/* <LinkCustom to={`/project/${title}`}>
                    <img src={image} alt={imgAlt} />
                </LinkCustom> */}
            </div>
            <div className="Project-info-container">

                <h3 className="Project-title">{title}</h3>
                <p className="Project-description">{description}</p>
            </div>
        </div>
    )
}