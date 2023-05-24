import { Component } from 'react'
import './Hero.css'
import LinkCustom from "./LinkCustom"

type Props = {
    style?: object,
    scrollTop?: number,
    handleHeight?: Function
}

type MyState = { scrollTop?: number, height?: number };
export default class Hero extends Component<Props, MyState> {
    constructor(props: Props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount(): void {
        const height = document.querySelector('.Hero')?.clientHeight
        this.setState({ height })
        if (this.props.handleHeight)
            this.props.handleHeight(height)
    }
    render() {
        const { scrollTop, style } = this.props
        return (
            <div className="Hero" style={style}>


                <h1 className="Hero-title">
                    <span className='animate'>Hello</span>
                    <span className="animate">, </span>
                    <br />
                    <span className="animate">my </span>
                    <span className="animate">name </span>
                    <span className="animate">is </span>
                    <span className='animate'>Damian</span>
                </h1>
                {/* <p className="Hero-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eaque repellendus esse blanditiis placeat atque, magnam qui hic, cupiditate sapiente natus totam laudantium ducimus facilis debitis voluptates dolorum consectetur dolorem exercitationem laborum excepturi odio vero.Lorem ipsum dolor sit amLorem ipsum dolor sit amet consectetur adipisicing elit. Iure eaque repellendus esse blanditiis placeat atque, magnam qui hic, cupiditate sapiente natus totam laudantium ducimus facilis debitis voluptates dolorum consectetur dolorem exercitationem laborum excepturi odio vero.et consectetur adipisicing elit. Iure eaque repellendus esse blanditiis placeat atque, magnam qui hic, cupiditate sapiente natus totam laudantium ducimus facilis debitis voluptates dolorum consectetur dolorem exercitationem laborum excepturi odio vero. </p> */}
                <p className="Hero-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eaque repellendus esse blanditiis placeat atque, magnam qui hic, cupiditate sapiente natus totam laudantium ducimus. </p>
                <div className="Hero-navigation">
                    <LinkCustom className='Hero-link' to='#'>About</ LinkCustom>
                    <LinkCustom className='Hero-link' to='#'>Projects</LinkCustom>
                    <LinkCustom className='Hero-link' to='#'>Experience</ LinkCustom>
                    <LinkCustom className='Hero-link' to='#'>Contact</ LinkCustom>
                </div>
            </div>
        )
    }
}