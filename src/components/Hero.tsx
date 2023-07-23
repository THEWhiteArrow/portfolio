import { Component } from 'react'
import { ReactComponent as FaceSvg } from '../assets/svg/face.svg'

export default class Hero extends Component {
    constructor(props: any) {
        super(props)
    }


    render() {
        return (
            <div className="Hero">

                <div >
                    <h1 >
                        <span className='animate'>Hello</span>
                        <span className="animate">, </span>
                        <br />
                        <span className="animate">my </span>
                        <span className="animate">name </span>
                        <span className="animate">is </span>
                        <span className='animate'>Damian</span>
                    </h1>

                    <p >
                        Welcome to my digital realm!
                        <br />
                        I'm a 20-year-old Software Technology Engineering Student, fueled by an insatiable curiosity and passion for the world of programming. As a tech enthusiast, I find solace in crafting elegant and efficient code, transforming ideas into reality, and constantly pushing the boundaries of what's possible.
                    </p>

                    <div  >
                        {/* <LinkCustom className='Hero-link' to='#'>About</ LinkCustom>
                        <LinkCustom className='Hero-link' to='#'>Projects</LinkCustom>
                        <LinkCustom className='Hero-link' to='#'>Experience</ LinkCustom>
                        <LinkCustom className='Hero-link' to='#'>Contact</ LinkCustom> */}
                    </div>

                </div>

                <div >
                    <FaceSvg />
                </div>



            </div>
        )
    }
}