import React from 'react'
import Header from '../components/header'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const TechnicalSkills = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className='max-w-5xl mx-auto w-full my-8'>
        <button onClick={() => navigate(-1)} className='mb-6 text-basegray text-sm font-light flex space-x-1 cursor-pointer items-center'><MdOutlineKeyboardBackspace size="16px" /> <span>Back</span></button>
        <div>do something here</div>
    </div>
    </div>
  )
}

export default TechnicalSkills