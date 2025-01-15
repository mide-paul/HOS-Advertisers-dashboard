import React from "react";
import Link from "next/link";
import Image from "next/image";
import line from '../../public/icons/line_dark.png';
import toggle_icon from '../../public/icons/toggle_icon.png';
import logout from '../../public/icons/logout_dark.png';
import arrow_right from '../../public/icons/arrow_right_dark.png';
import { Header } from "@/components/header";
import Sidebar from "@/components/Sidebar";

const SecurityAndPrivacy = () => {

    return (
        <div className="ss:h-54 sm:h-54 lg:h-60 lg:w-full xl:h-80 xl:w-full xx:h-109 xx:w-full bg-gray-lighter overflow-hidden">
            <div>
                <Sidebar />
            </div>

            <Header />

            <div className="relative ss:ml-0 ss:mt-10 ss:w-21.5 ss:h-43 sm:ml-2 sm:mt-10 sm:w-21.5 sm:h-43 bg-white lg:ml-20 lg:mt-12 lg:w-62 lg:h-50 xl:ml-23 rounded">
                <div className="flex ss:gap-2 ss:ml-2 ss:pt-6 sm:gap-2 sm:ml-2 sm:pt-6 lg:gap-5 lg:pt-6 lg:ml-7">
                    <Link href="/settings"><h3 className="relative text-sm text-left text-dark cursor-pointer">Profile</h3></Link>
                    <Link href="/plans"><h3 className="relative text-sm text-left text-dark font-normal cursor-pointer">Plans</h3></Link>
                    <h3 className="relative text-sm text-left text-light-blue font-semibold">Security & Privacy</h3>
                    <Link href="/support"><h3 className="relative text-dark text-sm text-left cursor-pointer">Support</h3></Link>
                    <Image src={line} alt="" className="absolute ss:mt-5 ss:ml-11 sm:mt-5 sm:ml-11 lg:mt-5 w-11.5 h-0.1 lg:ml-12.2" />
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
                            <div className="flex flex-row ss:gap-15 sm:gap-15.6 lg:gap-26">
                            <h3 className="relative text-sm font-semibold text-left">Enable 2FA</h3>
                            <Image src={toggle_icon} alt="" className="relative cursor-pointer" />
                            </div>
                            <p className="relative text-sm text-gray font-normal text-left ss:max-w-19.3 sm:max-w-19.5 lg:max-w-33">
                                Two-Factor Authentication (2FA) is an extra layer of security that requires two
                                forms of identification during login, adding enhanced protection to your account.
                                It reduces the risk of unauthorized access, providing peace of mind and
                                safeguarding against cyber threats. Enable 2FA for added security.
                            </p>
                        </div>
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