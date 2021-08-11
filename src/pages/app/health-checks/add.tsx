import React, { useEffect, useState } from 'react';
import { Input, PageWrapper } from '../../../components';
import { useFieldArray, useForm } from 'react-hook-form';
import { Amputation, HealthCheck, SocketCheck } from '../../../../models';
import { getAmputations } from '../../../services/Amputations';
import { v4 } from 'uuid';
import { saveHealthCheck } from '../../../services';
import { useRouter } from 'next/router';
import { useAuth } from '../../../hooks';
import { toast } from 'react-toastify';

const DEFAULT_SCORE = '7';

const AddHealthCheck: React.FC = () => {
  const router = useRouter();
  const { updateUserAttributes } = useAuth();
  const [healthCheckId] = useState(() => v4());
  const [amputations, setAmputations] = useState<Amputation[]>([]);
  const { control, handleSubmit, register, watch } = useForm<
    HealthCheck & { socketChecks: SocketCheck[] }
  >({
    defaultValues: {
      bodyScore: DEFAULT_SCORE,
    },
    mode: 'onTouched',
  });

  const { fields, append } = useFieldArray({ control, name: 'socketChecks' });

  useEffect(() => {
    getAmputations().then((data) => {
      setAmputations(data);
      data.forEach((amputation) => {
        append({
          id: v4(),
          amputationID: amputation.id,
          healthcheckID: healthCheckId,
          socketComfortScore: DEFAULT_SCORE,
        });
      });
    });
  }, [append, healthCheckId]);

  const onSubmit = async (event: HealthCheck & { socketChecks?: SocketCheck[] }) => {
    const { socketChecks, ...healthCheck } = event;
    delete event.socketChecks;

    const saved = await saveHealthCheck({
      ...healthCheck,
      id: healthCheckId,
      date: new Date().toISOString(),
      SocketChecks: socketChecks,
    });

    await updateUserAttributes({ attribute: 'lastHealthCheck', value: new Date() });

    toast('Saved successfully', {
      type: 'success',
      position: 'bottom-center',
    });

    router.push(`/app/health-checks/${saved.id}`);
  };

  const bodyScore = watch('bodyScore');

  return (
    <PageWrapper title="Add Health Check">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl">Body Check</h2>
        <section className="my-3 pt-0 p-3">
          <Input
            label={`How is your body feeling today? ${bodyScore}`}
            name="bodyScore"
            type="range"
            min="1"
            max="10"
            step="1"
            register={register}
          />
          {+bodyScore < +DEFAULT_SCORE && (
            <React.Fragment>
              <p className="text-sm">Please explain your score (select all that apply)?</p>
              <div className="mt-3 flex flex-col sm:flex-row sm:justify-around ">
                <label className="text-sm px-6">
                  <input {...register('aching')} className="mr-2" type="checkbox" name="aching" />
                  Aching
                </label>
                <label className="text-sm px-6">
                  <input {...register('painful')} className="mr-2" type="checkbox" name="painful" />
                  Painful
                </label>
                <label className="text-sm px-6">
                  <input {...register('sore')} className="mr-2" type="checkbox" name="sore" />
                  Sore
                </label>
                <label className="text-sm px-6">
                  <input {...register('tight')} className="mr-2" type="checkbox" name="tight" />
                  Tight
                </label>
                <label className="text-sm px-6">
                  <input {...register('tired')} className="mr-2" type="checkbox" name="tired" />
                  Tired
                </label>
              </div>
            </React.Fragment>
          )}
        </section>

        {amputations?.length > 0 && fields && <h2 className="text-xl">Residual Limb Checks</h2>}
        {amputations?.length > 0 &&
          fields.map((field, index) => {
            const socketScore = watch(`socketChecks.${index}.socketComfortScore`) || DEFAULT_SCORE;
            return (
              <section className="my-3 pt-0 p-3" key={field.id}>
                <Input
                  label={`How is your ${amputations[index]?.limb?.replace(
                    /_/g,
                    ' ',
                  )} feeling today? ${socketScore}`}
                  name={`socketChecks.${index}.socketComfortScore`}
                  type="range"
                  defaultValue={field.socketComfortScore}
                  min="1"
                  max="10"
                  step="1"
                  register={register}
                />

                {+socketScore < +DEFAULT_SCORE && (
                  <div className="flex flex-col">
                    <p className="text-sm">Please explain your score (select all that apply)?</p>
                    <div className="flex">
                      <div className="flex flex-1 flex-col">
                        <p>My limb is:</p>
                        <label className="text-sm px-6">
                          <input
                            {...register(`socketChecks.${index}.bleeding`)}
                            defaultChecked={field.bleeding}
                            className="mr-2"
                            type="checkbox"
                            name={`socketChecks.${index}.bleeding`}
                          />
                          Bleeding
                        </label>
                        <label className="text-sm px-6">
                          <input
                            {...register(`socketChecks.${index}.blistered`)}
                            defaultChecked={field.blistered}
                            className="mr-2"
                            type="checkbox"
                            name={`socketChecks.${index}.blistered`}
                          />
                          Blistered
                        </label>
                        <label className="text-sm px-6">
                          <input
                            {...register(`socketChecks.${index}.bruised`)}
                            defaultChecked={field.bruised}
                            className="mr-2"
                            type="checkbox"
                            name={`socketChecks.${index}.bruised`}
                          />
                          Bruised
                        </label>
                        <label className="text-sm px-6">
                          <input
                            {...register(`socketChecks.${index}.hot`)}
                            defaultChecked={field.hot}
                            className="mr-2"
                            type="checkbox"
                            name={`socketChecks.${index}.hot`}
                          />
                          Hot
                        </label>
                        <label className="text-sm px-6">
                          <input
                            {...register(`socketChecks.${index}.painful`)}
                            defaultChecked={field.painful}
                            className="mr-2"
                            type="checkbox"
                            name={`socketChecks.${index}.painful`}
                          />
                          Painful
                        </label>
                        <label className="text-sm px-6">
                          <input
                            {...register(`socketChecks.${index}.red`)}
                            defaultChecked={field.red}
                            className="mr-2"
                            type="checkbox"
                            name={`socketChecks.${index}.red`}
                          />
                          Red
                        </label>
                        <label className="text-sm px-6">
                          <input
                            {...register(`socketChecks.${index}.sore`)}
                            defaultChecked={field.sore}
                            className="mr-2"
                            type="checkbox"
                            name={`socketChecks.${index}.sore`}
                          />
                          Sore
                        </label>
                        <label className="text-sm px-6">
                          <input
                            {...register(`socketChecks.${index}.sweaty`)}
                            defaultChecked={field.sweaty}
                            className="mr-2"
                            type="checkbox"
                            name={`socketChecks.${index}.sweaty`}
                          />
                          Sweaty
                        </label>
                      </div>

                      {amputations[index]?.prosthesisWorn && (
                        <div className="flex flex-1 flex-col">
                          <p>My socket feels:</p>
                          <label className="text-sm px-6">
                            <input
                              {...register(`socketChecks.${index}.loose`)}
                              defaultChecked={field.loose}
                              className="mr-2"
                              type="checkbox"
                              name={`socketChecks.${index}.loose`}
                            />
                            Loose
                          </label>
                          <label className="text-sm px-6">
                            <input
                              {...register(`socketChecks.${index}.tight`)}
                              defaultChecked={field.tight}
                              className="mr-2"
                              type="checkbox"
                              name={`socketChecks.${index}.tight`}
                            />
                            Tight
                          </label>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </section>
            );
          })}

        <button className="text-white w-full mt-6 bg-purple-600 p-3 rounded" type="submit">
          Save Health Check
        </button>
      </form>
    </PageWrapper>
  );
};

export default AddHealthCheck;
