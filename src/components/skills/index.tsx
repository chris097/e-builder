import React, { useEffect } from 'react'
import { CONSTANT_TEXT } from '../../constant'
import { apiUrls } from '../../helpers/api/url'
import useQueryApi from '../../helpers/useQuery'
import Range from '../../public/svgs/range'

const Skill = () => {
  const { data } = useQueryApi([CONSTANT_TEXT.GET_TECHNICAL_SKILL], apiUrls.TECHNICAL_SKILL);
  console.log(data?.skills)

  return (
    <div className='px-6 py-7 bg-white w-full rounded-md h-auto'>
      <div className='font-medium text-xl mb-5'>Skills</div>
      <div className='grid grid-cols-4'>
        {data?.skills[0]?.name?.map((name:any) => (
             <div className='items-center flex mb-2'>
              <Range />
            <span className='text-secondarygray text-sm font-light'>
              <div>{name?.name}</div>
              </span>
            </div> 
            ))}
      </div>
          </div>
  )
}

export default Skill