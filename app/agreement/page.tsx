import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/images/logo.png';
import dashboard from '../../public/icons/dashboard.png';
import speaker from '../../public/icons/speaker.svg';
import arrow_left_blue from '../../public/icons/arrow_left_blue.png';
import settings from '../../public/icons/settings.png';
import logout_dark from '../../public/icons/logout_dark.png';
import { Header } from "@/components/header";
import { AgreementComp } from "@/components/AgreementComp";

const Agreement = () => {

    return (
        <div className="ss:h-129 sm:h-121 lg:h-90 lg:w-full xl:h-85 xl:w-full xx:h-109 xx:w-full bg-gray-lighter overflow-hidden">
            <div className="fixed ss:bg-gray-light ss:w-screen ss:h-10 ss:mt-28 sm:bg-gray-light sm:w-screen sm:h-10 sm:mt-37 lg:-mt-1 lg:ml-0 lg:w-19.6 lg:h-40 lg:border lg:border-gray lg:bg-white rounded z-10 xl:h-60 xx:h-109">
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
                        <h3 className='relative text-dark ss:font-medium sm:font-medium lg:text-md lg:font-medium'>My Ads</h3>
                    </div></Link>

                    <Link href="/settings"><div className='flex ss:flex-col ss:mt-2 sm:flex-col sm:mt-2 lg:flex-row lg:ml-6.3 lg:w-16 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 xl:w-18 xl:h-6 xl:pl-1 hover:bg-gray-light hover:h-6 hover:pl-1 hover:w-16.5 hover:rounded cursor-pointer'>
                        <Image src={settings} alt="" className="relative size-4" />
                        <h3 className='relative text-dark ss:font-medium sm:font-medium lg:text-md lg:font-medium'>Settings</h3>
                    </div></Link>

                    <div className='flex ss:flex-col ss:mt-2 sm:flex-col sm:mt-2 lg:flex-row lg:ml-6.3 lg:w-16 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 xl:w-18 xl:h-6 xl:pl-1 hover:bg-gray-light hover:h-6 hover:pl-1 hover:w-16.5 hover:rounded cursor-pointer'>
                        <Image src={logout_dark} alt="" className="relative size-4" />
                        <h3 className='relative text-dark ss:font-medium sm:font-medium lg:text-md lg:font-medium'>Logout</h3>
                    </div>
                </div>
            </div>

            <Header />

            <div>
                <div className="relative ss:ml-3 ss:mt-9 ss:w-19.5 ss:h-7 sm:ml-3 sm:mt-9 sm:w-21.5 sm:h-7 bg-white lg:ml-20 lg:mt-12 lg:w-62 lg:h-7 rounded">
                    <Link href="/sponsors"><Image src={arrow_left_blue} alt="" className="relative lg:pt-0.1 lg:ml-2" />
                        <h3 className="relative ss:ml-6.5 ss:-mt-5.3 sm:ml-7 sm:-mt-5.3 text-sm text-left font-bold text-blue lg:ml-8 lg:-mt-5.3">Back</h3>
                    </Link>
                </div>

                <div>
                    <AgreementComp />
                </div>
            </div>
        </div>
    )
}

export default Agreement
export const dynamic = "force-dynamic";