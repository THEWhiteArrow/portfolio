import './Nav.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Nav() {
    return (
        <div className='Nav'>
            <div className='Nav-logo'>
                <Link to="/">DT</Link>

            </div>
            <div className='Nav-collapsable'>

                <Link to="/#projects">Projects</Link><hr />
                <Link to="/#experience">Experience</Link><hr />
                <Link to="/#about">About</Link><hr />
                <Link to="/#contact">Contact</Link>
            </div>
        </div>
    )
}