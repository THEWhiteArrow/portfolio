import React, { Component } from 'react'
import Cursor from './Cursor'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import ProjectSection from './ProjectSection'
import Skills from './Skills'
import Vision from './Vision'


class MainPage extends Component {
    constructor(props: any) {
        super(props)
    }


    render() {
        return (
            <>
                <Cursor />

                <Hero />
                <About />
                <ProjectSection />
                <Skills />

                <Vision />

                <Contact />
            </>
        )
    }
}

export default MainPage