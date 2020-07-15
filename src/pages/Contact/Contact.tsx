import React from 'react'
import { Card } from 'antd';
import { LinkedinOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons'
import './Contact.scss'
import message from '../../assets/message.svg'

const Contact: React.FC = () => {
    return (
        <div className='contact'>
            <img src={message} alt='' />
            <div className='contactText'>
                <p>Feel free to get in touch with me via below mediums.</p>
            </div>
            <div className='contactIcons'>
                <Card
                    hoverable
                    cover={<a href={'mailto:simiswaminathan@gmail.com'} target="_blank" rel="noopener noreferrer">
                        {<MailOutlined />}
                    </a>}
                >
                </Card>
                <Card
                    hoverable
                    cover={<a href={'https://www.linkedin.com/in/simi-swaminathan'} target="_blank" rel="noopener noreferrer">
                        {<LinkedinOutlined />}
                    </a>}
                >
                </Card>
                <Card
                    hoverable
                    cover={<a href={'https://github.com/simis22'} target="_blank" rel="noopener noreferrer">
                        {<GithubOutlined />}
                    </a>}
                >
                </Card>
            </div>
        </div>
    )
}
export default Contact