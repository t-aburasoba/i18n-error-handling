"use client"
import React from 'react';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
}

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul style={{ padding: '0', listStyleType: 'none' }}>
      {todos.map((todo, index) => (
        <li
          key={todo.id}
          style={{
            margin: '10px 0',
            padding: '10px',
            backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#e9e9e9',
            borderBottom: '1px solid #ccc',
            borderRadius: '5px',
          }}
        >
          <span style={{ fontWeight: 'bold', color: todo.completed ? 'green' : 'red' }}>{todo.title}</span> - {todo.completed ? "Completed" : "Not completed"}
        </li>
      ))}
    </ul>
  );
}