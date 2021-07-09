import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ACTIVITY_LIST } from '../../../utils/temp_activity';
import { Input, PageWrapper } from '../../../components';

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
