import React from 'react';
import { useAuth } from '../hooks';

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="gb-gray-50 flex flex-grow ">
      <div className="flex flex-col flex-grow items-center">
        <div className="max-w-full sm:w-540 mt-14">
          <div className="bg-white py-14 px-16 shadow-form rounded">
            Welcome, {user?.attributes.email}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
