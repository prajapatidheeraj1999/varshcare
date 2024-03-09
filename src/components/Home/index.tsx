"use client"
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Countdown from './Countdown'
import FirstSection from './Main'
import ChooseUs from './ChooseUs'

const HomePage = () => {
  return (
    <div className='flex flex-col gap-1 bg-primary-100'>
            <Navbar/>
            <FirstSection/>
            <Countdown/>
            <ChooseUs/>
            <Footer/>

    </div>
  )
}

export default HomePage