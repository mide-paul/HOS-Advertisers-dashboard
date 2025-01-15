'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import sort from './../public/icons/sort.png'
import logo from './../public/images/logo.png'
import { Logout } from './logout';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [open, setOpen] = useState<boolean>(false);

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
    { name: 'Dashboard', href: '/sponsors' },
    { name: 'My Ads', href: '/my-ads' },
    { name: 'Settings', href: '/settings' },
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
              className="h-screen w-19.2 bg-white text-dark flex flex-col fixed ss:-ml-19.51 sm:-ml-21.7 md:-ml-45.7 top-8 border border-dark transform z-20"
            >
              <nav className="flex-1 p-4 lg:-mt-8">
                {tabs.map((tab) => (
                  <Link key={tab.name} href={tab.href} legacyBehavior>
                    <a
                      onClick={() => setActiveTab(tab.name)}
                      className={`block py-2 px-4 rounded-lg mb-2 text-sm text-left font-medium hover:bg-gray-light transition-colors duration-200 ${activeTab === tab.name ? 'bg-gray-light' : ''
                        }`}
                    >
                      {tab.name}
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
            className="w-20 h-15"
          />
        </div>
        <nav className="flex-1 p-4 lg:-mt-8">
          {tabs.map((tab) => (
            <Link key={tab.name} href={tab.href} legacyBehavior>
              <a
                onClick={() => setActiveTab(tab.name)}
                className={`block py-2 px-4 rounded-lg mb-2 text-sm font-medium hover:bg-gray-light transition-colors duration-200 ${activeTab === tab.name ? 'bg-gray-light' : ''
                  }`}
              >
                {tab.name}
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