import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { FaGoogle } from "react-icons/fa";

export const SocialSignIn = () => (
  <section className="flex flex-col">
    <button
      className="mt-10 focus:outline-none"
      onClick={() =>
        Auth.federatedSignIn({
          provider: CognitoHostedUIIdentityProvider.Google,
        })
      }
    >
      <div className="flex border border-gray-300 p-2 rounded-full items-center justify-center">
        <FaGoogle size="38" className="text-red-600" />
        <p className="ml-3">Sign in with Google</p>
      </div>
    </button>
  </section>
);
