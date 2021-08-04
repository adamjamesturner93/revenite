import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { minutesToHours } from 'date-fns';
import { Activity } from '../../models';

type Data = {
  cardio: number;
  strength: number;
  flex: number;
};

const getData = ({ cardio, strength, flex }: Data) => ({
  labels: ['Cardio', 'Strength', 'Flexibility'],
  datasets: [
    {
      data: [cardio, strength, flex],
      backgroundColor: [
        'rgba(248, 113, 113, 0.2)',
        'rgba(129, 140, 248, 0.2)',
        'rgba(52, 211, 153, 0.2)',
      ],
      borderColor: ['rgba(248, 113, 113, 1)', 'rgba(129, 140, 248, 1)', 'rgba(52, 211, 153, 1)'],
      borderWidth: 1,
    },
  ],
});

export const HealthCheckTab: React.FC<{
  activities: Activity[];
  label: string;
  timePeriod: string;
}> = ({ activities, label, timePeriod }) => {
  if (activities.length === 0) {
    return <h2>No activities have been recorded yet this {timePeriod}</h2>;
  }

  const cardio = activities.filter((a) => a.cardio).reduce((acc, curr) => acc + +curr.duration, 0);

  const strength = activities
    .filter((a) => a.strength)
    .reduce((acc, curr) => acc + +curr.duration, 0);

  const flex = activities
    .filter((a) => a.flexibility)
    .reduce((acc, curr) => acc + +curr.duration, 0);

  const data: Data = { cardio, strength, flex };

  const formatTime = (mins: number): string => {
    if (mins < 60) return `${mins} minutes`;

    const hours = minutesToHours(mins);
    const minutes = mins - hours * 60;
    return `${hours}hrs ${minutes} minutes`;
  };

  return (
    <React.Fragment>
      <h3 className="text-xl font-bold text-gray-700">{label}</h3>
      <p className="text-gray-500">Cardio: {formatTime(cardio)}</p>
      <p className="text-gray-500">Flex: {formatTime(flex)}</p>
      <p className="text-gray-500">Strength: {formatTime(strength)}</p>
      <Doughnut data={getData(data)} />
    </React.Fragment>
  );
};
