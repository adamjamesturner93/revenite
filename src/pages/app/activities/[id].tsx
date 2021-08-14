import React, { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { Input, PageWrapper } from '../../../components';
import { format } from 'date-fns';
import { Activity } from '../../../../models';
import { getActivity, deleteActivity } from '../../../services';
import { ActivitiesOptions, ExertionOptions } from '../../../utils';
import { formatTime } from '../../../utils/prettifyMins';
import { FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const ViewActivity: React.FC<{ id: string }> = ({ id }) => {
  const [activity, setActivity] = useState<Activity>();
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();

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
  const onDelete = async () => {
    const resp = window.confirm('Are you sure you want to delete this activity?');
    if (resp) {
      try {
        await deleteActivity(id);
        toast.success('Activity deleted successfully');
        push('/app/activities/list');
      } catch (error) {
        toast.error('Activity failed to delete');
      }
    }
  };
  const deleteButton = (
    <button
      className="m-4 flex border border-gray-700 hover:border-purple-600 hover:text-purple-600 p-4 rounded-full items-center justify-center"
      title="Delete"
      onClick={onDelete}
    >
      <FaTimes />
    </button>
  );
  return (
    <PageWrapper title={activity.name} back="/app/activities/list" right={deleteButton}>
      <form>
        <Input label="Date" value={format(new Date(activity.date), 'PPP')} />
        <Input label="Activity" value={activityOption.label} />
        <Input label="Duration" value={formatTime(+activity.duration)} />
        {activityOption.distance && <Input label="Distance" value={`${activity.distance} km`} />}

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
