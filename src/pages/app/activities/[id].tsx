import React, { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { Input, PageWrapper } from '../../../components';
import { format } from 'date-fns';
import { Activity } from '../../../../models';
import { getActivity } from '../../../services';
import { ActivitiesOptions, ExertionOptions } from '../../../utils';

const ViewActivity: React.FC<{ id: string }> = ({ id }) => {
  const [activity, setActivity] = useState<Activity>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getActivity(id);
      setActivity(data);
      setLoading(false);
    };
    setLoading(true);
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <PageWrapper title="Activity">
        <h2>Loading...</h2>
      </PageWrapper>
    );
  }

  if (!activity) {
    return (
      <PageWrapper title="Activity">
        <p>Error - not found</p>{' '}
      </PageWrapper>
    );
  }

  const activityOption = ActivitiesOptions[activity.activity || ''];

  return (
    <PageWrapper title={activity.name}>
      <form>
        <Input label="Date" value={format(new Date(activity.date), 'PPP')} />
        <Input title="Activity" value={activityOption.label} />
        <Input title="Duration" type="number" value={activity.duration} />
        {activityOption.distance && (
          <Input title="Distance" type="number" value={activity.distance} />
        )}

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
          <p className="text-xs">
            {activity.perceivedExertion} - {ExertionOptions[+activity.perceivedExertion]}
          </p>
        </section>

        <section className="mt-3">
          <Input
            label="How is your body feeling?"
            value={activity.feeling}
            min={1}
            max={10}
            type="range"
          />
          <p className="text-xs">{activity.feeling}</p>
        </section>
      </form>
    </PageWrapper>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  return { props: { id } };
};

export default ViewActivity;
