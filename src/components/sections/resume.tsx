import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { navLinks } from '../../utils/navLinks';

type Props = {
  handlePrint: () => void
};

const ResumeSection:React.FC<Props> = (props) => {
    return (
    <>
        <div className='w-[255px] md:block hidden'>
          <div className='border-b py-2 text-basegray'>Personal Information</div>
          <div className='mt-6 text-sm text-basegray'>RESUME SECTION</div>
          <div className='mt-4 flex flex-col space-y-3'>
            {navLinks.map((navLink) => (
             <Link to={navLink.to} className='text-sm font-light hover:text-red-500 cursor-pointer flex items-center space-x-2'>
                <div>{navLink.icon}</div>
                <div>{navLink.name}</div>
            </Link>
            ))}
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