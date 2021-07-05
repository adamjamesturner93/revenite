import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ACTIVITY_LIST } from '../../utils/temp_activity';
import { Input, PageWrapper } from '../../components';
import { format } from 'date-fns';

type ActivityFormData = {
  id: string;
  name: string;
  date: Date;
  duration: number;
  distance: number;
  cardio: boolean;
  flexibility: boolean;
  strength: boolean;
  perceivedExertion: number;
  feeling: number;
};

const ViewActivity: React.FC<{ activity: ActivityFormData }> = ({ activity }) => {
  if (!activity) return <p>Error - not found</p>;
  return (
    <PageWrapper title={`Activity - ${activity.name}`}>
      <form>
        <Input label="Date" disabled value={format(new Date(activity.date), 'PPP')} />
        <Input title="Duration" disabled type="number" value={activity.duration} />
        <Input title="Distance" disabled type="number" value={activity.distance} />

        <section className="mt-3">
          <label className="text-sm">Workout type</label>
          <section className="mt-3 flex flex-col sm:flex-row sm:justify-around ">
            <label className="text-sm">
              <input
                className="mr-2"
                disabled
                type="checkbox"
                name="cardio"
                checked={activity.cardio}
              />
              Cardio
            </label>
            <label className="text-sm">
              <input
                className="mr-2"
                disabled
                type="checkbox"
                name="flexibility"
                checked={activity.flexibility}
              />
              Flexibility
            </label>
            <label className="text-sm">
              <input
                className="mr-2"
                disabled
                type="checkbox"
                name="strength"
                checked={activity.strength}
              />
              Strength
            </label>
          </section>
        </section>
        <section className="mt-3">
          <Input
            label="Perceived Exertion"
            value={activity.perceivedExertion}
            min={1}
            max={10}
            type="range"
            disabled
          />
          <p className="text-xs">{activity.perceivedExertion} - Really hard!</p>
        </section>
        <section className="mt-3">
          <Input
            label="How is your body feeling?"
            value={activity.feeling}
            min={1}
            max={10}
            type="range"
            disabled
          />
          <p className="text-xs">{activity.feeling} - Really hard!</p>
        </section>
      </form>
    </PageWrapper>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list of possible value for id

  const paths = [
    { params: { id: '0001' } },
    { params: { id: '0002' } },
    { params: { id: '0003' } },
    { params: { id: '0004' } },
    { params: { id: '0005' } },
  ];

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch necessary data for the blog post using params.id
  const activity = ACTIVITY_LIST.find((a) => a.id === params?.id);

  if (!activity) {
    return {
      notFound: true,
    };
  }

  return { props: { activity }, revalidate: 30 };
};

export default ViewActivity;
