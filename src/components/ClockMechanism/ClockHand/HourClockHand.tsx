import React, {useState} from 'react';
import ClockHand from './ClockHand';
import {CLOCK_HAND_HOUR_LENGTH, CLOCK_HAND_HOUR_WIDTH} from '../../const';

export interface HourClockHandProps{
    hour: number;
    setHour: (hour: number) => void;
}

const HourClockHand: React.FC<HourClockHandProps> = ({ hour, setHour}) => {

    function HourToRotation (hour: number) {
        return hour * 30;
    }

    function RotationToHour (rotation: number) {
        setHour(rotation / 30);
    }

    return (
        <ClockHand
            length={CLOCK_HAND_HOUR_LENGTH}
            width={CLOCK_HAND_HOUR_WIDTH}
            rotation={HourToRotation(hour)}
            setRotation={RotationToHour}
            type={"Hour"}/>
    )
};

export default HourClockHand;
