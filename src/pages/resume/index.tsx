import React, { useRef } from 'react'
import { exportComponentAsPDF } from 'react-component-export-image';
import Header from '../../components/header';
import ResumeSection from '../../components/sections/resume';
import Template from '../../components/template';


const Resume = () => {

  const printRef:any = useRef()

  return (
    <div>
        <Header />
          <div className='flex max-w-6xl md:w-full w-[90%] mx-auto md:space-x-16 md:mt-16 mt-10 mb-28'>
        <ResumeSection handlePrint={() => exportComponentAsPDF(printRef, {
          pdfOptions: {
            w: 200,
            h: 200,
            x: 40,
            y: 5,
            orientation: 'p',
            pdfFormat: 'letter'
          }})} />
        <Template ref={printRef} />
      </div>
      </div>
  )
}

export default Resume