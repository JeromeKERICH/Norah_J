import React from 'react';
import { Howl } from 'howler';
import arabicVoice from '/assets/arabic.mp3';

const HugButton = ({ setShowAffirmation }) => {
  const playSound = () => {
    const sound = new Howl({
      src: [arabicVoice], 
    });
    sound.play(); 
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
