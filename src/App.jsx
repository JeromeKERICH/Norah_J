import React, { useState, useRef } from 'react';
import Affirmation from '../components/Affirmation';
import '../src/App.css';

function App() {
  const [showAffirmation, setShowAffirmation] = useState(false);
  const audioRef = useRef(null); // Reference to the audio element

  const handleClick = () => {
    setShowAffirmation(!showAffirmation);
    if (audioRef.current) {
      audioRef.current.play(); // Play the audio when the button is clicked
    }
  };

  return (
    <div className="app-container">
      <div className="content">
        <h1>🌟 Virtual Hug for You 🌟</h1>
        <p className="intro-text">
          Life may throw challenges your way, but you are stronger than you think. Here's a little something to remind you of your strength.
        </p>
        <button 
          className="hug-button"
          onClick={handleClick}
        >
          Send Me a Hug 💖
        </button>
        {showAffirmation && <Affirmation />}
        
        {/* Audio element */}
        <audio ref={audioRef} src="../src/assets/arabic.mp3" preload="auto" />
      </div>
    </div>
  );
}

export default App;
