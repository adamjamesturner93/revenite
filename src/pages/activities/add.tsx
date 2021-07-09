import React from 'react';
import { Input, PageWrapper } from '../../components';
import { useForm } from 'react-hook-form';
import { callGraphQL, createActivity } from '../../graphql';
import { CreateActivityMutation } from '../../API';
import { v4 } from 'uuid';

type ActivityFormData = {
  name: string;
  date: string;
  duration: number;
  distance: number;
  cardio: boolean;
  flexibility: boolean;
  strength: boolean;
  perceivedExertion: number;
  feeling: number;
};

const AddActivity: React.FC = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { touchedFields, errors },
  } = useForm<ActivityFormData>({
    defaultValues: {
      perceivedExertion: 5,
      feeling: 5,
    },
    mode: 'onTouched',
  });

  const onSubmit = async (event: ActivityFormData) => {
    try {
      const input = {
        ...event,
        id: v4(),
      };
      console.log(input);
      await callGraphQL<CreateActivityMutation>(createActivity, undefined, { input });
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
          // , {
          //     required: 'Please enter an activity name',
          //     minLength: {
          //       value: 4,
          //       message: 'Please enter at least 4 characters',
          //     },
          //   })}
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
        <Input
          label="Duration"
          name="duration"
          register={register}
          type="number"
          errorMessage={errors.duration?.message}
          valid={touchedFields.duration && !errors.duration}
          min={0}
        />

        <Input
          label="Distance"
          name="distance"
          register={register}
          errorMessage={errors.distance?.message}
          valid={touchedFields.distance && !errors.distance}
          type="number"
          min={0}
        />
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
          <p className="text-xs">{exertion} - Really hard!</p>
        </section>
        <section className="mt-3">
          <Input
            label="How is your body feeling?"
            register={register}
            type="range"
            min="1"
            max="10"
            step="1"
            name="feeling"
          />
          <p className="text-xs">{feeling} - Really hard!</p>
        </section>
        <button className="text-white w-full mt-6 bg-purple-600 p-3 rounded" type="submit">
          Save Activity
        </button>
      </form>
    </PageWrapper>
  );
};

export default AddActivity;
