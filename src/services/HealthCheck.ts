import { MONTHS } from '../utils';
import { HealthCheck } from '../../models';
import { DataStore } from '@aws-amplify/datastore';
import { compareDesc } from 'date-fns';

type HealthCheckMonth = HealthCheck & { month: string };

type ListHealthChecksByMonth = {
  month: string;
  healthChecks: HealthCheck[];
};

export const listHealthChecks = async () => await DataStore.query(HealthCheck);

export const getHealthCheck = async (id: string) => await DataStore.query(HealthCheck, id);

export const saveHealthCheck = async (healthCheck: HealthCheck) =>
  await DataStore.save(healthCheck);

export function mapHealthChecksByMonth(healthChecks: HealthCheck[]): ListHealthChecksByMonth[] {
  const monthHealthChecks: HealthCheckMonth[] = healthChecks.map((healthCheck) => ({
    ...healthCheck,
    month: MONTHS[new Date(healthCheck.date).getMonth()],
  }));

  const months = monthHealthChecks.reduce<ListHealthChecksByMonth[]>(
    (acc: ListHealthChecksByMonth[], cur: HealthCheckMonth) => {
      const { month, ...healthCheck } = cur;

      const relevantMonth = acc?.findIndex((m) => m.month === month);

      if (relevantMonth === -1) {
        acc.push({
          month,
          healthChecks: [healthCheck],
        });
      } else {
        acc[relevantMonth] = {
          ...acc[relevantMonth],
          healthChecks: [...acc[relevantMonth].healthChecks, healthCheck],
        };
      }
      return acc;
    },
    [],
  );

  months.forEach((month) =>
    month.healthChecks.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))),
  );

  return months;
}
