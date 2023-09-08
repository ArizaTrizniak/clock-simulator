import React from 'react';
import './ClockCenter.css';
import {getCenterParams} from '../../../utils/elementsSizeGenerator';

export interface ClockCenterProps {
    clockSize: number;
}

const ClockCenter: React.FC<ClockCenterProps> = ({clockSize}) => {
    const centerSize = getCenterParams(clockSize).size;
    const Position = clockSize/2 - centerSize/2;
    return (
        <div
        className="ClockCenter"
        style={{
            left: `${Position}px`,
            top: `${Position}px`,
            width: `${centerSize}px`,
            height: `${centerSize}px`,
        }}
    ></div>
    )
};

export default ClockCenter;