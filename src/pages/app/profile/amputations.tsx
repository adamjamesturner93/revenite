import React, { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { v4 } from 'uuid';
import { Amputation } from '../../../../models';
import { PageWrapper, Select } from '../../../components';
import { useAuth } from '../../../hooks';
import { getAmputations, saveAmputation, updateAmputation } from '../../../services/Amputations';
import { AmputationLevels, AmputationLimb } from '../../../utils';

const AmputationDetails: React.FC = () => {
  const [currentAmputations, setCurrentAmputations] = useState<Amputation[]>([]);
  const { getAmputationDetails, updateUserAttributes } = useAuth();
  const { handleSubmit, control, register, reset, watch } = useForm<{ amputations: Amputation[] }>({
    mode: 'onTouched',
    defaultValues: { amputations: currentAmputations },
  });

  const { fields, append } = useFieldArray({
    control,
    name: 'amputations',
  });

  useEffect(() => {
    getAmputations()
      .then((amputations) => {
        setCurrentAmputations(amputations);
        reset({ amputations });
      })
      .catch(console.error);
  }, [reset]);

  const onSubmit = async ({ amputations }: { amputations: Amputation[] }) => {
    const newAmputations: Amputation[] = [];

    if (fields.length > 0) {
      amputations.forEach(async (amputation, index) => {
        if (amputation?.id.indexOf('new') > -1) {
          const input = { ...amputation, id: v4() };
          newAmputations.push(await saveAmputation(input));
        } else {
          const input = {
            ...amputation,
          };
          newAmputations.push(await updateAmputation(currentAmputations[index], input));
        }
      });
    }

    if (!getAmputationDetails()) {
      await updateUserAttributes({ attribute: 'amputationDetails', value: true });
    }

    toast('Saved successfully', {
      type: 'success',
      position: 'bottom-center',
    });

    setCurrentAmputations(newAmputations);
  };

  return (
    <PageWrapper title="Amputation Details">
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => {
          const limb = watch(`amputations.${index}.limb`);

          return (
            <section className="my-3 p-3" key={field.id}>
              <h3>Limb {index + 1}</h3>
              <Select
                register={register}
                name={`amputations.${index}.limb`}
                label="Please indicate which limb"
                options={AmputationLimb}
                defaultValue={field.limb}
              />
              <Select
                register={register}
                name={`amputations.${index}.level`}
                label="Please the amputation level"
                options={
                  limb && AmputationLevels[limb]
                    ? AmputationLevels[limb]
                    : [{ label: 'Please select a limb', value: 'UNKNOWN' }]
                }
                defaultValue={field.level}
              />

              <h4>Please select all that apply:</h4>
              <div className="mt-3 flex flex-col sm:flex-row sm:justify-around ">
                <label className="text-sm">
                  <input
                    {...register(`amputations.${index}.prosthesisWorn`)}
                    defaultChecked={field.prosthesisWorn}
                    className="mr-2"
                    type="checkbox"
                    name={`amputations.${index}.prosthesisWorn`}
                  />
                  Prosthesis Worn
                </label>
                <label className="text-sm">
                  <input
                    {...register(`amputations.${index}.scarring`)}
                    defaultChecked={field.scarring}
                    className="mr-2"
                    type="checkbox"
                    name={`amputations.${index}.scarring`}
                  />
                  Excessive scar tissue/skin
                </label>
                <label className="text-sm">
                  <input
                    {...register(`amputations.${index}.grafting`)}
                    defaultChecked={field.grafting}
                    className="mr-2"
                    type="checkbox"
                    name={`amputations.${index}.grafting`}
                  />
                  Skin grafting
                </label>
              </div>
            </section>
          );
        })}
        {fields.length < 4 && (
          <button
            className="text-gray w-full mt-6 bg-gray-300 p-3 rounded"
            type="button"
            onClick={() => append({ id: `new-${Math.random()}` })}
          >
            Add amputation
          </button>
        )}
        <button className="text-white w-full mt-6 bg-purple-600 p-3 rounded" type="submit">
          {fields.length === 0 ? 'I have no amputations' : 'Save'}
        </button>
        <button className="text-gray-700 w-full mt-6 bg-gray-300 p-3 rounded" type="reset">
          Cancel (Reset Changes)
        </button>
      </form>
    </PageWrapper>
  );
};

export default AmputationDetails;
