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
        <div className="lg:h-50 lg:w-full xl:h-80 xl:w-full xx:h-109 xx:w-full bg-gray-lighter overflow-hidden">
            <div className="fixed lg:mt-0 lg:ml-0 lg:w-19.6 lg:h-40 lg:border lg:border-gray bg-white rounded z-10 xl:h-59 xx:h-109">
            <div>
                    <Link href="/sponsors"> <Image src={logo} alt="image" className="relative lg:mt-0.5 lg:ml-6.2 lg:w-13" /> </Link>
                </div>
                <div className="relative lg:flex lg:flex-col lg:gap-4.6 lg:-mt-11.5 lg:ml-0 lg:text-left lg:text-sm font-semibold xl:gap-2">
                    <Link href="/sponsors"><div className='flex lg:flex-row lg:mt-11 lg:ml-6.3 lg:w-16.5 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 xl:w-18 xl:h-6 xl:pl-1 hover:bg-gray-light hover:h-6 hover:pl-1 hover:w-16.5 hover:rounded cursor-pointer'>
                        <Image src={dashboard} alt="" className="relative size-4" />
                        <h3 className='relative text-dark lg:text-md lg:font-medium'>Dashboard</h3>
                    </div></Link>

                    <div className='flex lg:flex-row lg:ml-6.3 lg:w-16.5 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 lg:bg-gray-light p-2 rounded'>
                        <Image src={speaker} alt="" className="relative size-4" />
                        <h3 className='relative text-blue lg:text-md lg:font-bold'>My Ads</h3>
                    </div>

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
                <div className="relative bg-white lg:ml-20 lg:mt-12 lg:w-62 lg:h-7 rounded">
                    <Link href="/sponsors"><Image src={arrow_left_blue} alt="" className="relative lg:pt-0.1 lg:ml-2" />
                        <h3 className="relative text-sm text-left font-bold text-blue lg:ml-8 lg:-mt-5.3">Back</h3>
                    </Link>
                </div>

                <div>
                    <h3 className="relative text-dark lg:font-bold text-base lg:text-left lg:pt-5 lg:ml-20">Choose an Ad Plan</h3>
                    <p className="relative text-dark lg:font-medium text-sm lg:text-left lg:pt-4 lg:ml-20">Kindly choose your preferred ad plan below</p>
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