import React from 'react'
import { HomeOutlined, FilePdfOutlined, AppstoreOutlined, ContactsOutlined } from '@ant-design/icons'
import './Bubble.scss'

const Bubble: React.FC = () => {
    return (
        <div className='bubbleWrapper'>
            <div id="home" className="bubble"><HomeOutlined /></div>
            <div id="resume" className="bubble"><FilePdfOutlined /></div>
            <div id="works" className="bubble"><AppstoreOutlined /></div>
            <div id="contact" className="bubble"><ContactsOutlined /></div>
        </div>
    )
}
export default Bubble