import React from 'react'
import { Check } from './Check'

const TodoItem = ({ todo }) => {
  return (
    <div className='flex items-center px-5 py-6 bg-bgitem mb-3 rounded-2xl'>
      <Check />
      <div className='text-white'>{todo.title}</div>
    </div>
  )
}

export default TodoItem