import React, { useState, useEffect } from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import ResumePDF from '../../components/ResumePDF/ResumePDF'
import { Button, Modal } from 'antd';
import './Resume.scss'

const Resume: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const setModalVisibility = (value: boolean) => () => {
        setIsVisible(value);
    };
    return (
        <div className='modal'>
            <Button type="primary" shape="round"
                onClick={setModalVisibility(true)}
            >
                Click here to view my Resume
        </Button>
            <Modal visible={isVisible} footer={null} onCancel={setModalVisibility(false)}>
                <ResumePDF />
            </Modal>
        </div>
    )
}
export default Resume