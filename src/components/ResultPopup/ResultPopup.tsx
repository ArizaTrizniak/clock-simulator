import React from 'react';
import './ResultPopup.css';

interface Props {
  match: boolean;
  onClose: () => void;
}

const ResultPopup: React.FC<Props> = ({ match, onClose }) => {
  return (
    <div className='Wrapper'>
      <div className={match ? 'Success' : 'Failure'}>
        {match ? 'Match!' : 'No match.'}
      </div>
      <button className="Close" onClick={onClose}>Next</button>
    </div>
  );
};

export default ResultPopup;
