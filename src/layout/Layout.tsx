import React, { useEffect, useState } from 'react';
import { Router } from 'next/router';
import { useAuth } from '../hooks';
import { AuthenticatedLayout } from './AuthenticatedLayout';
import { UnauthenticatedLayout } from './UnauthenticatedLayout';
import { APP_ROUTES, isBrowser } from '../utils';

export const Layout: React.FC<{
  router: Router;
  title: string;
  isStatic: boolean;
  isSidebarClosed: boolean;
  setSidebarClosed: (state: boolean) => void;
}> = ({ router, title, isStatic, isSidebarClosed, setSidebarClosed, children }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    setLoading(user.loading);
  }, [user.loading]);

  useEffect(() => {
    setIsUser(!!user.user);
  }, [user.user]);

  const unprotectedRoutes = [
    APP_ROUTES.HOME.url,
    APP_ROUTES.SIGN_IN.url,
    APP_ROUTES.PASSWORD_RESET.url,
    APP_ROUTES.REGISTER.url,
    APP_ROUTES.TERMS.url,
  ];

  console.log({ loading, isUser });

  const pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

  if (loading) return <p>Loading...</p>;

  if (isBrowser() && !isUser && pathIsProtected) {
    router.push('/sign-in');
  }

  if (!isUser) return <UnauthenticatedLayout>{children}</UnauthenticatedLayout>;

  return (
    <AuthenticatedLayout
      title={title}
      isStatic={isStatic}
      isSidebarClosed={isSidebarClosed}
      setSidebarClosed={setSidebarClosed}
    >
      {children}
    </AuthenticatedLayout>
  );
};
