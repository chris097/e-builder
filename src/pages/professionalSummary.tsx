import React from 'react'
import Header from '../components/header';
import { MdOutlineKeyboardBackspace, MdDelete } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import Input from '../components/input';

const ProfessionalSummary = () => {
  return (
    <div>
          <Header />
          <div className='max-w-5xl mx-auto w-full my-8'>
            <div className='mb-6 text-basegray text-sm font-light flex space-x-1 cursor-pointer items-center'><MdOutlineKeyboardBackspace size="16px" /> <span>Back</span></div>
              <div className='max-w-4xl mx-auto'>
                <div className='font-light text-blue-700'>Professional Summary</div>
                <div className='font-light text-basegray mb-8 my-3'>We suggest including an email and phone number.</div>
                  <div className='flex space-x-4'>
                    <Input
                        label='First Name'
                        input={{
                            name: "firstName",
                            type: 'text',
                            id: "firstName"
                        }}
                    />
                    <Input
                        label='Last Name'
                        input={{
                            name: "lastName",
                            type: 'text',
                            id: "lastName"
                        }}
                    />
                  </div>
                  <div className='mt-3'>
                      <Input
                        label='Profession'
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
                    <Input
                        label='Country'
                        input={{
                            name: "country",
                            type: 'text',
                            id: "lastName"
                        }}
                    />
                  </div>
                  <div className='flex space-x-4 mt-3'>
                    <Input
                        label='Email'
                        input={{
                            name: "firstName",
                            type: 'text',
                            id: "firstName"
                        }}
                    />
                    <Input
                        label='Phone Number'
                        input={{
                            name: "country",
                            type: 'text',
                            id: "lastName"
                        }}
                    />
                  </div>
                  <div className='mt-7'>
                      <div className='flex space-x-1 items-center text-sm text-blue-500 cursor-pointer'>
                        <BsPlusLg />
                          <div>Add Scoial Links</div>
                      </div>
                      <div className='flex space-x-4 mt-4 items-center'>
                              <div className='w-full'>
                                  <select className='border text-sm text-basegray w-full h-10 px-3 mt-1 focus:outline-none border-gray-300'>
                                      <option value="">Twitter</option>
                                      <option value="">LinkedIn</option>
                                      <option value="">Website</option>
                                  </select>
                              </div>
                              <Input />
                              <div className='text-basegray cursor-pointer'><MdDelete size="20px" /></div>
                      </div>
                      <div className='flex space-x-1 items-center mt-4 text-sm text-blue-500 cursor-pointer'>
                        <BsPlusLg />
                          <div>Add one more</div>
                      </div>
                  </div>
                  <div className='flex justify-between mt-16 font-light'>
                      <button type='button' className='border w-32 h-10'>Back</button>
                      <button className='bg-red-500 hover:bg-red-700 text-white w-32 h-10'>{`Save & Next`}</button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default ProfessionalSummary