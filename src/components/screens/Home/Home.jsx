import React, { useState } from 'react';
import { todoData } from './todos';
import TodoItem from './TodoItem/TodoItem';
import { CreateTodoField } from './CreateTodoField/CreateTodoField';

export const Home = () => {
  const [todos, setTodos] = useState(todoData);

  const isCompleted = (id) => {
    const copy = [...todos]
    const current = copy.find(t => t.id === id)
    current.isCompleted = !current.isCompleted
    setTodos(copy)
  }

  const addTodo = (title) => {
    if (title.trim() === '') {
      return;
    }

    setTodos([
      {
        id: new Date(),
        title,
        isCompleted: false,
      },
      ...todos
    ]);
  };

  const todoRemove = id => setTodos([...todos].filter(t => t.id !== id))

  return (
    <div className='bg-bgtodo h-screen pt-14'>
      <div className='max-w-screen-md mx-auto'>
        <CreateTodoField addTodo={addTodo} />
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} isCompleted={isCompleted} todoRemove={todoRemove} />
        ))}
      </div>
    </div>
  );
};
