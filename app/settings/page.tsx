import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/images/logo.png';
import settings from '../../public/icons/settings_blue.png';
import logout_dark from '../../public/icons/logout_dark.png';
import dashboard from '../../public/icons/dashboard_dark.png';
import speaker from '../../public/icons/speaker.svg';
import line from '../../public/icons/line_dark.png';
import settings_profile_image from '../../public/images/settings_profile_image.png';
import edit_pen from '../../public/icons/edit_pen.png';
import { Header } from "@/components/header";

const GeneralSettings = () => {

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
                    <h3 className="relative text-sm text-left font-semibold text-light-blue">Profile</h3>
                    <Link href="/bank-details"><h3 className="relative text-dark text-sm text-left cursor-pointer">Bank Details</h3></Link>
                    <Link href="/security-and-privacy"><h3 className="relative text-dark text-sm text-left cursor-pointer">Security & Privacy</h3></Link>
                    <Link href="/support"><h3 className="relative text-dark text-sm text-left cursor-pointer">Support</h3></Link>
                    <Image src={line} alt="" className="absolute lg:mt-5 w-7 h-0.1" />
                </div>

                <div>
                    <div>
                        <Image src={settings_profile_image} alt="" className="relative size-11 lg:mt-8 lg:ml-7" />
                        <h3 className="relative text-dark text-sm font-semibold text-left lg:-mt-10 lg:ml-15.3">John Doe</h3>
                        <h3 className="relative text-dark text-sm font-normal text-left lg:mt-1 lg:ml-15.3">
                            john@example.com
                        </h3>
                        <h3 className="relative text-dark text-sm font-normal text-left lg:mt-1 lg:ml-15.3">
                            Driver
                        </h3>
                        <h3 className="relative text-light-blue text-sm font-normal text-left lg:mt-6.5 lg:ml-10 cursor-pointer">
                            Edit Picture
                        </h3>
                        <Image src={edit_pen} alt="" className="absolute lg:-mt-4.6 lg:ml-7" />
                    </div>
                </div>

                <div>
                    <h3 className="relative text-dark text-sm font-bold text-left lg:mt-7 lg:ml-7">
                        Bio
                    </h3>
                    <div>
                        <textarea className="relative lg:w-55 lg:h-15 bg-gray-lighter text-dark text-sm font-normal text-left whitespace-normal resize-none lg:mt-3 lg:ml-7 p-3"
                            placeholder="My name is John, I'm passionate about driving. I thrive in an interdisciplinary
                        environment, and am adept at working collaboratively and autonomously. With a
                        creative and strategic approach, I carry out my tasks and I provide a positive
                        customer experience. I am excited to take on new challenges in the trucking business
                        space and continue developing innovative solutions that improve the customer experience." />
                    </div>
                    <div className="flex flex-col gap-2 lg:ml-7 lg:mt-6">
                        <label className="relative text-sm font-bold text-left text-dark">
                            Full Name
                        </label>
                        <input className="relative bg-gray-lighter lg:h-6 lg:w-20 text-sm p-2.5 rounded" placeholder="John Doe" />
                    </div>
                    <div className="flex flex-col gap-2 lg:ml-25 lg:-mt-8">
                        <label className="relative text-sm font-bold text-left text-dark">
                            Email Address
                        </label>
                        <input className="relative bg-gray-lighter lg:h-6 lg:w-20 text-sm p-2.5 rounded" placeholder="john@example.com" />
                    </div>
                    <div className="flex flex-col gap-2 lg:ml-7 lg:mt-6">
                        <label className="relative text-sm font-bold text-left text-dark">
                            UserName
                        </label>
                        <input className="relative bg-gray-lighter lg:h-6 lg:w-20 text-sm p-2.5 rounded" placeholder="JohnDoe" />
                    </div>
                    <div className="flex flex-col gap-2 lg:ml-25 lg:-mt-8">
                        <label className="relative text-sm font-bold text-left text-dark">
                            Phone Number
                        </label>
                        <input className="relative bg-gray-lighter lg:h-6 lg:w-20 text-sm p-2.5 rounded" placeholder="+1 80 222-344-89" />
                    </div>
                    <button className="relative bg-blue text-white text-sm lg:w-17 lg:h-6 lg:mt-6 lg:ml-7 rounded hover:bg-light-blue">Save Changes</button>
                </div>
            </div>
        </div>
    )
}

export default GeneralSettings
export const dynamic = "force-dynamic";