export interface Time {
  hours: number;
  minutes: number;
  period?: 'AM' | 'PM';
}

export function generateRandomTime(): Time {
  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  return { hours, minutes };
}

export function to12HourTime(time: Time): Time {
    const hours = time.hours % 12;
    const result: Time = { hours: hours === 0 ? 12 : hours, minutes: time.minutes, period: time.hours < 12 ? 'AM' : 'PM' };
    return result;
}

export function checkTimeMatch(time1: Time, time2: Time): boolean {
  if (time1.period) {
    // Convert 24-hour time to 12-hour time for comparison
    let hours = time2.hours % 12;
    if (hours === 0) {
      hours = 12;
    }
    return time1.hours === hours && time1.minutes === time2.minutes && time1.period === (time2.hours < 12 ? 'AM' : 'PM');
  } else {
    return time1.hours === time2.hours && time1.minutes === time2.minutes;
  }
}
