import HomeButton from '../../components/Button/HomeButton';
import Input from '../../components/input';
import Logo from '../../public/svgs/Logo';
import { BsFacebook } from 'react-icons/bs';
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom';
import { ROUTE_URL } from '../../routes/url';

const Register = () => {
  return (
    <div className='flex justify-center flex-col items-center mx-auto mt-8 font-opensans'>
          <Logo
              width='162'
              height='52'
          />
          <h1 className='mt-3'>Add some text here</h1>
          <form className='w-1/3 border h-auto py-6 bg-white rounded mt-6 px-6'>
              <p className='text-secondarygray'>Please fill details:</p>
              <div className='mt-6'>
                  <Input
                  label='Full Name'
                  input={{
                      placeholder: "Christian Chiemela"
                  }}
              />
              </div>
              <div className='mt-3'>
                  <Input
                  label='Email'
                  input={{
                      placeholder: "christian@gmail.com"
                  }}
              />
              </div>
              <div className='mt-3'>
                  <Input
                  label='Password'
                  input={{
                      placeholder: "******"
                  }}
              />
              </div>
              <div className='text-red-400 text-sm flex justify-end mt-2 cursor-pointer'>Forgotten password?</div>
              <div className='mt-5'>
                  <HomeButton
                  height='h-12'
                  width='w-full'
                  bg='bg-corered'
                  name='Sign In'
                  color='text-white'
              />
              </div>
              <div className='text-center text-xl my-3'>OR</div>
              <div className='space-y-3'>
                  <div className='flex justify-center items-center gap-2 cursor-pointer text-secondarygray border h-12 rounded'>
                      <BsFacebook color='blue' size={24} />
                      <p>Sign Up with Facebook</p>
                  </div>
                  <div className='flex justify-center items-center gap-2 cursor-pointer text-secondarygray border h-12 rounded'>
                      <FcGoogle size={24} />
                      <p>Sign Up with Google</p>
                  </div>
              </div>
          </form>
          <p className='mt-3 text-sm text-secondarygray'>Already have an account Login <Link to={ROUTE_URL.LOGIN_URL} className='text-red-400 cursor-pointer'>here</Link></p>
    </div>
  )
}

export default Register