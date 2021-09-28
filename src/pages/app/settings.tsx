import React, { useEffect, useState } from 'react';
import { PageWrapper, Strava } from '../../components';
import { useAuth } from '../../hooks';
import { getStravaConnection } from '../../services/Strava';

const Settings: React.FC = () => {
  const [isStravaUser, setIsStravaUser] = useState(false);
  const {
    user: { user },
  } = useAuth();

  useEffect(() => {
    const userId = user?.username;
    console.log(user?.attributes);
    if (!userId) return;
    getStravaConnection(userId).then((data) => {
      const user = data[0];
      console.log(user);
      if (user) {
        setIsStravaUser(true);
      }
    });
  }, [user]);

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
          href={`http://www.strava.com/oauth/authorize?client_id=69123&response_type=code&redirect_uri=http://localhost:3000/api/strava/exchange_token?user=${user?.username}&approval_prompt=force&scope=activity:read_all`}
          rel="noreferrer"
        >
          <Strava />
        </a>
      )}
      {/* <button
              className="mt-10 flex border border-gray-300 p-2 rounded-full items-center justify-center"
              onClick={() => console.log('NOT IMPLEMENTED')}
              > 
              https://developer.garmin.com/gc-developer-program/activity-api/ 
              <img src="/garmin.png" alt="Connect with Garmin" />
              </button>
            */}
      <a
        className="mt-10 w-full flex border bg-gray-700 p-5 rounded-full items-center justify-center text-white"
        href="https://revenite-docs.s3.eu-west-1.amazonaws.com/ICREC-Participant-Information-Sheet.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Participant Information Sheet
      </a>

      <p className="pt-12">More integrations coming soon...</p>
    </PageWrapper>
  );
};

export default Settings;
