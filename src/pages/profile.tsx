import React from 'react';
import { useAuth } from '../hooks';

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="gb-gray-50 flex flex-grow ">
      <div className="flex flex-col flex-grow items-center">
        <div className="max-w-full sm:w-540 mt-14">
          <div className="bg-white py-14 px-16 shadow-form rounded flex flex-col">
            <h2 className="text-xl">Profile</h2>

            <button
              className="mt-10 focus:outline-none"
              onClick={() => console.log('NOT IMPLEMENTED')}
            >
              <div className="flex border border-gray-300 p-2 rounded-full items-center justify-center">
                <p className="ml-3">Update Personal Details</p>
              </div>
            </button>
            <button
              className="mt-10 focus:outline-none"
              onClick={() => console.log('NOT IMPLEMENTED')}
            >
              <div className="flex border border-gray-300 p-2 rounded-full items-center justify-center">
                <p className="ml-3">Update Amputation Details</p>
              </div>
            </button>
            <button
              className="mt-10 focus:outline-none"
              onClick={() => console.log('NOT IMPLEMENTED')}
            >
              <div className="flex border border-gray-300 p-2 rounded-full items-center justify-center">
                <p className="ml-3">Update Injury Details</p>
              </div>
            </button>
            <button
              className="mt-10 focus:outline-none"
              onClick={() => console.log('NOT IMPLEMENTED')}
            >
              <div className="flex border border-gray-300 p-2 rounded-full items-center justify-center">
                <p className="ml-3">Communication Preferences</p>
              </div>
            </button>
            <button
              className="mt-10 focus:outline-none"
              onClick={() => console.log('NOT IMPLEMENTED')}
            >
              <div className="flex border border-gray-300 p-2 rounded-full items-center justify-center">
                <p className="ml-3">Communication Preferences</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
