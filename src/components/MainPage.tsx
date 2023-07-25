import React, { Component } from 'react'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'
import Vision from './Vision'

import { GlobalState } from '../App'

class MainPage extends Component<GlobalState> {
    constructor(props: GlobalState) {
        super(props)
    }


    render() {
        return (
            <>
                <Hero />
                <Projects windowWidth={this.props.windowWidth} />
                <About />
                <Skills />
                {/*
                <Vision />
                <Contact /> 
                */}
            </>
        )
    }
}

export default MainPage