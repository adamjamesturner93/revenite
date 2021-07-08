import { withSSRContext } from 'aws-amplify';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { ListActivitysQuery } from '../../API';
import { PageWrapper } from '../../components';
import { callGraphQL, listActivitys } from '../../graphql';
import { Activity, mapListActivitiesQuery } from '../../models/Activity';

const Activities: React.FC<{ activities: Activity[] }> = ({ activities }) => {
  const router = useRouter();

  return (
    <PageWrapper title="Activities">
      {activities ? (
        activities.map(({ id, name, duration, date, strength, flexibility, cardio }) => (
          <section
            className="border border-purple-600 flex justify-between py-1 px-2 my-2"
            role="link"
            onClick={() => router.push(`/activities/${id}`)}
            key={id}
          >
            <article>
              <h3 className="text-gray-700">{name}</h3>
              <p className="text-gray-500">{duration} minutes</p>
              <p className="text-gray-500">{new Date(date).toDateString()}</p>
            </article>
            <aside className="my-auto">
              {flexibility && (
                <span className="mx-1 text-white bg-indigo-400 border-radius-5 py-1 px-3">
                  Flex
                </span>
              )}
              {strength && (
                <span className="mx-1 text-white bg-red-400 border-radius-5 py-1 px-3">
                  Strength
                </span>
              )}
              {cardio && (
                <span className="mx-1 text-white bg-green-400 border-radius-5 py-1 px-3">
                  Cardio
                </span>
              )}
            </aside>
          </section>
        ))
      ) : (
        <h2>No activities have been recorded yet</h2>
      )}
    </PageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { API } = withSSRContext(context);

  const resp = await callGraphQL<ListActivitysQuery>(listActivitys, API);
  const activities = mapListActivitiesQuery(resp);
  return { props: { activities } };
};

// export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
//   // Fetch necessary data for the blog post using params.id
//   const { API } = withSSRContext(context);
//   const resp = await callGraphQL<ListActivitysQuery>(listActivitys, API);
//   const activities = mapListActivitiesQuery(resp);
//   return { props: { activities } };
// };

export default Activities;
