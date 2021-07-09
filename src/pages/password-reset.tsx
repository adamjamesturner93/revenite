import React, { useState } from 'react';

import { ForgotPassword, ForgottenPasswordSubmit } from '../views';
import { useAuth } from '../hooks';
import { PageWrapper } from '../components';
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

  return <PageWrapper>{forms[uiState]}</PageWrapper>;
};

export default PasswordResetPage;
