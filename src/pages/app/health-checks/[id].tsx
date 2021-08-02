import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';
import { Amputation, HealthCheck } from '../../../../models';
import { Input, PageWrapper } from '../../../components';
import { getHealthCheck } from '../../../services';
import { getAmputations } from '../../../services/Amputations';

const DEFAULT_SCORE = '7';

const ViewHealthCheck: React.FC<{ id: string }> = ({ id }) => {
  const [healthCheck, setHealthCheck] = useState<HealthCheck>();
  const [amputations, setAmputations] = useState<Amputation[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHealthCheck(id);
      const amputations = await getAmputations();
      setAmputations(amputations);
      setHealthCheck(data);
      setLoading(false);
    };
    setLoading(true);
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <PageWrapper title="Health Check">
        <h2>Loading...</h2>
      </PageWrapper>
    );
  }

  if (!healthCheck || !amputations) {
    return (
      <PageWrapper title="Health Check">
        <p>Error - not found</p>{' '}
      </PageWrapper>
    );
  }

  const getAmputation = (id?: string) => amputations.find((a) => a.id === id);

  return (
    <PageWrapper title="Health Check">
      <form>
        <h2 className="text-xl">Body Check</h2>
        <section className="my-3 pt-0 p-3">
          <Input
            label={`How is your body feeling today? ${healthCheck.bodyScore}`}
            defaultValue={healthCheck.bodyScore}
            name="bodyScore"
            type="range"
            min="1"
            max="10"
            step="1"
          />
          {+healthCheck.bodyScore < +DEFAULT_SCORE && (
            <React.Fragment>
              <p className="text-sm">Please explain your score (select all that apply)?</p>
              <div className="mt-3 flex flex-col sm:flex-row sm:justify-around ">
                <label className="text-sm px-6">
                  <input className="mr-2" type="checkbox" defaultChecked={healthCheck.aching} />
                  Aching
                </label>
                <label className="text-sm px-6">
                  <input className="mr-2" type="checkbox" defaultChecked={healthCheck.painful} />
                  Painful
                </label>
                <label className="text-sm px-6">
                  <input className="mr-2" type="checkbox" defaultChecked={healthCheck.sore} />
                  Sore
                </label>
                <label className="text-sm px-6">
                  <input className="mr-2" type="checkbox" defaultChecked={healthCheck.tight} />
                  Tight
                </label>
                <label className="text-sm px-6">
                  <input className="mr-2" type="checkbox" defaultChecked={healthCheck.tired} />
                  Tired
                </label>
              </div>
            </React.Fragment>
          )}
        </section>

        {healthCheck?.SocketChecks?.length && healthCheck?.SocketChecks?.length > 0 && (
          <h2 className="text-xl">Residual Limb Checks</h2>
        )}
        {healthCheck?.SocketChecks?.length &&
          healthCheck?.SocketChecks?.length > 0 &&
          healthCheck?.SocketChecks.map((check, index) => {
            return (
              check && (
                <section className="my-3 pt-0 p-3" key={check.id}>
                  <Input
                    label={`How is your ${amputations[index]?.limb?.replace(
                      /_/g,
                      ' ',
                    )} feeling today? ${check.socketComfortScore}`}
                    type="range"
                    defaultValue={check.socketComfortScore}
                    min="1"
                    max="10"
                    step="1"
                  />

                  {+check.socketComfortScore < +DEFAULT_SCORE && (
                    <div className="flex flex-col">
                      <p className="text-sm">Please explain your score (select all that apply)?</p>
                      <div className="flex">
                        <div className="flex flex-1 flex-col">
                          <p>My limb is:</p>
                          <label className="text-sm px-6">
                            <input
                              defaultChecked={check.bleeding}
                              className="mr-2"
                              type="checkbox"
                            />
                            Bleeding
                          </label>
                          <label className="text-sm px-6">
                            <input
                              defaultChecked={check.blistered}
                              className="mr-2"
                              type="checkbox"
                            />
                            Blistered
                          </label>
                          <label className="text-sm px-6">
                            <input
                              defaultChecked={check.bruised}
                              className="mr-2"
                              type="checkbox"
                            />
                            Bruised
                          </label>
                          <label className="text-sm px-6">
                            <input defaultChecked={check.hot} className="mr-2" type="checkbox" />
                            Hot
                          </label>
                          <label className="text-sm px-6">
                            <input
                              defaultChecked={check.painful}
                              className="mr-2"
                              type="checkbox"
                            />
                            Painful
                          </label>
                          <label className="text-sm px-6">
                            <input defaultChecked={check.red} className="mr-2" type="checkbox" />
                            Red
                          </label>
                          <label className="text-sm px-6">
                            <input defaultChecked={check.sore} className="mr-2" type="checkbox" />
                            Sore
                          </label>
                          <label className="text-sm px-6">
                            <input defaultChecked={check.sweaty} className="mr-2" type="checkbox" />
                            Sweaty
                          </label>
                        </div>

                        {getAmputation(check.amputationID)?.prosthesisWorn && (
                          <div className="flex flex-1 flex-col">
                            <p>My socket feels:</p>
                            <label className="text-sm px-6">
                              <input
                                defaultChecked={check.loose}
                                className="mr-2"
                                type="checkbox"
                              />
                              Loose
                            </label>
                            <label className="text-sm px-6">
                              <input
                                defaultChecked={check.tight}
                                className="mr-2"
                                type="checkbox"
                              />
                              Tight
                            </label>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </section>
              )
            );
          })}
      </form>
    </PageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  return { props: { id } };
};

export default ViewHealthCheck;
