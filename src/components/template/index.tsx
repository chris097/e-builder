import React from 'react'
import Cert from '../../public/svgs/cert'
import Linkedin from '../../public/svgs/linkedin'
import Mail from '../../public/svgs/mail'
import Phone from '../../public/svgs/phone'
import Portfolio from '../../public/svgs/portfolio'
import Range from '../../public/svgs/range'
import Twitter from '../../public/svgs/twitter'
import About from './about'


const Template = React.forwardRef((props, ref:any) => {
  return (
    <div ref={ref} className='bg-primarygray h-auto rounded-md w-full px-6 py-8'>
      <About />
      <div className='flex space-x-4 w-full mt-4'>
        <div className='flex-1 bg-white rounded-md h-auto px-6 py-7'>
          <div id="pdf" className='font-medium text-xl mb-5'>WORK HISTORY</div>
          <div className='mb-6 border-b border-gray-100 pb-6'>
            <div className='text-secondarygray'>Product Designer | Flipex, Nigeria</div>
            <div className='text-secondarygray font-light text-sm'>September 2022 - Present</div>
            <div className='text-secondarygray mt-5 text-sm font-light'>
              Explain briefly what you do at the company here in not more than 40 words. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit ut aliquam,
            </div>
          </div>
          <div className='mb-6 border-b border-gray-100 pb-6'>
            <div className='text-secondarygray'>Product Designer | Chiva, Nigeria</div>
            <div className='text-secondarygray font-light text-sm'>September 2022 - Present</div>
            <div className='text-secondarygray mt-5 text-sm font-light'>
              Explain briefly what you do at the company here in not more than 40 words. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit ut aliquam,
            </div>
          </div>
          <div className='mb-6 border-b border-gray-100 pb-6'>
            <div className='text-secondarygray'>Product Designer | Chiva, Nigeria</div>
            <div className='text-secondarygray font-light text-sm'>September 2022 - Present</div>
            <div className='text-secondarygray mt-5 text-sm font-light'>
              Explain briefly what you do at the company here in not more than 40 words. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit ut aliquam,
            </div>
          </div>
          <div className='mb-6 border-b border-gray-100 pb-6'>
            <div className='text-secondarygray'>Product Designer | Chiva, Nigeria</div>
            <div className='text-secondarygray font-light text-sm'>September 2022 - Present</div>
            <div className='text-secondarygray mt-5 text-sm font-light'>
              Explain briefly what you do at the company here in not more than 40 words. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit ut aliquam,
            </div>
          </div>
        </div>
        <div className='flex-1 h-auto'>
          <div className='px-6 pt-7 pb-4 bg-white mb-4 rounded-md h-auto'>
            <div className='font-medium text-xl mb-5'>{`PORTFOLIO & CONTACT`}</div>
            <div className='flex items-center space-x-1 mb-3'>
              <Mail />
              <span className='text-secondarygray text-sm font-light'>
                <a href="">chrisfidel.international@gmail.com</a>
              </span>
            </div>
            <div className='flex items-center space-x-1 mb-3'>
              <Twitter />
              <span className='text-secondarygray text-sm font-light'>
                <a href="">chrisfidel.international@gmail.com</a>
              </span>
            </div>
            <div className='flex items-center space-x-1 mb-3'>
              <Linkedin />
              <span className='text-secondarygray text-sm font-light'>
                <a href="">https://www.linkedin.com/in/christian-chiemela-b88</a>
              </span>
            </div>
            <div className='flex items-center space-x-1 mb-3'>
              <Portfolio />
              <span className='text-secondarygray text-sm font-light'>
                <a href="">chrisfidel.international@gmail.com</a>
              </span>
            </div>
            <div className='flex items-center space-x-1 mb-3'>
              <Phone />
              <span className='text-secondarygray text-sm font-light'>
                <a href="">chrisfidel.international@gmail.com</a>
              </span>
            </div>
          </div>
          <div className='px-6 py-7 bg-white mb-4 rounded-md h-[239.74px]'>
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
          <div className='px-6 py-7 bg-white mb-4 rounded-md h-[164.74px]'>
            <div className='font-medium text-xl mb-5'>Education</div>
            <div className='flex flex-col space-y-2'>
              <div className='text-secondarygray text-sm'>B.Sc in Computer Science</div>
            <div className='text-secondarygray text-sm'>National Open University of Nigeria</div>
            <div className='text-secondarygray text-sm font-light'>2015 - 2019</div>
            </div>
          </div>
          <div className='px-6 py-7 bg-white rounded-md h-[164.74px]'>
            <div className='font-medium text-xl mb-5'>Certification</div>
            <div className='flex items-center space-x-3 mb-2'>
              <Cert />
              <span className='text-secondarygray text-sm font-light'>
                Product Design
              </span>
            </div>
            <div className='flex items-center space-x-3 mb-2'>
              <Cert />
              <span className='text-secondarygray text-sm font-light'>
                Product Design
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Template