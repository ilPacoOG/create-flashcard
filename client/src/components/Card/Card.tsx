import React, { useState, useRef, useEffect } from 'react';
import './sharedcard.css'; // Consolidated shared styles

interface CardProps {
  question: string;
  answer: string;
}

const Card: React.FC<CardProps> = ({ question, answer }) => {
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState('initial');
  const frontEl = useRef<HTMLDivElement>(null);
  const backEl = useRef<HTMLDivElement>(null);

  const setMaxHeight = () => {
    const frontHeight = frontEl.current?.getBoundingClientRect().height || 0;
    const backHeight = backEl.current?.getBoundingClientRect().height || 0;
    setHeight(`${Math.max(frontHeight, backHeight, 100)}px`);
  };

  useEffect(() => {
    setMaxHeight();
    window.addEventListener('resize', setMaxHeight);
    return () => window.removeEventListener('resize', setMaxHeight);
  }, [question, answer]);

  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      style={{ height }}
      onClick={() => setFlip(!flip)}
    >
      <div className="front" ref={frontEl}>
        <div className="question">{question}</div>
      </div>
      <div className="back" ref={backEl}>
        <div className="answer">{answer}</div>
      </div>
    </div>
  );
};

export default Card;
