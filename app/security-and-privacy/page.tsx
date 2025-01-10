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
import { Header } from "@/components/header";
import { Logout } from "@/components/logout";

const SecurityAndPrivacy = () => {

    return (
        <div className="ss:h-54 sm:h-54 lg:h-60 lg:w-full xl:h-80 xl:w-full xx:h-109 xx:w-full bg-gray-lighter overflow-hidden">
            <div className="fixed ss:bg-gray-light ss:w-screen ss:h-10 ss:mt-28 sm:bg-gray-light sm:w-screen sm:h-10 sm:mt-37 lg:-mt-1 lg:ml-0 lg:w-19.6 lg:h-40 lg:border lg:border-gray lg:bg-white rounded z-10 xl:h-59 xx:h-109">
                <div>
                    <Image src={logo} alt="image" className="relative lg:mt-0.5 lg:ml-6.2 lg:w-13 ss:invisible sm:invisible lg:visible xx:visible" />
                </div>
                <div className="relative ss:flex ss:flex-row ss:-mt-15.7 ss:ml-1.5 ss:text-x ss:gap-6 sm:flex sm:flex-row sm:-mt-17 sm:ml-3 sm:text-sm sm:gap-6 lg:flex lg:flex-col lg:gap-4.6 lg:-mt-11.5 lg:ml-0.1 lg:text-left lg:text-sm font-semibold xl:gap-2">
                    <Link href="/sponsors"><div className='flex ss:mt-2 ss:flex-col sm:flex-col sm:mt-2 lg:flex-row lg:mt-11 lg:ml-6.3 lg:w-16.5 lg:h-6 lg:pl-1 xl:mt-11 items-center gap-2 xl:w-18 xl:h-6 xl:pl-1 hover:bg-gray-light hover:h-6 hover:pl-1 hover:w-16.5 hover:rounded cursor-pointer'>
                        <Image src={dashboard} alt="" className="relative size-4" />
                        <h3 className='relative text-dark ss:font-normal sm:font-normal lg:text-md lg:font-normal'>Dashboard</h3>
                    </div></Link>

                    <Link href="/my-ads"><div className='flex ss:flex-col ss:mt-2 sm:flex-col sm:mt-2 lg:flex-row lg:ml-6.3 lg:w-16.5 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 xl:w-18 xl:h-6 xl:pl-1 hover:bg-gray-light hover:h-6 hover:pl-1 hover:w-16.5 hover:rounded cursor-pointer'>
                        <Image src={speaker} alt="" className="relative size-4" />
                        <h3 className='relative text-dark ss:font-normal sm:font-normal lg:text-md lg:font-normal'>My Ads</h3>
                    </div></Link>

                    <div className='flex ss:flex-col ss:mt-0 sm:flex-col sm:mt-0 lg:flex-row lg:ml-6.3 lg:w-16 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 lg:bg-gray-light p-2 rounded'>
                        <Image src={settings} alt="" className="relative size-4" />
                        <h3 className='relative text-blue lg:text-md lg:font-bold'>Settings</h3>
                    </div>

                    <Logout />
                </div>
            </div>

            <Header />

            <div className="relative ss:ml-0 ss:mt-10 ss:w-21.5 ss:h-43 sm:ml-2 sm:mt-10 sm:w-21.5 sm:h-43 bg-white lg:ml-20 lg:mt-12 lg:w-62 lg:h-50 xl:ml-23 rounded">
                <div className="flex ss:gap-2 ss:ml-2 ss:pt-6 sm:gap-2 sm:ml-2 sm:pt-6 lg:gap-5 lg:pt-6 lg:ml-7">
                    <Link href="/settings"><h3 className="relative text-sm text-left text-dark cursor-pointer">Profile</h3></Link>
                    {/* <Link href="/bankdetails"><h3 className="relative text-sm text-left text-dark font-normal cursor-pointer">Bank Details</h3></Link> */}
                    <h3 className="relative text-sm text-left text-light-blue font-semibold">Security & Privacy</h3>
                    <Link href="/support"><h3 className="relative text-dark text-sm text-left cursor-pointer">Support</h3></Link>
                    <Image src={line} alt="" className="absolute ss:mt-5 ss:ml-7 sm:mt-5 sm:ml-7 lg:mt-5 w-12 h-0.1 lg:ml-7.7" />
                </div>

                <div>
                    <div>
                        <h3 className="relative ss:ml-2 ss:mt-6 sm:ml-2 sm:mt-6 text-dark text-sm font-bold text-left lg:ml-7 lg:mt-8">Change Password</h3>
                    </div>
                    <div>
                        <div className="relative ss:ml-2 ss:mt-4 ss:w-19.51 ss:h-16 sm:ml-2 sm:mt-4 sm:w-20 sm:h-16 bg-white lg:w-35 lg:h-15.5 border rounded lg:ml-7 lg:mt-4">
                            <div className="flex flex-col gap-2 ss:ml-4 ss:mt-4 sm:ml-4 sm:mt-4 lg:ml-4 lg:mt-4">
                                <h3 className="relative text-sm text-left">Current Password</h3>
                                <input
                                    className="relative text-sm text-dark ss:w-19.2 sm:w-19.3 h-6 lg:w-32.7 p-2 bg-gray-lighter rounded"
                                    placeholder="Enter your current password"
                                    type="password" />
                                {/* <span className="items-center" onClick={handleToggle}>
                            <Icon className="absolute lg:ml-17 lg:-mt-6.2 z-10" icon={icon} size={20}/>
                            </span> */}
                            </div>

                            <div className="flex flex-col gap-2 ss:ml-4 ss:mt-4 sm:ml-4 sm:mt-4 lg:ml-4 lg:mt-4">
                                <h3 className="relative text-sm text-left">Enter New Password</h3>
                                <input
                                    className="relative text-sm text-dark ss:w-19.2 sm:w-19.3 h-6 lg:w-32.7 p-2 bg-gray-lighter rounded"
                                    placeholder="Enter new password"
                                    type="password" />
                                {/* <span className="items-center" onClick={handleToggle}>
                            <Icon className="absolute lg:ml-17 lg:-mt-6.2 z-10" icon={icon} size={20}/>
                            </span> */}
                            </div>
                        </div>
                    </div>
                    <div className="relative ss:ml-2 ss:mt-4 ss:w-19.51 ss:h-16 sm:ml-2 sm:mt-4 sm:w-20 sm:h-16 bg-white lg:w-35 lg:h-13 border rounded lg:ml-7 lg:mt-5">
                        <div className="flex flex-col gap-2 ss:ml-4 ss:mt-4 sm:ml-4 sm:mt-4 lg:ml-4 lg:mt-4">
                            <h3 className="relative text-sm font-semibold text-left">Enable 2FA</h3>
                            <p className="relative text-sm text-gray font-normal text-left ss:max-w-19.3 sm:max-w-19.5 lg:max-w-33">
                                Two-Factor Authentication (2FA) is an extra layer of security that requires two
                                forms of identification during login, adding enhanced protection to your account.
                                It reduces the risk of unauthorized access, providing peace of mind and
                                safeguarding against cyber threats. Enable 2FA for added security.
                            </p>
                        </div>
                        <Image src={toggle_icon} alt="" className="relative ss:-mt-15.2 ss:ml-19 sm:-mt-15.2 sm:ml-19.2 lg:-mt-11.6 lg:ml-32 cursor-pointer" />
                    </div>
                    <div>
                        <div className="relative ss:ml-2 ss:mt-4 ss:w-19.51 ss:h-8 sm:ml-2 sm:mt-4 sm:w-20 sm:h-8 bg-white lg:w-35 lg:h-8 border rounded lg:ml-7 lg:mt-5">
                            <div className="relative ss:w-19.2 ss:h-6 ss:mt-3 ss:ml-3 sm:w-19.5 sm:h-6 sm:mt-3 sm:ml-3 bg-gray-lighter lg:w-33 lg:h-6 rounded lg:mt-3 lg:ml-3">
                                <h3 className="relative ss:pl-6 ss:pt-1 sm:pl-6 sm:pt-1 text-sm text-left text-gray lg:pl-6 lg:pt-1 cursor-pointer">Log Out</h3>
                                <Image src={logout} alt="" className="relative ss:ml-1 ss:-mt-4.5 sm:ml-1 sm:-mt-4.5 lg:-mt-4.5 size-4 lg:ml-1 cursor-pointer" />
                                <Image src={arrow_right} alt="" className="relative ss:-mt-4.5 ss:ml-19 sm:-mt-4.5 sm:ml-19.2 lg:-mt-4.5 size-4 lg:ml-31 z-10 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <button className="relative ss:w-19.51 ss:ml-2 ss:h-6 ss:mt-6 sm:w-20 sm:ml-2 sm:h-6 sm:mt-6 bg-blue text-white text-sm lg:w-35 lg:ml-7 lg:h-6 lg:mt-7 rounded hover:bg-light-blue">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SecurityAndPrivacy
export const dynamic = "force-dynamic";