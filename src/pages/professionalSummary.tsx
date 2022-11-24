import React, { useEffect, useState } from 'react'
import Header from '../components/header';
import { MdOutlineKeyboardBackspace, MdDelete } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import Input from '../components/input';
import { useNavigate } from 'react-router-dom';
import { generateCharacters } from '../utils';
import AdditionalField from '../components/AdditionalField';
import { useFormik } from 'formik';
import { userinfoSchema } from '../validator';
import { useQueryClient } from '@tanstack/react-query';
import { fetchProfessionalSummary } from '../service';
import toast from 'react-hot-toast';
import { ROUTE_URL } from '../Routes/url';
import useQueryApi from '../helpers/useQuery';
import { CONSTANT_TEXT } from '../constant';
import { apiUrls } from '../helpers/api/url';

const ProfessionalSummary = () => {

  //state
  const [toggleAdditioanlLink, setToggleAdditionalLink] = useState(false)
  const [additionalLink, setAdditionalLink] = useState<any>(new Map());
  const [loading, setLoading] = useState(false);
  // route
  const navigate = useNavigate();

  //query
  const {data} = useQueryApi([CONSTANT_TEXT.GET_ABOUT], apiUrls.USER_INFO)
  // invalidate query
  const queryClient = useQueryClient();

  // variables
  const user: [] = data?.data;
  console.log(user)

    const handleAdditionalLink = () => {
        const link = new Map(additionalLink)
        link.set('twitter', "eeee")
        link.set('linkedin', "")
        link.set('website', "")
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
    }, []);

    const formik = useFormik({
        initialValues: {
          first_name: "",
          last_name: "",
          profession: "",
          city: "",
          street: "",
          state: "",
          country: "",
          email: "",
          phone: "",
          bio: ""
        },
        validationSchema: userinfoSchema,
      onSubmit: values => {
        setLoading(true)
        return fetchProfessionalSummary(values,
          (res:any)=> {
            if (res.status === 201) {
              toast.success(res.message)
              setLoading(false)
              navigate(ROUTE_URL.RESUME_URL)
              queryClient.invalidateQueries()
            } else {
              toast.error(res.message)
              setLoading(false)
            }
          },
          (err:any) => {
            toast.error(err.message);
            setLoading(false)
          }
        )
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
                          <div className='w-full'>
                              <Input
                        label='First Name'
                        input={{
                            type: 'text',
                            id: "first_name",
                            ...formik.getFieldProps('first_name')
                        }}
                          />
                          {formik.touched.first_name && formik.errors.first_name ? (<span className='text-xs text-red-500'>{formik.errors.first_name}</span>):null}
                    </div>
                          <div className='w-full'>
                               <Input 
                            label='Last Name'
                            input={{
                            type: 'text',
                            id: "last_name",
                            ...formik.getFieldProps('last_name')
                            }}
                          />
                         {formik.touched.last_name && formik.errors.last_name ? (<span className='text-xs text-red-500'>{formik.errors.last_name}</span>):null} 
                         </div>
                  </div>
                    <div className='mt-3 flex space-x-4 '>
              <div className='w-full'>
                <Input
                            label='Profession'
                            input={{
                                type: 'text',
                                id: "profession",
                                ...formik.getFieldProps('profession')
                            }}
                          />
              {formik.touched.profession && formik.errors.profession ? (<span className='text-xs text-red-500'>{formik.errors.profession}</span>) : null} 
                        </div>
              <div className='w-full'>
                              <Input
                        label='Street'
                        input={{
                            id: "street",
                            type: 'text',
                            ...formik.getFieldProps('street')
                        }}
                          />
                          {formik.touched.street && formik.errors.street ? (<span className='text-xs text-red-500'>{formik.errors.street}</span>):null} 
                    </div>
                    </div>
                  <div className='flex space-x-4 mt-3'>
                          <div className='w-full'>
                              <Input
                        label='City'
                        input={{
                            type: 'text',
                            id: "city",
                            ...formik.getFieldProps('city')
                        }}
                          />
                        {formik.touched.city && formik.errors.city ? (<span className='text-xs text-red-500'>{formik.errors.city}</span>):null} 
                    </div>
                          <div className='w-full'>
                              <Input
                        label='State'
                        input={{
                            type: 'text',
                            id: "state",
                            ...formik.getFieldProps('state')
                        }}
                          />
                          {formik.touched.state && formik.errors.state ? (<span className='text-xs text-red-500'>{formik.errors.state}</span>):null} 
                    </div>
                          <div className='w-full'>
                              <Input
                        label='Country'
                        input={{
                            type: 'text',
                            id: "country",
                            ...formik.getFieldProps('country')
                        }}
                          />
                          {formik.touched.country && formik.errors.country ? (<span className='text-xs text-red-500'>{formik.errors.country}</span>):null} 
                    </div>
                  </div>
                  <div className='flex space-x-4 mt-3'>
                          <div className='w-full'>
                              <Input
                        label='Email'
                        input={{
                            id: "email",
                            type: 'text',
                            ...formik.getFieldProps('email')
                        }}
                          />
                          {formik.touched.email && formik.errors.email ? (<span className='text-xs text-red-500'>{formik.errors.email}</span>):null} 
                    </div>
                          <div className='w-full'>
                              <Input
                        label='Phone Number'
                        input={{
                            type: 'text',
                            id: "phone",
                            ...formik.getFieldProps('phone')
                        }}
                          />
                          {formik.touched.phone && formik.errors.phone ? (<span className='text-xs text-red-500'>{formik.errors.phone}</span>):null} 
                    </div>
                      </div>
                      <div className='mt-3 text-basegray text-sm'>
                          <label>About Yourself</label>
                          <textarea
                              id='bio'
                              className='border w-full h-24 p-3 mt-1 focus:outline-none border-gray-300'
                              {...formik.getFieldProps('bio')}
                          />
                          {formik.touched.bio && formik.errors.bio ? (<span className='text-xs text-red-500'>{formik.errors.bio}</span>):null} 
                      </div>
                  {/* <div className='mt-7'>
                      <button type='submit' onClick={() => setToggleAdditionalLink(open => !open)} className='flex space-x-1 items-center text-sm text-blue-500 cursor-pointer'>
                        <BsPlusLg />
                          <div>Add Scoial Links</div>
                      </button>
                          {toggleAdditioanlLink && [[...additionalLink.keys()].map((field, index) => (
                          <div className='flex space-x-4 mt-4 items-center'>
                            <div className='w-full'>
                                <Input
                                    input={{
                                        type:"text",
                                        placeholder: "linkedin, twitter, website"
                                    }}     
                                />
                            </div>
                        <AdditionalField
                            key={field}
                              field={field}
                              fieldLength={index}
                              handleInput={formik.handleChange}
                              handleRemoveAdditionalLink={handleRemoveAdditionalLink}
                        />
                        </div>
                      ))]}
                      {toggleAdditioanlLink && <button disabled={linkLength >= 3} onClick={handleAdditionalLink} className={`flex space-x-1 items-center mt-4 text-sm ${linkLength >= 3 ? "text-gray-300" : "text-blue-500"} cursor-pointer`}>
                        <BsPlusLg />
                          <span>Add one more</span>
                      </button>}
                  </div> */}
                  <div className='flex justify-between mt-16 font-light'>
                      <button type='button' className='border w-32 h-10'>Back</button>
                      {user?.length === 0 ? <button type='submit' className='bg-red-500 hover:bg-red-700 text-white w-32 h-10'>{loading ? "Loading..." : `Save & Next`}</button>
                      : <button type='button' disabled className='bg-red-500 hover:bg-red-700 text-white w-32 h-10'>{`Update & Next`}</button>}
                      </div>
                </form>
              </div>
              
          </div>
    </div>
  )
}

export default ProfessionalSummary