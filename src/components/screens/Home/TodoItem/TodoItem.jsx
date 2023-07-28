import React from 'react'
import cn from 'classnames'
import { Check } from './Check'
import { MdDeleteOutline } from 'react-icons/md'

const TodoItem = ({ todo, isCompleted, todoRemove }) => {

  return (
    <div className='flex items-center justify-between px-5 py-6 bg-bgitem mb-3 rounded-2xl w-full'>
      <button className='flex items-center pr-4' onClick={() => isCompleted(todo.id)}>
        <Check isCompleted={todo.isCompleted} />
        <div className={cn('text-white', {
          'line-through': todo.isCompleted
        })}>{todo.title}</div>
      </button>
      <button>
        <MdDeleteOutline size={26} color='#F7749E' onClick={() => todoRemove(todo.id)} />
      </button>
    </div>
  )
}

export default TodoItem