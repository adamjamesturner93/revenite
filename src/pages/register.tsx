import React, { useState } from 'react';
import { SignUp, SignUpConfirm } from '../views';
import { useAuth } from '../hooks';
import { PageWrapper } from '../components';

const initialState = { email: '', password: '', confirm: '', authCode: '' };

const RegisterPage: React.FC = () => {
  const [uiState, setUiState] = useState<'signUp' | 'signUpConfirm'>('signUp');
  const [formState, setFormState] = useState(initialState);
  const { email, password, authCode } = formState;
  const { signUp, signUpConfirm } = useAuth();

  const onChange: React.FormEventHandler<HTMLInputElement> = (e) => {
    setFormState((state) => ({
      ...state,
      [e.currentTarget.name]: e.currentTarget.value,
    }));
  };

  const handleSignUp = async () => {
    try {
      await fetch('/api/invite-codes', {
        body: JSON.stringify({ code: 'test' }),
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
      });
      await signUp(email, password);
      setUiState('signUpConfirm');
    } catch (err) {
      console.error({ err });
    }
  };
  const handleSignUpConfirm = async () => {
    try {
      await signUpConfirm(email, password, authCode);
    } catch (err) {
      console.error({ err });
    }
  };

  const forms: Record<string, React.ReactNode> = {
    signUp: <SignUp onChange={onChange} signUp={handleSignUp} />,
    signUpConfirm: <SignUpConfirm onChange={onChange} confirmSignUp={handleSignUpConfirm} />,
  };

  return <PageWrapper>{forms[uiState]}</PageWrapper>;
};

export default RegisterPage;
