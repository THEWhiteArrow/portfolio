import LinkCustom from './LinkCustom'
import './Loader.css'
export default function Loader() {
    return (
        <div className='Loader'>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.2 -5.2 16.4 6.4">
                <path
                    className='Loader-path'
                    d="M 0 0 L 0 -4 Q 0 -5 1 -5 L 15 -5 Q 16 -5 16 -4 L 16 0 Q 16 1 15 1 L 1 1 Q 0 1 0 0"
                    stroke="#000000" strokeWidth="0.05" fill="none" strokeLinecap="round"
                />
            </svg>
            <svg className="Loader-svg-fill" xmlns="http://www.w3.org/2000/svg" viewBox="-0.2 -5.2 16.4 6.4">

                <path
                    className='Loader-path-fill'
                    d="M 0 0 L 0 -4 Q 0 -5 1 -5 L 15 -5 Q 16 -5 16 -4 L 16 0 Q 16 1 15 1 L 1 1 Q 0 1 0 0"
                    stroke="#000000" strokeWidth="0.05" fill="#000000dd" strokeLinecap="round"
                />
            </svg>
            <LinkCustom className='Loader-text' to=''>Start</LinkCustom>
        </div>
    )

}