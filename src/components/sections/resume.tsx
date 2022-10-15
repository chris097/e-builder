import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { HiPencil, HiUserGroup } from 'react-icons/hi';
import { FaGraduationCap, FaDownload } from 'react-icons/fa';
import { BsFillAwardFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

type Props = {
  handlePrint?: any
};

const ResumeSection:React.FC<Props> = (props) => {
    return (
    <>
        <div className='w-[255px]'>
          <div className='border-b py-2 text-basegray'>Personal Information</div>
          <div className='mt-6 text-sm text-basegray'>RESUME SECTION</div>
          <div className='mt-4 flex flex-col space-y-3'>
            <Link to="/professional-summary" className='text-sm font-light hover:text-red-500 cursor-pointer flex items-center space-x-2'>
              <div><FiMenu size="16px" /></div>
              <div>Professional Summary</div>
            </Link>
            <Link to="/work-history" className='text-sm font-light hover:text-red-500 cursor-pointer flex space-x-2'>
              <div><HiUserGroup size="16px" /></div>
              <div>Work History</div>
            </Link>
            <Link to="/technical-skill" className='text-sm font-light hover:text-red-500 cursor-pointer flex items-center space-x-2'>
              <div><HiPencil size="16px" /></div>
              <div>Technical Skills</div>
            </Link>
            <Link to="/education" className='text-sm font-light hover:text-red-500 cursor-pointer flex space-x-2'>
              <div><FaGraduationCap size="16px" /></div>
              <div>Education</div>
            </Link>
            <div className='text-sm font-light hover:text-red-500 cursor-pointer flex space-x-2'>
              <div><BsFillAwardFill size="16px"  /></div>
              <div>{`Certification & Hobbies`}</div>
            </div>
          </div>
          <button onClick={props.handlePrint} type='button' className='text-sm border-t mt-8 py-3 font-light hover:text-red-500 cursor-pointer flex space-x-2'>
              <div><FaDownload size="16px"  /></div>
              <div>Download</div>
            </button>
        </div>
    </>
  )
}

export default ResumeSection