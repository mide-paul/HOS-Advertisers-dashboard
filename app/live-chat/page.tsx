import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/images/logo.png';
import dashboard from '../../public/icons/dashboard_dark.png';
import speaker from '../../public/icons/speaker.svg';
import line from '../../public/icons/line_dark.png';
import arrow_left_blue from '../../public/icons/arrow_left_blue.png';
import tickets_1 from '../../public/icons/tickets_1.png';
import tickets_2 from '../../public/icons/tickets_2.png';
import tickets_3 from '../../public/icons/tickets_3.png';
import profile_image from '../../public/images/settings_profile_image.png';
import image_icon_blue from '../../public/icons/image_icon_blue.png';
import emoji from '../../public/icons/emoji.png';
import settings from '../../public/icons/settings_blue.png';
import logout_dark from '../../public/icons/logout_dark.png';
import { Header } from "@/components/header";

const LiveChat = () => {

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

            <div className="relative bg-white lg:ml-20 lg:mt-12 lg:w-62 lg:h-7 rounded">
                <Link href="/support"><Image src={arrow_left_blue} alt="" className="relative lg:pt-0.1 lg:ml-2" />
                    <h3 className="relative text-sm text-left font-bold text-blue lg:ml-8 lg:-mt-5.3">Back</h3>
                </Link>
            </div>

            <div className="flex gap-4 lg:ml-20">
                <div className="relative flex flex-wrap bg-white lg:mt-5 lg:w-25 lg:h-40 rounded">
                    <div className="relative bg-white lg:mt-4 lg:ml-4 lg:w-15.5 lg:h-10 border rounded">
                        <Image src={tickets_1} alt="" className="absolute lg:mt-4.5 lg:ml-2 bg-gray-lighter p-2 rounded-3xl" />
                        <h3 className="relative text-left text-dark text-sm font-normal lg:ml-8 lg:mt-3">3</h3>
                        <h3 className="relative text-left text-gray text-sm font-normal lg:ml-8 lg:mt-3">Total Tickets</h3>
                    </div>
                    <div className="relative bg-white lg:mt-4 lg:ml-4 lg:w-15.5 lg:h-10 border rounded">
                        <Image src={tickets_2} alt="" className="absolute lg:mt-4.5 lg:ml-2 bg-gray-lighter p-2 rounded-3xl" />
                        <h3 className="relative text-left text-dark text-sm font-normal lg:ml-8 lg:mt-3">2</h3>
                        <h3 className="relative text-left text-gray text-sm font-normal lg:ml-8 lg:mt-3">Open Tickets</h3>
                    </div>
                    <div className="relative bg-white lg:-mt-5 lg:ml-4 lg:w-15.5 lg:h-10 border rounded">
                        <Image src={tickets_3} alt="" className="absolute lg:mt-4.5 lg:ml-2 bg-gray-lighter p-2 rounded-3xl" />
                        <h3 className="relative text-left text-dark text-sm font-normal lg:ml-8 lg:mt-3">2</h3>
                        <h3 className="relative text-left text-gray text-sm font-normal lg:ml-8 lg:mt-3">Closed Tickets</h3>
                    </div>

                    <div>
                        <button className="absolute lg:-ml-15.5 lg:mt-10.5 lg:h-6 lg:w-23 border rounded font-bold transparent text-sm text-light-blue">
                            Start New Chat
                        </button>
                    </div>

                    <div className="flex gap-14 lg:ml-3 lg:mt-9">
                        <h3 className="relative text-dark font-semibold text-sm">Opened messages</h3>
                        <h3 className="relative text-gray-light font-semibold text-sm cursor-pointer">Closed messages</h3>
                    </div>

                    <div>
                        <div className="relative lg:w-23.1 lg:h-11.7 lg:ml-3.3 bg-gray-light rounded">
                            <input type="radio" name="live-chat" className="relative lg:ml-4 lg:mt-2" />
                            <h3 className="relative text-sm text-dark font-semibold text-left lg:ml-6.5 lg:-mt-4.6">
                                Login Issues
                            </h3>
                            <p className="relative text-left text-sm lg:mt-1 lg:ml-6.5 text-gray lg:max-w-20">
                                I can&apos;t log into my account, i tried multiple times but it kept saying the same thing on and on and ...
                            </p>
                            <h3 className="relative text-sm text-gray text-left lg:mt-1 lg:ml-6.5">
                                1w ago
                            </h3>
                        </div>

                        <div className="relative lg:w-23.1 lg:h-11.7 lg:ml-3.3 lg:mt-3 bg-white border rounded">
                            <input type="radio" name="live-chat" className="relative lg:ml-4 lg:mt-2" />
                            <h3 className="relative text-sm text-dark font-semibold text-left lg:ml-6.5 lg:-mt-4.6">
                                Login Issues
                            </h3>
                            <p className="relative text-left text-sm lg:mt-1 lg:ml-6.5 text-gray lg:max-w-20">
                                I can&apos;t log into my account, i tried multiple times but it kept saying the same thing on and on and ...
                            </p>
                            <h3 className="relative text-sm text-gray text-left lg:mt-1 lg:ml-6.5">
                                1w ago
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="relative bg-white lg:mt-5 lg:w-35.5 lg:h-40 rounded">
                    <div>
                        <h3 className="relative text-sm text-dark font-semibold text-left lg:ml-5 lg:mt-4.6">
                            Login Issue
                        </h3>
                        <h3 className="relative text-sm text-dark font-normal text-left lg:ml-5 lg:mt-2">
                            Sandra - Support
                        </h3>
                        <h3 className="relative text-sm text-green font-semibold text-left lg:ml-12.5 lg:-mt-4.5">
                            .online
                        </h3>
                        <Image src={line} alt="" className="relative lg:ml-5 lg:mt-4 h-0.1 w-32.5" />
                    </div>
                    <div>
                        <h3 className="relative text-sm text-gray font-normal text-center lg:mt-6">
                            09 Jul 2024
                        </h3>
                        <Image src={profile_image} alt="" className="relative size-7 lg:ml-5 lg:mt-4" />
                        <div>
                            <p className="relative max-w-19.7 lg:ml-10.5 lg:-mt-7 rounded-tl-xl rounded-r-xl bg-gray-light text-sm text-dark font-normal text-left lg:p-3">
                                I can&apos;t log into my account, i tried multiple times but it kept saying the same thing
                                on and on and on. I don&apos;t know what to do at this point. Can you please help me? I
                                tried to contact via email but i&apos;ve not gotten a response.
                            </p>
                            <h3 className="relative lg:ml-10.5 text-sm text-gray font-normal text-left lg:mt-4">
                                Sat 5:10 AM
                            </h3>
                        </div>

                        <div>
                            <p className="relative max-w-19.7 lg:ml-18 lg:mt-5 rounded-tl-xl rounded-r-xl bg-gray-light text-sm text-dark font-normal text-left lg:p-3">
                                Hi John, we are so sorry this happened. We are currently having a glitch, please be
                                rest assured our technical team are working to  get this sorted aas soon as possible.
                            </p>
                        </div>
                        <div>
                            <textarea className="relative p-3 text-sm pb-4 lg:mt-4.5 lg:h-12 lg:w-29 lg:ml-10 transparent rounded border resize-none" />
                            <button className="relative lg:ml-28 lg:w-10 lg:h-5 text-sm text-white bg-blue hover:bg-light-blue rounded-2xl">
                                Send
                            </button>
                            <div className="flex gap-2.5 lg:ml-4 lg:-mt-7">
                                <Image src={image_icon_blue} alt="" className="relative size-4 cursor-pointer" />
                                <Image src={emoji} alt="" className="relative size-4 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveChat
export const dynamic = "force-dynamic";