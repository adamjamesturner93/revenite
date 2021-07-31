import React from 'react';
import { ButtonLink, PageWrapper } from '../../../components';

const Profile: React.FC = () => {
  return (
    <PageWrapper title="Profile">
      <ButtonLink href="/app/profile/details">Update Personal Details</ButtonLink>
      <ButtonLink href="/app/profile/amputations">Update Amputation Details</ButtonLink>
      <ButtonLink href="/app/profile/preferences">Communication Preferences</ButtonLink>
    </PageWrapper>
  );
};

export default Profile;
