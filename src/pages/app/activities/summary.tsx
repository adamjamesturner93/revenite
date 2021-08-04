import React, { useState, useEffect } from 'react';
import { subDays, isAfter } from 'date-fns';
import { PageWrapper, Tab, TabLink } from '../../../components';
import { listActivities } from '../../../services';
import { Activity } from '../../../../models';
import { ActivityTab } from '../../../views';

const Activities: React.FC = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await listActivities();
      setActivities(data);
      setLoading(false);
    };
    setLoading(true);
    fetchData();
  }, []);

  if (loading) {
    return (
      <PageWrapper title="Activities">
        <h2>Loading...</h2>
      </PageWrapper>
    );
  }

  if (!activities) {
    return (
      <PageWrapper title="Activities">
        <h2>No activities have been recorded yet</h2>
      </PageWrapper>
    );
  }

  const sevenDaysBefore = subDays(new Date(), 7);
  const twentyEightDaysBefore = subDays(new Date(), 28);

  return (
    <PageWrapper title="Activities Summary">
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
            <TabLink openTab={openTab} index={1} onClick={() => setOpenTab(1)}>
              Last 7 days
            </TabLink>
            <TabLink openTab={openTab} index={2} onClick={() => setOpenTab(2)}>
              Last 4 weeks
            </TabLink>
            <TabLink openTab={openTab} index={3} onClick={() => setOpenTab(3)}>
              All time
            </TabLink>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                {openTab === 1 && (
                  <Tab>
                    <ActivityTab
                      label="This week:"
                      timePeriod="week"
                      activities={activities.filter((a) =>
                        isAfter(new Date(a.date), sevenDaysBefore),
                      )}
                    />
                  </Tab>
                )}
                {openTab === 2 && (
                  <Tab>
                    <ActivityTab
                      timePeriod="month"
                      label="This month:"
                      activities={activities.filter((a) =>
                        isAfter(new Date(a.date), twentyEightDaysBefore),
                      )}
                    />
                  </Tab>
                )}
                {openTab === 3 && (
                  <Tab>
                    <ActivityTab timePeriod="forever" label="All time:" activities={activities} />
                  </Tab>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Activities;
