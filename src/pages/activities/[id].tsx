import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { ACTIVITY_LIST } from '../../utils/temp_activity';

const ViewActivity: React.FC<{ activity: any }> = ({ activity }) => {
  return (
    <div className="gb-gray-50 flex flex-grow ">
      <div className="flex flex-col flex-grow items-center">
        <div className="max-w-full sm:w-540 mt-14">
          <div className="bg-white py-14 px-16 shadow-form rounded">
            View Activity {activity?.id}
          </div>
        </div>
      </div>
    </div>
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
