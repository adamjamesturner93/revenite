import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Activity } from '../../../../models';
import { PageWrapper } from '../../../components';
import { listActivities, mapActivitiesByMonth } from '../../../models/Activity';

const Activities: React.FC = () => {
  const router = useRouter();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await listActivities();
      setActivities(data);
      setLoading(false);
    };
    setLoading(true);
    fetchData();
  }, []);

  if (loading) {
    return (
      <PageWrapper title="Activities">
        <h2>Loading...</h2>
      </PageWrapper>
    );
  }

  if (!activities) {
    return (
      <PageWrapper title="Activities">
        <h2>No activities have been recorded yet</h2>
      </PageWrapper>
    );
  }

  const activitiesByMonth = mapActivitiesByMonth(activities);

  return (
    <PageWrapper title="Activities">
      {activitiesByMonth.map(({ month, activities }) => (
        <section key={month} className="cursor-pointer">
          <h3 className="text-xl font-bold">{month}</h3>
          {activities.map(({ id, name, duration, date, strength, flexibility, cardio }) => (
            <section
              className="border border-purple-600 flex justify-between py-1 px-2 my-2"
              role="link"
              onClick={() => router.push(`/app/activities/${id}`)}
              key={id}
            >
              <article>
                <h3 className="text-gray-700">{name}</h3>
                <p className="text-gray-500">{duration} minutes</p>
                <p className="text-gray-500">{new Date(date).toDateString()}</p>
              </article>
              <aside className="my-auto">
                {flexibility && (
                  <span className="mx-1 text-white bg-green-400 border-radius-5 py-1 px-3">
                    Flex
                  </span>
                )}
                {strength && (
                  <span className="mx-1 text-white bg-indigo-400 border-radius-5 py-1 px-3">
                    Strength
                  </span>
                )}
                {cardio && (
                  <span className="mx-1 text-white bg-red-400 border-radius-5 py-1 px-3">
                    Cardio
                  </span>
                )}
              </aside>
            </section>
          ))}
        </section>
      ))}
    </PageWrapper>
  );
};

export default Activities;
