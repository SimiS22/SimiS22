import React from 'react'
import { HomeOutlined, FilePdfOutlined, AppstoreOutlined, ContactsOutlined } from '@ant-design/icons'
import './Bubble.scss'
import { Link } from 'react-router-dom'

const Bubble: React.FC = () => {
    return (
        <div className='bubbleWrapper'>
            <Link to='/'><div id="home" className="bubble"><HomeOutlined /></div></Link>
            <Link to='/resume'><div id="resume" className="bubble"><FilePdfOutlined /></div></Link>
            <Link to='/works'><div id="works" className="bubble"><AppstoreOutlined /></div></Link>
            <Link to='/contact'><div id="contact" className="bubble"><ContactsOutlined /></div></Link>
        </div>
    )
}
export default Bubble
