import React from 'react';
import { GetServerSideProps } from 'next';
import { Input, PageWrapper } from '../../../components';
import { format } from 'date-fns';
import { withSSRContext } from 'aws-amplify';
import { getActivity, getGraphQL } from '../../../graphql';
import { GetActivityQuery } from '../../../API';
import { mapGetActivityQuery } from '../../../models/Activity';

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
    <PageWrapper title={activity.name}>
      <form>
        <Input label="Date" value={format(new Date(activity.date), 'PPP')} />
        <Input title="Duration" type="number" value={activity.duration} />
        <Input title="Distance" type="number" value={activity.distance} />

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
          />
          <p className="text-xs">{activity.feeling} - Really hard!</p>
        </section>
      </form>
    </PageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { API } = withSSRContext(context);
  const id = context.params?.id;

  const resp = await getGraphQL<GetActivityQuery>(getActivity, API, {
    id,
  });
  const activity = mapGetActivityQuery(resp);
  return { props: { activity } };
};

export default ViewActivity;
