import React from 'react';
import './ClockMechanism.css';
import ClockFace from './ClockFace/ClockFace';
import {ClockProps} from '../types';
import {CLOCK_RADIUS} from '../const';
import HourClockHand from './ClockHand/HourClockHand';
import MinuteClockHand from './ClockHand/MinuteClockHand';

const ClockMechanism: React.FC<ClockProps> = ({time, onSetTime}) => {
    const handleDragExit = (event: React.DragEvent<HTMLDivElement>) => {
        event.stopPropagation();
        event.preventDefault();
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.stopPropagation();
        event.preventDefault();
    };

    const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
        event.stopPropagation();
        event.preventDefault();
    };

    function setMinute(minute: number) {
        onSetTime({...time, minutes: Math.trunc(minute)});
    }

    function setHour(hour: number) {
        onSetTime({...time, hours: Math.trunc(hour)});
    }

    return (
        <div className="clockMechanism"
             onDragOver={handleDragOver}
             onDragEnter={handleDragEnter}
             onDragExit={handleDragExit}>
            <ClockFace/>
            <MinuteClockHand minute={time.minutes} setMinute={setMinute}/>
            <HourClockHand hour={time.hours} setHour={setHour}/>
            <div
                className="clockCenter"
                style={{
                    left: `${CLOCK_RADIUS - 10}px`,
                    top: `${CLOCK_RADIUS - 10}px`,
                }}
            ></div>
        </div>
    );
}

export default ClockMechanism;
