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
  const { user } = useAuth();

  const unprotectedRoutes = [
    APP_ROUTES.HOME.url,
    APP_ROUTES.SIGN_IN.url,
    APP_ROUTES.PASSWORD_RESET.url,
    APP_ROUTES.REGISTER.url,
    APP_ROUTES.TERMS.url,
  ];

  let pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

  if (isBrowser() && !user && pathIsProtected) {
    router.push(APP_ROUTES.SIGN_IN.url);
  }

  if (!user) return <UnauthenticatedLayout>{children}</UnauthenticatedLayout>;

  const authFlowRoutes = [
    APP_ROUTES.SIGN_IN.url,
    APP_ROUTES.PASSWORD_RESET.url,
    APP_ROUTES.REGISTER.url,
  ];
  pathIsProtected = authFlowRoutes.indexOf(router.pathname) > -1;

  if (isBrowser() && pathIsProtected) {
    console.log('Path is protected', authFlowRoutes.indexOf(router.pathname), router.pathname);
    router.push(APP_ROUTES.DASHBOARD.url);
  }

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
