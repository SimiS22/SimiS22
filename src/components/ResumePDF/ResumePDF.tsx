import React from 'react'
import pdf from './simi-resume.pdf';
import './ResumePDF.scss'

const ResumePDF: React.FC = () => {
    return (
        <div className='resume'>
            <object data={pdf} type="application/pdf">   </object>
        </div>
    )
}
export default ResumePDF
