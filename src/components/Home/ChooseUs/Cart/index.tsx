import { IconElement } from '@/components/Icon';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import React, { ReactNode } from 'react'

type ChooseUsCartProp={
    svg:ReactNode;
    heading:string;
    content:string;
}

const ChooseUsCart:React.FC<ChooseUsCartProp> = ({svg,heading,content}) => {
  return (
    <div className='flex flex-col gap-2 w-64 justify-center items-center bg-white shadow-md rounded-lg py-6 px-6 '>
        <div>{svg}</div>
        <div className='font-bold text-md'>{heading}</div>
        <div>{content}</div>
    </div>
  )
}

export default ChooseUsCart