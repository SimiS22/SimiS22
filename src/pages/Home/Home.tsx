import React from 'react'
import './Home.scss'
import developer from '../../assets/female-developer.svg'

const Content: React.FC = () => {
    return (
        <div className='home'>
            <img src={developer} alt='' />
            <div className="texts">
                <p>Hey all! I am Simi Swaminathan, Indian, living in Hamburg, Germany.</p>
                <p>I love to build websites and apps based on HTML, CSS and Javascript. I also use React library as well as tools like NodeJS and Typescript.</p>
            </div>
        </div>
    )
}
export default Content