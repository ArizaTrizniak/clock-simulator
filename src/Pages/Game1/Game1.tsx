import React, {useState, useEffect} from 'react';
import MechanicalClock from '../../components/MechanicalClock/MechanicalClock';
import ResultPopup from '../../components/ResultPopup/ResultPopup';
import ScoreCounter from '../../components/ScoreCounter/ScoreCounter';
import {checkTimeMatch, generateRandomTime, Time} from '../../utils/utils';
import './Game1.css';

const Game1: React.FC = () => {
    const InitialTimeMechanical:Time = { hours: 0, minutes: 0, period: 'AM' };
    const InitialTimeOrigin:Time = { hours: 0, minutes: 0 };
    const [mechanicalTime, setMechanicalTime] = useState(InitialTimeMechanical);
    const [originTime, setOriginTime] = useState(InitialTimeOrigin);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [match, setMatch] = useState(false);

    useEffect(() => {
        Update();
      }, []);

    const Update = () => {
        const randomTime: Time = generateRandomTime();
        setOriginTime(randomTime);

    };

    const handleCheck = () => {
        const match = checkTimeMatch(mechanicalTime, originTime);
        setMatch(match);
        setShowResult(true);
        if (match) {
            setScore(score + 1);
        }
    };


    const handleCloseResult = () => {
        setShowResult(false);
        Update();
    };

    return (
        <div className="Game_1">
            <MechanicalClock time={mechanicalTime} onSetTime={setMechanicalTime} />
            <div className='GamePanel'>
                <h1>Set the clock to <span>{`${originTime.hours}:${originTime.minutes}`}</span></h1>
                {!showResult && <button onClick={handleCheck} className='ButtonCheck'>Check</button>}
                {showResult && <ResultPopup match={match} onClose={handleCloseResult} />}
                <ScoreCounter score={score} />
            </div>
        </div>
    );
}

export default Game1;
