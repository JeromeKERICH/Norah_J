import React from 'react';
import { Howl } from 'howler';
import arabicVoice from '../src/assets/arabic.mp3';

const HugButton = ({ setShowAffirmation }) => {
  const playSound = () => {
    const sound = new Howl({
      src: [arabicVoice], // Path to the Arabic voice file
    });
    sound.play(); // Play sound when clicked
  };

  const handleClick = () => {
    setShowAffirmation(true);
    playSound();
  };

  return (
    <button className="hug-button" onClick={handleClick}>
      Click here Baby! 🤗
    </button>
  );
};

export default HugButton;
