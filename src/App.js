import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(prev => !prev);
    }, 500); // Change the interval to make it blink

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1 className={`love-text ${blink ? 'blink' : ''}`}>I LOVE YOU</h1>
    </div>
  );
}

export default App;
