import React, { useState } from 'react';
import { Input, Select, PageWrapper } from '../../../components';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Activity } from '../../../../models';
import { saveActivity } from '../../../services';
import { ActivitiesOptions, getActivityDropdownOptions, ExertionOptions } from '../../../utils';
import { useAuth } from '../../../hooks';
import { toast } from 'react-toastify';

type ActivityFormData = {
  name: string;
  date: string;
  activity: string;
  duration: number;
  distance: number;
  cardio: boolean;
  flexibility: boolean;
  strength: boolean;
  perceivedExertion: number;
  feeling: number;
};

const AddActivity: React.FC = () => {
  const router = useRouter();
  const {
    user: { user },
  } = useAuth();
  const { getFirstActivity, updateUserAttributes } = useAuth();
  const [isDistanceVisible, setIsDistanceVisible] = useState(true);
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    unregister,
    formState: { touchedFields, errors },
  } = useForm<ActivityFormData>({
    defaultValues: {
      perceivedExertion: 5,
      feeling: 5,
    },
    mode: 'onTouched',
  });

  const onActivityChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const activity = event.target.value;
    const { cardio, flex, strength, distance } = ActivitiesOptions[activity];
    if (!distance) {
      setIsDistanceVisible(false);
      unregister('distance');
    } else {
      setIsDistanceVisible(true);
    }
    setValue('cardio', cardio);
    setValue('flexibility', flex);
    setValue('strength', strength);
  };

  const onSubmit = async (event: ActivityFormData) => {
    try {
      const input = new Activity({
        ...event,
        duration: '' + event.duration,
        distance: '' + event.distance,
        perceivedExertion: '' + event.perceivedExertion,
        feeling: '' + event.feeling,
        userId: user?.username || '',
      });

      const activity = await saveActivity(input);

      if (!getFirstActivity()) {
        await updateUserAttributes({ attribute: 'firstActivity', value: true });
      }

      toast('Saved successfully', {
        type: 'success',
        position: 'bottom-center',
      });

      router.push(`/app/activities/${activity.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const exertion = watch('perceivedExertion');
  const feeling = watch('feeling');

  return (
    <PageWrapper title="Add Activity">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Activity Name"
          name="name"
          register={register}
          options={{
            required: 'Please enter an activity name',
            minLength: {
              value: 4,
              message: 'Please enter at least 4 characters',
            },
          }}
          errorMessage={errors.name?.message}
          valid={touchedFields.name && !errors.name}
        />

        <Input
          label="Date"
          name="date"
          register={register}
          errorMessage={errors.date?.message}
          valid={touchedFields.date && !errors.date}
          type="date"
        />
        <Select
          onChange={onActivityChange}
          register={register}
          name="activity"
          label="Activity?"
          errorMessage={errors.activity?.message}
          valid={touchedFields.activity && !errors.activity}
          options={getActivityDropdownOptions()}
        />
        <Input
          label="Duration (minutes)"
          name="duration"
          register={register}
          type="number"
          errorMessage={errors.duration?.message}
          valid={touchedFields.duration && !errors.duration}
          min={0}
          step={0.01}
        />
        {isDistanceVisible && (
          <Input
            label="Distance (km)"
            name="distance"
            register={register}
            errorMessage={errors.distance?.message}
            valid={touchedFields.distance && !errors.distance}
            type="number"
            min={0}
            step={0.01}
          />
        )}
        <section className="mt-3">
          <label className="text-sm">Workout type</label>
          <div className="mt-3 flex flex-col sm:flex-row sm:justify-around ">
            <label className="text-sm">
              <input {...register('cardio')} className="mr-2" type="checkbox" name="cardio" />
              Cardio
            </label>
            <label className="text-sm">
              <input
                {...register('flexibility')}
                className="mr-2"
                type="checkbox"
                name="flexibility"
              />
              Flexibility
            </label>
            <label className="text-sm">
              <input {...register('strength')} className="mr-2" type="checkbox" name="strength" />
              Strength
            </label>
          </div>
        </section>
        <section className="mt-3">
          <Input
            label="Perceived Exertion"
            register={register}
            type="range"
            min="1"
            max="10"
            step="1"
            name="perceivedExertion"
          />
          <p className="text-xs">
            {exertion} - {ExertionOptions[exertion]}
          </p>
        </section>
        <section className="mt-3">
          <Input
            label="How is your body feeling?"
            register={register}
            type="range"
            min="0"
            max="10"
            step="1"
            name="feeling"
          />
          <p className="text-xs">{feeling}</p>
        </section>
        <button className="text-white w-full mt-6 bg-purple-600 p-3 rounded" type="submit">
          Save Activity
        </button>
      </form>
    </PageWrapper>
  );
};

export default AddActivity;
