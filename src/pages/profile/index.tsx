import React from 'react';
import { ButtonLink } from '../../components';

const Profile: React.FC = () => {
  return (
    <div className="gb-gray-50 flex flex-grow ">
      <div className="flex flex-col flex-grow items-center">
        <div className="max-w-full sm:w-540 sm:mt-14">
          <div className="bg-white py-14 px-16 shadow-form rounded flex flex-col">
            <h1 className="text-3xl font-black">Profile</h1>
            <ButtonLink href="/profile/details">Update Personal Details</ButtonLink>
            <ButtonLink href="/profile/amputations">Update Amputation Details</ButtonLink>
            <ButtonLink href="/profile/injuries">Update Injury Details</ButtonLink>
            <ButtonLink href="/profile/preferences">Communication Preferences</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
