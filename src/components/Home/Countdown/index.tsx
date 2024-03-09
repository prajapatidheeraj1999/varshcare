
import React from 'react'
import CountUp from 'react-countup';

const Countdown = () => {
    
  return (
    <div className='flex justify-around py-7 sm:text-2xl text-lg text-white bg-black sm:w-11/12 w-[95%]  rounded-2xl m-auto'>
        <div className='flex  flex-1 flex-col gap-1 items-center border-r border-white'>
            <div className='flex'>
            <CountUp end={123457} />
            <p>+</p>
            </div>
        
        <p className='text-sm'>Test Performed</p>
        </div>
        
        <div className='flex flex-1 flex-col gap-1 items-center border-r border-white'>
            <div className='flex'>
            <CountUp  end={12} />
            <p>+</p>
            </div>
        
        <p className='text-sm'>Year Experience </p>
        </div>
       
        <div className='flex flex-1 flex-col gap-1 items-center'>
            <div className='flex'>
            <CountUp  end={6000}/>
            <p>+</p>
            </div>
        
        <p className='text-sm'>Location</p>
        </div>
        
        
    </div>
  )
}

export default Countdown