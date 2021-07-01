import React from 'react';
import { SiStrava, SiFitbit, SiGarmin, SiGooglefit } from 'react-icons/si';

const Settings: React.FC = () => {
  return (
    <div className="gb-gray-50 flex flex-grow ">
      <div className="flex flex-col flex-grow items-center">
        <div className="max-w-full sm:w-540 sm:mt-14">
          <div className="bg-white py-14 px-16 shadow-form rounded flex flex-col">
            <h1 className="text-3xl font-black">Settings</h1>
            <button
              className="mt-10 focus:outline-none"
              onClick={() => console.log('NOT IMPLEMENTED')}
            >
              <div className="flex border border-gray-300 p-2 rounded-full items-center justify-center">
                <SiStrava size="38" className="text-red-600" />
                <p className="ml-3">Connect with Strava</p>
              </div>
            </button>
            <button
              className="mt-10 focus:outline-none"
              onClick={() => console.log('NOT IMPLEMENTED')}
            >
              <div className="flex border border-gray-300 p-2 rounded-full items-center justify-center">
                <SiFitbit size="38" className="text-red-600" />
                <p className="ml-3">Connect with FitBit</p>
              </div>
            </button>
            <button
              className="mt-10 focus:outline-none"
              onClick={() => console.log('NOT IMPLEMENTED')}
            >
              <div className="flex border border-gray-300 p-2 rounded-full items-center justify-center">
                <SiGarmin size="38" className="text-red-600" />
                <p className="ml-3">Connect with Garmin</p>
              </div>
            </button>
            <button
              className="mt-10 focus:outline-none"
              onClick={() => console.log('NOT IMPLEMENTED')}
            >
              <div className="flex border border-gray-300 p-2 rounded-full items-center justify-center">
                <SiGooglefit size="38" className="text-red-600" />
                <p className="ml-3">Connect with GoogleFit</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
