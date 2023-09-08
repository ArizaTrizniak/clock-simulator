import React from 'react';
import './ScoreCounter.css';

interface Props {
  score: number;
}

const ScoreCounter: React.FC<Props> = ({ score }) => {
  return (
    <div className='ScoreCounter'>
      Score: <span>{score}</span>
    </div>
  )
};

export default ScoreCounter;
