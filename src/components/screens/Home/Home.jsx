import React, { useState } from 'react';
import { todoData } from './todos';
import TodoItem from './TodoItem/TodoItem';
import { CreateTodoField } from './CreateTodoField/CreateTodoField';

export const Home = () => {
  const [todos, setTodos] = useState(todoData);

  const addTodo = (title) => {
    if (title.trim() === '') {
      // Prevent adding empty todos
      return;
    }

    setTodos([
      {
        id: Math.random(),
        title,
        isCompleted: false,
      },
      ...todos
    ]);
  };

  return (
    <div className='bg-bgtodo h-screen pt-14'>
      <div className='max-w-screen-md mx-auto'>
        <CreateTodoField addTodo={addTodo} />
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};
