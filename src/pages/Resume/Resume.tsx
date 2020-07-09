import React, { useState } from 'react'
import pdf from './simi-resume.pdf';
import './Resume.scss'
import { Document, Page } from 'react-pdf';
import { CalculatorFilled } from '@ant-design/icons';

const Resume: React.FC = () => {
    return (
        <div className='resume'>
            {/* <object data={pdf} type="application/pdf"> </object> */}
            <Document className={'PDFDocument'} file={pdf} >
                <Page className={'PDFPage'} pageNumber={1} />
            </Document>
        </div>
    )
}
export default Resume
