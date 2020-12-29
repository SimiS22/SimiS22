import React from 'react'
import pdf from './resume.pdf';
import './Resume.scss'
import { Document, Page } from 'react-pdf';
import { Divider } from 'antd'

const Resume: React.FC = () => {
    return (
        <>
            <Divider className='heading'>Resume</Divider>
            <div className='resume'>
                {/* <object data={pdf} type="application/pdf"> </object> */}
                <Document className={'PDFDocument'} file={pdf} >
                    <Page className={'PDFPage'} pageNumber={1} />
                </Document>
            </div>
        </>
    )
}
export default Resume
