import React, { useEffect, useState } from 'react';
import { PageWrapper, Strava } from '../../components';
import { useAuth } from '../../hooks';
import { getStravaConnection } from '../../services/Strava';

const Settings: React.FC = () => {
  const [isStravaUser, setIsStravaUser] = useState(false);
  const {
    user: { user },
  } = useAuth();

  const { origin } = window.location;

  useEffect(() => {
    const userId = user?.username;
    if (!userId) return;
    getStravaConnection(userId).then((data) => {
      const user = data[0];
      if (user) {
        setIsStravaUser(true);
      }
    });
  }, [user]);

  return (
    <PageWrapper title="Settings">
      {isStravaUser ? (
        <a
          className="mt-10 w-full flex border bg-strava p-5 rounded-full items-center justify-center text-white"
          href="#"
          rel="noreferrer"
        >
          Connected to Strava
        </a>
      ) : (
        <a
          className="mt-10 w-full flex border bg-strava p-2 rounded-full items-center justify-center"
          href={`http://www.strava.com/oauth/authorize?client_id=69123&response_type=code&redirect_uri=${origin}/api/strava/exchange_token?user=${user?.username}&approval_prompt=force&scope=activity:read_all`}
          rel="noreferrer"
        >
          <Strava />
        </a>
      )}

      <a
        className="mt-10 w-full flex border bg-gray-700 p-5 rounded-full items-center justify-center text-white"
        href="https://revenite-docs.s3.eu-west-1.amazonaws.com/ICREC-Participant-Information-Sheet.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Participant Information Sheet
      </a>
    </PageWrapper>
  );
};

export default Settings;
