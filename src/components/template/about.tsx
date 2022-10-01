import React from 'react'
import Avatar from '../../public/svgs/avatar'

const About = () => {
  return (
    <div className='bg-white w-full p-4 rounded-md'>
      <div className='flex space-x-5'>
        <Avatar />
        <div>
          <div className='text-lg'>Davio White</div>
          <div className='font-light text-sm text-basegray'>Frontend Engineer</div>
          <div className='mt-2'>
            <div className='text-lg'>ADDRESS</div>
            <div className='font-light text-sm text-basegray'>10 Deji Odunga Street, Anthony village, Lagos, Nigeria.</div>
          </div>
          <div className='mt-2'>
            <div className='text-lg'>Bio</div>
            <div className='font-light text-sm text-basegray'>
            Explain briefly who you are and your background here in not more than 2 lines. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit ut aliquam,
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About