import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import { Formik } from 'formik';
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";

type initialValueProp = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
};

const initialValue: initialValueProp = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: ""
};

const ContactUsInput = Input<initialValueProp>;
const ContactUs = () => {

    const handleSubmit = () => {
        // handle form submission logic here
    };

    return (
        <div className="my-7">
            <h1 className="font-bold text-2xl text-center my-4">Get In Touch With Us</h1>
            <div className="flex flex-col lg:flex-row w-[85%] lg:w-[80%] m-auto shadow-lg bg-white rounded-lg p-3 border border-solid border-text-3">
                <div className="flex flex-col gap-2 bg-primary-900 text-white lg:basis-2/5 p-5 rounded-lg mb-4 lg:mb-0 lg:mr-4">
                    <h1 className="font-bold text-xl">
                        Contact Information
                    </h1>
                    <div className='flex gap-1 items-center'><span><MdPhoneInTalk /></span> <span>6393564926</span></div>
                    <div className='flex gap-1 items-center'> <span> <MdMarkEmailUnread /></span><span> dheerajprajapatijnp@gmail.com</span> </div>
                    <div className='flex gap-1 items-center'><span><FaLocationDot /></span> <span>mumbai malad</span></div>
                </div>
                <div className="lg:basis-3/5 px-4 py-10">
                    <Formik<initialValueProp> initialValues={initialValue} onSubmit={handleSubmit}>
                        {() => (
                            <div>
                                <div className="flex flex-col lg:flex-row gap-2 mb-4">
                                    <ContactUsInput name="firstName" label="First Name" placeholder='Enter your first Name' />
                                    <ContactUsInput name="lastName" label="Last Name" />
                                </div>
                                <div className="flex flex-col lg:flex-row gap-2 mb-4">
                                    <ContactUsInput name="email" label="Email" />
                                    <ContactUsInput name="phoneNumber" label="Phone Number" />
                                </div>
                                <div className="mb-4">
                                    <ContactUsInput name="message" as="textarea" label="Message" />
                                </div>
                                <div className="flex justify-center mt-7">
                                    <Button size='lg' className="text-white" >Send Message</Button>
                                </div>
                            </div>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
