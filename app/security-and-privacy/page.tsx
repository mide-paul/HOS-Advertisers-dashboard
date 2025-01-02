import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/images/logo.png';
import dashboard from '../../public/icons/dashboard_dark.png';
import speaker from '../../public/icons/speaker.svg';
import line from '../../public/icons/line_dark.png';
import toggle_icon from '../../public/icons/toggle_icon.png';
import logout from '../../public/icons/logout_dark.png';
import arrow_right from '../../public/icons/arrow_right_dark.png';
import settings from '../../public/icons/settings_blue.png';
import logout_dark from '../../public/icons/logout_dark.png';
import { Header } from "@/components/header";

const SecurityAndPrivacy = () => {

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
                    <Link href="/bankdetails"><h3 className="relative text-sm text-left text-dark font-normal cursor-pointer">Bank Details</h3></Link>
                    <h3 className="relative text-sm text-left text-light-blue font-semibold">Security & Privacy</h3>
                    <Link href="/support"><h3 className="relative text-dark text-sm text-left cursor-pointer">Support</h3></Link>
                    <Image src={line} alt="" className="absolute lg:mt-5 w-12.5 h-0.1 lg:ml-14.5" />
                </div>

                <div>
                    <div>
                        <h3 className="relative text-dark text-sm font-bold text-left lg:ml-7 lg:mt-8">Change Password</h3>
                    </div>
                    <div>
                        <div className="relative bg-white lg:w-35 lg:h-15.5 border rounded lg:ml-7 lg:mt-4">
                            <div className="flex flex-col gap-2 lg:ml-4 lg:mt-4">
                                <h3 className="relative text-sm text-left">Current Password</h3>
                                <input
                                    className="relative text-sm text-dark h-6 w-32.7 p-2 bg-gray-lighter rounded"
                                    placeholder="Enter your current password"
                                    type="password" />
                                {/* <span className="items-center" onClick={handleToggle}>
                            <Icon className="absolute lg:ml-17 lg:-mt-6.2 z-10" icon={icon} size={20}/>
                            </span> */}
                            </div>

                            <div className="flex flex-col gap-2 lg:ml-4 lg:mt-4">
                                <h3 className="relative text-sm text-left">Enter New Password</h3>
                                <input
                                    className="relative text-sm text-dark h-6 w-32.7 p-2 bg-gray-lighter rounded"
                                    placeholder="Enter new password"
                                    type="password" />
                                {/* <span className="items-center" onClick={handleToggle}>
                            <Icon className="absolute lg:ml-17 lg:-mt-6.2 z-10" icon={icon} size={20}/>
                            </span> */}
                            </div>
                        </div>
                    </div>
                    <div className="relative bg-white lg:w-35 lg:h-13 border rounded lg:ml-7 lg:mt-5">
                        <div className="flex flex-col gap-2 lg:ml-4 lg:mt-4">
                            <h3 className="relative text-sm font-semibold text-left">Enable 2FA</h3>
                            <p className="relative text-sm text-gray font-normal text-left">
                                Two-Factor Authentication (2FA) is an extra layer of security that requires two
                                forms of identification during login, adding enhanced protection to your account.
                                It reduces the risk of unauthorized access, providing peace of mind and
                                safeguarding against cyber threats. Enable 2FA for added security.
                            </p>
                        </div>
                        <Image src={toggle_icon} alt="" className="relative lg:-mt-11.6 lg:ml-32 cursor-pointer" />
                    </div>
                    <div>
                        <div className="relative bg-white lg:w-35 lg:h-8 border rounded lg:ml-7 lg:mt-5">
                            <div className="relative bg-gray-lighter lg:w-33 lg:h-6 rounded lg:mt-3 lg:ml-3">
                                <h3 className="relative text-sm text-left text-gray lg:pl-6 lg:pt-1 cursor-pointer">Log Out</h3>
                                <Image src={logout} alt="" className="relative lg:-mt-4.5 size-4 lg:ml-1 z-10 cursor-pointer" />
                                <Image src={arrow_right} alt="" className="relative lg:-mt-4.5 size-4 lg:ml-31 z-10 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <button className="relative bg-blue text-white text-sm lg:w-35 lg:ml-7 lg:h-6 lg:mt-7 rounded hover:bg-light-blue">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SecurityAndPrivacy
export const dynamic = "force-dynamic";