import React from 'react';
import ClockHand from './ClockHand';

export interface MinuteClockHandProps{
    minute: number;
    setMinute: (minute: number) => void;
    clockSize: number;
}

const MinuteClockHand: React.FC<MinuteClockHandProps> = ({ minute, setMinute, clockSize}) => {

    function MinuteToRotation (minute: number) {
        return minute * 6;
    }

    function RotationToMinute (rotation: number) {
        setMinute(rotation / 6);
    }

    return (
        <ClockHand
            length={clockSize/2 * 0.7}
            rotation={MinuteToRotation(minute)}
            setRotation={RotationToMinute}
            type={"Minute"}
            clockSize={clockSize}
        />
    )
};

export default MinuteClockHand;
