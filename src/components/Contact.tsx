import { Component } from 'react'
import Title from './Title'
import '../styles/Contact.css'

import { ReactComponent as ContactSvg } from '../assets/svg/contact.svg'
import { ReactComponent as FacebookSvg } from '../assets/svg/facebook.svg'
import { ReactComponent as GithubSvg } from '../assets/svg/github.svg'
import { ReactComponent as LinkedinSvg } from '../assets/svg/linkedin.svg'
import { ReactComponent as InstagramSvg } from '../assets/svg/instagram.svg'
import { Link } from 'react-router-dom'


export default class Contact extends Component {
    constructor(props: any) {
        super(props)
    }


    render() {


        return (
            <section id="contact" className="Contact flex bg-black text-white">
                <div className="container py-8 relative grow flex flex-col ">
                    <Title content='Contact' colorType='white' />

                    <div className='Contact-content flex flex-col md:flex-row grow divide-y divide-white divide-solid text-xl md:divide-x md:divide-y-0'>


                        <div className='Contact-info py-10 grow-0 md:flex md:flex-col md:pr-10'>
                            <p>Hit me up on social medias :</p>
                            <div className='mt-10 flex flex-row justify-around'>
                                <FacebookSvg className='hover:-translate-y-3 duration-200' />
                                <GithubSvg className='hover:-translate-y-3 duration-200' />
                                <LinkedinSvg className='hover:-translate-y-3 duration-200' />
                                <InstagramSvg className='hover:-translate-y-3 duration-200' />
                            </div>
                            <ContactSvg className='hidden md:block grow max-w-15 lg:max-w-25' />
                        </div>


                        <form className="py-10 shadow-md rounded grow flex flex-col justify-center md:pl-10">
                            <p>Or email me directly on <Link to="mailto:damian.trafialek@gmail.com" className='underline'>damian.trafialek@gmail.com</Link></p>
                            <div className="mt-5 mb-4">
                                <label className="block mb-2" htmlFor="name">Name</label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-white focus:shadow-outline"
                                    id="name" type="text" placeholder="Your precious name" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2" htmlFor="email">Email</label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-white focus:shadow-outline"
                                    id="email" type="email" placeholder="Your communication email" />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2" htmlFor="message">Message</label>
                                <textarea
                                    className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-white focus:shadow-outline"
                                    id="message" rows={4} placeholder="Your thoughts"></textarea>
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    className="w-full p-2 rounded-md outline outline-white hover:bg-white hover:text-black hover:shadow-xl transition duration-200 ease-in-out"
                                    type="button">
                                    Punch It
                                </button>
                            </div>
                        </form>

                    </div>



                </div>
            </section>
        )
    }
}



{/* 
<Title content='Contact' colorType='white' />
<div className='Contact-info'>
    <div className='Contact-social-section'>
        <div>Hit me up on social medias</div>
        <div className='Contact-socials'>
            <SocialIcon to="#" type="linkedin" />
            <SocialIcon to="#" type="facebook" />
            <SocialIcon to="#" type="github" />
            <SocialIcon to="#" type="instagram" />
        </div>

        <ContactSvg />
    </div>
    <hr />
    <div className='Contact-mail'>
        <div>Or mail me at <u>damian.trafialek@gmail.com</u></div>
        <form className='Contact-form'>
            <input type='email' placeholder='Your precious email' />
            <textarea rows={15} placeholder='Your thoughts'></textarea>
            <button className='Contact-button' type='submit'>Punch</button>
        </form>
    </div>
</div> 
*/}