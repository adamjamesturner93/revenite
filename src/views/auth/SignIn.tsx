import React from 'react';
import { SocialSignIn } from './SocialSignIn';
import { Input } from '../../components/atoms';
import Link from 'next/link';

export const SignIn: React.FC<{
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  signIn: () => void;
}> = ({ onChange, signIn }) => (
  <section>
    <h1 className="text-3xl font-black">Sign in to your account</h1>
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
    <button className="text-white w-full mt-6 bg-purple-600 p-3 rounded" onClick={signIn}>
      Sign In
    </button>
    <SocialSignIn />
    <p className="mt-12 text-sm font-light">
      Don&apos;t have an account?{' '}
      <Link href="/register">
        <a className="cursor-pointer text-purple-600">Register here</a>
      </Link>
    </p>
  </section>
);
