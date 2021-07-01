import React from 'react';
import { Input } from '../../components/atoms';

export const SignUpConfirm: React.FC<{
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  confirmSignUp: () => void;
}> = ({ onChange, confirmSignUp }) => (
  <section>
    <h1 className="text-3xl font-black">Confirm your account</h1>
    <section className="mt-10">
      <label className="text-sm">Confirmation Code</label>
      <Input onChange={onChange} name="authCode" />
    </section>

    <button className="text-white w-full mt-6 bg-purple-600 p-3 rounded" onClick={confirmSignUp}>
      Sign Up
    </button>
  </section>
);
