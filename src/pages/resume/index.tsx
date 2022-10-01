import React from 'react'
import Footer from '../../components/footer';
import Header from '../../components/header';
import ResumeSection from '../../components/sections/resume';
import Template from '../../components/template';

const Resume = () => {
  return (
      <div>
        <Header />
          <div className='flex max-w-6xl w-full mx-auto space-x-16 mt-16 mb-28'>
            <ResumeSection />
              <Template />
          </div>
        <Footer />
      </div>
  )
}

export default Resume