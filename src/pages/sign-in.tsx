import React, { useState } from 'react';
import { Input } from '../components/atoms';
import Link from 'next/link';

import { useAuth } from '../hooks';
import { useRouter } from 'next/router';
import { PageWrapper } from '../components';
import { SocialSignIn } from '../views';
const initialState = { email: '', password: '', authCode: '' };

const SignInPage: React.FC = () => {
  const [formState, setFormState] = useState(initialState);
  const { email, password } = formState;
  const { signIn } = useAuth();
  const router = useRouter();

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
      router.push('/profile');
    } catch (err) {
      console.error({ err });
    }
  };

  return (
    <PageWrapper title="Sign in to your account">
      <section className="mt-10">
        <label className="text-sm">Email</label>
        <Input onChange={onChange} name="email" />
      </section>
      <section className="mt-4">
        <label className="text-sm">Password</label>

        <Link href="/password-reset">
          <a className="text-sm ml-8 sm:ml-48 cursor-pointer text-purple-600">
            Forgot your password?
          </a>
        </Link>

        <Input onChange={onChange} name="password" type="password" />
      </section>
      <button className="text-white w-full mt-6 bg-purple-600 p-3 rounded" onClick={handleSignIn}>
        Sign In
      </button>
      <SocialSignIn />
      <p className="mt-12 text-sm font-light">
        Don&apos;t have an account?{' '}
        <Link href="/register">
          <a className="cursor-pointer text-purple-600">Register here</a>
        </Link>
      </p>
    </PageWrapper>
  );
};

export default SignInPage;
