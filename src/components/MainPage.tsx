import React, { Component } from 'react'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'
import Vision from './Vision'


class MainPage extends Component {
    constructor(props: any) {
        super(props)
    }


    render() {
        return (
            <>
                <Hero />
                <Projects />
                {/* <About />
                <Skills />
                <Vision />
                <Contact /> */}
            </>
        )
    }
}

export default MainPage