import React, {useState} from 'react';
import MechanicalClock from '../../components/MechanicalClock';
import ElectronicClock from '../../components/ElectronicClock';
import ResultPopup from '../../components/ResultPopup';
import ScoreCounter from '../../components/ScoreCounter';
import './Game1.css';
import {checkTimeMatch, generateRandomTime, Time, to12HourTime} from "../../utils/utils";
import {Link} from "react-router-dom";

const Game1: React.FC = () => {
    const InitialTimeMechanical:Time = { hours: 0, minutes: 0, period: 'AM' };
    const InitialTimeElectronic:Time = { hours: 0, minutes: 0 };
    const [mechanicalTime, setMechanicalTime] = useState(InitialTimeMechanical);
    const [electronicTime, setElectronicTime] = useState(InitialTimeElectronic);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [match, setMatch] = useState(false);

    const handleStart = () => {
        const randomTime:Time = generateRandomTime();
        setMechanicalTime(to12HourTime(randomTime));
        setElectronicTime(randomTime);
    };

    const handleCheck = () => {
        const match = checkTimeMatch(mechanicalTime, electronicTime);
        setMatch(match);
        setShowResult(true);
        if (match) {
            setScore(score + 1);
        }
    };


    const handleCloseResult = () => {
        setShowResult(false);
    };

    return (
        <div className="Game_1">
            <MechanicalClock time={mechanicalTime} onSetTime={setMechanicalTime} />
          {/*  <ElectronicClock time={electronicTime} setTime={setElectronicTime} />*/}
{/*            <button onClick={handleStart}>Start</button>
            <button onClick={handleCheck}>Check</button>
            {showResult && <ResultPopup match={match} onClose={handleCloseResult} />}
            <ScoreCounter score={score} />
            <Link to="/">MainMenu</Link>*/}
        </div>
    );
}

export default Game1;