import React from 'react';
import { Input, PageWrapper } from '../../../components';
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

  return <PageWrapper title="Add Health Check"> </PageWrapper>;
};

export default AddActivity;
