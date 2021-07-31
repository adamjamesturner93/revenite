import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { Input } from '../../components/atoms';

type SignUpFormData = {
  email: string;
  password: string;
  confirm: string;
  inviteCode: string;
  terms: boolean;
};

export const SignUp: React.FC<{
  signUp: (formEmail: string, formPassword: string) => void;
}> = ({ signUp }) => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { touchedFields, errors },
  } = useForm<SignUpFormData>({
    mode: 'onTouched',
  });

  const onSubmit = async (event: SignUpFormData) => {
    const { email, password, confirm, inviteCode } = event;
    if (password !== confirm) {
      setError('confirm', { message: 'Your passwords need to match', type: 'value' });
      return;
    }

    try {
      const res = await fetch('/api/invite-codes', {
        body: JSON.stringify({ code: inviteCode }),
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
      });

      console.log({ res });
      if (res.status !== 200) throw new Error();
      signUp(email, password);
    } catch (error) {
      setError('inviteCode', { message: 'Invitation code not recognised', type: 'value' });
    }
  };

  return (
    <React.Fragment>
      <h1 className="text-3xl text-center">Register for an account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          name="email"
          register={register}
          options={{
            required: 'Please enter an email address',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          }}
          errorMessage={errors.email?.message}
          valid={touchedFields.email && !errors.email}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          register={register}
          options={{
            required: 'Please enter a valid password',
          }}
          errorMessage={errors.password?.message}
          valid={touchedFields.password && !errors.password}
        />
        <Input
          label="Confirm Password"
          name="confirm"
          type="password"
          register={register}
          options={{
            required: 'Please confirm your password',
          }}
          errorMessage={errors.confirm?.message}
          valid={touchedFields.confirm && !errors.confirm}
        />
        <Input
          label="Invite Code"
          name="inviteCode"
          register={register}
          options={{
            required: 'Please enter a valid Invitation Code',
          }}
          errorMessage={errors.inviteCode?.message}
          valid={touchedFields.inviteCode && !errors.inviteCode}
        />

        <section className="mt-4">
          <label className="text-sm">
            <input
              {...register('terms', {
                required: 'You need to agree before you can use the app',
              })}
              name="terms"
              type="checkbox"
              className="mr-2"
            />{' '}
            I agree to the{' '}
            <Link href="/terms">
              <a className="cursor-pointer text-purple-600">Terms and Conditions</a>
            </Link>
          </label>
          {errors.terms?.message && (
            <p className="text-sm px-2 text-red-500">{errors.terms?.message}</p>
          )}
        </section>

        <button className="text-white w-full mt-6 bg-purple-600 p-3 rounded" type="submit">
          Register
        </button>
        <p className="mt-12 text-sm font-light">
          Have an account?{' '}
          <Link href="/sign-in">
            <a className="cursor-pointer text-purple-600">Sign in</a>
          </Link>
        </p>
      </form>
    </React.Fragment>
  );
};
