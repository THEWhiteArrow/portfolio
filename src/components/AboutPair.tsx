import React, { Component, ReactElement, ReactNode } from 'react'

type Props = {
    svg: ReactNode,
    children: ReactNode,
    order: 'normal' | 'reverse',
}

export default class AboutPair extends Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        const { order } = this.props
        const orderP = order === 'normal' ? 'order-1' : 'order-1 md:order-2'
        const orderS = order === 'normal' ? 'order-1 md:order-2 md:ml-10' : 'order-1 md:mr-10'
        return (
            <>
                <div className='AboutPair  flex flex-col items-center my-20 md:flex-row md:my-28'>
                    <p className={` ${orderP} text-justify`}>
                        {this.props.children}
                    </p>
                    <div className={`flex items-center mt-10 ${orderS} md:mt-0 min-w-10 max-w-10 md:min-w-15 md:max-w-15 xl:min-w-20 xl:min-h-20`}>
                        {this.props.svg}
                    </div>
                </div>
            </>
        )
    }
}