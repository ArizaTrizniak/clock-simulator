import React from 'react';
import ClockMechanism from './ClockMechanism/ClockMechanism';
import {ClockProps} from './types';

const MechanicalClock: React.FC<ClockProps> = ({time, onSetTime}) => {

    const handleSwitchPeriod = () => {
        onSetTime({...time, period: time.period === 'AM' ? 'PM' : 'AM'});
    };

    return (
        <div>
            <ClockMechanism time={time} onSetTime={onSetTime}/>

         {/*   <div>{`${time.hours}:${time.minutes} ${time.period}`}</div>
            <button onClick={handleSwitchPeriod}>Switch AM/PM</button>*/}
        </div>
    );
};

export default MechanicalClock;
