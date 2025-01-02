import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/images/logo.png';
import dashboard from '../../public/icons/dashboard.png';
import speaker from '../../public/icons/speaker.svg';
import settings from '../../public/icons/settings.png';
import logout_dark from '../../public/icons/logout_dark.png';
import { Header } from "@/components/header";
import AdPostChart from "@/components/AdPostChart";

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
            <div className="fixed lg:mt-0 lg:ml-0 lg:w-19.6 lg:h-40 lg:border lg:border-gray bg-white rounded z-10 xl:h-59 xx:h-109">
                <div>
                    <Link href="/"> <Image src={logo} alt="image" className="relative lg:mt-0.5 lg:ml-6.2 lg:w-13" /> </Link>
                </div>
                <div className="relative lg:flex lg:flex-col lg:gap-4.6 lg:-mt-11.5 lg:ml-0 lg:text-left lg:text-sm font-semibold xl:gap-2">
                    <div className='flex lg:flex-row lg:mt-11 lg:ml-6.3 lg:w-16.5 lg:h-6 xl:mt-6 items-center gap-2 lg:bg-gray-light p-2 rounded'>
                        <Image src={dashboard} alt="" className="relative size-4" />
                        <h3 className='relative text-blue lg:text-md lg:font-bold'>Dashboard</h3>
                    </div>

                    <Link href="/my-ads"><div className='flex lg:flex-row lg:ml-6.3 lg:w-16.5 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 xl:w-18 xl:h-6 xl:pl-1 hover:bg-gray-light hover:h-6 hover:pl-1 hover:w-16.5 hover:rounded cursor-pointer'>
                        <Image src={speaker} alt="" className="relative size-4" />
                        <h3 className='relative text-dark lg:text-md lg:font-medium'>My Ads</h3>
                    </div></Link>

                    <Link href="/settings"><div className='flex lg:flex-row lg:ml-6.3 lg:w-16 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 xl:w-18 xl:h-6 xl:pl-1 hover:bg-gray-light hover:h-6 hover:pl-1 hover:w-16.5 hover:rounded cursor-pointer'>
                        <Image src={settings} alt="" className="relative size-4" />
                        <h3 className='relative text-dark lg:text-md lg:font-medium'>Settings</h3>
                    </div></Link>

                    <div className='flex lg:flex-row lg:ml-6.3 lg:w-16 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 xl:w-18 xl:h-6 xl:pl-1 hover:bg-gray-light hover:h-6 hover:pl-1 hover:w-16.5 hover:rounded cursor-pointer'>
                        <Image src={logout_dark} alt="" className="relative size-4" />
                        <h3 className='relative text-dark lg:text-md lg:font-medium'>Logout</h3>
                    </div>
                </div>
            </div>

            <Header />

            <div>
                <div className="lg:ml-20 lg:mt-12 lg:h-37 lg:w-63 bg-white rounded-xl z-10">
                    <h2 className="lg:pt-3 lg:ml-5 text-dark text-sm font-bold">Overview</h2>
                    <h3 className="lg:mt-1 lg:ml-5 text-dark text-sm font-medium">https://lakers.com</h3>
                    <h3 className="lg:mt-1 lg:ml-5 text-dark text-sm font-medium">Updated 5 secs ago</h3>
                    <div className="lg:h-30.5 lg:ml-5">
                    <AdPostChart data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeeMore
export const dynamic = "force-dynamic";