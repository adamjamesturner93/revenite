import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
type AmplifyAttributes = {
  'custom:email': string;
  'custom:personalDetails': string;
  'custom:amputationDetails': string;
  'custom:firstActivity': string;
  'custom:firstApp': string;
  'custom:lastHealthCheck': string;
};
type User = {
  username: string;
  attributes: {
    email: string;
  } & AmplifyAttributes;
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
      user: { user: User | undefined; loading: boolean };
      setUser: SetUser;
      getPersonalDetails: () => boolean;
      getAmputationDetails: () => boolean;
      getFirstActivity: () => boolean;
      getFirstApp: () => boolean;
      getLastHealthCheck: () => Date | undefined;
      storeCurrentSession: GetCurrentSession;
      signOut: SignOut;
      signIn: SignIn;
      signUp: SignUp;
      signUpResend: SignUpResend;
      signUpConfirm: SignUpConfirm;
      forgottenPassword: ForgottenPassword;
      forgottenPasswordConfirm: ForgottenPasswordConfirm;
      updateUserAttributes: (
        payload:
          | {
              attribute: 'personalDetails' | 'amputationDetails' | 'firstActivity' | 'firstApp';
              value: boolean;
            }
          | {
              attribute: 'lastHealthCheck';
              value: Date;
            },
      ) => Promise<void>;
    }
  | undefined
>(undefined);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<{ user: User | undefined; loading: boolean }>({
    user: undefined,
    loading: true,
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setUser((state) => ({
          ...state,
          loading: true,
        }));
        const u = await Auth.currentAuthenticatedUser();
        setUser((state) => ({
          ...state,
          user: u,
          loading: false,
        }));
      } catch (error) {
        setUser({
          loading: false,
          user: undefined,
        });
      }
    };
    fetchUser();
  }, [setUser]);

  const signOut = async () => {
    try {
      await Auth.signOut();
      setUser({ user: undefined, loading: false });
    } catch (err) {
      const error = err as Error;
      console.error(error);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const u = await Auth.signIn({ username: email, password });
      setUser((state) => ({
        ...state,
        user: u,
      }));
    } catch (err) {
      const error = err as Error;
      console.error(error);
      throw new Error(error.message);
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          'custom:personalDetails': JSON.stringify(false),
          'custom:amputationDetails': JSON.stringify(false),
          'custom:firstActivity': JSON.stringify(false),
          'custom:firstHealthCheck': JSON.stringify(false),
          'custom:firstApp': JSON.stringify(false),
          'custom:lastHealthCheck': JSON.stringify(undefined),
        },
      });
    } catch (err) {
      const error = err as Error;
      console.error(error);
      throw new Error(error.message);
    }
  };

  const signUpResend = async (email: string) => {
    try {
      Auth.resendSignUp(email);
    } catch (err) {
      const error = err as Error;
      console.error(error);
      throw new Error(error.message);
    }
  };

  const signUpConfirm = async (email: string, password: string, code: string) => {
    try {
      await Auth.confirmSignUp(email, code);
      return await signIn(email, password);
    } catch (err) {
      const error = err as Error;
      console.error(error);
      throw new Error(error.message);
    }
  };

  const forgottenPassword = async (email: string) => {
    try {
      await Auth.forgotPassword(email);
      setUser({
        user: undefined,
        loading: true,
      });
    } catch (err) {
      const error = err as Error;
      console.error(error);
    }
  };

  const forgottenPasswordConfirm = async (email: string, code: string, password: string) => {
    try {
      await Auth.forgotPasswordSubmit(email, code, password);
      setUser({
        user: undefined,
        loading: true,
      });
    } catch (err) {
      const error = err as Error;
      console.error(error);
    }
  };

  const storeCurrentSession = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser({
        loading: false,
        user,
      });
    } catch (error) {}
  };

  const getPersonalDetails = () =>
    user.user ? (JSON.parse(user.user.attributes['custom:personalDetails']) as boolean) : false;
  const getAmputationDetails = () =>
    user.user ? (JSON.parse(user.user.attributes['custom:amputationDetails']) as boolean) : false;
  const getFirstActivity = () =>
    user.user ? (JSON.parse(user.user.attributes['custom:firstActivity']) as boolean) : false;
  const getFirstApp = () =>
    user.user ? (JSON.parse(user.user.attributes['custom:firstApp']) as boolean) : false;
  const getLastHealthCheck = () => {
    if (user.user && user.user.attributes['custom:lastHealthCheck'])
      return JSON.parse(user.user.attributes['custom:lastHealthCheck']);

    return undefined;
  };

  const updateUserAttributes = async (
    payload:
      | {
          attribute: 'personalDetails' | 'amputationDetails' | 'firstActivity' | 'firstApp';
          value: boolean;
        }
      | { attribute: 'lastHealthCheck'; value: Date },
  ) => {
    const attribute = `custom:${payload.attribute}`;
    await Auth.updateUserAttributes(user.user, {
      ...user.user?.attributes,
      [attribute]: JSON.stringify(payload.value),
    });

    const u = await Auth.currentAuthenticatedUser();
    setUser((state) => ({
      ...state,
      user: u,
      loading: false,
    }));
  };

  const value = {
    setUser,
    user,
    getPersonalDetails,
    getAmputationDetails,
    getFirstActivity,
    getFirstApp,
    getLastHealthCheck,
    storeCurrentSession,
    signOut,
    signIn,
    signUp,
    signUpResend,
    signUpConfirm,
    forgottenPassword,
    forgottenPasswordConfirm,
    updateUserAttributes,
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
