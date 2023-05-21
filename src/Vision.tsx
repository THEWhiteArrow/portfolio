import './Vision.css'
type Props = {
    style?: {}
}
export default function Vision(props: Props) {
    return (
        <div className='Vision' style={props.style}>
            <div className='Vision-container'>
                <h2 className='title'>My Vision</h2>
                <p className='Vision-paragraph'>
                    <span className="so-big-that-almost-scares-me">Lorem</span> ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem assumenda <span className="so-big-that-almost-scares-me">fugiat</span> officiis quas incidunt quod id, rerum porro ex numquam, dolore aperiam dolorum a, nulla voluptates voluptatem eos. Officia impedit, <span className="so-big-that-almost-scares-me">provident</span> voluptates debitis est culpa animi. Ratione tenetur, officia alias dicta, nostrum optio repudiandae adipisci quisquam mollitia <span className="so-big-that-almost-scares-me">aliquid</span> minus aliquam voluptas impedit obcaecati maxime quo sapiente itaque suscipit odio fuga dolor voluptatem dolore rem? <span className="so-big-that-almost-scares-me">Nulla</span>, enim repellendus, laudantium dolorum voluptate rem officia ut consequuntur <span className="so-big-that-almost-scares-me">adipisci</span>, itaque aliquid alias sapiente nisi esse? Rem dicta voluptate ex porro aliquam nesciunt fuga, <span className="so-big-that-almost-scares-me">eum</span> aspernatur sunt sequi asperiores nobis consequuntur consectetur iure quis.
                </p>

            </div>
        </div>
    )
}