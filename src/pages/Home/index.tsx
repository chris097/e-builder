import React from 'react'
import Logo from '../../public/svgs/Logo';
import banner from "../../public/images/banner1.png"
import HomeButton from '../../components/Button/HomeButton';
import Avatar from '../../public/svgs/avatar';
import TopResume from '../../components/Home/TopResume';

const Home = () => {
  return (
    <section>
      <div className='bg-white h-24 fixed w-full left-0 top-0 z-50 border-b'>
        <div className='flex justify-between h-full max-w-7xl mx-auto items-center'>
          <div>
            <Logo width='122' height='42' />
          </div>
          <HomeButton
            bg='bg-corered'
            color='text-white'
            height='h-11'
            width='w-24'
            name='Sign In'
          />
        </div>
      </div>
      <div className='mt-24 max-w-7xl mx-auto'>
        <div className='flex justify-between gap-20 items-center h-screen'>
          <div className='flex-1 w-1/2'>
            <h1 className='text-7xl font-semibold font-opensans tracking-tighter leading-0'><span className='text-corered'>Build</span> your career in tech.</h1>
            <p className='text-2xl font-sans font-light text-gray-700 mt-5 mb-8'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <HomeButton
              bg='bg-corered'
            color='text-white'
            height='h-14'
            width='w-44'
            name='Get Started'
            />
          </div>
          <div className='font-opensans flex-1 space-y-6 ml-5'>
            <TopResume />
            <div className='border-gray-150 border bg-white shadow-shadowbase rounded w-full h-[400px] pt-6 px-5'>
              <div className=''>
                <div className='text-xl font-light'>Work History</div>
                <div>
                  <div className='mb-6 border-b last:border-none border-gray-100 pb-6'>
                <div className='text-secondarygray capitalize mt-5'>Frontend Developer | Yep!, USA</div>
                  <div className='text-secondarygray font-light text-sm'>March 2022 - Present</div>
                      <p className='text-secondarygray mt-5 text-sm font-light'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                      </p>
                      <p className='text-secondarygray mt-5 text-sm font-light'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                      </p>
                      <p className='text-secondarygray mt-5 text-sm font-light'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                      </p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className='text-center'>Do something here...</div>
      </div>
    </section>
  )
}

export default Home;