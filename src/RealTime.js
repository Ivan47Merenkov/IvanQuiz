import React, { useState, useEffect } from 'react';

const RealTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Реальное время — {time}</h2>
    </div>
  );
};

export default RealTime;