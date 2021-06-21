import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Transition, FocusTrap, MenuItem } from "../components";
import { useAuth } from "../hooks";
import "../configureAmplify";

export const AuthenticatedLayout: React.FC<{
  title: string;
  isStatic: boolean;
  isSidebarClosed: boolean;
  setSidebarClosed: (state: boolean) => void;
}> = ({ title, isStatic, isSidebarClosed, setSidebarClosed, children }) => {
  const { signOut } = useAuth();
  return (
    <div className="flex bg-gray-100">
      <Transition
        appear
        show={isStatic || !isSidebarClosed}
        enter="transition-all duration-500"
        enterFrom="-ml-64"
        enterTo="ml-0"
        leave="transition-all duration-500"
        leaveTo="-ml-64"
      >
        <aside
          aria-hidden={isSidebarClosed}
          className={`z-20 bg-white w-64 min-h-screen flex flex-col ${
            isStatic ? "" : "fixed"
          }`}
        >
          <FocusTrap isActive={!isStatic}>
            <div className="bg-white border-r border-b px-4 h-20 flex items-center justify-between">
              <Link href="/">
                <a className="text-blue py-2 text-3xl">Revenite</a>
              </Link>

              {!isStatic && (
                <button
                  autoFocus
                  aria-label="Close Menu"
                  title="Close Menu"
                  onClick={() => setSidebarClosed(true)}
                >
                  <AiOutlineClose />
                </button>
              )}
            </div>
            <nav className="border-r flex-grow flex flex-col justify-between px-4 pb-8">
              <ul>
                <MenuItem href="/activities" label="Activities" />
                <MenuItem href="/health-checks" label="Health Checks" />
              </ul>
              <ul>
                <MenuItem href="/settings" label="Settings" />
                <MenuItem href="/profile" label="Profile" />
                <li className="p-3" onClick={signOut}>
                  <Link href="/">
                    <a>Sign out</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </FocusTrap>
        </aside>
      </Transition>

      <Transition
        appear
        show={!isStatic && !isSidebarClosed}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-50"
        leave="transition-opacity duration-300"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black opacity-0"></div>
      </Transition>

      <main className="flex-grow flex flex-col min-h-screen">
        <header className="bg-white border-b h-20 flex items-center">
          {!isStatic && (
            <button
              aria-label="Open Menu"
              title="Open Menu"
              aria-hidden={isSidebarClosed}
              onClick={() => setSidebarClosed(false)}
            >
              <AiOutlineMenu />
            </button>
          )}
          <div className="flex flex-grow items-center px-3">
            <h1>{title}</h1>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
};
