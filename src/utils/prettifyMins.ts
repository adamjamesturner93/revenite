import { minutesToHours } from 'date-fns';
export const formatTime = (mins: number): string => {
  if (mins < 60) return `${mins} minutes`;

  const hours = minutesToHours(mins);
  const minutes = mins - hours * 60;
  return `${hours}hrs ${minutes.toPrecision(2)} minutes`;
};
