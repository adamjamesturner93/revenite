import React from 'react';
import { Input } from '../../components/atoms';

export const ForgotPassword: React.FC<{
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  forgotPassword: () => void;
}> = ({ onChange, forgotPassword }) => (
  <React.Fragment>
    <h1 className="text-3xl text-center">Forgot your password?</h1>
    <section className="mt-10">
      <label className="text-sm">Email</label>
      <Input onChange={onChange} name="email" />
    </section>
    <button className="text-white w-full mt-6 bg-purple-600 p-3 rounded" onClick={forgotPassword}>
      Reset Password
    </button>

    {/* <button
      className="text-sm mt-6 text-purple-600"
      onClick={() => setUiState("signIn")}
    >
      Cancel
    </button> */}
  </React.Fragment>
);
