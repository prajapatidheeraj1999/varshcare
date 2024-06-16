import React from 'react'
import ChooseUsCart from './Cart'
import { contactUsData } from './Data'

const ChooseUs = () => {
  return (
    <div className=' w-[90%] sm:w-[80%]  m-auto mt-10 border-solid border border-red-600'>
        <h1 className='text-2xl font-bold mb-7 m-auto text-center'>Why ChooseUS</h1>
        <div className='sm:w-[90%] lg:w-[80%]  m-auto'>
        <div className='grid gap-y-6 grid-cols-1 sm:grid-cols-3 place-items-center'>
            {
                contactUsData.map((el)=><ChooseUsCart key={el.heading} content={el.content} heading={el.heading} svg={el.svg} bSvg={el.bSvg}/>)
            }
        </div>
        </div>

    </div>
  )
}

export default ChooseUs