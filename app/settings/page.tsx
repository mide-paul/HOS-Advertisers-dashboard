'use client';
import React, { useState } from "react";
import dynamic from 'next/dynamic';
import { Header } from "@/components/header";
import Sidebar from "@/components/Sidebar";
import Profile from "@/components/Profile";
import Plans from "@/components/Plans";
import SecurityAndPrivacy from "@/components/SecurityAndPrivacy";
import Support from "@/components/Support";

const Page = () => {
    const [currentView, setCurrentView] = useState('Profile');

    return (
        <div className="h-full w-full bg-gray-200 overflow-hidden">
            <div>
                <Sidebar />
            </div>

            <Header />
            <div>
                <div className="flex flex-col">
                    <div>
                        <div className='w-screen h-full lg:max-w-5xl bg-white pt-1 pb-1 pr-5 mr-8 mt-12 lg:mt-14 md:ml-64 lg:ml-72 2xl:w-max-w-7xl rounded'>
                            <div className="flex gap-8 mt-12 ml-4">
                                {/* Revenue and Upcoming Payouts links */}
                                <h3
                                    className={`font-normal text-xs ${currentView === 'Profile' ? 'text-blue-950 font-semibold' : 'text-gray-500'
                                        }`}
                                    onClick={() => setCurrentView('Profile')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Profile
                                </h3>
                                <h3
                                    className={`font-normal text-xs ${currentView === 'Plans' ? 'text-blue-950 font-semibold' : 'text-gray-500'
                                        }`}
                                    onClick={() => setCurrentView('Plans')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Plans
                                </h3>
                                <h3
                                    className={`font-normal text-xs ${currentView === 'SecurityAndPrivacy' ? 'text-blue-950 font-semibold' : 'text-gray-500'
                                        }`}
                                    onClick={() => setCurrentView('SecurityAndPrivacy')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Security And Privacy
                                </h3>
                                <h3
                                    className={`font-normal text-xs ${currentView === 'Support' ? 'text-blue-950 font-semibold' : 'text-gray-500'
                                        }`}
                                    onClick={() => setCurrentView('Support')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Support
                                </h3>
                            </div>
                            <div className='mt-3 ml-4 mr-0 h-full lg:w-max-w-xl lg:h-full bg-white shadow-md rounded'>
                                {currentView === 'Profile' ? (
                                    <Profile />
                                ) : currentView === 'Plans' ?
                                    (
                                        <Plans />
                                    ) : currentView === 'SecurityAndPrivacy' ?
                                        (
                                            <SecurityAndPrivacy />
                                        ) : (
                                            <Support />
                                        )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default dynamic(() => Promise.resolve(Page), { ssr: false });