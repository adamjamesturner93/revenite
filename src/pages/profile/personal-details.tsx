import React from 'react';

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
    <div className="gb-gray-50 flex flex-grow ">
      <div className="flex flex-col flex-grow items-center">
        <div className="max-w-full sm:w-540 sm:mt-14">
          <div className="bg-white py-14 px-16 shadow-form rounded">
            <h1 className="text-3xl font-black">Personal Details</h1>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;