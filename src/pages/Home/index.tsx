import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';
import Logo from '../../public/svgs/Logo';
import HomeButton from '../../components/Button/HomeButton';
import TopResume from '../../components/Home/TopResume';
import { names, nextElementInList } from '../../utils/nextElementInList';
import { nameVariant } from '../../utils/nameVariant';
import { Link } from 'react-router-dom';
import { ROUTE_URL } from '../../routes/url';

const Home = () => {
  //states
  const [currentName, setCurrentName] = useState<string>('Build');

  // variables
  let name: string = 'Build';
  
  useEffect(() => {
    const interval = setInterval(() => {
      name = nextElementInList(names, name, setCurrentName);
    }, 3700);
    return () => clearInterval(interval);
  }, []);

  
  return (
    <section>
      <div className='bg-white h-24 fixed w-full left-0 top-0 z-50 border-b'>
        <div className='flex justify-between h-full max-w-7xl mx-auto items-center'>
          <div>
            <Logo width='122' height='42' />
          </div>
          <Link to={ROUTE_URL.LOGIN_URL}>
            <HomeButton
            bg='bg-corered'
            color='text-white'
            height='h-11'
            width='w-24'
            name='Sign In'
          />
          </Link>
        </div>
      </div>
      <div className='mt-24 max-w-7xl mx-auto'>
        <div className='flex justify-between gap-20 items-center h-[90vh]'>
          <div className='flex-1 w-1/2'>
            <h1 className='text-7xl font-bold font-opensans tracking-tighter leading-0'>
              <div className={`${nameVariant(currentName)} tracking-tighter text-8xl slide`}>
                <TypeAnimation
                  sequence={[
                    `${currentName && "Build"}`, 3000,
                    `${currentName && "Design"}`, 3000,
                    `${currentName && "Create"}`, 3000,
                    `${currentName && "Develop"}`, 3000
                  ]}
                  cursor={false}
                repeat={Infinity}
              />
              </div>
              a career in tech.
            </h1>
            <p className='text-2xl font-opensans font-light text-secondarygray mt-5 mb-8'>
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
        <div>More</div>
      </div>
    </section>
  )
};

export default Home;