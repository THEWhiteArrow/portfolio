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
            <section className="Hero min-h-screen h-full flex">
                <div className="container flex flex-col md:flex-row py-8 relative">


                    <div className='text-2xl lg:w-7/12 h-full flex flex-col justify-center content-center'>

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
                            <CustomLink className='p-4 mt-4 lg:mt-0' to="#about">About</CustomLink>
                            <CustomLink className='p-4 mt-4 lg:mt-0' to="#showoff">Showoff</CustomLink>
                            <CustomLink className='p-4 mt-4 lg:mt-0' to="#vision">Skills</CustomLink>
                            <CustomLink className='p-4 mt-4 lg:mt-0' to="#contact">Contact</CustomLink>
                            {/* <CustomLink className='border-solid border-2 border-black p-2 bg-white hover:bg-black hover:text-white ease-in-out duration-200' to="#about">About</CustomLink>
                            <CustomLink className='border-solid border-2 border-black p-2 bg-white hover:bg-black hover:text-white ease-in-out duration-200' to="#showoff">Showoff</CustomLink>
                            <CustomLink className='border-solid border-2 border-black p-2 bg-white hover:bg-black hover:text-white ease-in-out duration-200' to="#vision">Skills</CustomLink>
                            <CustomLink className='border-solid border-2 border-black p-2 bg-white hover:bg-black hover:text-white ease-in-out duration-200' to="#contact">Contact</CustomLink> */}
                        </div>
                    </div >


                    <div className='hidden lg:block lg:w-5/12 self-center justify-self-center'>
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