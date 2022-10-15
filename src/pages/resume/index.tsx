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

  const ComponentToPrint = React.forwardRef((props, ref:any) => (
  <div ref={ref}>Hello World</div>
));

const dom = <Template />
  const printRef:any = useRef();

  const handlePrint = async() => {
    // const qrDocs = new jsPDF("portrait", "pt", "a4");
    // const data: any = await printRef;
    // qrDocs.html(data).then(() => {
    //   qrDocs.save('yourcv.pdf')
    // });
  }

  return (
    <div>
        <Header />
          <div className='flex max-w-6xl w-full mx-auto space-x-16 mt-16 mb-28'>
        <ResumeSection handlePrint={() => exportComponentAsPDF(printRef, {
          pdfOptions: {
            w: 100,
            h: 50,
            x: 0,
            y: 0,
            unit: 'cm',
            orientation: 'p'
              }
            })} />
        <Template ref={printRef} />
      </div>
      </div>
  )
}

export default Resume