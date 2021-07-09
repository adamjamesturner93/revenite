import { useRouter } from 'next/router';
import React from 'react';
import { FaLightbulb, FaArrowRight } from 'react-icons/fa';
import { PageWrapper } from '../../components';

const Dashboard: React.FC = () => {
  const router = useRouter();
  return (
    <PageWrapper>
      <article className="p-5 bg-white text-gray-500">
        <h2 className="text-xl text-gray-700">Making the most of Revenite...</h2>
        <article role="listbox">
          <p role="listitem" className="flex py-2">
            <FaLightbulb className="mr-3 self-center text-yellow-400" /> Provide some personal
            details{' '}
            <FaArrowRight
              role="link"
              onClick={() => router.push('/app/profile')}
              className="ml-auto self-center text-blue-400 hover:text-blue-600"
            />
          </p>
          <p role="listitem" className="flex py-2">
            <FaLightbulb className="mr-3 self-center text-yellow-400" /> Provide details of any
            Amputations you have{' '}
            <FaArrowRight
              role="link"
              onClick={() => router.push('/app/profile')}
              className="ml-auto self-center text-blue-400 hover:text-blue-600"
            />
          </p>
          <p role="listitem" className="flex py-2">
            <FaLightbulb className="mr-3 self-center" /> Provide details of any other injuries you
            have{' '}
            <FaArrowRight
              role="link"
              onClick={() => router.push('/app/profile')}
              className="ml-auto self-center text-blue-400 hover:text-blue-600"
            />
          </p>
          <p role="listitem" className="flex py-2">
            <FaLightbulb className="mr-3 self-center" /> Record your first activity{' '}
            <FaArrowRight
              role="link"
              onClick={() => router.push('/app/activities/add')}
              className="ml-auto self-center text-blue-400 hover:text-blue-600"
            />
          </p>
          <p role="listitem" className="flex py-2">
            <FaLightbulb className="mr-3 self-center" /> Record your first health check{' '}
            <FaArrowRight
              role="link"
              onClick={() => console.log('NOT IMPLEMENTED')}
              className="ml-auto self-center text-blue-400 hover:text-blue-600"
            />
          </p>
          <p role="listitem" className="flex py-2">
            <FaLightbulb className="mr-3 self-center" /> Connect to a fitness app (e.g. Strava){' '}
            <FaArrowRight
              role="link"
              onClick={() => router.push('/app/settings')}
              className="ml-auto self-center text-blue-400 hover:text-blue-600"
            />
          </p>
          <p role="listitem" className="flex py-2">
            <FaLightbulb className="mr-3 self-center" /> Add Revenite to your mobile home page{' '}
            <FaArrowRight
              role="link"
              onClick={() => router.push('/app/settings')}
              className="ml-auto self-center text-blue-400 hover:text-blue-600"
            />
          </p>
        </article>
      </article>
    </PageWrapper>
  );
};

export default Dashboard;
