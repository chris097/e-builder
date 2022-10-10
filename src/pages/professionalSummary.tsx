import React, { useEffect, useState } from 'react'
import Header from '../components/header';
import { MdOutlineKeyboardBackspace, MdDelete } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import Input from '../components/input';
import { useNavigate } from 'react-router-dom';
import { generateCharacters } from '../utils';
import AdditionalField from '../components/AdditionalField';
import { useFormik } from 'formik';

const ProfessionalSummary = () => {

    const navigate = useNavigate();

    const [twitter, setTwitter] = useState("");
    const [linkedIn, setLinkedIn] = useState("");
    const [website, setWebsite] = useState("")
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

    const handleSelect = (e:any) => {
        setTwitter(e.target.value);
        setLinkedIn(e.target.value);
        setWebsite(e.target.value)
    }

    useEffect(() => {
        handleAdditionalLink()
    }, []);

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            profession: "",
            city: "",
            state: "",
            country: "",
            email: "",
            phoneNumber: "",
        },
        onSubmit: values => {
            console.log({
                twitter: twitter,
                website: website,
                linkedIn: linkedIn,
                ...values
            })
        }
    });

  return (
    <div>
          <Header />
          <div className='max-w-5xl mx-auto w-full my-8'>
            <button onClick={() => navigate(-1)} className='mb-6 text-basegray text-sm font-light flex space-x-1 cursor-pointer items-center'><MdOutlineKeyboardBackspace size="16px" /> <span>Back</span></button>
              <div className='max-w-4xl mx-auto'>
                <div className='font-light text-blue-700'>Professional Summary</div>
                  <div className='font-light text-basegray mb-8 my-3'>We suggest including an email and phone number.</div>
                  <form onSubmit={formik.handleSubmit}>
                  <div className='flex space-x-4'>
                    <Input
                        label='First Name'
                        input={{
                            type: 'text',
                            id: "firstName",
                            ...formik.getFieldProps('firstName')
                        }}
                    />
                    <Input
                        label='Last Name'
                        input={{
                            type: 'text',
                            id: "lastName",
                            ...formik.getFieldProps('lastName')
                        }}
                    />
                  </div>
                  <div className='mt-3'>
                      <Input
                        label='Profession'
                        input={{
                            type: 'text',
                            id: "profession",
                            ...formik.getFieldProps('profession')
                        }}
                    />
                  </div>
                  <div className='flex space-x-4 mt-3'>
                    <Input
                        label='City'
                        input={{
                            type: 'text',
                            id: "city",
                            ...formik.getFieldProps('city')
                        }}
                    />
                    <Input
                        label='State'
                        input={{
                            type: 'text',
                            id: "state",
                            ...formik.getFieldProps('state')
                        }}
                    />
                    <Input
                        label='Country'
                        input={{
                            type: 'text',
                            id: "country",
                            ...formik.getFieldProps('country')
                        }}
                    />
                  </div>
                  <div className='flex space-x-4 mt-3'>
                    <Input
                        label='Email'
                        input={{
                            id: "email",
                            type: 'text',
                            ...formik.getFieldProps('email')
                        }}
                    />
                    <Input
                        label='Phone Number'
                        input={{
                            type: 'text',
                            id: "phoneNumber",
                            ...formik.getFieldProps('phoneNumber')
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
                              twitter={twitter}
                              linkedIn={linkedIn}
                              website={website}
                              handleSelect={handleSelect}
                              handleInput={formik.handleChange}
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
                      <button type='submit' className='bg-red-500 hover:bg-red-700 text-white w-32 h-10'>{`Save & Next`}</button>
                      </div>
                </form>
              </div>
              
          </div>
    </div>
  )
}

export default ProfessionalSummary