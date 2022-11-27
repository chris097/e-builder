import React from 'react'
import Range from '../../public/svgs/range'

const Skill = () => {
  return (
    <div className='px-6 py-7 bg-white w-full rounded-md h-auto'>
            <div className='font-medium text-xl mb-5'>Skills</div>
            <div className='flex items-center space-x-3 mb-2'>
              <Range />
              <span className='text-secondarygray text-sm font-light'>
                <a href="">Product design (Figma)</a>
              </span>
            </div>
            <div className='flex items-center space-x-3 mb-2'>
              <Range />
              <span className='text-secondarygray text-sm font-light'>
                <a href="">{`Branding (Illustrator & Photoshop)`}</a>
              </span>
            </div>
            <div className='flex items-center space-x-3 mb-2'>
              <Range />
              <span className='text-secondarygray text-sm font-light'>
                <a href="">Illustrations (Adobe Illustrator)</a>
              </span>
            </div>
            <div className='flex items-center space-x-3 mb-2'>
              <Range />
              <span className='text-secondarygray text-sm font-light'>
                <a href="">Proper Presentation</a>
              </span>
            </div>
            <div className='flex items-center space-x-3 mb-2'>
              <Range />
              <span className='text-secondarygray text-sm font-light'>
                <a href="">{`Leadership & Product Management`}</a>
              </span>
            </div>
          </div>
  )
}

export default Skill