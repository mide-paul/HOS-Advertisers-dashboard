import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/images/logo.png';
import dashboard from '../../public/icons/dashboard_dark.png';
import speaker from '../../public/icons/speaker.svg';
import arrow_left_blue from '../../public/icons/arrow_left_blue.png';
import settings from '../../public/icons/settings.png';
import logout_dark from '../../public/icons/logout_dark.png';
import { Header } from "@/components/header";
import { AdplanCards } from "@/components/AdplanCards";

const Adplan = () => {

    return (
        <div className="ss:h-140 sm:h-140 lg:h-50 lg:w-full xl:h-80 xl:w-full xx:h-109 xx:w-full bg-gray-lighter overflow-hidden">
            <div className="fixed ss:bg-gray-light ss:w-screen ss:h-10 ss:mt-28 sm:bg-gray-light sm:w-screen sm:h-10 sm:mt-37 md:bg-gray-light md:w-screen md:h-10 md:mt-27.5 lg:-mt-1 lg:ml-0 lg:w-19.6 lg:h-40 lg:border lg:border-gray lg:bg-white rounded z-10 xl:h-59 xx:h-109">
                <div>
                    <Image src={logo} alt="image" className="relative sm:w-10 sm:-mt-19.3 lg:mt-0.5 lg:ml-6.2 lg:w-13 ss:invisible sm:invisible lg:visible xx:visible" />
                </div>
                <div className="relative ss:flex ss:flex-row ss:-mt-15.7 ss:ml-1.5 ss:text-x ss:gap-6 sm:flex sm:flex-row sm:mt-18 sm:ml-5 sm:text-sm sm:gap-6 md:flex md:flex-row md:mt-18 md:ml-10 md:text-sm md:gap-12 lg:flex lg:flex-col lg:gap-4.6 lg:-mt-11.5 lg:ml-0.1 lg:text-left lg:text-sm font-semibold xl:-mt-6 xl:gap-2">
                    <Link href="/sponsors"><div className='flex ss:flex-col ss:mt-2 sm:flex-col sm:mt-2 lg:flex-row lg:mt-11 lg:ml-6.3 lg:w-16.5 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 xl:w-18 xl:h-6 xl:pl-1 hover:bg-gray-light hover:h-6 hover:pl-1 hover:w-16.5 hover:rounded cursor-pointer'>
                        <Image src={dashboard} alt="" className="relative size-4" />
                        <h3 className='relative ss:font-medium sm:font-medium text-dark lg:text-md lg:font-medium'>Dashboard</h3>
                    </div></Link>

                    <div className='flex ss:flex-col sm:flex-col lg:flex-row lg:ml-6.3 lg:w-16.5 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 lg:bg-gray-light p-2 rounded'>
                        <Image src={speaker} alt="" className="relative size-4" />
                        <h3 className='relative text-blue lg:text-md lg:font-bold'>My Ads</h3>
                    </div>

                    <Link href="/settings"><div className='flex ss:flex-col ss:mt-2 sm:flex-col sm:mt-2 lg:flex-row lg:ml-6.3 lg:w-16 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 xl:w-18 xl:h-6 xl:pl-1 hover:bg-gray-light hover:h-6 hover:pl-1 hover:w-16.5 hover:rounded cursor-pointer'>
                        <Image src={settings} alt="" className="relative size-4" />
                        <h3 className='relative ss:font-medium sm:font-medium text-dark lg:text-md lg:font-medium'>Settings</h3>
                    </div></Link>

                    <div className='flex ss:flex-col ss:mt-2 sm:flex-col sm:mt-2 lg:flex-row lg:ml-6.3 lg:w-16 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 xl:w-18 xl:h-6 xl:pl-1 hover:bg-gray-light hover:h-6 hover:pl-1 hover:w-16.5 hover:rounded cursor-pointer'>
                        <Image src={logout_dark} alt="" className="relative size-4" />
                        <h3 className='relative ss:font-medium sm:font-medium text-dark lg:text-md lg:font-medium'>Logout</h3>
                    </div>
                </div>
            </div>

            <Header />

            <div>
                <div className="relative ss:ml-0 ss:mt-10 ss:w-20 ss:h-7 sm:ml-3 sm:mt-10 sm:w-21.5 sm:h-7 md:w-46 bg-white lg:ml-20 lg:mt-12 lg:w-62 lg:h-7 xl:w-68 rounded">
                    <Link href="/sponsors"><Image src={arrow_left_blue} alt="" className="relative lg:pt-0.1 lg:ml-2" />
                        <h3 className="relative ss:ml-7 ss:-mt-5.3 sm:ml-7 sm:-mt-5.3 text-sm text-left font-bold text-blue lg:ml-8 lg:-mt-5.3">Back</h3>
                    </Link>
                </div>

                <div>
                    <h3 className="relative ss:pt-5 ss:ml-3 ss:text-center sm:pt-5 sm:ml-3 sm:text-center text-dark lg:font-bold text-base lg:text-left lg:pt-5 lg:ml-20">Choose an Ad Plan</h3>
                    <p className="relative ss:pt-4 ss:ml-3 ss:text-center sm:pt-4 sm:ml-3 sm:text-center text-dark lg:font-medium text-sm lg:text-left lg:pt-4 lg:ml-20">Kindly choose your preferred ad plan below</p>
                </div>

                <div>
                    <AdplanCards />
                </div>
            </div>
        </div>
    )
}

export default Adplan
export const dynamic = "force-dynamic";