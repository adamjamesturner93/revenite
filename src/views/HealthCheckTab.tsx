import React from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { minutesToHours } from 'date-fns';
import { Activity, HealthCheck } from '../../models';

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
  healthChecks: HealthCheck[];
  label: string;
  timePeriod: string;
}> = ({ healthChecks, label, timePeriod }) => {
  if (healthChecks.length === 0) {
    label = 'No Health Checks have been recorded yet this ';
  }

  label = 'Not yet implemented';

  // const data: Data = { cardio, strength, flex };
  // const limbLabels = [
  //   'blistered',
  //   'bleeding',
  //   'bruised',
  //   'hot',
  //   'painful',
  //   'red',
  //   'sore',
  //   'sweaty',
  //   'loose',
  //   'tight',
  // ];
  // const limbData = {
  //   labels: limbLabels,
  //   datasets: [
  //     {
  //       label: 'Right Leg',
  //       data: [2, 3, 4, 3, 6, 8, 7, 2, 1, 8],
  //       borderWidth: 1,
  //       backgroundColor: 'red',
  //       borderColor: 'red',
  //     },
  //     {
  //       label: 'Left Leg',
  //       data: [6, 3, 7, 3, 5, 1, 2, 1, 9, 3],
  //       borderWidth: 1,
  //       backgroundColor: 'orange',
  //       borderColor: 'orange',
  //     },
  //     {
  //       label: 'Right Arm',
  //       data: [6, 7, 4, 1, 2, 3, 6, 8, 4, 10],
  //       borderWidth: 1,
  //       backgroundColor: 'blue',
  //       borderColor: 'blue',
  //     },
  //     {
  //       label: 'Left Arm',
  //       data: [2, 3, 4, 3, 6, 8, 7, 2, 1, 8],
  //       borderWidth: 1,
  //       backgroundColor: 'green',
  //       borderColor: 'green',
  //     },
  //   ],
  // };
  // const scoreLabels = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri'];
  // const scoreData = {
  //   labels: scoreLabels,
  //   datasets: [
  //     {
  //       label: 'Body',
  //       data: [8, 8, 4, 3, 9],
  //       fill: false,
  //       borderColor: 'rgb(75, 192, 192)',
  //       tension: 0.1,
  //     },
  //     {
  //       label: 'Right Leg',
  //       data: [9, 9, 8, 9, 10],
  //       fill: false,
  //       borderColor: 'rgb(35, 122, 192)',
  //       tension: 0.1,
  //     },
  //     {
  //       label: 'Left Leg',
  //       data: [8, 4, 6, 2, 1],
  //       fill: false,
  //       borderColor: 'rgb(129, 192, 73)',
  //       tension: 0.1,
  //     },
  //     {
  //       label: 'Right Arm',
  //       data: [4, 3, 1, 7, 9],
  //       fill: false,
  //       borderColor: 'rgb(214, 177, 177)',
  //       tension: 0.1,
  //     },
  //     {
  //       label: 'Left Arm',
  //       data: [9, 2, 5, 3, 5],
  //       fill: false,
  //       borderColor: 'rgb(144, 67, 151)',
  //       tension: 0.1,
  //     },
  //   ],
  // };
  return (
    <React.Fragment>
      <h3 className="text-xl font-bold text-gray-700">{label}</h3>
      {/* <h4>Scores</h4>
      <Line data={scoreData} /> */}
      {/* <h4>Body Check</h4>
      <Bar data={bodyData} /> */}
      {/* <h4>Limb Checks</h4>
      <Bar data={limbData} /> */}
    </React.Fragment>
  );
};
