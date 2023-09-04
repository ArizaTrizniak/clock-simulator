import React from 'react';

interface Props {
  score: number;
}

const ScoreCounter: React.FC<Props> = ({ score }) => {
  return <div>Score: {score}</div>;
};

export default ScoreCounter;
