import React from 'react'
import { BsCheck } from 'react-icons/bs'

export const Check = ({ isCompleted }) => {
  return (
    <div className='border-2 rounded-lg border-bgcheck w-5 h-5 mr-3'>
      {isCompleted && <BsCheck size={24} className='text-gray-900' />}
    </div>
  )
}
