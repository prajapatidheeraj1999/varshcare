"use client"
import { useEffect, useState } from 'react'

const Timer = () => {
  const [time, setTime]=useState(0)
  const [isActive,setIsActive]=useState(false)


  useEffect(()=>{
    let interval:NodeJS.Timeout;

    if(isActive && time>0)
    {
      interval=setInterval(()=>{
        setTime((time)=>time+1)

      },1000)
    }else if(!isActive){
      clearInterval(interval)
    }   
    return ()=>{
      clearInterval(interval)
    }

  },[isActive, time])


  return (
    <div>
      <h1>Timer : {time}</h1>
        
    <div className='flex gap-4'>
      <button className='px-5 py-2 bg-blue-600'>Start</button>
      <button className='px-5 py-2 bg-blue-600'>Reset</button>
      <button className='px-5 py-2 bg-blue-600'>Pause</button>

        </div>
    

    </div>
  )
}

export default Timer