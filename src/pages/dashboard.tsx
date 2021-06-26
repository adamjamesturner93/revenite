import { useRouter } from 'next/router';
import React from 'react';
import { FaLightbulb, FaArrowRight } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  const router = useRouter();
  return (
    <div className="gb-gray-50 flex flex-grow ">
      <div className="flex flex-col flex-grow items-center">
        <div className="max-w-full sm:w-540 mt-14">
          <div className="bg-white py-14 px-16 shadow-form rounded">
            <article className="p-5 bg-white text-gray-500">
              <h2 className="text-xl text-gray-700">Making the most of Revenite...</h2>
              <article role="listbox">
                <p role="listitem" className="flex py-2">
                  <FaLightbulb className="mr-3 self-center text-yellow-400" /> Provide details of
                  any Amputations you have{' '}
                  <FaArrowRight
                    role="link"
                    onClick={() => router.push('/profile')}
                    className="ml-auto self-center text-blue-400 hover:text-blue-600"
                  />
                </p>
                <p role="listitem" className="flex py-2">
                  <FaLightbulb className="mr-3 self-center" /> Provide details of any other injuries
                  you have{' '}
                  <FaArrowRight
                    role="link"
                    onClick={() => router.push('/profile')}
                    className="ml-auto self-center text-blue-400 hover:text-blue-600"
                  />
                </p>
                <p role="listitem" className="flex py-2">
                  <FaLightbulb className="mr-3 self-center" /> Record your first activity{' '}
                  <FaArrowRight
                    role="link"
                    onClick={() => router.push('/activities/add')}
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
                  <FaLightbulb className="mr-3 self-center" /> Connect to a fitness app (e.g.
                  Strava){' '}
                  <FaArrowRight
                    role="link"
                    onClick={() => router.push('/settings')}
                    className="ml-auto self-center text-blue-400 hover:text-blue-600"
                  />
                </p>
              </article>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
