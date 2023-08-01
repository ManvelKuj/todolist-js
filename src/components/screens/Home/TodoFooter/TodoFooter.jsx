import React from 'react'

export const TodoFooter = ({ todos, onClearCompleted }) => {
  const completedCount = todos.filter((todo) => todo.isCompleted).length;
  return (
    <div className='flex justify-between items-center'>
      <span className='text-white'>{(completedCount === 0) ? '' : (completedCount === todos.length) ? 'All tasks completed' : `Completed - ${completedCount}`}</span>
      <button className='bg-bgcheck py-2 px-5 rounded-lg' onClick={onClearCompleted}>Clear completed</button>

    </div>
  )
}
