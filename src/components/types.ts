import {Time} from '../utils/utils';

export interface ClockProps {
    time: Time;
    onSetTime: (time: Time) => void;
}