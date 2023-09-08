import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import './ClockHand.css';
import {getHandParams} from '../../../utils/elementsSizeGenerator';

export interface ClockHandProps {
    length: number;
    rotation: number;
    setRotation: (rotation: number) => void;
    type: 'Hour' | 'Minute';
    clockSize: number;
}

const ClockHand: React.FC<ClockHandProps> = ({length, rotation, setRotation, type, clockSize}) => {

    const [currentRotation, setCurrentRotation] = useState(rotation);
    const CLOCK_RADIUS = clockSize / 2;
    useEffect(() => {
        setCurrentRotation(rotation);
    }, [rotation]);

    const rotateHandle = (event: React.MouseEvent) => {
        const centerX = CLOCK_RADIUS;
        const centerY = CLOCK_RADIUS;
        const newRotation = () => {
            if (Math.abs(event.clientY - centerY) < 2) {
                if ((event.clientX - centerX) < 0) {
                    return 270;
                } else {
                    return 90;
                }
            } else if (event.clientY < centerY) {
                let result = Math.atan(-(event.clientX - centerX) / (event.clientY - centerY)) * 180 / Math.PI;
                return result > 0 ? result : 360 + result;
            } else
                return 180 + Math.atan(-(event.clientX - centerX) / (event.clientY - centerY)) * 180 / Math.PI;
        };
        setCurrentRotation(newRotation());
    }

    const dragStartHandle = (event: React.MouseEvent) => {
        const element = event.currentTarget;
        element.className = classNames(element.className, 'active');
    }

    const dragHandle = (event: React.MouseEvent) => {
        rotateHandle(event);
    }

    const dragEndHandle = (event: React.MouseEvent) => {
        const element = event.currentTarget;
        element.className = classNames("ClockHand" + type);
        rotateHandle(event);
        setRotation(currentRotation);
    }

    const param = getHandParams(clockSize);


    return (
        <>
            <div
                className={`ClockHand${type}`}
                style={{
                    height: `${length}px`,
                    width: `${param.width}px`,
                    left: `${(CLOCK_RADIUS - param.width / 2)}px`,
                    bottom: `${CLOCK_RADIUS}px`,
                    transform: `rotate(${currentRotation}deg)`,
                }}
                onDragStart={dragStartHandle}
                onDrag={dragHandle}
                onDragEnd={dragEndHandle}
            >
                {param.isTextVisible && <div className='TextOnHand'>{type}</div>}
            </div>
        </>
    );
}

export default ClockHand;
