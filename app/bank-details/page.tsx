import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/images/logo.png';
import dashboard from '../../public/icons/dashboard_dark.png';
import speaker from '../../public/icons/speaker.svg';
import line from '../../public/icons/line_dark.png';
import share_icon_blue from '../../public/icons/share_icon_blue.png';
import settings from '../../public/icons/settings_blue.png';
import logout_dark from '../../public/icons/logout_dark.png';
import { Header } from "@/components/header";

const BankDetails = () => {

    return (
        <div className="lg:h-60 lg:w-full xl:h-80 xl:w-full xx:h-109 xx:w-full bg-gray-lighter overflow-hidden">
            <div className="fixed lg:mt-0 lg:ml-0 lg:w-19.6 lg:h-40 lg:border lg:border-gray bg-white rounded z-10 xl:h-59 xx:h-109">
                <div>
                    <Link href="/sponsors"> <Image src={logo} alt="image" className="relative lg:mt-0.5 lg:ml-6.2 lg:w-13" /> </Link>
                </div>
                <div className="relative lg:flex lg:flex-col lg:gap-4.6 lg:-mt-11.5 lg:ml-0 lg:text-left lg:text-sm font-semibold xl:gap-2">
                    <Link href="/sponsors"><div className='flex lg:flex-row lg:mt-11 lg:ml-6.3 lg:w-16.5 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 xl:w-18 xl:h-6 xl:pl-1 hover:bg-gray-light hover:h-6 hover:pl-1 hover:w-16.5 hover:rounded cursor-pointer'>
                        <Image src={dashboard} alt="" className="relative size-4" />
                        <h3 className='relative text-dark lg:text-md lg:font-medium'>Dashboard</h3>
                    </div></Link>

                    <Link href="/my-ads"><div className='flex lg:flex-row lg:ml-6.3 lg:w-16.5 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 xl:w-18 xl:h-6 xl:pl-1 hover:bg-gray-light hover:h-6 hover:pl-1 hover:w-16.5 hover:rounded cursor-pointer'>
                        <Image src={speaker} alt="" className="relative size-4" />
                        <h3 className='relative text-dark lg:text-md lg:font-medium'>My Ads</h3>
                    </div></Link>

                    <div className='flex lg:flex-row lg:ml-6.3 lg:w-16 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 lg:bg-gray-light p-2 rounded'>
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
                    <h3 className="relative text-sm text-left text-light-blue font-semibold">Bank Details</h3>
                    <Link href="/security-and-privacy"><h3 className="relative text-dark text-sm text-left cursor-pointer">Security & Privacy</h3></Link>
                    <Link href="/support"><h3 className="relative text-dark text-sm text-left cursor-pointer">Support</h3></Link>
                    <Image src={line} alt="" className="absolute lg:mt-5 w-10.5 h-0.1 lg:ml-7.6" />
                </div>

                <div>
                    <div>
                        <h3 className="relative text-dark text-sm font-bold text-left lg:ml-7 lg:mt-8">Account Details</h3>
                    </div>
                    <div>
                        <h3 className="absolute text-light-blue text-sm font-bold text-left lg:ml-35.7 lg:-mt-4 cursor-pointer">Share</h3>
                        <Image src={share_icon_blue} alt="" className="absolute size-4.4 lg:-mt-4.5 lg:ml-34.3 z-10" />
                    </div>
                    <div>
                        <div className="relative bg-white lg:w-35 lg:h-19.2 border rounded lg:ml-7 lg:mt-4">
                            <div className="flex flex-col gap-2 lg:ml-4 lg:mt-4">
                                <h3 className="relative text-sm text-left">Account Holder</h3>
                                <div className="relative text-sm text-dark h-6 w-32.7 p-2 bg-gray-lighter rounded"></div>
                            </div>

                            <div className="flex flex-col gap-2 lg:ml-4 lg:mt-4">
                                <h3 className="relative text-sm text-left">Bank Name</h3>
                                <div className="relative text-sm text-dark h-6 w-32.7 p-2 bg-gray-lighter rounded"></div>
                            </div>

                            <div className="flex flex-col gap-2 lg:ml-4 lg:mt-4">
                                <h3 className="relative text-sm text-left">Account Number</h3>
                                <div className="relative text-sm text-dark h-6 w-32.7 p-2 bg-gray-lighter rounded"></div>
                            </div>
                        </div>
                    </div>
                    <button className="relative bg-blue text-white text-sm lg:w-35 lg:ml-7 lg:h-6 lg:mt-7 rounded hover:bg-light-blue">
                        Add New Account
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BankDetails
export const dynamic = "force-dynamic";