import React from 'react';
import { Trash2 } from 'lucide-react';

function TodoList({ todos, handleDeleteTodo }) {
  return (
    <div className="bg-white rounded-lg shadow-md">
      {todos.length === 0 ? (
        <div className="p-8 text-center text-gray-500">
          No todos yet. Add some tasks to get started!
        </div>
      ) : (
        <ul className="divide-y divide-gray-200">
          {todos.map(todo => (
            <li key={todo.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
              <div>
                <p className="text-gray-800">{todo.text}</p>
                <span className={`
                  inline-block px-2 py-1 text-xs rounded-full mt-1
                  ${todo.category === 'Work' ? 'bg-blue-100 text-blue-800' : ''}
                  ${todo.category === 'Personal' ? 'bg-green-100 text-green-800' : ''}
                  ${todo.category === 'Shopping' ? 'bg-yellow-100 text-yellow-800' : ''}
                `}>
                  {todo.category}
                </span>
              </div>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 size={20} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
