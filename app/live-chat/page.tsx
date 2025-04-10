import React from "react";
import Link from "next/link";
import Image from "next/image";
import line from '../../public/icons/line_dark.png';
import arrow_left_blue from '../../public/icons/arrow_left_blue.png';
import tickets_1 from '../../public/icons/tickets_1.png';
import tickets_2 from '../../public/icons/tickets_2.png';
import tickets_3 from '../../public/icons/tickets_3.png';
import profile_image from '../../public/images/settings_profile_image.png';
import image_icon_blue from '../../public/icons/image_icon_blue.png';
import emoji from '../../public/icons/emoji.png';
import { Header } from "@/components/header";
import Sidebar from "@/components/Sidebar";

const LiveChat = () => {

    return (
        <div className="h-full w-full bg-gray-200 overflow-hidden">
            <div>
                <Sidebar />
            </div>

            <Header />

            <div className="bg-white md:ml-64 lg:ml-64 mt-24 lg:max-w-[1075px] h-12 rounded pb-4">
                <Link href="/settings"><Image src={arrow_left_blue} alt="" className="relative mb-2 ml-2" />
                    <h3 className="text-sm text-left font-bold text-blue ml-12 -mt-10">Back</h3>
                </Link>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 md:ml-64 lg:ml-64 pb-8">
                <div className="mt-5 max-w-[480px] lg:max-w-[380px] h-full flex flex-wrap bg-white lg:mt-5 p-4 rounded-md">
                    <div className="w-40 h-20 bg-white border rounded">
                        <Image src={tickets_1} alt="" className="absolute mt-3 ml-2 lg:mt-5 lg:ml-2 bg-gray-200 p-2 size-8 rounded-3xl" />
                        <h3 className="ml-12 mt-3 text-left text-black text-sm font-normal">3</h3>
                        <h3 className="ml-12 mt-3 text-left text-gray text-sm font-normal">Total Tickets</h3>
                    </div>
                    <div className="ml-5 w-40 h-20 bg-white border rounded">
                        <Image src={tickets_2} alt="" className="absolute mt-3 ml-2 lg:mt-4 bg-gray-200 p-2 size-8 rounded-3xl" />
                        <h3 className="ml-12 mt-3 text-left text-black text-sm font-normal">2</h3>
                        <h3 className="ml-12 mt-3 text-left text-gray text-sm font-normal">Open Tickets</h3>
                    </div>
                    <div className="mt-4 w-40 h-20 bg-white border rounded">
                        <Image src={tickets_3} alt="" className="absolute mt-3 ml-2 lg:mt-4 bg-gray-200 p-2 size-8 rounded-3xl" />
                        <h3 className="ml-12 mt-3 text-left text-black text-sm font-normal">2</h3>
                        <h3 className="ml-12 mt-3 text-left text-gray text-sm font-normal">Closed Tickets</h3>
                    </div>

                    <div>
                        <button className="ml-13 mt-8 h-8 w-80 border rounded font-medium transparent text-sm text-blue-950 hover:bg-gray-100">
                            Start New Chat
                        </button>
                    </div>

                    <div className="flex gap-10 lg:gap-14 ml-3 sm:mt-6 lg:ml-3 mt-9 lg:mt-9">
                        <h3 className="text-black font-normal text-sm">Opened messages</h3>
                        <h3 className="text-gray-200 font-normal text-sm cursor-pointer">Closed messages</h3>
                    </div>

                    <div>
                        <div className="min-w-[350px] h-32 mt-6 pt-2 bg-gray-200 rounded-md">
                            <input type="checkbox" name="live-chat" className="relative ml-4 mt-2" />
                            <h3 className="ml-9 -mt-6 text-sm text-black font-semibold text-left">
                                Login Issues
                            </h3>
                            <p className="mt-1 ml-9 text-left text-sm text-gray-500">
                                I can&apos;t log into my account, i tried multiple times but it kept saying the same thing on and on and ...
                            </p>
                            <h3 className="mt-1 ml-9 text-xs text-gray-400 text-left">
                                1w ago
                            </h3>
                        </div>

                        <div className="min-w-[350px] h-32 mt-6 pt-2 bg-white border rounded-md">
                            <input type="checkbox" name="live-chat" className="relative ml-4 mt-2" />
                            <h3 className="ml-9 -mt-6 text-sm text-black font-semibold text-left">
                                Login Issues
                            </h3>
                            <p className="mt-1 ml-9 text-left text-sm text-gray-500">
                                I can&apos;t log into my account, i tried multiple times but it kept saying the same thing on and on and ...
                            </p>
                            <h3 className="mt-1 ml-9 text-xs text-gray-400 text-left">
                                1w ago
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="mt-5 min-w-[680px] max-h-[680px] bg-white rounded-md">
                    <div>
                        <h3 className="ml-5 mt-6 text-sm text-black font-semibold text-left">
                            Login Issue
                        </h3>
                        <h3 className="ml-5 mt-2 text-sm text-black font-normal text-left">
                            Sandra - Support
                        </h3>
                        <h3 className="ml-36 -mt-5 text-sm text-green-600 font-semibold text-left">
                            .online
                        </h3>
                        <Image src={line} alt="" className="ml-5 mt-4 max-w-[340px] lg:min-w-[640px] h-0.5" />
                    </div>
                    <div>
                        <h3 className="mt-6 ml-5 lg:ml-0 text-xs text-gray font-normal text-left lg:text-center">
                            09 Jul 2024
                        </h3>
                        <Image src={profile_image} alt="" className="ml-5 mt-4 size-9" />
                        <div>
                            <p className="ml-16 -mt-8 p-3 max-w-60 lg:max-w-96 lg:-mt-9 rounded-tl-xl rounded-r-xl bg-gray-100 text-sm text-black font-normal text-left lg:p-3">
                                I can&apos;t log into my account, i tried multiple times but it kept saying the same thing
                                on and on and on. I don&apos;t know what to do at this point. Can you please help me? I
                                tried to contact via email but i&apos;ve not gotten a response.
                            </p>
                            <h3 className="ml-16 mt-4 lg:ml-16 text-xs text-gray font-normal text-left">
                                Sat 5:10 AM
                            </h3>
                        </div>

                        <div>
                            <p className="ml-24 mt-5 p-3 max-w-60 lg:max-w-96 lg:ml-64 lg:mt-5 rounded-tl-xl rounded-r-xl bg-gray-200 text-sm text-black font-normal text-left">
                                Hi John, we are so sorry this happened. We are currently having a glitch, please be
                                rest assured our technical team are working to  get this sorted aas soon as possible.
                            </p>
                        </div>
                        <div>
                            <div className="flex flex-col gap-1 lg:items-end pr-10 ml-20">
                                <textarea className="mt-5 h-24 max-w-[260px] p-3 text-sm pb-4 lg:mt-5 lg:h-36 lg:min-w-[560px] bg-white transparent rounded-xl border resize-none" />
                                <button className="mt-1 w-16 p-1 text-xs text-white bg-blue-950 hover:bg-blue-900 rounded-2xl">
                                    Send
                                </button>
                            </div>
                            <div className="flex gap-3 ml-4 -mt-12">
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