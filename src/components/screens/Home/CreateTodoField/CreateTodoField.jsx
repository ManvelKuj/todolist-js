import React, { useState } from 'react'
import { IoMdAdd } from 'react-icons/io'

export const CreateTodoField = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const handleAddTodo = () => {
    addTodo(title);
    setTitle('');
  };
  return (
    <div className="relative mb-10">
      <input type="text"
        className='w-full bg-transparent h-11 border-2 rounded-2xl border-bgitem outline-none pl-14 text-white'
        onChange={e => setTitle(e.target.value)}
        value={title}
        onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
        placeholder='Add a task'
      />
      <button className='w-6 h-6 bg-bgcheck flex items-center justify-center rounded-lg absolute top-1/2 -translate-y-1/2 left-4' type='submit' onClick={handleAddTodo}><IoMdAdd /></button>
    </div>
  )
}
