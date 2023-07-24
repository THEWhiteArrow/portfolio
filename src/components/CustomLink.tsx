import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as ElipseSvg } from '../assets/svg/elipse.svg'
import { ReactComponent as Elipse2Svg } from '../assets/svg/elipse2.svg'
import { ReactComponent as Elipse3Svg } from '../assets/svg/elipse3.svg'
import { ReactComponent as Elipse4Svg } from '../assets/svg/elipse4.svg'

export default class CustomLink extends Component<any>{
    constructor(props: any) {
        super(props)
    }

    render() {
        const r = Math.floor(Math.random() * 4) + 1
        let elipse = null
        switch (r) {
            case 1:
                elipse = <ElipseSvg className='absolute top-0 left-0 w-full h-full' />
                break;
            case 2:
                elipse = <Elipse2Svg className='absolute top-0 left-0 w-full h-full' />
                break;
            case 3:
                elipse = <Elipse3Svg className='absolute top-0 left-0 w-full h-full' />
                break;
            case 4:
                elipse = <Elipse4Svg className='absolute top-0 left-0 w-full h-full' />
                break;
        }

        return (
            <div className={`${this.props.className} relative custom-link`}>
                {elipse}
                <Link to={this.props.to}>
                    {this.props.children}
                </Link>
            </div>
        )
    }
}