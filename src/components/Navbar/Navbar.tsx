import React from 'react'
import './Navbar.scss'
import { HomeOutlined, FilePdfOutlined, AppstoreOutlined, ContactsOutlined } from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'

const ROUTES = [
    { path: '/', name: 'home', icon: <HomeOutlined /> },
    { path: '/resume', name: 'resume', icon: <FilePdfOutlined /> },
    { path: '/works', name: 'works', icon: <AppstoreOutlined /> },
    { path: '/contact', name: 'contact', icon: <ContactsOutlined /> }
]
const Navbar: React.FC = () => {

    const currentLocation = useLocation()

    return (
        <div>
            <div className='navbar'>
                <div className="bgWrapper">
                    <div className='bgWrap'>
                        {
                            ROUTES.map((element, index1) => {
                                return (
                                    <div key={index1} className={currentLocation.pathname === element.path ? 'bgBubble active' : 'bgBubble'}></div>
                                )
                            })
                        }
                    </div>
                    <div className="bg"></div>
                </div>
                <div className='bubbleWrapper'>
                    {ROUTES.map((element, index2) => {
                        return (
                            <div key={index2} className={currentLocation.pathname === element.path ? 'bubble active' : 'bubble'}>{element.icon}</div>
                        )
                    })}
                </div>
                <div className="menuWrapper">
                    {ROUTES.map((element, index3) => {
                        return (
                            <div key={index3} id={element.name} className={currentLocation.pathname === element.path ? 'menuItem active' : 'menuItem'}><Link to={element.path}>{element.icon}</Link></div>
                        )
                    })}
                </div>
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