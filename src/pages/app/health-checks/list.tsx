import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { ACTIVITY_LIST } from '../../../utils/temp_activity';

const Activities: React.FC<{ activities: any[] }> = ({ activities }) => {
  const router = useRouter();

  return (
    <div className="gb-gray-50 flex flex-grow p-2 flex-col">
      <h1 className="text-3xl">Health Checks List</h1>

      {activities.map(({ id, title, duration, date, strength, flexibility, cardio }) => (
        <article
          className="border border-purple-600 flex justify-between py-1 px-2 my-2"
          role="link"
          onClick={() => router.push(`/activities/${id}`)}
          key={id}
        >
          <section>
            <h3 className="text-gray-700">{title}</h3>
            <p className="text-gray-500">{duration} minutes</p>
            <p className="text-gray-500">{new Date(date).toDateString()}</p>
          </section>
          <section className="my-auto">
            {flexibility && (
              <span className="mx-1 text-white bg-indigo-400 border-radius-5 py-1 px-3">Flex</span>
            )}
            {strength && (
              <span className="mx-1 text-white bg-red-400 border-radius-5 py-1 px-3">Strength</span>
            )}
            {cardio && (
              <span className="mx-1 text-white bg-green-400 border-radius-5 py-1 px-3">Cardio</span>
            )}
          </section>
        </article>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Fetch necessary data for the blog post using params.id
  const activities = ACTIVITY_LIST;
  return { props: { activities } };
};

export default Activities;
