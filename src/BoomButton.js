import React, { useState, useEffect } from 'react';

const BoomButton = () => {
  const [seconds, setSeconds] = useState(3);
  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => setSeconds(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else {
      setShowGif(true);
    }
  }, [seconds]);

  return (
    <div className="timerContainer">
      {seconds > 0 ? (
        <h2 className="timerText">{seconds}</h2>
      ) : (
        showGif && (
          <img src="https://i.gifer.com/Cie.gif" alt="Detonation" className="detonationGif" />
        )
      )}
    </div>
  );
};

export default BoomButton;