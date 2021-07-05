import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { PageWrapper } from '../../components';
import { ACTIVITY_LIST } from '../../utils/temp_activity';

const Activities: React.FC<{ activities: any[] }> = ({ activities }) => {
  const router = useRouter();

  return (
    <PageWrapper title="Activities">
      {activities.map(({ id, title, duration, date, strength, flexibility, cardio }) => (
        <section
          className="border border-purple-600 flex justify-between py-1 px-2 my-2"
          role="link"
          onClick={() => router.push(`/activities/${id}`)}
          key={id}
        >
          <article>
            <h3 className="text-gray-700">{title}</h3>
            <p className="text-gray-500">{duration} minutes</p>
            <p className="text-gray-500">{new Date(date).toDateString()}</p>
          </article>
          <aside className="my-auto">
            {flexibility && (
              <span className="mx-1 text-white bg-indigo-400 border-radius-5 py-1 px-3">Flex</span>
            )}
            {strength && (
              <span className="mx-1 text-white bg-red-400 border-radius-5 py-1 px-3">Strength</span>
            )}
            {cardio && (
              <span className="mx-1 text-white bg-green-400 border-radius-5 py-1 px-3">Cardio</span>
            )}
          </aside>
        </section>
      ))}
    </PageWrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Fetch necessary data for the blog post using params.id
  const activities = ACTIVITY_LIST;
  return { props: { activities } };
};

export default Activities;
