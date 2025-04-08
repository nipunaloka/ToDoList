import React, { useState } from 'react';
import TodoInput from './components/TodoInputs';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import './index.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Personal');
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['Work', 'Personal', 'Shopping'];

  const handleAddTodo = () => {
    if (inputText.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputText.trim(),
          category: selectedCategory,
        },
      ]);
      setInputText('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = filterCategory === 'All'
    ? todos
    : todos.filter(todo => todo.category === filterCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Interactive Todo List
        </h1>

        <TodoInput
          inputText={inputText}
          setInputText={setInputText}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          handleAddTodo={handleAddTodo}
          categories={categories}
        />

        <Filter
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          categories={categories}
        />

        <TodoList todos={filteredTodos} handleDeleteTodo={handleDeleteTodo} />
      </div>
    </div>
  );
}

export default App;