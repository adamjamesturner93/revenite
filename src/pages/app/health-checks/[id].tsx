import React from 'react';
import { PageWrapper } from '../../../components';

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
  return <PageWrapper title={`Health Check - ${activity.name}`}></PageWrapper>;
};

export default ViewActivity;
