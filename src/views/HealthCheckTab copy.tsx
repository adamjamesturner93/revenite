import React, { useEffect, useState } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { format, compareAsc } from 'date-fns';
import {
  Activity,
  Amputation,
  AmputationEnum,
  AmputationLevelEnum,
  HealthCheck,
} from '../../models';
import { id } from 'date-fns/locale';
import { getAmputations } from '../services';

export const HealthCheckTab: React.FC<{
  healthChecks: HealthCheck[];
  label: string;
  timePeriod: string;
}> = ({ healthChecks, label, timePeriod }) => {
  const [amputations, setAmputations] = useState<Amputation[]>([]);
  const [loading, setLoading] = useState(false);

  if (healthChecks.length === 0) {
    label = 'No Health Checks have been recorded yet this ';
  }
  useEffect(() => {
    const fetchData = async () => {
      const amputations = await getAmputations();
      setAmputations(amputations);
      setLoading(false);
    };
    setLoading(true);
    fetchData();
  }, []);

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
    data: sortedChecks
      .map((c) => c.SocketChecks?.filter((s) => s?.amputationID === amputation.id))
      .flat()
      .reduce(
        (acc, cur) => {
          return {
            Blistered: cur?.blistered ? acc.Blistered + 1 : acc.Blistered,
            Bleeding: cur?.bleeding ? acc.Bleeding + 1 : acc.Bleeding,
            Bruised: cur?.bruised ? acc.Bruised + 1 : acc.Bruised,
            Hot: cur?.hot ? acc.Hot + 1 : acc.Hot,
            Painful: cur?.painful ? acc.Painful + 1 : acc.Painful,
            Red: cur?.red ? acc.Red + 1 : acc.Red,
            Sore: cur?.sore ? acc.Sore + 1 : acc.Sore,
            Sweaty: cur?.sweaty ? acc.Sweaty + 1 : acc.Sweaty,
            Loose: cur?.loose ? acc.Loose + 1 : acc.Loose,
            Tight: cur?.tight ? acc.Tight + 1 : acc.Tight,
          };
        },
        {
          Blistered: 0,
          Bleeding: 0,
          Bruised: 0,
          Hot: 0,
          Painful: 0,
          Red: 0,
          Sore: 0,
          Sweaty: 0,
          Loose: 0,
          Tight: 0,
        },
      ),
    backgroundColor: checkMap[amputation.limb!].color,
    borderColor: checkMap[amputation.limb!].color,
    tension: 0.1,
  }));

  const limbGraphData = {
    datasets: limbData,
  };

  const data = sortedChecks.reduce(
    (acc, cur) => {
      return {
        Aching: cur?.aching ? acc.Aching + 1 : acc.Aching,
        Painful: cur?.painful ? acc.Painful + 1 : acc.Painful,
        Sore: cur?.sore ? acc.Sore + 1 : acc.Sore,
        Tight: cur?.tight ? acc.Tight + 1 : acc.Tight,
        Tired: cur?.tired ? acc.Tired + 1 : acc.Tired,
      };
    },
    {
      Aching: 0,
      Painful: 0,
      Sore: 0,
      Tight: 0,
      Tired: 0,
    },
  );

  debugger;
  const bodyData = {
    label: 'Body',
    data,
    backgroundColor: 'rgb(75, 192, 192)',
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1,
  };

  const bodyGraphData = {
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
  const barOptions = {
    scales: {
      y: {
        min: 0,
        max: healthChecks.length,
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
      <Bar options={barOptions} data={bodyGraphData} />
      <h4 className="pt-4">Limb Checks</h4>
      <Bar options={barOptions} data={limbGraphData} />
    </React.Fragment>
  );
};
