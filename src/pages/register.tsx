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

  const handleSignUp = async (formEmail: string, formPassword: string) => {
    try {
      setFormState({
        email: formEmail,
        password: formPassword,
      });

      await signUp(formEmail, formPassword);
      setUiState('signUpConfirm');
    } catch (err) {
      console.error({ err });
    }
  };
  const handleSignUpConfirm = async (authCode: string) => {
    try {
      await signUpConfirm(email, password, authCode);
      push('/app/dashboard');
    } catch (err) {
      console.error({ err });
    }
  };

  const forms: Record<string, React.ReactNode> = {
    signUp: (
      <SignUp
        signUp={(formEmail: string, formPassword: string) => handleSignUp(formEmail, formPassword)}
      />
    ),
    signUpConfirm: (
      <SignUpConfirm confirmSignUp={(authCode: string) => handleSignUpConfirm(authCode)} />
    ),
  };

  return <PageWrapper>{forms[uiState]}</PageWrapper>;
};

export default RegisterPage;
