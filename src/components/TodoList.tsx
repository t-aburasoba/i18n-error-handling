'use client';
import React from 'react';
import { Todo } from '@/types/Todo';

interface TodoListProps {
  todos: Todo[];
}

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className="p-0 list-none">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="my-2 p-2 border border-gray-300 rounded-lg flex items-center"
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => null}
            className="mr-2"
          />
          <span
            className={`font-bold ${
              todo.completed ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {todo.title}
          </span>
        </li>
      ))}
    </ul>
  );
};
