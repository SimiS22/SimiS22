import React from 'react'
import './Navbar.scss'
import { HomeOutlined, FilePdfOutlined, AppstoreOutlined, ContactsOutlined } from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'

const Navbar: React.FC = () => {
    const currentLocation = useLocation()

    return (
        <div className='navbarContainer'>
            <div className='navbar'>
                <div className='bubbleWrapper'>
                    <Link to='/'><div id="home" className={currentLocation.pathname === '/' ? 'bubbleActive' : 'bubble'}><HomeOutlined /></div></Link>
                    <Link to='/resume'><div id="resume" className={currentLocation.pathname === '/resume' ? 'bubbleActive' : 'bubble'}><FilePdfOutlined /></div></Link>
                    <Link to='/works'><div id="works" className={currentLocation.pathname === '/works' ? 'bubbleActive' : 'bubble'}><AppstoreOutlined /></div></Link>
                    <Link to='/contact'><div id="contact" className={currentLocation.pathname === '/contact' ? 'bubbleActive' : 'bubble'}><ContactsOutlined /></div></Link>
                </div>
                <div className="menuWrapper">
                    <div id="menu1" className={currentLocation.pathname === '/' ? 'menuElementActive' : 'menuElement'} ><Link to='/'><HomeOutlined /></Link></div>
                    <div id="menu2" className={currentLocation.pathname === '/resume' ? 'menuElementActive' : 'menuElement'} ><Link to='/resume'><FilePdfOutlined /></Link></div>
                    <div id="menu3" className={currentLocation.pathname === '/works' ? 'menuElementActive' : 'menuElement'}><Link to='/works'><AppstoreOutlined /></Link></div>
                    <div id="menu4" className={currentLocation.pathname === '/contact' ? 'menuElementActive' : 'menuElement'} ><Link to='/contact'><ContactsOutlined /></Link></div>
                </div>
            </div>
            <div className="bgWrapper">
                <div className="bg"></div>
                <div className="bgBubble"></div>
            </div>

            <svg width="0" height="0" >
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" id="blurFilter" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -15" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}
export default Navbar