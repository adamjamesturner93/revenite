import React, { useState } from 'react';

import { SignIn } from '../views';
import { useAuth } from '../hooks';
import { useRouter } from 'next/router';
const initialState = { email: '', password: '', authCode: '' };

const SignInPage: React.FC = () => {
  const [formState, setFormState] = useState(initialState);
  const { email, password } = formState;
  const { signIn } = useAuth();
  const router = useRouter();

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
      router.push('/profile');
    } catch (err) {
      console.error({ err });
    }
  };

  return (
    <div className="gb-gray-50 flex flex-grow ">
      <div className="flex flex-col flex-grow items-center">
        <div className="max-w-full sm:w-540 mt-14">
          <div className="bg-white py-14 px-16 shadow-form rounded">
            <SignIn onChange={onChange} signIn={handleSignIn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
