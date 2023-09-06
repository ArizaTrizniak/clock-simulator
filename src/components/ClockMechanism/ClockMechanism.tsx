import React, {useEffect, useState} from 'react';
import './ClockMechanism.css';
import ClockFace from './ClockFace/ClockFace';
import {ClockProps} from '../types';
import {CLOCK_SIZE} from '../const';
import HourClockHand from './ClockHand/HourClockHand';
import MinuteClockHand from './ClockHand/MinuteClockHand';

const ClockMechanism: React.FC<ClockProps> = ({time, onSetTime}) => {

    const [size, setSize] = useState(CLOCK_SIZE);
    useEffect(() => {
        const handleResize = () => {
            setSize(Math.min(window.innerWidth, window.innerHeight) * 0.8);
            console.log(Math.min(window.innerWidth, window.innerHeight))
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
             style={{
                 height: `${size}px`,
                 width: `${size}px`,
             }}
             onDragOver={handleDragOver}
             onDragEnter={handleDragEnter}
             onDragExit={handleDragExit}>
            <ClockFace clockSize={size}/>
            <MinuteClockHand minute={time.minutes} setMinute={setMinute} clockSize={size}/>
            <HourClockHand hour={time.hours} setHour={setHour} clockSize={size}/>

            <div
                className="clockCenter"
                style={{
                    left: `${size / 2 - 10}px`,
                    top: `${size / 2 - 10}px`,
                }}
            ></div>
        </div>
    );
}

export default ClockMechanism;
