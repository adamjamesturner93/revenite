import { MONTHS } from '../utils';
import { HealthCheck, SocketCheck } from '../../models';
import { DataStore } from '@aws-amplify/datastore';
import { compareDesc } from 'date-fns';

type HealthCheckMonth = HealthCheck & { month: string };

type ListHealthChecksByMonth = {
  month: string;
  healthChecks: HealthCheck[];
};

export const listHealthChecks = async () => {
  const healthCheck = await DataStore.query(HealthCheck);
  if (!healthCheck) throw new Error('Not found');

  const checks = await Promise.all(
    healthCheck.map(async (healthCheck) => ({
      ...healthCheck,
      SocketChecks: (
        await DataStore.query(SocketCheck)
      ).filter((check) => check.healthcheckID === healthCheck.id),
    })),
  );

  return checks;
};

export const getHealthCheck = async (id: string): Promise<HealthCheck> => {
  const healthCheck = await DataStore.query(HealthCheck, id);
  if (!healthCheck) throw new Error('Not found');

  const socketChecks = (await DataStore.query(SocketCheck)).filter(
    (check) => check.healthcheckID === healthCheck.id,
  );

  return {
    ...healthCheck,
    SocketChecks: socketChecks,
  };
};

export const saveHealthCheck = async (healthCheck: HealthCheck): Promise<HealthCheck> => {
  const savedHealthCheck = await DataStore.save(new HealthCheck(healthCheck));

  const updates: Array<Promise<SocketCheck>> = [];
  healthCheck.SocketChecks?.map(async (socketCheck) => {
    if (socketCheck) {
      updates.push(
        DataStore.save(
          new SocketCheck({
            ...socketCheck,
            healthcheckID: savedHealthCheck.id,
          }),
        ),
      );
    }
  });
  await Promise.all(updates);

  return savedHealthCheck;
};

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
