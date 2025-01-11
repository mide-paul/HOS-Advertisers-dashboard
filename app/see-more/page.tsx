import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/images/logo.png';
import dashboard from '../../public/icons/dashboard.png';
import speaker from '../../public/icons/speaker.svg';
import settings from '../../public/icons/settings.png';
import { Header } from "@/components/header";
import AdPostChart from "@/components/AdPostChart";
import { Logout } from "@/components/logout";

const SeeMore = () => {

    const data = [
        { month: 'January', views: 1200, clicks: 300 },
        { month: 'February', views: 1500, clicks: 400 },
        { month: 'March', views: 1700, clicks: 450 },
        { month: 'April', views: 2000, clicks: 600 },
        { month: 'May', views: 2200, clicks: 700 },
        { month: 'June', views: 2200, clicks: 700 },
        { month: 'July', views: 2000, clicks: 600 },
        { month: 'August', views: 1200, clicks: 300 },
        { month: 'September', views: 1800, clicks: 600 },
        { month: 'October', views: 1100, clicks: 200 },
        { month: 'November', views: 2200, clicks: 700 },
        { month: 'December', views: 1200, clicks: 300 },
    ];

    return (
        <div className="lg:h-46 lg:w-full xl:h-80 xl:w-full xx:h-109 xx:w-full bg-gray-lighter overflow-hidden">
            <div className="fixed mt-14 top-3/4 ss:bg-gray-light ss:w-screen ss:h-10 ss:mt-0 sm:bg-gray-light sm:w-screen sm:h-10 sm:mt-0 lg:-mt-1 lg:ml-0 lg:w-19.6 lg:h-40 lg:border lg:border-gray lg:bg-white rounded z-10 xl:h-60 xx:h-109">
                <div>
                    <Image src={logo} alt="image" className="relative sm:w-10 sm:-mt-19.3 lg:mt-0.5 lg:ml-6.2 lg:w-13 ss:invisible sm:invisible lg:visible xx:visible" />
                </div>
                <div className="relative ss:flex ss:flex-row ss:-mt-15.7 ss:ml-1.5 ss:text-x ss:gap-6 sm:flex sm:flex-row sm:mt-18 sm:ml-3 sm:text-sm sm:gap-6 lg:flex lg:flex-col lg:gap-4.6 lg:-mt-11.5 lg:ml-0.1 lg:text-left lg:text-sm font-semibold xl:gap-2">
                    <div className='flex ss:flex-col sm:flex-col lg:flex-row lg:mt-11 lg:ml-6.3 lg:w-16.5 lg:h-6 xl:mt-11 items-center gap-2 lg:bg-gray-light p-2 rounded'>
                        <Image src={dashboard} alt="" className="relative size-4" />
                        <h3 className='relative text-blue lg:text-md lg:font-bold'>Dashboard</h3>
                    </div>

                    <Link href="/my-ads"><div className='flex ss:flex-col ss:mt-2 sm:flex-col sm:mt-2 lg:flex-row lg:ml-6.3 lg:w-16.5 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 xl:w-18 xl:h-6 xl:pl-1 hover:bg-gray-light hover:h-6 hover:pl-1 hover:w-16.5 hover:rounded cursor-pointer'>
                        <Image src={speaker} alt="" className="relative size-4" />
                        <h3 className='relative text-dark ss:font-normal sm:font-normal lg:text-md lg:font-normal'>My Ads</h3>
                    </div></Link>

                    <Link href="/settings"><div className='flex ss:flex-col ss:mt-2 sm:flex-col sm:mt-2 lg:flex-row lg:ml-6.3 lg:w-16 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 xl:w-18 xl:h-6 xl:pl-1 hover:bg-gray-light hover:h-6 hover:pl-1 hover:w-16.5 hover:rounded cursor-pointer'>
                        <Image src={settings} alt="" className="relative size-4" />
                        <h3 className='relative text-dark ss:font-normal sm:font-normal lg:text-md lg:font-normal'>Settings</h3>
                    </div></Link>

                    <Logout />
                </div>
            </div>

            <Header />

            <div>
                <div className="lg:ml-20 lg:mt-12 lg:h-37 lg:w-63 xl:h-41 xl:w-68 xx:h-76 xx:w-138 bg-white rounded-xl z-10">
                    <h2 className="lg:pt-3 lg:ml-5 text-dark text-sm font-bold">Overview</h2>
                    <h3 className="lg:mt-1 lg:ml-5 text-dark text-sm font-medium">https://lakers.com</h3>
                    <h3 className="lg:mt-1 lg:ml-5 text-dark text-sm font-medium">Updated 5 secs ago</h3>
                    <div className="lg:h-30.5 lg:ml-5 xl:h-35 xx:h-67">
                        <AdPostChart data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeeMore
export const dynamic = "force-dynamic";