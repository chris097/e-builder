import React from 'react'
// import { fetchApi } from '../../helpers/api/fetchApi'
// import useQueryApi from '../../helpers/useQuery'
import Certification from '../certification'
import Education from '../education'
import PortfolioContact from '../portfolioContact'
import Skill from '../skills'
import WorkHistory from '../workHistory'
import About from './about'


const Template = React.forwardRef((props, ref: any) => {

  return (
    <div ref={ref} className='bg-primarygray h-auto rounded-md w-full px-6 py-8'>
      <About />
      <div className='w-full space-y-6 mt-4'>
        <WorkHistory />
        <div className='md:flex md:gap-6 block w-full'>
          <PortfolioContact />
          <Skill />
        </div>
        <div className='md:flex md:gap-6 block w-full'>
          <Education />
          <Certification />
        </div>
      </div>
    </div>
  )
})

export default Template;