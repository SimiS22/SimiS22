import React from 'react'
import { Card } from 'antd';
import { LinkedinOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons'
import './Contact.scss'


const Contact: React.FC = () => {
    return (
        <div className='contact'>
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
    )
}
export default Contact