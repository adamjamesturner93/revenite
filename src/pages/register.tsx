import React, { useState } from 'react';
import { SignUp, SignUpConfirm } from '../views';
import { useAuth } from '../hooks';

const initialState = { email: '', password: '', authCode: '' };

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

  return (
    <div className="gb-gray-50 flex flex-grow ">
      <div className="flex flex-col flex-grow items-center">
        <div className="max-w-full sm:w-540 mt-14">
          <div className="bg-white py-14 px-16 shadow-form rounded">{forms[uiState]}</div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
