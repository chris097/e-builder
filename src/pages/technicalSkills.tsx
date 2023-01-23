import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import {GrFormClose} from 'react-icons/gr'
import { useNavigate } from 'react-router-dom';
import Input from '../components/input';
import { useFormik } from 'formik';

const TechnicalSkills = () => {

  const [stack, setStack] = useState<any>([]);
  const [isName, setName] = useState("")
  const navigate = useNavigate();
  
  console.log(isName)

//   let serie = [7, 4, 9, 12, 18, 21];

//   const result = stack.filter((x:any) => x !== "dmmd").map((x:any) => x)
// console.log(result)


  const formik = useFormik({
    initialValues: {
      name: ""
    },
    onSubmit: value => {
      setStack([...stack, value.name])
      value.name =''
    }
  });

  const handleDelete = (name:string) => {
    setName(name ? name : '')

  }

  return (
    <div>
      <Header />
      <div className='max-w-5xl mx-auto w-full my-8 font-sans'>
        <button onClick={() => navigate(-1)} className='mb-6 text-basegray text-sm font-light flex space-x-1 cursor-pointer items-center'><MdOutlineKeyboardBackspace size="16px" /> <span>Back</span></button>
        <div>
           <div className='font-light text-blue-700'>Technical Skill</div>
          <div className='font-light text-basegray mb-8 my-3'>We suggest including an email and phone number.</div>
        </div>
        <form onSubmit={formik.handleSubmit} className='flex mt-6'>
          <div className='w-full flex gap-8'>
            <Input
              input={{
                placeholder: "eg. React",
                type: "text",
                id: 'name',
                ...formik.getFieldProps('name')
              }}
            />
            <button type='submit' className='w-44 bg-blue-400 hover:bg-red-500 text-white rounded-md'>Add</button>
          </div>
        </form>
        <div className='mt-8 border h-56 py-3 px-6 flex gap-6'>
          {stack.filter((name:any)=> name !== isName).map((name:any, i:number) => (
                <div key={i} className='border p-3 rounded-full w-56 h-12 flex justify-between items-center'>
              <span className='text-secondarygray text-sm'>{name}</span>
              <span onClick={() =>handleDelete(name)} className='cursor-pointer'><GrFormClose color='#404553' size={18} /></span>
          </div>   
                 ))}
        </div>
        <div className='flex justify-end mt-8'>
          <button className="h-14 bg-red-500 text-white w-44">Save</button>
        </div>
    </div>
    </div>
  )
}

export default TechnicalSkills