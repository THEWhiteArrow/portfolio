/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { Component } from 'react'  
import 'aos/dist/aos.css'
 
type MyProps = {
    name: string
    children: React.ReactNode
} 
export default class Animation extends Component<MyProps> { 

    constructor(props: MyProps) {
        super(props)
    }
    componentDidMount(): void { 
        // Aos.init(this.props.data)
    }
    render() {
        return (
            <span data-aos={this.props.name} className='w-full h-full'>
                {this.props.children}
            </span>
        )
    }
}
