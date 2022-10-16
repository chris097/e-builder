import React, { useRef } from 'react'
import { exportComponentAsJPEG, exportComponentAsPDF, PDFOptions, exportComponentAsPNG } from 'react-component-export-image';
import {jsPDF} from 'jspdf';
import Footer from '../../components/footer';
import Header from '../../components/header';
import ResumeSection from '../../components/sections/resume';
import Template from '../../components/template';
import Range from '../../public/svgs/range';
import Linkedin from '../../public/svgs/linkedin';
import Portfolio from '../../public/svgs/portfolio';
import Phone from '../../public/svgs/phone';
import Cert from '../../public/svgs/cert';
import Twitter from '../../public/svgs/twitter';
import Mail from '../../public/svgs/mail';
import About from '../../components/template/about';


const Resume = () => {

  const printRef:any = useRef()

  return (
    <div>
        <Header />
          <div className='flex max-w-6xl w-full mx-auto space-x-16 mt-16 mb-28'>
        <ResumeSection handlePrint={() => exportComponentAsPDF(printRef, {
          pdfOptions: {
            w: 200,
            h: 230,
            x: 90,
            y: 20,
            orientation: 'p',
            pdfFormat: 'ledger'
          }})} />
        <Template ref={printRef} />
      </div>
      </div>
  )
}

export default Resume