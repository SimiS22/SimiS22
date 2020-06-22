import React from 'react'
import './Home.scss'
import { Card } from 'antd'
import developer from '../../assets/female-developer.svg'

const { Meta } = Card;
const Content: React.FC = () => {
    return (
        <div className='content'>
            <img src={developer} />
            <div className="texts">
                <p>Hey all! I am Simi Swaminathan, Indian, living in Hamburg, Germany.</p>
                <p>I love to build websites and apps based on HTML, CSS and Javascript. I also use React library as well as tools like NodeJS and Typescript.</p>
                <p>Feel free to get in touch with me via below mediums.</p>
            </div>
        </div>
    )
}
export default Content