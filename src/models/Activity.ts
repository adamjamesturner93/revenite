import { CreateActivityMutation, GetActivityQuery, ListActivitysQuery } from '../API';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import {} from 'date-fns';
import { MONTHS } from '../utils';

export type Activity = {
  id?: string;
  name?: string | null;
  date: string;
  duration?: string | null;
  distance?: string | null;
  cardio?: boolean | null;
  flexibility?: boolean | null;
  strength?: boolean | null;
  perceivedExertion?: string | null;
  feeling?: string | null;
  createdAt?: string;
  updatedAt?: string;
  owner?: string | null;
};

type ActivityMonth = Activity & { month: string };

type ListActivitiesByMonth = {
  month: string;
  activities: Activity[];
};

export function mapListActivitiesQuery(
  listActivitiesQuery: GraphQLResult<ListActivitysQuery>,
): Activity[] | null {
  return (
    listActivitiesQuery.data?.listActivitys?.items?.map(
      (activity) =>
        ({
          id: activity?.id,
          name: activity?.name,
          date: activity?.date,
          duration: activity?.duration,
          distance: activity?.distance,
          cardio: activity?.cardio,
          flexibility: activity?.flexibility,
          strength: activity?.strength,
          perceivedExertion: activity?.perceivedExertion,
          feeling: activity?.feeling,
          createdAt: activity?.createdAt,
          updatedAt: activity?.updatedAt,
          owner: activity?.owner,
        } as Activity),
    ) || null
  );
}
export function mapGetActivityQuery(getActivityQuery: GraphQLResult<GetActivityQuery>): Activity {
  const activity = getActivityQuery.data?.getActivity;
  return {
    id: activity?.id,
    name: activity?.name,
    date: activity?.date,
    duration: activity?.duration,
    distance: activity?.distance,
    cardio: activity?.cardio,
    flexibility: activity?.flexibility,
    strength: activity?.strength,
    perceivedExertion: activity?.perceivedExertion,
    feeling: activity?.feeling,
    createdAt: activity?.createdAt,
    updatedAt: activity?.updatedAt,
    owner: activity?.owner,
  } as Activity;
}

// export function mapUpdateUser(
//   updateUserMutation: GraphQLResult<UpdateUserMutation>,
//   user: User,
// ): User {
//   const updateUser = updateUserMutation?.data?.updateUser || null;

//   if (!updateUser) return user;

//   return {
//     id: updateUser.id,
//     name: updateUser?.name,
//     display_name: updateUser?.display_name,
//     dateOfBirth: updateUser?.dateOfBirth ? new Date(updateUser.dateOfBirth) : undefined,
//     gender: updateUser?.gender,
//     weight: updateUser?.weight,
//     height: updateUser?.height,
//     sex: updateUser?.sex,
//     ethnicGroup: updateUser?.ethnicGroup,
//     ethnicIdentity: updateUser?.ethnicIdentity,
//     ethnicIdentityOther: updateUser?.ethnicIdentityOther,
//     hasMilitaryService: updateUser?.hasMilitaryService,
//     militaryService: updateUser?.militaryService,
//     militaryServiceOther: updateUser?.militaryServiceOther,
//     createdAt: updateUser?.createdAt,
//     updatedAt: updateUser?.updatedAt,
//     owner: updateUser?.owner,
//   };
// }

export function mapCreateActivity(
  createActivityMutation: GraphQLResult<CreateActivityMutation>,
): Activity {
  const activity = createActivityMutation?.data?.createActivity || null;
  if (!activity) throw new Error('No activity found in API response');

  return {
    id: activity?.id,
    name: activity?.name,
    date: activity?.date,
    duration: activity?.duration,
    distance: activity?.distance,
    cardio: activity?.cardio,
    flexibility: activity?.flexibility,
    strength: activity?.strength,
    perceivedExertion: activity?.perceivedExertion,
    feeling: activity?.feeling,
    createdAt: activity?.createdAt,
    updatedAt: activity?.updatedAt,
    owner: activity?.owner,
  };
}

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

  months.forEach((month) => month.activities.sort((a, b) => (a.date > b.date ? -1 : 1)));

  return months;
}
