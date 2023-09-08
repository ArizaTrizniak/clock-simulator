import './ClockMechanism.css';
import ClockFace from './ClockFace/ClockFace';
import {ClockProps} from '../types';
import HourClockHand from './ClockHand/HourClockHand';
import MinuteClockHand from './ClockHand/MinuteClockHand';
import useResize from '../../hooks/useResize';
import ClockCenter from './ClockCenter/ClockCenter';

const ClockMechanism: React.FC<ClockProps> = ({time, onSetTime}) => {

    const {size} = useResize();

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
            <ClockCenter clockSize={size}/>
        </div>
    );
}

export default ClockMechanism;
