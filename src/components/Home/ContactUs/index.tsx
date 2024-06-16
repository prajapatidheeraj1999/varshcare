import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input'
import { Formik } from 'formik'
import React from 'react'

type initialValueProp={
    firstName:string;
    lastName:string;
    email:string;
    phoneNumber:string;
    message:string
}

const initialValue:initialValueProp={
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    message:""
}

const ContactUsInput=Input<initialValueProp>
const ContactUs = () => {

    const handelSubmit=()=>{

    }
  return (
    <div className='my-7'>
        <h1 className='font-bold text-2xl text-center my-4'>Contact Us</h1>
      <div className='flex sm:flex-col lg:flex-row w-[80%] m-auto border border-red-700  bg-white rounded-lg  p-3 '>
        <div className='flex flex-col sm:gap-2 lg:gap-5 bg-primary-900 text-white lg:basis-2/5 pl-8 rounded-lg py-5' >
            <h1 className='font-bold text-xl'>
                Contact Information
            </h1>
            <div>6393564926</div>
            <div>dheerajprajapatijnp@gmail.com</div>
            <div>mumbai malad</div>
        </div>
         <div className="sm:block lg:basis-3/5 px-4 py-10">
        <Formik<initialValueProp>  initialValues={initialValue}  onSubmit={handelSubmit}>{()=>{
           return <div>
            <div className='flex gap-2'>
                <ContactUsInput name='firstName' label='First Name' />
                <ContactUsInput name='lastName' label='Last Name' />
            </div>
            <div className='flex gap-2'>
            <ContactUsInput name='email' label='Email' />
            <ContactUsInput name='phoneNumber' label='Phone Number' />

            </div>
            <div>
            <ContactUsInput name='message' as='textarea' label='message' />

            </div>
            <div className='flex justify-center mt-4'>
                <Button className='text-white'>Send Message</Button>
            </div>

            </div>

            
            }}
                
          </Formik>
          </div>
     </div>
    </div>
  )
}

export default ContactUs