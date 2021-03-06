import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input, PageWrapper, Select } from '../../../components';
import { EthnicGroups, Ethnicity, GenderIdentities, MilitaryService, Sex } from '../../../utils';
import { callGraphQL, createUser, listUsers, updateUser } from '../../../graphql';
import { v4 } from 'uuid';
import { GetServerSideProps } from 'next';
import { withSSRContext } from 'aws-amplify';
import { CreateUserMutation, ListUsersQuery, UpdateUserMutation } from '../../../API';
import { mapCreateUser, mapListUsersQuery, mapUpdateUser, User } from '../../../models';

const PersonalDetails: React.FC<{ serverUser: User }> = ({ serverUser }) => {
  const [user, setUser] = useState<User>(serverUser);

  const {
    handleSubmit,
    register,
    watch,
    unregister,

    formState: { touchedFields, errors },
  } = useForm<User>({
    mode: 'onTouched',
    defaultValues: user,
  });

  const onSubmit = async (event: User) => {
    if (user.id) {
      // Update
      const input = {
        ...event,
      };

      delete input.createdAt;
      delete input.updatedAt;
      delete input.owner;

      const resp = await callGraphQL<UpdateUserMutation>(updateUser, undefined, { input });
      setUser(mapUpdateUser(resp, user));
    } else {
      // Create
      const input = {
        ...event,
        id: v4(),
      };

      try {
        const resp = await callGraphQL<CreateUserMutation>(createUser, undefined, { input });
        setUser(mapCreateUser(resp));
      } catch (error) {
        console.error(error);
      }
    }

    return;
  };

  const ethnicGroup = watch('ethnicGroup');
  const ethnicity = watch('ethnicIdentity');
  const hasMilitaryService = watch('hasMilitaryService');
  const militaryService = watch('militaryService');

  useEffect(() => {
    if (ethnicity !== 'other') unregister('ethnicIdentityOther');
  }, [ethnicity, unregister]);
  useEffect(() => {
    if (militaryService !== 'other') unregister('militaryServiceOther');
  }, [militaryService, unregister]);

  return (
    <PageWrapper title="Personal Details">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="name"
          register={register}
          label="Full Name"
          errorMessage={errors.name?.message}
          valid={touchedFields.name && !errors.name}
        />
        <Input
          register={register}
          name="display_name"
          label="Display Name"
          errorMessage={errors.display_name?.message}
          valid={touchedFields.display_name && !errors.display_name}
        />
        <Input
          register={register}
          name="dateOfBirth"
          type="date"
          label="What is your Date of Birth"
          errorMessage={errors.dateOfBirth?.message}
          valid={touchedFields.dateOfBirth && !errors.dateOfBirth}
        />
        <Input
          register={register}
          name="weight"
          type="number"
          label="What is your weight without Prosthesis (kg)?"
          errorMessage={errors.weight?.message}
          valid={touchedFields.weight && !errors.weight}
        />
        <Input
          register={register}
          name="height"
          type="number"
          label="What is your height without Prosthesis (cm)?"
          errorMessage={errors.height?.message}
          valid={touchedFields.height && !errors.height}
        />
        <Select
          register={register}
          name="gender"
          label="With which gender do you identify?"
          errorMessage={errors.gender?.message}
          valid={touchedFields.gender && !errors.gender}
          options={GenderIdentities}
        />
        <Select
          register={register}
          name="sex"
          label="What was your sex assigned at birth?"
          errorMessage={errors.sex?.message}
          valid={touchedFields.sex && !errors.sex}
          options={Sex}
        />
        <Select
          register={register}
          name="ethnicGroup"
          label="What is your Ethnic Group?"
          errorMessage={errors.ethnicGroup?.message}
          valid={touchedFields.ethnicGroup && !errors.ethnicGroup}
          options={EthnicGroups}
        />
        {ethnicGroup && Ethnicity[ethnicGroup] && (
          <Select
            register={register}
            name="ethnicIdentity"
            // {...register('ethnicIdentity')}
            label="Which of the following best describes your ethnic background?"
            errorMessage={errors.ethnicIdentity?.message}
            valid={touchedFields.ethnicIdentity && !errors.ethnicIdentity}
            options={Ethnicity[ethnicGroup]}
          />
        )}
        {ethnicity === 'other' && (
          <Input
            register={register}
            name="ethnicIdentityOther"
            // {...register('ethnicIdentityOther', {
            //   required: ethnicity === 'other',
            // })}
            label="How would you describe your background?"
            errorMessage={errors.ethnicIdentityOther?.message}
            valid={touchedFields.ethnicIdentityOther && !errors.ethnicIdentityOther}
          />
        )}
        <section className="mt-3">
          <label className="text-sm">Have you ever served in the Military?</label>
          <div className="mt-3 flex flex-col sm:flex-row sm:justify-around ">
            <label className="text-sm">
              <input
                {...register('hasMilitaryService')}
                className="mr-2"
                type="radio"
                name="hasMilitaryService"
                value="Yes"
              />
              Yes
            </label>
            <label className="text-sm">
              <input
                {...register('hasMilitaryService')}
                className="mr-2"
                type="radio"
                name="hasMilitaryService"
                value="No"
              />
              No
            </label>
            <label className="text-sm">
              <input
                {...register('hasMilitaryService')}
                className="mr-2"
                type="radio"
                name="hasMilitaryService"
                value="Prefer not to Say"
              />
              Prefer not to Say
            </label>
          </div>
        </section>
        {hasMilitaryService === 'Yes' && (
          <Select
            register={register}
            name="militaryService"
            // {...register('militaryService')}
            label="Please indicate which service you served in."
            errorMessage={errors.militaryService?.message}
            valid={touchedFields.militaryService && !errors.militaryService}
            options={MilitaryService}
          />
        )}
        {militaryService === 'other' && (
          <Input
            register={register}
            name="militaryServiceOther"
            // {...register('militaryServiceOther', {
            //   required: {
            //     value: militaryService === 'other',
            //     message: 'Please enter a description or select "Prefer not to Say"',
            //   },
            // })}
            label="How would you describe your Military background?"
            errorMessage={errors.militaryServiceOther?.message}
            valid={touchedFields.militaryServiceOther && !errors.militaryServiceOther}
          />
        )}

        <aside>
          <button className="text-white w-full mt-6 bg-purple-600 p-3 rounded" type="submit">
            Save Changes
          </button>
          <button className="text-gray-700 w-full mt-6 bg-gray-300 p-3 rounded" type="reset">
            Cancel (Reset Changes)
          </button>
        </aside>
      </form>
    </PageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { API } = withSSRContext(context);
  let serverUser;

  try {
    const userData = await callGraphQL<ListUsersQuery>(listUsers, API);
    serverUser = mapListUsersQuery(userData);
  } catch (error) {
    console.error(error);
  }

  return {
    props: { serverUser },
  };
};

export default PersonalDetails;
