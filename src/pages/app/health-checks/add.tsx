import React, { useEffect, useState } from 'react';
import { Input, PageWrapper } from '../../../components';
import { useFieldArray, useForm } from 'react-hook-form';
import { Amputation, HealthCheck, SocketCheck } from '../../../../models';
import { getAmputations } from '../../../services/Amputations';
import { v4 } from 'uuid';

const AddHealthCheck: React.FC = () => {
  const [healthCheckId] = useState(() => v4());
  const [amputations, setAmputations] = useState<Amputation[]>([]);
  const { control, handleSubmit, register, watch } = useForm<
    HealthCheck & { socketChecks: SocketCheck[] }
  >({
    defaultValues: {
      bodyScore: '7',
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
          socketComfortScore: '7',
        });
      });
    });
  }, [append, healthCheckId]);

  const onSubmit = (event: HealthCheck) => {
    console.log({ event });
    return;
  };

  const bodyScore = watch('bodyScore');

  return (
    <PageWrapper title="Add Health Check">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl">Body Check</h2>
        <section className="mt-3">
          <Input
            label="How is your body feeling today?"
            name="bodyScore"
            type="range"
            min="1"
            max="10"
            step="1"
            register={register}
          />
          <p className="text-xs">{bodyScore}</p>
        </section>
        {+bodyScore < 7 && (
          <section className="mt-3">
            <label className="text-sm">Please explain your score</label>
            <div className="mt-3 flex flex-col sm:flex-row sm:justify-around ">
              <label className="text-sm">
                <input {...register('aching')} className="mr-2" type="checkbox" name="aching" />
                Aching
              </label>
              <label className="text-sm">
                <input {...register('painful')} className="mr-2" type="checkbox" name="painful" />
                Painful
              </label>
              <label className="text-sm">
                <input {...register('sore')} className="mr-2" type="checkbox" name="sore" />
                Sore
              </label>
              <label className="text-sm">
                <input {...register('tight')} className="mr-2" type="checkbox" name="tight" />
                Tight
              </label>
              <label className="text-sm">
                <input {...register('tired')} className="mr-2" type="checkbox" name="tired" />
                Tired
              </label>
            </div>
          </section>
        )}

        {amputations?.length > 0 && fields && <h2 className="text-xl">Socket Checks</h2>}
        {amputations?.length > 0 &&
          fields.map((field, index) => {
            const socketScore = watch(`socketChecks.${index}.socketComfortScore`);
            return (
              <section className="my-3 p-3" key={field.id}>
                <h4>{amputations[index]?.limb}</h4>
                <section className="mt-3">
                  <Input
                    label="How is your socket feeling today?"
                    name={`socketChecks.${index}.socketComfortScore`}
                    type="range"
                    defaultValue={field.socketComfortScore}
                    min="1"
                    max="10"
                    step="1"
                    register={register}
                  />
                  <p className="text-xs">{socketScore}</p>
                </section>
                {+socketScore < 7 && (
                  <div className="mt-3 flex flex-col">
                    <h5>Limb is (please select all that apply):</h5>
                    <label className="text-sm">
                      <input
                        {...register(`socketChecks.${index}.bleeding`)}
                        defaultChecked={field.bleeding}
                        className="mr-2"
                        type="checkbox"
                        name={`amputations.${index}.bleeding`}
                      />
                      Bleeding
                    </label>
                    <label className="text-sm">
                      <input
                        {...register(`socketChecks.${index}.blistered`)}
                        defaultChecked={field.blistered}
                        className="mr-2"
                        type="checkbox"
                        name={`amputations.${index}.blistered`}
                      />
                      Blistered
                    </label>
                    <label className="text-sm">
                      <input
                        {...register(`socketChecks.${index}.bruised`)}
                        defaultChecked={field.bruised}
                        className="mr-2"
                        type="checkbox"
                        name={`amputations.${index}.bruised`}
                      />
                      Bruised
                    </label>
                    <label className="text-sm">
                      <input
                        {...register(`socketChecks.${index}.hot`)}
                        defaultChecked={field.hot}
                        className="mr-2"
                        type="checkbox"
                        name={`amputations.${index}.hot`}
                      />
                      Hot
                    </label>
                    <label className="text-sm">
                      <input
                        {...register(`socketChecks.${index}.painful`)}
                        defaultChecked={field.painful}
                        className="mr-2"
                        type="checkbox"
                        name={`amputations.${index}.painful`}
                      />
                      Painful
                    </label>
                    <label className="text-sm">
                      <input
                        {...register(`socketChecks.${index}.red`)}
                        defaultChecked={field.red}
                        className="mr-2"
                        type="checkbox"
                        name={`amputations.${index}.red`}
                      />
                      Red
                    </label>
                    <label className="text-sm">
                      <input
                        {...register(`socketChecks.${index}.sore`)}
                        defaultChecked={field.sore}
                        className="mr-2"
                        type="checkbox"
                        name={`amputations.${index}.sore`}
                      />
                      Sore
                    </label>
                    <label className="text-sm">
                      <input
                        {...register(`socketChecks.${index}.sweaty`)}
                        defaultChecked={field.sweaty}
                        className="mr-2"
                        type="checkbox"
                        name={`amputations.${index}.sweaty`}
                      />
                      Sweaty
                    </label>
                    <h5>Socket is (please select all that apply):</h5>
                    <label className="text-sm">
                      <input
                        {...register(`socketChecks.${index}.loose`)}
                        defaultChecked={field.loose}
                        className="mr-2"
                        type="checkbox"
                        name={`amputations.${index}.loose`}
                      />
                      Loose
                    </label>
                    <label className="text-sm">
                      <input
                        {...register(`socketChecks.${index}.tight`)}
                        defaultChecked={field.tight}
                        className="mr-2"
                        type="checkbox"
                        name={`amputations.${index}.tight`}
                      />
                      Tight
                    </label>
                  </div>
                )}
              </section>
            );
          })}
      </form>
    </PageWrapper>
  );
};

export default AddHealthCheck;
