import React from 'react';
import { Input } from '../../components/atoms';

import Link from 'next/link';

export const SignUp: React.FC<{
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  signUp: () => void;
}> = ({ onChange, signUp }) => {
  const handleSubmit = () => {
    signUp();
  };

  return (
    <section>
      <h1 className="text-3xl font-black">Register for an account</h1>
      <section className="mt-10">
        <label className="text-sm">Email</label>
        <Input onChange={onChange} name="email" />
      </section>
      <section className="mt-4">
        <label className="text-sm">Password</label>
        <Input onChange={onChange} name="password" type="password" />
      </section>
      <section className="mt-4">
        <label className="text-sm">Confirm Password</label>
        <Input onChange={onChange} name="confirm" type="password" />
      </section>
      <section className="mt-4">
        <label className="text-sm">Invitation Code</label>
        <Input name="inviteCode" />
      </section>
      <section className="mt-4">
        <label className="text-sm">
          <input name="terms" type="checkbox" className="mr-2" /> I agree to the{' '}
          <Link href="/terms">
            <a className="cursor-pointer text-purple-600">Terms and Conditions</a>
          </Link>
        </label>
      </section>

      <button className="text-white w-full mt-6 bg-purple-600 p-3 rounded" onClick={handleSubmit}>
        Register
      </button>
      <p className="mt-12 text-sm font-light">
        Have an account?{' '}
        <Link href="/sign-in">
          <a className="cursor-pointer text-purple-600">Sign in</a>
        </Link>
      </p>
    </section>
  );
};
