import React from 'react'
import Bubble from '../Bubble/Bubble'
import './Navbar.scss'

const Navbar: React.FC = () => {
    return (
        <div className='navbarContainer'>
            <div className='navbar'>
                <Bubble />
                <div className="menuWrapper">
                </div>
            </div>
            <div className="bgWrapper">
                <div className="bg"></div>
                <div className="bgBubble"></div>
            </div>
        </div>
    )
}
export default Navbar