import React from 'react';
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
  const {
    user: { loading, user },
  } = useAuth();

  const unprotectedRoutes = [
    APP_ROUTES.HOME.url,
    APP_ROUTES.SIGN_IN.url,
    APP_ROUTES.PASSWORD_RESET.url,
    APP_ROUTES.REGISTER.url,
    APP_ROUTES.TERMS.url,
  ];

  const pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

  if (loading) return <p>Loading...</p>;

  if (isBrowser() && !user && pathIsProtected) {
    router.push(APP_ROUTES.SIGN_IN.url);
  }

  if (!user) return <UnauthenticatedLayout>{children}</UnauthenticatedLayout>;

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
