import React from 'react';
import { ButtonLink, PageWrapper } from '../../components';

const Profile: React.FC = () => {
  return (
    <PageWrapper title="Profile">
      <ButtonLink href="/profile/details">Update Personal Details</ButtonLink>
      <ButtonLink href="/profile/amputations">Update Amputation Details</ButtonLink>
      <ButtonLink href="/profile/injuries">Update Injury Details</ButtonLink>
      <ButtonLink href="/profile/preferences">Communication Preferences</ButtonLink>
    </PageWrapper>
  );
};

export default Profile;
