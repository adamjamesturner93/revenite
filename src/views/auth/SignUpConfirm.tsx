import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../components/atoms';

type SignUpConfirmFormData = {
  authCode: string;
};

export const SignUpConfirm: React.FC<{
  confirmSignUp: (authCode: string) => void;
}> = ({ confirmSignUp }) => {
  const {
    handleSubmit,
    register,
    formState: { touchedFields, errors },
  } = useForm<SignUpConfirmFormData>({
    mode: 'onTouched',
  });

  const onSubmit = (event: SignUpConfirmFormData) => {
    confirmSignUp(event.authCode);
  };

  console.log(errors);

  return (
    <React.Fragment>
      <h1 className="text-3xl text-center">Confirm your account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Confirmation Code"
          name="authCode"
          register={register}
          options={{
            required: 'Please enter your authentication code',
          }}
          errorMessage={errors.authCode?.message}
          valid={touchedFields.authCode && !errors.authCode}
        />

        <button className="text-white w-full mt-6 bg-purple-600 p-3 rounded" type="submit">
          Sign Up
        </button>
      </form>
    </React.Fragment>
  );
};
