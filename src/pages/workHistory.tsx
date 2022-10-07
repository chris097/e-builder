import React from 'react'
import Input from '../components/input';
import Header from '../components/header';
import { BsPlusLg } from 'react-icons/bs';
import { MdOutlineKeyboardBackspace, MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const WorkHistory = () => {

  const navigate = useNavigate();

  return (
    <>
     <Header />
          <div className='max-w-5xl mx-auto w-full my-8'>
            <button onClick={() => navigate(-1)} className='mb-6 text-basegray text-sm font-light flex space-x-1 cursor-pointer items-center'><MdOutlineKeyboardBackspace size="16px" /> <span>Back</span></button>
              <div className='max-w-4xl mx-auto'>
                <div className='font-light text-blue-700'>Work History</div>
                <div className='font-light text-basegray mb-8 my-3'>We suggest including an email and phone number.</div>
                  <div className='flex space-x-4'>
                    <Input
                        label='Job Title'
                        input={{
                            name: "firstName",
                            type: 'text',
                            id: "firstName"
                        }}
                    />
                    <Input
                        label='Employer'
                        input={{
                            name: "lastName",
                            type: 'text',
                            id: "lastName"
                        }}
                    />
                  </div>
                  <div className='flex space-x-4 mt-3'>
                    <Input
                        label='City'
                        input={{
                            name: "firstName",
                            type: 'text',
                            id: "firstName"
                        }}
                    />
                    <Input
                        label='State'
                        input={{
                            name: "country",
                            type: 'text',
                            id: "lastName"
                        }}
                    />
          </div>
          <div className='mt-3'>
            <label className="text-basegray text-sm" htmlFor='description'>Project Description</label>
            <textarea className="border w-full h-32 px-3 mt-1 focus:outline-none text-basegray text-sm border-gray-300" id='description' name='description' />
          </div>
          <div className='flex space-x-4 mt-3'>
            <Input
                label='Start Date'
                input={{
                    name: "firstName",
                    type: 'date',
                    id: "firstName"
                }}
            />
            <Input
                label='End Date'
                input={{
                    name: "country",
                    type: 'date',
                    id: "lastName"
                }}
            />
          </div>
                  <div className='flex justify-between mt-16 font-light'>
                      <button type='button' className='border w-32 h-10'>Back</button>
                      <button className='bg-red-500 hover:bg-red-700 text-white w-32 h-10'>{`Save & Next`}</button>
                  </div>
              </div>
          </div>
    </>
  )
}

export default WorkHistory