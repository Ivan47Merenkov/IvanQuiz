import React, { useState, useEffect } from 'react';
import './App.css';

const NamesList = () => {
  const [names, setNames] = useState([]);
  const [showNames, setShowNames] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setNames(data));
  }, []);

  return (
    <div className="names-container">
      <button className="switch-btn" onClick={() => setShowNames(!showNames)}>
        {showNames ? 'Скрыть имена' : 'Показать имена'}
      </button>

      {showNames && (
        <div className="names-list">
          {names.map((user, index) => (
            <div key={index} className="user-item">{user.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NamesList;