import React from 'react'
import useQueryApi from '../../helpers/useQuery';
import Linkedin from '../../public/svgs/linkedin';
import Mail from '../../public/svgs/mail';
import Phone from '../../public/svgs/phone';
import Portfolio from '../../public/svgs/portfolio';
import Twitter from '../../public/svgs/twitter';

const PortfolioContact = () => {
  
  const { data, isLoading } = useQueryApi(['info'], 'user/info');
  const infos: [] = data?.data;

  return (
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
  )
}

export default PortfolioContact;