import React, { useState, useEffect } from 'react';
import Avatar from '../../public/svgs/avatar';

const TopResume = () => {

    const [currentName, setCurrentName] = useState('Christian Chiemela')

  const nextElementInList = (list:string[], value:string) => { 
    const currentValueIndex = list.indexOf(value);
    const nextValueIndex = (currentValueIndex + 1) % list.length;
    const nextValue = list[nextValueIndex];
    setCurrentName(nextValue)
    return nextValue;
  };
  

  let name : string = 'Christian Chiemela'

    
    
    useEffect(() => {
          setInterval(() => {
      const names = ["Christian Chiemela", "Joe Doe", "Paul Walker"]
            name = nextElementInList(names, name);
        }, 3000)
    },[])

  return (
    <div className='border-gray-150 border bg-white shadow-shadowbase rounded w-full h-44 py-3 px-5'>
              <div className='flex gap-3'>
                <Avatar width='48' height='49' />
                <div>
                  <div>
            <h4 className='text-base font-light'>{currentName}</h4>
                  <p className='text-[13px] font-light'>Frontend Developer</p>
                 </div>
                  <div>
                     <h4 className='text-base font-light mt-2'>Address</h4>
                  <p className='text-[13px] font-light'>10 Deji Odunuga Street, Anthony Village, Lagos State.</p>
                 </div>
                  <div>
                     <h4 className='text-base font-light mt-2'>Bio</h4>
                  <p className='text-[13px] font-light'>Frontend Developer</p>
                 </div>
                </div>
              </div>
        </div>
  )
}

export default TopResume