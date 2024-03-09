import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import CustomModal from '@/components/UI/Modal'
import { Formik, FormikHelpers } from 'formik';
import React from 'react'
import { RxCross2 } from 'react-icons/rx';

type RequestCallbackModalProps={
    open:boolean;
    setOpen:React.Dispatch<React.SetStateAction<boolean>>;
}

type initialValueProp ={
    name:string;
    phoneNumber:string;
}

const initialValue:initialValueProp={
    name:"",
    phoneNumber:""
}

const RequestCallbackModalInput=Input<initialValueProp>

const RequestCallbackModal:React.FC<RequestCallbackModalProps> = ({open,setOpen}) => {

    const handelSubmitRequest=(values: initialValueProp, {resetForm}: FormikHelpers<initialValueProp>)=>{
        console.log( "this is values",values)
        resetForm()

    }
  return (
    
        <CustomModal open={open} onOpenChange={setOpen} >
            <Formik initialValues={initialValue} onSubmit={handelSubmitRequest} >
                {({values,handleSubmit})=>(
                <div className=" relative rounded   max-w-[100vw] sm:min-w-[30vw] bg-white">

                    <div className='flex justify-center mb-7'>
                        <h1 className='font-bold text-2xl sm:3xl text-primary'>Request Callback</h1>
                        
                    </div>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                    <RequestCallbackModalInput name='name' placeholder='Enter Your FullName'label='FullName' />
                    <RequestCallbackModalInput name='phoneNumber' placeholder='Enter Your PhoneNumber' label='Phone Number'/>
                    </div>
                    <div className='my-7'>
                    <Button onClick={()=>handleSubmit()}>Request Callback</Button>
                    </div>
                    <div className='text-sm'>
                        <span className='text-primary'>Note :</span><span className='text-slate-400'> I allow VarshaCare to Call/ Whatsapp/ Mail/ SMS</span>
                    </div>


                <div
                className="absolute top-0 right-0 text-lg cursor-pointer hover:text-red-600"
                onClick={() => setOpen(!open)}
              >
                <RxCross2  className='w-5 h-5'/>
              </div>
                

                </div>
                )}

            </Formik>

        </CustomModal>
  )
}

export default RequestCallbackModal