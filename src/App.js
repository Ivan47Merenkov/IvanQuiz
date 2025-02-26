import React from 'react';
import ToDoList from './ToDoList';
import NamesList from './NamesList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">To-Do List</h1>
      <ToDoList />
      <h2 className="title">All names</h2>
      <NamesList />
    </div>
  );
}

export default App;