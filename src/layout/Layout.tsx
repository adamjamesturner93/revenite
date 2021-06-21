import { useAuth } from "../hooks";
import { AuthenticatedLayout } from "./AuthenticatedLayout";
import { UnauthenticatedLayout } from "./UnauthenticatedLayout";

export const Layout: React.FC<{
  title: string;
  isStatic: boolean;
  isSidebarClosed: boolean;
  setSidebarClosed: (state: boolean) => void;
}> = ({ title, isStatic, isSidebarClosed, setSidebarClosed, children }) => {
  const { user } = useAuth();

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
