import { Component } from 'react'
import { ReactComponent as FaceSvg } from '../assets/svg/face.svg'
import '../styles/Hero.css'
import { Link } from 'react-router-dom'
import CustomLink from './CustomLink'

export default class Hero extends Component {
    constructor(props: any) {
        super(props)
    }


    render() {
        return (
            <section id="hero" className="Hero min-h-screen h-full flex items-center ">


                <div className="h-full  container grow flex flex-col md:flex-row py-8 relative">


                    <div className='h-full text-2xl lg:w-7/12 flex flex-col justify-center content-center'>

                        <h1 className='text-8xl'>
                            <span className='animate'>Hello</span>
                            <span className="animate">, </span>
                            <br />
                            <span className="animate">my </span>
                            <span className="animate">name </span>
                            <span className="animate">is </span>
                            <span className='animate'>Damian</span>
                        </h1 >

                        <p className='text-justify lg:pr-20 mt-20'>
                            Welcome to my digital realm!
                            <br />
                            I'm a 20-year-old Software Technology Engineering Student, fueled by an insatiable curiosity and passion for the world of programming. As a tech enthusiast, I find solace in crafting elegant and efficient code, transforming ideas into reality, and constantly pushing the boundaries of what's possible.
                        </p>


                        <div className='mt-10 mb-5 flex flex-col sm:flex-row justify-between lg:pr-20 text-center'>
                            <CustomLink className='p-4 mt-4 lg:mt-0' to="/#about">About</CustomLink>
                            <CustomLink className='p-4 mt-4 lg:mt-0' to="/#projects">Projects</CustomLink>
                            <CustomLink className='p-4 mt-4 lg:mt-0' to="/#skills">Skills</CustomLink>
                            <CustomLink className='p-4 mt-4 lg:mt-0' to="/#vision">Vision</CustomLink>
                            <CustomLink className='p-4 mt-4 lg:mt-0' to="/#contact">Contact</CustomLink>

                        </div>
                    </div >


                    <div className='h-full hidden lg:block lg:w-5/12 self-center justify-self-center'>
                        <FaceSvg width='100%' className='animateFace' />
                    </div>
                </div >

            </section >
        )
    }
}


/**
 * 
 * 
 * 
 * 
 * <LinkCustom className='Hero-link' to='#'>About</ LinkCustom>
                        <LinkCustom className='Hero-link' to='#'>Projects</LinkCustom>
                        <LinkCustom className='Hero-link' to='#'>Experience</ LinkCustom>
                        <LinkCustom className='Hero-link' to='#'>Contact</ LinkCustom>
 * 
 * 
 */