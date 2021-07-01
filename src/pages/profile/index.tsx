import React from 'react';
import Link from 'next/link';

const Profile: React.FC = () => {
  return (
    <div className="gb-gray-50 flex flex-grow ">
      <div className="flex flex-col flex-grow items-center">
        <div className="max-w-full sm:w-540 sm:mt-14">
          <div className="bg-white py-14 px-16 shadow-form rounded flex flex-col">
            <h1 className="text-3xl font-black">Profile</h1>

            <button
              className="mt-10 focus:outline-none"
              role="link"
              onClick={() => console.log('NOT IMPLEMENTED')}
            >
              <div className="flex border border-gray-300 p-2 rounded-full items-center justify-center">
                <p className="ml-3">Update Personal Details</p>
              </div>
            </button>
            <button
              className="mt-10 focus:outline-none"
              role="link"
              onClick={() => console.log('NOT IMPLEMENTED')}
            >
              <div className="flex border border-gray-300 p-2 rounded-full items-center justify-center">
                <p className="ml-3">Update Amputation Details</p>
              </div>
            </button>
            <button
              className="mt-10 focus:outline-none"
              role="link"
              onClick={() => console.log('NOT IMPLEMENTED')}
            >
              <div className="flex border border-gray-300 p-2 rounded-full items-center justify-center">
                <p className="ml-3">Update Injury Details</p>
              </div>
            </button>
            <Link href="/profile/preferences">
              <a className=" ml-3 flex border border-gray-300 p-2 rounded-full items-center justify-center">
                Communication Preferences
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
