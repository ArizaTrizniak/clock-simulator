import React from 'react';
import ClockHand from './ClockHand';
import {CLOCK_HAND_MINUTE_LENGTH, CLOCK_HAND_MINUTE_WIDTH} from '../../const';

export interface MinuteClockHandProps{
    minute: number;
    setMinute: (minute: number) => void;
}

const MinuteClockHand: React.FC<MinuteClockHandProps> = ({ minute,setMinute}) => {

    function MinuteToRotation (minute: number) {
        return minute * 6;
    }

    function RotationToMinute (rotation: number) {
        setMinute(rotation / 6);
    }

    return (
        <ClockHand
            length={CLOCK_HAND_MINUTE_LENGTH}
            width={CLOCK_HAND_MINUTE_WIDTH}
            rotation={MinuteToRotation(minute)}
            setRotation={RotationToMinute}
            type={"Minute"}/>
    )
};

export default MinuteClockHand;
