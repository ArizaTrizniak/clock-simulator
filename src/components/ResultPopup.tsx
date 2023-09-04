import React from 'react';

interface Props {
  match: boolean;
  onClose: () => void;
}

const ResultPopup: React.FC<Props> = ({ match, onClose }) => {
  return (
    <div>
      <div>{match ? 'Match!' : 'No match.'}</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ResultPopup;
