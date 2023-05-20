import './Hero.css'
import LinkCustom from "./LinkCustom"


export default function Hero() {
    return (
        <div className="Hero">


            <h1 className="Hero-title">Hello, <br />my name is Damian</h1>
            <p className="Hero-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eaque repellendus esse blanditiis placeat atque, magnam qui hic, cupiditate sapiente natus totam laudantium ducimus facilis debitis voluptates dolorum consectetur dolorem exercitationem laborum excepturi odio vero.Lorem ipsum dolor sit amLorem ipsum dolor sit amet consectetur adipisicing elit. Iure eaque repellendus esse blanditiis placeat atque, magnam qui hic, cupiditate sapiente natus totam laudantium ducimus facilis debitis voluptates dolorum consectetur dolorem exercitationem laborum excepturi odio vero.et consectetur adipisicing elit. Iure eaque repellendus esse blanditiis placeat atque, magnam qui hic, cupiditate sapiente natus totam laudantium ducimus facilis debitis voluptates dolorum consectetur dolorem exercitationem laborum excepturi odio vero. </p>
            <div className="Hero-navigation">
                <LinkCustom className='Hero-link' to='#'>About</ LinkCustom>
                <LinkCustom className='Hero-link' to='#'>Projects</LinkCustom>
                <LinkCustom className='Hero-link' to='#'>Experience</ LinkCustom>
                <LinkCustom className='Hero-link' to='#'>Contact</ LinkCustom>
            </div>
        </div>
    )
}