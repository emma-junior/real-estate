import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const ContactUs = () => {
  return (
    <div className='bg-[#F3F4F6] h-[500]'>
        <Navbar />
        <Contact />
        <Footer />
    </div>
  )
}

export default ContactUs