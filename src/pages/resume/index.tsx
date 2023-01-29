import { useRef } from 'react'
import { exportComponentAsPDF } from 'react-component-export-image';
import { useNavContext } from '../../context/navContext';
import ResumeSection from '../../components/sections/resume';
import Sidebar from '../../components/Sidebar';
import Template from '../../components/template';


const Resume = () => {

  const { showNav } = useNavContext();
  const printRef: any = useRef();


  return (
    <div>
      {showNav === false ? "" : <Sidebar />}
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