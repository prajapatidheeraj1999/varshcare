import Icon from '@/components/Icon'
import React from 'react'
import { BsTelephoneInboundFill } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='flex justify-between px-5 items-center sm:px-28 w-full h-10 bg-background-1 py-10 border-b-2 border-solid border-text-3'>

        <div className='flex flex-row items-center gap-1'><Icon icon='modernMachine' size={20} className='w-10 h-10'/><div className='text-xl sm:text-3xl font-bold'><span className='text-primary-900'>Varsha</span><span>Care</span></div></div>
        <div className='flex items-center gap-1 text-primary text-xl'><span><BsTelephoneInboundFill /></span><span>6393564926</span> </div>

    </div>
  )
}

export default Navbar