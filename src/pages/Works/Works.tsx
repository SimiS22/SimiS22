import React from 'react'
import { Card } from 'antd';
import Spinner from '../../components/Spinner/Spinner'
import { useWorks } from '../../contentful/useWorks'
import './Works.scss'

const { Meta } = Card;
const Works: React.FC = () => {
    const worksData = useWorks();
    if (worksData.loading) {
        return <Spinner />
    }
    const worksDataArray = worksData.works;

    return (
        <div className='works'>{
            worksDataArray.map((workItem, index) => {
                return (
                    <div key={index} className='workData'>
                        <Card
                            cover={<img alt={workItem.name} src={workItem.image} style={{ width: 320, objectFit: 'cover' }} />}>
                            <Meta className="text" title={workItem.name} description={
                                <a href={workItem.url} target="_blank" rel="noopener noreferrer">
                                    {workItem.url}
                                </a>
                            } />
                        </Card>
                    </div>
                )
            })
        }
        </div>
    )


}
export default Works