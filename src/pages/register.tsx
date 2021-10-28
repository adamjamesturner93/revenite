import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { SignUp, SignUpConfirm } from '../views';
import { useAuth } from '../hooks';
import { PageWrapper } from '../components';

const initialState = { email: '', password: '' };

const RegisterPage: React.FC = () => {
  const [uiState, setUiState] = useState<'signUp' | 'signUpConfirm'>('signUp');
  const [formState, setFormState] = useState(initialState);
  const { push } = useRouter();
  const { email, password } = formState;
  const { signUp, signUpConfirm } = useAuth();
  const [error, setError] = useState<string>();

  const handleSignUp = async (formEmail: string, formPassword: string) => {
    try {
      setError(undefined);
      setFormState({
        email: formEmail,
        password: formPassword,
      });
      await signUp(formEmail, formPassword);
      setUiState('signUpConfirm');
    } catch (err) {
      console.error({ err });
      setError(err.message);
    }
  };

  const handleSignUpConfirm = async (authCode: string) => {
    try {
      setError(undefined);
      await signUpConfirm(email, password, authCode);
      push('/app/dashboard');
    } catch (err) {
      console.error({ err });
      setError(err.message);
    }
  };

  const forms: Record<string, React.ReactNode> = {
    signUp: (
      <SignUp
        signUp={(formEmail: string, formPassword: string) => handleSignUp(formEmail, formPassword)}
        error={error}
      />
    ),
    signUpConfirm: (
      <SignUpConfirm
        confirmSignUp={(authCode: string) => handleSignUpConfirm(authCode)}
        error={error}
      />
    ),
  };

  return <PageWrapper>{forms[uiState]}</PageWrapper>;
};

export default RegisterPage;
