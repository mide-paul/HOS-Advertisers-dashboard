import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/images/logo.png';
import award from '../../public/icons/award.png';
import line from '../../public/icons/line_dark.png';
import settings from '../../public/icons/settings_blue.png';
import logout_dark from '../../public/icons/logout_dark.png';
import { SupportGroup } from "@/components/supportGroup";
import { Header } from "@/components/header";

const Support = () => {

    return (
        <div className="lg:h-60 lg:w-full xl:h-80 xl:w-full xx:h-109 xx:w-full bg-gray-lighter overflow-hidden">
            <div className="fixed lg:mt-0 lg:ml-0 lg:w-19.6 lg:h-40 lg:border lg:border-gray bg-white rounded z-10 xl:h-59 xx:h-109">
                <div>
                    <Link href="/"> <Image src={logo} alt="image" className="relative lg:mt-0.5 lg:ml-6.2 lg:w-13" /> </Link>
                </div>
                <div className="relative lg:flex lg:flex-col lg:gap-4.6 lg:-mt-11.5 lg:ml-0 lg:text-left lg:text-sm font-semibold xl:gap-2">
                    <Link href="/sponsors"><div className='flex lg:flex-row lg:mt-11 lg:ml-6.3 lg:w-16.5 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 hover:bg-gray-light hover:p-1 hover:rounded cursor-pointer'>
                        <Image src={award} alt="" className="relative size-4" />
                        <h3 className='relative text-dark lg:text-md lg:font-medium'>Sponsors</h3>
                    </div></Link>

                    <div className='flex lg:flex-row lg:ml-6.3 lg:w-16.5 lg:h-6 lg:pl-1 lg:bg-gray-light p-2 xl:mt-6 items-center gap-2 xl:w-18 xl:h-6 xl:pl-1 rounded hover:bg-gray-light hover:h-6 hover:pl-1 hover:w-16.5 hover:rounded cursor-pointer'>
                        <Image src={settings} alt="" className="relative size-4" />
                        <h3 className='relative text-blue lg:text-md lg:font-bold'>Settings</h3>
                    </div>

                    <div className='flex lg:flex-row lg:ml-6.3 lg:w-16 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 xl:w-18 xl:h-6 xl:pl-1 hover:bg-gray-light hover:h-6 hover:pl-1 hover:w-16.5 hover:rounded cursor-pointer'>
                        <Image src={logout_dark} alt="" className="relative size-4" />
                        <h3 className='relative text-dark lg:text-md lg:font-medium'>Logout</h3>
                    </div>
                </div>
            </div>

            <Header />

            <div className="relative bg-white lg:ml-20 lg:mt-12 lg:w-62 lg:h-50 xl:ml-23 rounded">
                <div className="flex gap-5 lg:pt-6 lg:ml-7">
                    <Link href="/settings"><h3 className="relative text-sm text-left text-dark cursor-pointer">Profile</h3></Link>
                    <Link href="/bankdetails"><h3 className="relative text-sm text-left text-dark font-normal cursor-pointer">Bank Details</h3></Link>
                    <Link href="/security"><h3 className="relative text-sm text-left text-dark font-normal cursor-pointer">Security & Privacy</h3></Link>
                    <h3 className="relative text-light-blue font-semibold text-sm text-left">Support</h3>
                    <Image src={line} alt="" className="absolute lg:mt-5 w-8 h-0.1 lg:ml-19.5" />
                </div>

                <div>
                    <SupportGroup />
                </div>
            </div>
        </div>
    )
}

export default Support
export const dynamic = "force-dynamic";