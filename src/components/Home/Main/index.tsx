import Button from '@/components/UI/Button'
import CustomModal from '@/components/UI/Modal'
import React from 'react'
import RequestCallback from '../RequestCallback/RequestCallback'

const FirstSection = () => {
  return (
    <div className='py-5'>
    <div className=' flex flex-col justify-around sm:flex-row items-center'>
        <div  className='mt-10 order-2 sm:order-1'>
            <p className='text-text-3 font-bold text-xl sm:text-xl'>Introducing All new lab Test Facility</p>
            <div className='text-3xl sm:text-5xl font-bold flex flex-col gap-4 my-4'>
            <h1 >Discover Accurate</h1>
            <h1 >Diagnostics & Reliable</h1>
            <h1 className='text-primary'>Testing Services.</h1>
            </div> 
            <RequestCallback />
            
        </div>
        <div className='rounded-full order-1 sm:order-2'>
            <img className='w-80 h-80 sm:w-96 sm:h-96 rounded-full' 
             src="https://img.freepik.com/free-photo/preparation-blood-test-by-female-doctor-medical-uniform-table-white-bright-room-nurse-pierces-patient-s-arm-vein-with-needle-blank-tube_657921-883.jpg?size=626&ext=jpg&ga=GA1.1.2037837196.1707574153&semt=ais" alt="test" />
        </div>

    </div>



    </div>
  )
}

export default FirstSection