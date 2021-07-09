import React from 'react';
import Link from 'next/link';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineLogout,
  AiOutlineSetting,
  AiOutlineUser,
  AiOutlineDashboard,
  AiOutlinePlusCircle,
  AiOutlineTrophy,
  AiOutlineHeart,
  AiOutlineUnorderedList,
  AiOutlinePieChart,
} from 'react-icons/ai';
import { Transition, FocusTrap, MenuItem, Banner } from '../components';
import { useAuth } from '../hooks';
import '../configureAmplify';

export const AuthenticatedLayout: React.FC<{
  title: string;
  isStatic: boolean;
  isSidebarClosed: boolean;
  setSidebarClosed: (state: boolean) => void;
}> = ({ isStatic, isSidebarClosed, setSidebarClosed, children }) => {
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
          className={`z-20 bg-gray-800 text-white w-64 max-h-screen flex flex-col sticky top-0 ${
            isStatic ? '' : 'fixed'
          }`}
        >
          <FocusTrap isActive={!isStatic}>
            <div className=" border-b border-purple-600 px-4 h-24 flex items-center justify-between">
              <Link href="/">
                <a aria-label="Revenite">
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
                <MenuItem
                  href="/app/dashboard"
                  label="Dashboard"
                  icon={<AiOutlineDashboard className="mr-4" />}
                />
                <li className="p-3">
                  <details>
                    <summary className="flex items-center">
                      <AiOutlineTrophy className="mr-4" />
                      Activities
                    </summary>
                    <ul className="pl-4 pt-3">
                      <MenuItem
                        href="/app/activities/summary"
                        label="Summary"
                        icon={<AiOutlinePieChart className="mr-4" />}
                      />
                      <MenuItem
                        href="/app/activities/list"
                        label="List"
                        icon={<AiOutlineUnorderedList className="mr-4" />}
                      />
                      <MenuItem
                        href="/app/activities/add"
                        label="Add Activity"
                        icon={<AiOutlinePlusCircle className="mr-4" />}
                      />
                    </ul>
                  </details>
                </li>
                <li className="p-3">
                  <details>
                    <summary className="flex items-center">
                      <AiOutlineHeart className="mr-4" />
                      Health Checks
                    </summary>
                    <ul className="pl-4 pt-3">
                      <MenuItem
                        href="/app/health-checks/summary"
                        label="Summary"
                        icon={<AiOutlinePieChart className="mr-4" />}
                      />
                      <MenuItem
                        href="/app/health-checks/list"
                        label="List"
                        icon={<AiOutlineUnorderedList className="mr-4" />}
                      />
                      <MenuItem
                        href="/app/health-checks/add"
                        label="Add Health Check"
                        icon={<AiOutlinePlusCircle className="mr-4" />}
                      />
                    </ul>
                  </details>
                </li>
              </ul>
              <ul className="border-t border-purple-600 ">
                <MenuItem
                  href="/app/settings"
                  label="Settings"
                  icon={<AiOutlineSetting className="mr-4" />}
                />
                <MenuItem
                  href="/app/profile"
                  label="Profile"
                  icon={<AiOutlineUser className="mr-4" />}
                />
                <li className="p-3" onClick={signOut}>
                  <Link href="/">
                    <a className="flex items-center">
                      <AiOutlineLogout className="mr-4" /> Sign out
                    </a>
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
