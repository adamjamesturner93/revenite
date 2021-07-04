import React from 'react';
import { PageWrapper } from '../../components';

// import { useAuth } from '../../hooks';
// import { useRouter } from 'next/router';
// const initialState = { email: '', password: '', authCode: '' };

const SignInPage: React.FC = () => {
  //   const [formState, setFormState] = useState(initialState);
  //   const { email, password } = formState;
  //   const { signIn } = useAuth();
  //   const router = useRouter();

  //   const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  //     setFormState((state) => ({
  //       ...state,
  //       [event.target.name]: event.target.value,
  //     }));
  //   };

  //   const handleSignIn = async () => {
  //     try {
  //       await signIn(email, password);
  //       router.push('/profile');
  //     } catch (err) {
  //       console.error({ err });
  //     }
  //   };

  return (
    <PageWrapper title="Personal Details">
      <p className="text-gray-600 mt-5">Health check reminders (weekly)</p>
      <p className="text-gray-600 mt-5">
        Are you happy to be contacted about other, related, research studies
      </p>
      <button
        className="text-white w-full mt-6 bg-red-600 p-3 rounded"
        // onClick={handleSubmit}
      >
        Close Account
      </button>
      <button
        className="text-white w-full mt-6 bg-purple-600 p-3 rounded"
        // onClick={handleSubmit}
      >
        Register
      </button>
    </PageWrapper>
  );
};

export default SignInPage;
