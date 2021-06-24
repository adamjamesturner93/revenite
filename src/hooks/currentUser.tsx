import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
type User = {
  username: string;
  attributes: {
    email: string;
    name: string;
    preferred_username: string;
  };
};
type SetUser = (user: any) => void;
type GetCurrentSession = () => Promise<void>;
type SignOut = () => Promise<void>;
type SignIn = (email: string, password: string) => Promise<void>;
type SignUp = (email: string, password: string) => Promise<void>;
type SignUpResend = (email: string) => Promise<void>;
type SignUpConfirm = (email: string, password: string, code: string) => Promise<any>;
type ForgottenPassword = (email: string) => Promise<void>;
type ForgottenPasswordConfirm = (email: string, code: string, password: string) => void;

const AuthContext = React.createContext<
  | {
      user: User | undefined;
      setUser: SetUser;
      storeCurrentSession: GetCurrentSession;
      signOut: SignOut;
      signIn: SignIn;
      signUp: SignUp;
      signUpResend: SignUpResend;
      signUpConfirm: SignUpConfirm;
      forgottenPassword: ForgottenPassword;
      forgottenPasswordConfirm: ForgottenPasswordConfirm;
    }
  | undefined
>(undefined);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setUser(await Auth.currentAuthenticatedUser());
      } catch (error) {
        setUser(undefined);
      }
    };
    fetchUser();
  }, [setUser]);

  const signOut = async () => {
    try {
      await Auth.signOut();
      setUser(undefined);
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setUser(await Auth.signIn({ username: email, password }));
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: { email },
      });
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  };

  const signUpResend = async (email: string) => {
    try {
      Auth.resendSignUp(email);
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  };

  const signUpConfirm = async (email: string, password: string, code: string) => {
    try {
      await Auth.confirmSignUp(email, code);
      return await Auth.signIn(email, password);
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  };

  const forgottenPassword = async (email: string) => {
    try {
      await Auth.forgotPassword(email);
      setUser(undefined);
    } catch (error) {
      console.error(error);
    }
  };

  const forgottenPasswordConfirm = async (email: string, code: string, password: string) => {
    try {
      await Auth.forgotPasswordSubmit(email, code, password);
      setUser(undefined);
    } catch (error) {
      console.error(error);
    }
  };

  const storeCurrentSession = async () => {
    try {
      setUser(await Auth.currentAuthenticatedUser());
    } catch (error) {}
  };

  const value = {
    setUser,
    user,
    storeCurrentSession,
    signOut,
    signIn,
    signUp,
    signUpResend,
    signUpConfirm,
    forgottenPassword,
    forgottenPasswordConfirm,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
