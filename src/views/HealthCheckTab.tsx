import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { format, compareAsc } from 'date-fns';
import { Amputation, AmputationEnum, HealthCheck } from '../../models';
import { getAmputations } from '../services';

export const HealthCheckTab: React.FC<{
  healthChecks: HealthCheck[];
  label: string;
  timePeriod: string;
}> = ({ healthChecks, label, timePeriod }) => {
  const [amputations, setAmputations] = useState<Amputation[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const amputations = await getAmputations();
      setAmputations(amputations);
      setLoading(false);
    };
    setLoading(true);
    fetchData();
  }, []);

  if (healthChecks.length === 0) {
    label = `No Health Checks have been recorded yet this ${timePeriod}`;
    return <h3 className="text-xl font-bold text-gray-700">{label}</h3>;
  }

  const checkMap: Record<AmputationEnum, { label: string; color: string }> = {
    LEFT_LEG: { label: 'Left Leg', color: 'rgb(35, 122, 192)' },
    LEFT_ARM: { label: 'Left Arm', color: 'rgb(111, 45, 216)' },
    RIGHT_LEG: { label: 'Right Arm', color: 'rgb(182, 4, 182)' },
    RIGHT_ARM: { label: 'Right Leg', color: 'rgb(226, 143, 19)' },
  };

  if (loading) return <p>Loading...</p>;

  const sortedChecks = healthChecks.sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)));

  const scoreLabels = sortedChecks.map((check) => format(new Date(check.date), 'dd-MM-yy'));
  const amputationData = amputations.map((amputation) => ({
    label: checkMap[amputation.limb!].label,
    data: sortedChecks
      .map((c) => {
        const checks = c.SocketChecks?.filter((s) => s?.amputationID === amputation.id);
        const scores = checks?.map((check) => +(check?.socketComfortScore ?? 0));
        return scores;
      })
      .flat(),
    fill: false,
    borderColor: checkMap[amputation.limb!].color,
    tension: 0.1,
  }));

  const scoreData = {
    labels: scoreLabels,
    datasets: [
      {
        label: 'Body',
        data: sortedChecks.map((c) => +c.bodyScore),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      ...amputationData,
    ],
  };

  const limbData = amputations.map((amputation) => ({
    label: checkMap[amputation.limb!].label,
    data: Object.values(
      sortedChecks
        .map((c) => c.SocketChecks?.filter((s) => s?.amputationID === amputation.id))
        .flat()
        .reduce(
          (acc, cur) => {
            return {
              blistered: cur?.blistered ? acc.blistered + 1 : acc.blistered,
              bleeding: cur?.bleeding ? acc.bleeding + 1 : acc.bleeding,
              bruised: cur?.bruised ? acc.bruised + 1 : acc.bruised,
              hot: cur?.hot ? acc.hot + 1 : acc.hot,
              painful: cur?.painful ? acc.painful + 1 : acc.painful,
              red: cur?.red ? acc.red + 1 : acc.red,
              sore: cur?.sore ? acc.sore + 1 : acc.sore,
              sweaty: cur?.sweaty ? acc.sweaty + 1 : acc.sweaty,
              loose: cur?.loose ? acc.loose + 1 : acc.loose,
              tight: cur?.tight ? acc.tight + 1 : acc.tight,
            };
          },
          {
            blistered: 0,
            bleeding: 0,
            bruised: 0,
            hot: 0,
            painful: 0,
            red: 0,
            sore: 0,
            sweaty: 0,
            loose: 0,
            tight: 0,
          },
        ),
    ),
    backgroundColor: checkMap[amputation.limb!].color,
    borderColor: checkMap[amputation.limb!].color,
    tension: 0.1,
  }));

  const limbLabels = [
    'Blistered',
    'Bleeding',
    'Bruised',
    'Hot',
    'Painful',
    'Red',
    'Sore',
    'Sweaty',
    'Loose',
    'Tight',
  ];

  const limbGraphData = {
    labels: limbLabels,
    datasets: limbData,
  };

  const data = Object.values(
    sortedChecks.reduce(
      (acc, cur) => {
        return {
          aching: cur?.aching ? acc.aching + 1 : acc.aching,
          painful: cur?.painful ? acc.painful + 1 : acc.painful,
          sore: cur?.sore ? acc.sore + 1 : acc.sore,
          tight: cur?.tight ? acc.tight + 1 : acc.tight,
          tired: cur?.tired ? acc.tired + 1 : acc.tired,
        };
      },
      {
        aching: 0,
        painful: 0,
        sore: 0,
        tight: 0,
        tired: 0,
      },
    ),
  );
  const bodyData = {
    label: 'Body',
    data,
    backgroundColor: 'rgb(75, 192, 192)',
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1,
  };

  const bodyLabels = ['Aching', 'Painful', 'Sore', 'Tight', 'Tired'];

  const bodyGraphData = {
    labels: bodyLabels,
    datasets: [bodyData],
  };

  const lineOptions = {
    scales: {
      y: {
        min: 0,
        max: 10,
      },
    },
  };

  const limbOptions = {
    scales: {
      y: {
        min: 0,
        max: 5 * Math.ceil(Math.max(...limbData.map((l) => l.data).flat()) / 5),
        ticks: {
          stepSize: 1,
        },
      },
    },
  };
  const bodyOptions = {
    scales: {
      y: {
        min: 0,
        max: 5 * Math.ceil(Math.max(...bodyData.data) / 5),
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <React.Fragment>
      <h3 className="text-xl font-bold text-gray-700">{label}</h3>
      <h4>Comfort scores</h4>
      <Line options={lineOptions} data={scoreData} />
      <h4 className="pt-4">Body Check</h4>
      <Bar options={bodyOptions} data={bodyGraphData} />
      <h4 className="pt-4">Limb Checks</h4>
      <Bar options={limbOptions} data={limbGraphData} />
    </React.Fragment>
  );
};
