import React from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Transition, FocusTrap, MenuItem, Banner } from '../components';
import { useAuth } from '../hooks';
import '../configureAmplify';

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
          className={`z-20 bg-gray-800 text-white w-64 min-h-screen flex flex-col ${
            isStatic ? '' : 'fixed'
          }`}
        >
          <FocusTrap isActive={!isStatic}>
            <div className=" border-b border-purple-600 px-4 h-24 flex items-center justify-between">
              <Link href="/">
                <a>
                  <Banner />
                </a>
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
                <MenuItem href="/dashboard" label="Dashboard" />
                <li className="p-3">
                  <details>
                    <summary>Activities</summary>
                    <ul>
                      <MenuItem href="/activities/summary" label="Summary" />
                      <MenuItem href="/activities/list" label="List" />
                      <MenuItem href="/activities/add" label="Add Activity" />
                    </ul>
                  </details>
                </li>
                <li className="p-3">
                  <details>
                    <summary>Health Checks</summary>
                    <ul>
                      <MenuItem href="/health-checks/summary" label="Summary" />
                      <MenuItem href="/health-checks/list" label="List" />
                      <MenuItem href="/health-checks/add" label="Add Health Check" />
                    </ul>
                  </details>
                </li>
              </ul>
              <ul className="border-t border-purple-600 ">
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
        <header className="bg-gray-800 text-white border-b h-24 flex items-center p-2">
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
        </header>
        {children}
      </main>
    </div>
  );
};
