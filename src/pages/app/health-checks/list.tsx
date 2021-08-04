import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { HealthCheck } from '../../../../models';
import { PageWrapper } from '../../../components';
import { listHealthChecks, mapHealthChecksByMonth } from '../../../services';
import { format } from 'date-fns';

const HealthChecks: React.FC = () => {
  const router = useRouter();
  const [healthChecks, setHealthChecks] = useState<HealthCheck[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await listHealthChecks();
      setHealthChecks(data);
      setLoading(false);
    };
    setLoading(true);
    fetchData();
  }, []);

  if (loading) {
    return (
      <PageWrapper title="Health Checks">
        <h2>Loading...</h2>
      </PageWrapper>
    );
  }

  if (healthChecks.length === 0) {
    return (
      <PageWrapper title="Health Checks">
        <h2>No Health Checks have been recorded yet</h2>
      </PageWrapper>
    );
  }

  const healthChecksByMonth = mapHealthChecksByMonth(healthChecks);

  return (
    <PageWrapper title="Health Checks">
      {healthChecksByMonth.map(({ month, healthChecks }) => (
        <section key={month} className="cursor-pointer">
          <h3 className="text-xl font-bold">{month}</h3>
          {healthChecks.map(({ id, date }) => (
            <section
              className="border border-purple-600 flex justify-between py-1 px-2 my-2"
              role="link"
              onClick={() => router.push(`/app/health-checks/${id}`)}
              key={id}
            >
              {format(new Date(date), 'HH:mm - PPPP')}
            </section>
          ))}
        </section>
      ))}
    </PageWrapper>
  );
};

export default HealthChecks;
