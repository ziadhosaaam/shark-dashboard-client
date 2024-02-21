import { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';
import { ArrowLeftStartOnRectangleIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { useMenu, useLogout } from '@refinedev/core';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { menuItems, selectedKey } = useMenu();
  const { mutate: logout } = useLogout();

  function classNames(...classes: (string | undefined)[]) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          {/* Code for mobile sidebar */}
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex-grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://desku-public.s3.eu-central-1.amazonaws.com/tenant/a1e13233-3db6-4634-9679-d65fbbe13503/setting/helpdesk/TenantIcon_65c2941a89abe.png"
                alt="Sharks Marketing"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {menuItems.map((item) => (
                      <li key={item.key}>
                        {/* Use Link instead of anchor tag for navigation */}
                        <Link
                          to={item.route || '#'} // Providing a default value '#' if item.route is undefined
                          className={classNames(
                            item.key === selectedKey
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:text-white hover:bg-gray-800',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <svg className="h-6 w-6" aria-hidden="true">{item.meta && item.meta.icon}</svg>
                          <span>{item.label ?? item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className='bg-gray-900 p-2'>
          {/* Logout button */}
          <button
            className="text-gray-400 w-full hover:text-white bg-gray-900 hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
            onClick={() => logout()}
          >
            <ArrowLeftStartOnRectangleIcon className="h-6 w-6" aria-hidden="true" />
            <span>Logout</span>
          </button>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button type="button" className="-m-2.5 p-2.5 text-gray-400 lg:hidden" onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-white">Dashboard</div>
          <a href="#">
            {/* Your profile section */}
          </a>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
