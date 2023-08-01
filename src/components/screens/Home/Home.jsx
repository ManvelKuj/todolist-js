import React, { useState, useEffect } from 'react';
import { todoData } from './todos';
import TodoItem from './TodoItem/TodoItem';
import { CreateTodoField } from './CreateTodoField/CreateTodoField';
import { TodoFooter } from './TodoFooter/TodoFooter';

export const Home = () => {
  const initialTodos = JSON.parse(localStorage.getItem('todos')) || todoData;
  const [todos, setTodos] = useState(initialTodos);

  const isCompleted = (id) => {
    const copy = [...todos];
    const current = copy.find(t => t.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const addTodo = (title) => {
    if (title.trim() === '') {
      return;
    }

    setTodos([
      {
        id: Date.now(),
        title,
        isCompleted: false,
      },
      ...todos
    ]);
  };

  const todoRemove = (id) => setTodos([...todos].filter(t => t.id !== id));

  const onClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='h-full py-14'>
      <div className='max-w-screen-md mx-auto'>
        <CreateTodoField addTodo={addTodo} />
        <p className='text-white mb-5'>
          {(todos.length === 0) ? 'No tasks' : (todos.length === 1) ? ` Task  - ${todos.length}` : ` Tasks  - ${todos.length}`}
        </p>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} isCompleted={isCompleted} todoRemove={todoRemove} />
        ))}
        <TodoFooter todos={todos} isCompleted={isCompleted} onClearCompleted={onClearCompleted} />
      </div>
    </div>
  );
};
