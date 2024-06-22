"use client"
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Countdown from './Countdown'
import FirstSection from './Main'
import ChooseUs from './ChooseUs'
import ContactUs from './ContactUs'
import PricingCart from './PriceCart'
import { testData } from './PriceCart/data'
import Testimonial from './Testimonial'

const HomePage = () => {
  return (
    <div className='flex flex-col gap-1 bg-primary-100'>
            <Navbar/>
            <FirstSection/>
            <Countdown/>
            <PricingCart tests={testData} />
            <ChooseUs/>
            <Testimonial />
            <ContactUs/>
            <Footer/>

    </div>
  )
}

export default HomePage