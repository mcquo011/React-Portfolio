// src/components/Typewriter.js

import React, { useState, useEffect } from "react";

const Typewriter = ({ phrases, delay = 3000, typingSpeed = 150 }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timer;
    let typingTimer;

    if (isTyping) {
      typingTimer = setTimeout(() => {
        setDisplayText(
          (prev) => prev + phrases[currentPhraseIndex].charAt(prev.length)
        );
        if (displayText.length === phrases[currentPhraseIndex].length - 1) {
          setIsTyping(false);
        }
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setDisplayText("");
        setIsTyping(true);
      }, delay);
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(typingTimer);
    };
  }, [phrases, currentPhraseIndex, displayText, isTyping, delay, typingSpeed]);

  return (
    <div className="typewriter-container">
      <p>{displayText}</p>
    </div>
  );
};

export default Typewriter;
