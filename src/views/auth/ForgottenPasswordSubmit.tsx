import React from 'react';
import { Input } from '../../components/atoms';

export const ForgottenPasswordSubmit: React.FC<{
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  forgottenPasswordSubmit: () => void;
}> = ({ onChange, forgottenPasswordSubmit }) => (
  <section>
    <h1 className="text-3xl font-black">Confirm new password</h1>
    <section className="mt-10">
      <label className="text-sm">Confirmation Code</label>
      <Input onChange={onChange} name="authCode" />
    </section>
    <section className="mt-10">
      <label className="text-sm">New Password</label>
      <Input onChange={onChange} name="password" type="password" />
    </section>

    <button
      className="text-white w-full mt-6 bg-purple-600 p-3 rounded"
      onClick={forgottenPasswordSubmit}
    >
      Submit new password
    </button>
  </section>
);
