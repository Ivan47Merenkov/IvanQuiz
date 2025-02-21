import React, { useState } from 'react';
import './App.css';
import RealTime from './RealTime';
import RegForm from './RegForm';
import BoomButton from './BoomButton';

function App() {
  const [showTimer, setShowTimer] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    setShowTimer(true);
  };

  return (
    <div className="App">
      <RealTime />
      <RegForm />
      {!isButtonClicked && (
        <button onClick={handleButtonClick} className="blastButton">
          ПУЛЬТ ОТ ЯДЕРКИ
        </button>
      )}
      {showTimer && <BoomButton />}
    </div>
  );
}

export default App;