import React from "react";
import Link from "next/link";
import Image from "next/image";
import line from '../../public/icons/line_dark.png';
import logout from '../../public/icons/logout_dark.png';
import arrow_right from '../../public/icons/arrow_right_dark.png';
import { Header } from "@/components/header";
import Sidebar from "@/components/Sidebar";

const SecurityAndPrivacy = () => {

    return (
        <div className="h-full w-full bg-gray-200 overflow-hidden">
            <div>
                <Sidebar />
            </div>

            <Header />

            <div className="bg-white ml-0 md:ml-64 lg:ml-64 mt-24 w-full h-50 rounded pb-8">
                <div className="flex gap-4 pt-5 ml-5 lg:gap-5 lg:pt-6 lg:ml-7">
                    <Link href="/settings"><h3 className="relative text-sm text-left text-black cursor-pointer">Profile</h3></Link>
                    <Link href="/plans"><h3 className="relative text-sm text-left text-black font-normal cursor-pointer">Plans</h3></Link>
                    <h3 className="relative text-sm text-left text-light-blue font-semibold">Security & Privacy</h3>
                    <Link href="/support"><h3 className="relative text-black text-sm text-left cursor-pointer">Support</h3></Link>
                    <Image src={line} alt="" className="absolute mt-6 w-32 ml-28 h-0.1" />
                </div>

                <div>
                    <div>
                        <h3 className="ml-5 mt-6 text-black text-sm font-bold text-left lg:ml-7 lg:mt-8">Change Password</h3>
                    </div>
                    <div>
                        <div className="ml-5 mt-4 w-80 h-52 bg-white lg:w-80 lg:h-48 border rounded lg:ml-7 lg:mt-4">
                            <div className="flex flex-col gap-2 ml-4 mt-4 lg:ml-4 lg:mt-4">
                                <h3 className="text-sm text-left text-black">Current Password</h3>
                                <input
                                    className="relative text-sm text-black w-72 h-10 pl-4 bg-gray-200 rounded"
                                    placeholder="Enter your current password"
                                    type="password" />
                                {/* <span className="items-center" onClick={handleToggle}>
                            <Icon className="absolute lg:ml-17 lg:-mt-6.2 z-10" icon={icon} size={20}/>
                            </span> */}
                            </div>

                            <div className="flex flex-col gap-2 ml-4 mt-4 lg:ml-4 lg:mt-4">
                                <h3 className="relative text-sm text-left text-black">Enter New Password</h3>
                                <input
                                    className="relative text-sm text-black w-72 h-10 pl-4 bg-gray-200 rounded"
                                    placeholder="Enter new password"
                                    type="password" />
                                {/* <span className="items-center" onClick={handleToggle}>
                            <Icon className="absolute lg:ml-17 lg:-mt-6.2 z-10" icon={icon} size={20}/>
                            </span> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="relative ss:ml-2 ss:mt-4 ss:w-19.51 ss:h-16 sm:ml-2 sm:mt-4 sm:w-20 sm:h-16 bg-white lg:w-35 lg:h-13 border rounded lg:ml-7 lg:mt-5">
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
                    </div> */}
                    <div>
                        <div className="ml-5 mt-4 w-80 h-11 bg-white border rounded lg:ml-7 lg:mt-7">
                            <div className="w-72 h-8 mt-1 ml-3 bg-gray-200 lg:w-72 lg:h-8 rounded">
                                <h3 className="pl-8 pt-1 text-sm text-left text-gray cursor-pointer">Log Out</h3>
                                <Image src={logout} alt="" className="ml-1 -mt-4.5 -mt-4 size-4 lg:ml-1 cursor-pointer" />
                                <Image src={arrow_right} alt="" className="-mt-4 ml-64 lg:-mt-4 size-4 z-10 cursor-pointer" />
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