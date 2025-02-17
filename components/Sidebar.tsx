'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import sort from './../public/icons/Sort.png';
import logo from './../public/images/logo.png';
import { Logout } from './logout';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleDropDownFocus = (state: boolean) => {
    setOpen(!state);
  };

  const handleClickOutsideMenu = (e: any) => {
    if (open && !dropdownRef.current?.contains(e.target as Node)) {
      setOpen(false)
    }
  }

  window.addEventListener("click", handleClickOutsideMenu)

  const tabs = [
    { name: 'Dashboard', href: '/sponsors', icon: 'dashboard' },
    { name: 'My Ads', href: '/my-ads', icon: 'campaign' },
    { name: 'Settings', href: '/settings', icon: 'settings' },
  ];

  return (
    <>
      <div ref={dropdownRef}>
        <button
          className="p-2 text-white fixed top-2 left-23 ss:left-19.3 sm:left-21 md:left-45 z-30 lg:hidden"
        >
          <Image
            src={sort}
            alt="hamburger"
            className="w-4 h-4 object-cover"
            onClick={_e => handleDropDownFocus(open)}
          />
          {open && (
            <div
              className="h-screen -mt-6.3 w-19.2 bg-white text-dark flex flex-col fixed ss:-ml-19.51 sm:-ml-21.7 md:-ml-45.7 top-0 border border-dark transform z-20"
            >
              <div className="flex ml-1 -mt-8 items-center justify-left h-16">
                <Image
                  src={logo}
                  alt="Profile Picture"
                  className="w-15 h-11"
                />
              </div>
              <nav className="flex-1 p-4 -mt-8.5">
                {tabs.map((tab) => (
                  <Link key={tab.name} href={tab.href} legacyBehavior>
                    <a
                      onClick={() => setActiveTab(tab.name)}
                      className={`block py-2 px-4 rounded-lg mb-2 text-sm text-left font-medium hover:bg-gray-light transition-colors duration-200 ${activeTab === tab.name ? 'bg-gray-light' : ''
                        }`}
                    >
                      <div className='flex items-center'>
                        <span className="material-icons mr-3">{tab.icon}</span>
                        {tab.name}
                      </div>
                    </a>
                  </Link>
                ))}
                <Logout />
              </nav>
            </div>
          )}
        </button>
      </div>

      <div
        className="h-screen w-19.2 bg-white text-dark flex flex-col fixed left-0 top-0 border border-dark transform z-20 sm:invisible ss:invisible lg:visible"
      >
        <div className="flex ml-1 items-center justify-left h-16 lg:-mt-7">
          <Image
            src={logo}
            alt="Profile Picture"
            className="w-15 h-11"
          />
        </div>
        <nav className="flex-1 p-4 lg:-mt-8">
          {tabs.map((tab) => (
            <Link key={tab.name} href={tab.href} legacyBehavior>
              <a
                className={`block py-2 px-4 rounded-lg mb-2 text-xs font-normal hover:bg-gray-light transition-colors duration-200 ${
                  pathname === tab.href ? 'bg-gray-light' : ''
                }`}
              >
                <div className='flex items-center text-sm'>
                  <span className="material-icons mr-3">{tab.icon}</span>
                  {tab.name}
                </div>
              </a>
            </Link>
          ))}
          <Logout />
        </nav>
      </div>
    </>
  );
};

export default Sidebar;