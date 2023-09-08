import React from 'react';
import ClockHand from './ClockHand';

export interface HourClockHandProps{
    hour: number;
    setHour: (hour: number) => void;
    clockSize: number;
}

const HourClockHand: React.FC<HourClockHandProps> = ({ hour, setHour, clockSize}) => {

    function HourToRotation (hour: number) {
        return hour * 30;
    }

    function RotationToHour (rotation: number) {
        setHour(rotation / 30);
    }

    return (
        <ClockHand
            length={clockSize/2 * 0.5}
            rotation={HourToRotation(hour)}
            setRotation={RotationToHour}
            type={"Hour"}
            clockSize={clockSize}
        />
    )
};

export default HourClockHand;
