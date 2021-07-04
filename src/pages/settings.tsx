import React from 'react';
import { PageWrapper, Strava } from '../components';

const Settings: React.FC = () => {
  return (
    <PageWrapper title="Settings">
      {/* <button
              className="mt-10 focus:outline-none"
              onClick={() => console.log('NOT IMPLEMENTED')}
            >
              <--- FITBIT --->
              <div className="flex border border-gray-300 p-2 rounded-full items-center justify-center">
                <SiStrava size="38" className="text-red-600" />
                <p className="ml-3">Connect with Strava</p>
              </div>
            </button> */}
      <button
        className="mt-10 w-full flex border bg-strava p-2 rounded-full items-center justify-center"
        onClick={() => console.log('NOT IMPLEMENTED')}
      >
        {/* https://developers.strava.com/ */}
        <Strava />
      </button>

      <p className="pt-12">More integrations coming soon...</p>
      {/* <button
              className="mt-10 flex border border-gray-300 p-2 rounded-full items-center justify-center"
              onClick={() => console.log('NOT IMPLEMENTED')}
            > 
             https://developer.garmin.com/gc-developer-program/activity-api/ 
              <img src="/garmin.png" alt="Connect with Garmin" />
            </button>
            */}
    </PageWrapper>
  );
};

export default Settings;
