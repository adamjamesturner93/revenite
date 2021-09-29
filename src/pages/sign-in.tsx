import React, { useState } from 'react';
import { Input } from '../components/atoms';
import Link from 'next/link';

import { useAuth } from '../hooks';
import { useRouter } from 'next/router';
import { PageWrapper } from '../components';
// import { SocialSignIn } from '../views';
import { useForm } from 'react-hook-form';

type SignIn = { email: string; password: string; authCode: string };
const defaultValues = { email: '', password: '', authCode: '' };

const SignInPage: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { touchedFields, errors },
  } = useForm<SignIn>({
    mode: 'onTouched',
    defaultValues,
  });

  const { signIn } = useAuth();
  const router = useRouter();
  const [error, setError] = useState();

  const onSubmit = async (event: SignIn) => {
    try {
      setError(undefined);
      await signIn(event.email, event.password);
      router.push('/app/dashboard');
    } catch (err) {
      console.error({ err });
      setError(err.message);
    }
  };

  return (
    <PageWrapper title="Sign in to your account">
      <form onSubmit={handleSubmit(onSubmit)}>
        {error}
        <section className="mt-10">
          <Input
            register={register}
            options={{ required: 'Please enter a valid email address' }}
            name="email"
            label="Email"
            errorMessage={errors.email?.message}
            valid={touchedFields.email && !errors.email}
          />
        </section>
        <section className="mt-4">
          <label className="text-sm">Password</label>
          <Link href="/password-reset">
            <a className="text-sm ml-8 sm:ml-48 cursor-pointer text-purple-600">
              Forgot your password?
            </a>
          </Link>
          <Input
            register={register}
            options={{ required: 'Please enter a valid password' }}
            name="password"
            type="password"
            errorMessage={errors.password?.message}
            valid={touchedFields.password && !errors.password}
          />
        </section>
        <p className="text-sm px-3 mt-6 text-red-500">{error}</p>
        <button className="text-white w-full mt-3 bg-purple-600 p-3 rounded" type="submit">
          Sign In
        </button>
        {/* <SocialSignIn /> */}
        <p className="mt-12 text-sm font-light">
          Don&apos;t have an account?{' '}
          <Link href="/register">
            <a className="cursor-pointer text-purple-600">Register here</a>
          </Link>
        </p>
      </form>
    </PageWrapper>
  );
};

export default SignInPage;
