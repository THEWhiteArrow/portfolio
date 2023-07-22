import React, { Component } from 'react'
import data from '../scripts/projectData';

type MyProps = {
    data: string[]
}
export default class LazyHorizontalScrollText extends Component<MyProps> {
    constructor(props: MyProps) {
        super(props)
    }



    render() {
        return (
            <div className="LazyHorizontalScrollText">
                {this.props.data.map((el, i) => <span key={i} className="LazyHorizontalScrollText-item">{el}</span>)}
            </div>
        );
    }
}
