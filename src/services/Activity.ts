import { MONTHS } from '../utils';
import { Activity } from '../../models';
import { DataStore } from '@aws-amplify/datastore';
import { compareDesc } from 'date-fns';

type ActivityMonth = Activity & { month: string };

type ListActivitiesByMonth = {
  month: string;
  activities: Activity[];
};

export const listActivities = async (userId: string) =>
  await DataStore.query(Activity, (activity) => activity.userId('eq', userId));

export const deleteActivity = async (id: string) => await DataStore.delete(Activity, id);

export const getActivity = async (id: string) => await DataStore.query(Activity, id);

export const saveActivity = async (activity: Activity) => await DataStore.save(activity);

export function mapActivitiesByMonth(activities: Activity[]): ListActivitiesByMonth[] {
  const monthActivities: ActivityMonth[] = activities.map((activity) => ({
    ...activity,
    month: MONTHS[new Date(activity.date).getMonth()],
  }));

  const months = monthActivities.reduce<ListActivitiesByMonth[]>(
    (acc: ListActivitiesByMonth[], cur: ActivityMonth) => {
      const { month, ...activity } = cur;

      const relevantMonth = acc?.findIndex((m) => m.month === month);

      if (relevantMonth === -1) {
        acc.push({
          month,
          activities: [activity],
        });
      } else {
        acc[relevantMonth] = {
          ...acc[relevantMonth],
          activities: [...acc[relevantMonth].activities, activity],
        };
      }
      return acc;
    },
    [],
  );

  months.forEach((month) =>
    month.activities.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))),
  );

  return months;
}
