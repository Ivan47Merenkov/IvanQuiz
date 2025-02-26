import React, { useState } from 'react';
import './App.css';

const ToDoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, name: task }]);
      setTask('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="todo-container">
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Напишите задачу"
        />
        <button onClick={handleAddTask}>Добавить</button>
      </div>

      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={task.id} className="task-item">
            <span className="task-number">{task.id}.</span>
            <span className="task-name">{task.name}</span>
            <button className="delete-btn" onClick={() => handleDeleteTask(task.id)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;