import React, { useEffect, useState } from 'react'
import Header from '../components/header';
import { MdOutlineKeyboardBackspace, MdDelete } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import Input from '../components/input';
import { useNavigate } from 'react-router-dom';
import { generateCharacters } from '../utils';
import AdditionalField from '../components/AdditionalField';

const ProfessionalSummary = () => {

    const navigate = useNavigate();

    const [toggleAdditioanlLink, setToggleAdditionalLink] = useState(false)

    const [additionalLink, setAdditionalLink] = useState<any>(new Map())

    const handleAdditionalLink = () => {
        const link = new Map(additionalLink)
        link.set(generateCharacters(10), "")
        setAdditionalLink(link)
    };

    const handleRemoveAdditionalLink = (key:any) => {
        const link = new Map(additionalLink)
        link.delete(key)
        setAdditionalLink(link)
    }

    const linkLength = [...additionalLink.keys()].length;

    useEffect(() => {
        handleAdditionalLink()
    },[])

  return (
    <div>
          <Header />
          <div className='max-w-5xl mx-auto w-full my-8'>
            <button onClick={() => navigate(-1)} className='mb-6 text-basegray text-sm font-light flex space-x-1 cursor-pointer items-center'><MdOutlineKeyboardBackspace size="16px" /> <span>Back</span></button>
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
                      <button type='submit' onClick={() => setToggleAdditionalLink(open => !open)} className='flex space-x-1 items-center text-sm text-blue-500 cursor-pointer'>
                        <BsPlusLg />
                          <div>Add Scoial Links</div>
                      </button>
                      {toggleAdditioanlLink && [[...additionalLink.keys()].map((field, index) => (
                        <AdditionalField
                            key={field}
                              field={field}
                              fieldLength={index}
                              handleRemoveAdditionalLink={handleRemoveAdditionalLink}
                        />
                      ))]}
                      {toggleAdditioanlLink && <button disabled={linkLength >= 3} onClick={handleAdditionalLink} className={`flex space-x-1 items-center mt-4 text-sm ${linkLength >= 3 ? "text-gray-300" : "text-blue-500"} cursor-pointer`}>
                        <BsPlusLg />
                          <span>Add one more</span>
                      </button>}
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