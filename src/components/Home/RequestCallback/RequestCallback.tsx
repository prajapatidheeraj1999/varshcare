import Button from '@/components/UI/Button'
import React, { useState } from 'react'
import RequestCallbackModal from './RequestCallbackModal/RequestCallbackModal'

const RequestCallback = () => {
    const [open,setOpen]=useState(false)
  return (
    <div>
        <Button variant='primary' className='mt-10' size='lg' onClick={()=>setOpen(!open)}>Request Callback</Button>
        <RequestCallbackModal open={open} setOpen={setOpen}/>
    </div>
  )
}

export default RequestCallback