import React from 'react'
import pdf from './simi-resume.pdf';
import './Resume.scss'
import { Document, Page } from 'react-pdf';

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
