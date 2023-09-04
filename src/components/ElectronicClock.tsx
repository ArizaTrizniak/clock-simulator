import React, { ChangeEvent } from 'react';
import {Time} from '../utils/utils';

interface Props {
  time: Time;
  setTime: (time: Time) => void;
}

const ElectronicClock: React.FC<Props> = ({ time, setTime }) => {
  const handleHoursChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTime({ ...time, hours: parseInt(event.target.value) });
  };

  const handleMinutesChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTime({ ...time, minutes: parseInt(event.target.value) });
  };

  return (
    <div>
      <input type="number" min="0" max="23" value={time.hours} onChange={handleHoursChange} />
      <input type="number" min="0" max="59" value={time.minutes} onChange={handleMinutesChange} />
    </div>
  );
};

export default ElectronicClock;
