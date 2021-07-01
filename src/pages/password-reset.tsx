import React, { useState } from 'react';

import { ForgotPassword, ForgottenPasswordSubmit } from '../views';
import { useAuth } from '../hooks';
const initialState = { email: '', password: '', authCode: '' };

const PasswordResetPage: React.FC = () => {
  const [uiState, setUiState] = useState<'forgotPassword' | 'forgotPasswordConfirm'>(
    'forgotPassword',
  );
  const [formState, setFormState] = useState(initialState);
  const { email, password, authCode } = formState;
  const { forgottenPassword, forgottenPasswordConfirm } = useAuth();

  const onChange: React.FormEventHandler<HTMLInputElement> = (e) => {
    setFormState((state) => ({
      ...state,
      [e.currentTarget.name]: e.currentTarget.value,
    }));
  };

  const handleForgottenPassword = async () => {
    try {
      await forgottenPassword(email);
      setUiState('forgotPasswordConfirm');
    } catch (err) {
      console.error({ err });
    }
  };
  const handleForgottenPasswordConfirm = async () => {
    try {
      await forgottenPasswordConfirm(email, authCode, password);
    } catch (err) {
      console.error({ err });
    }
  };

  const forms: Record<string, React.ReactNode> = {
    forgotPassword: <ForgotPassword onChange={onChange} forgotPassword={handleForgottenPassword} />,
    forgotPasswordConfirm: (
      <ForgottenPasswordSubmit
        onChange={onChange}
        forgottenPasswordSubmit={handleForgottenPasswordConfirm}
      />
    ),
  };

  return (
    <div className="gb-gray-50 flex flex-grow ">
      <div className="flex flex-col flex-grow items-center">
        <div className="max-w-full sm:w-540 sm:mt-14">
          <div className="bg-white py-14 px-16 shadow-form rounded">{forms[uiState]}</div>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetPage;
