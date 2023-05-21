import { Component } from 'react'
import './About.css'
import LinkCustom from './LinkCustom';
import HeroFace from './HeroFace';

type Props = {
    style?: object,
    scrollTop?: number,
    handleHeight: Function
}

type MyState = { scrollTop?: number, height?: number };
export default class About extends Component<Props, MyState> {
    constructor(props: Props) {
        super(props)
    }

    componentDidMount(): void {
        const height = document.querySelector('.About')?.clientHeight
        this.setState({ height })
        this.props.handleHeight(height)
    }

    render() {
        const { scrollTop, style } = this.props


        return (
            <div className="About" style={style}>

                <div className='About-intersecting'>
                    <HeroFace />
                </div>
                <div className='About-info'>
                    <h2 className='About-title'>About</h2>
                    <p className='About-paragraph'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius autem possimus error temporibus illum dolorum vitae iste iusto voluptates fugit blanditiis sed ipsam eveniet maxime iure, fuga nihil sit cumque unde necessitatibus laudantium delectus accusantium sapiente corrupti! Nesciunt hic dolores, assumenda laudantium ratione mollitia velit dicta consectetur incidunt praesentium similique dolor earum nulla, voluptas possimus amet excepturi. Incidunt mollitia magnam consectetur aut, aliquid suscipit deserunt accusantium nemo voluptatem rerum delectus eos? Tenetur assumenda veniam explicabo, beatae consequuntur ex! Ratione quaerat, repellat totam optio suscipit quas explicabo eos velit? Id odio quae incidunt accusantium libero quod consequatur ad eum corporis. Adipisci.
                    </p>
                    <ul >
                        <li>stsdas dsa</li>
                        <li>sts dshj kjhkja</li>
                        <li>fhdjk djksfh jkjs s ks</li>
                        <li>kfjhds kj sd</li>
                        <li>dskjshg o s sasd</li>
                        <li>dfgjewu ioeruyfiry</li>
                    </ul>
                    <LinkCustom className='About-action' to='#'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 17L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.2034 21.7152L16.0964 16.265C16.4746 15.7355 16.0961 15 15.4454 15L8.55455 15C7.90385 15 7.52535 15.7355 7.90356 16.265L11.7966 21.7152C11.8963 21.8548 12.1037 21.8548 12.2034 21.7152Z" fill="currentColor" />
                        </svg>

                    </LinkCustom>
                </div>
            </div>
        )
    }
}

