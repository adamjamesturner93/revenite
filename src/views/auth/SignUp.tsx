import { Input } from "../../components/atoms";
import Link from "next/link";

export const SignUp: React.FC<{
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  signUp: () => {};
}> = ({ onChange, signUp }) => (
  <section>
    <p className="text-3xl font-black">Register for an account</p>
    <section className="mt-10">
      <label className="text-sm">Email</label>
      <Input onChange={onChange} name="email" />
    </section>
    <section className="mt-4">
      <label className="text-sm">Password</label>
      <Input onChange={onChange} name="password" type="password" />
    </section>
    <button
      className="text-white w-full mt-6 bg-purple-600 p-3 rounded"
      onClick={signUp}
    >
      Register
    </button>
    <p className="mt-12 text-sm font-light">
      Have an account?{" "}
      <Link href="/sign-in">
        <a className="cursor-pointer text-purple-600">Sign in</a>
      </Link>
    </p>
  </section>
);
