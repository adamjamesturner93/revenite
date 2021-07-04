import React from 'react';
import { Input } from '../../components';
import { useForm } from 'react-hook-form';

type ActivityFormData = {
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

const AddActivity: React.FC = () => {
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { touchedFields, errors },
  } = useForm<ActivityFormData>({
    defaultValues: {
      perceivedExertion: 5,
      feeling: 5,
    },
    mode: 'onTouched',
  });

  const onSubmit = (event: ActivityFormData) => {
    console.log({ event });
    return;
  };

  const exertion = watch('perceivedExertion');
  const feeling = watch('feeling');

  return (
    <div className="gb-gray-50 flex flex-grow ">
      <div className="flex flex-col flex-grow items-center">
        <div className="max-w-full sm:w-540 sm:mt-14">
          <div className="bg-white py-14 px-16 shadow-form rounded">
            <h1 className="text-2xl">Add Health Check</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <section className="mt-3">
                <label className="text-sm" htmlFor="title">
                  Activity Name
                </label>
                <Input
                  {...register('name', {
                    required: 'Please enter an activity name',
                    minLength: {
                      value: 4,
                      message: 'Please enter at least 4 characters',
                    },
                  })}
                  errorMessage={errors.name?.message}
                  valid={touchedFields.name && !errors.name}
                />
              </section>
              <section className="mt-3">
                <label className="text-sm" htmlFor="date">
                  Date
                </label>
                <Input
                  {...(register('date', { valueAsDate: true }), { required: true })}
                  onChange={(e) => setValue('date', new Date(e.target.value))}
                  errorMessage={errors.date?.message}
                  valid={touchedFields.date && !errors.date}
                  type="date"
                  name="date"
                />
              </section>
              <section className="mt-3">
                <label className="text-sm" htmlFor="duration">
                  Duration
                </label>
                <Input
                  {...register('duration')}
                  type="number"
                  errorMessage={errors.duration?.message}
                  valid={touchedFields.duration && !errors.duration}
                  name="duration"
                  min={0}
                />
              </section>
              <section className="mt-3">
                <label className="text-sm" htmlFor="distance">
                  Distance
                </label>
                <Input
                  {...register('distance')}
                  errorMessage={errors.distance?.message}
                  valid={touchedFields.distance && !errors.distance}
                  type="number"
                  name="distance"
                  min={0}
                />
              </section>
              <section className="mt-3">
                <label className="text-sm">Workout type</label>
                <section className="mt-3 flex flex-col sm:flex-row sm:justify-around ">
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
                    <input
                      {...register('strength')}
                      className="mr-2"
                      type="checkbox"
                      name="strength"
                    />
                    Strength
                  </label>
                </section>
              </section>
              <section className="mt-3">
                <label className="text-sm" htmlFor="exertion">
                  Perceived Exertion
                </label>
                <Input
                  {...register('perceivedExertion')}
                  defaultValue={5}
                  onChange={(e) => setValue('perceivedExertion', +e.target.value)}
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  name="exertion"
                />
                <p className="text-xs">{exertion} - Really hard!</p>
              </section>
              <section className="mt-3">
                <label className="text-sm" htmlFor="body">
                  How is your body feeling?
                </label>
                <Input
                  {...register('feeling')}
                  onChange={(e) => setValue('feeling', +e.target.value)}
                  defaultValue={5}
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  name="body"
                />
                <p className="text-xs">{feeling} - Really hard!</p>
              </section>
              <button className="text-white w-full mt-6 bg-purple-600 p-3 rounded" type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddActivity;
