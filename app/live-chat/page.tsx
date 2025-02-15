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
        <div className="ss:h-103 sm:h-98 lg:h-60 lg:w-full xl:h-80 xl:w-full xx:h-109 xx:w-full bg-gray-lighter overflow-hidden">
            <div>
                <Sidebar />
            </div>

            <Header />

            <div className="relative ss:ml-0 ss:mt-10 ss:w-21.5 ss:h-7 sm:ml-3 sm:mt-10 sm:w-21.5 sm:h-7 bg-white lg:ml-20 lg:mt-12 lg:w-62 lg:h-7 rounded">
                <Link href="/support"><Image src={arrow_left_blue} alt="" className="relative ss:pt-0.1 ss:ml-2 sm:pt-0.1 sm:ml-2 lg:pt-0.1 lg:ml-2" />
                    <h3 className="relative ss:ml-8 ss:-mt-5.3 sm:ml-8 sm:-mt-5.3 text-sm text-left font-bold text-blue lg:ml-8 lg:-mt-5.3">Back</h3>
                </Link>
            </div>

            <div className="flex ss:flex-col sm:flex-col lg:flex-row sm:ml-3 gap-4 lg:ml-20">
                <div className="relative ss:mt-5 ss:w-21.5 ss:h-40 sm:mt-5 sm:w-21.5 sm:h-40 flex flex-wrap bg-white lg:mt-5 lg:w-25 lg:h-40 rounded">
                    <div className="relative ss:mt-4 ss:ml-4 ss:w-13 ss:h-10 sm:mt-4 sm:ml-4 sm:w-13 sm:h-10 bg-white lg:mt-4 lg:ml-4 lg:w-15.5 lg:h-10 border rounded">
                        <Image src={tickets_1} alt="" className="absolute ss:mt-3 ss:ml-2 sm:mt-3 sm:ml-2 lg:mt-4.5 lg:ml-2 bg-gray-lighter p-2 rounded-3xl" />
                        <h3 className="relative ss:ml-4.5 ss:mt-3.3 sm:ml-4.5 sm:mt-3.5 text-left text-dark text-sm font-normal lg:ml-8 lg:mt-3">3</h3>
                        <h3 className="relative ss:ml-4 ss:mt-3 sm:ml-4 sm:mt-3 text-left text-gray text-sm font-normal lg:ml-8 lg:mt-3">Total Tickets</h3>
                    </div>
                    <div className="relative ss:mt-4 ss:ml-1 ss:w-13 ss:h-10 sm:mt-4 sm:ml-5.4 sm:w-13 sm:h-10 bg-white lg:mt-4 lg:ml-4 lg:w-15.5 lg:h-10 border rounded">
                        <Image src={tickets_2} alt="" className="absolute ss:mt-3 ss:ml-2 sm:mt-3 sm:ml-2 lg:mt-4.5 lg:ml-2 bg-gray-lighter p-2 rounded-3xl" />
                        <h3 className="relative ss:ml-4.5 ss:mt-3.3 sm:ml-4.5 sm:mt-3.5 text-left text-dark text-sm font-normal lg:ml-8 lg:mt-3">2</h3>
                        <h3 className="relative ss:ml-4 ss:mt-3 sm:ml-4 sm:mt-3 text-left text-gray text-sm font-normal lg:ml-8 lg:mt-3">Open Tickets</h3>
                    </div>
                    <div className="relative ss:-mt-5 ss:ml-4 ss:w-13 ss:h-10 sm:-mt-5 sm:ml-4 sm:w-13 sm:h-10 bg-white lg:-mt-5 lg:ml-4 lg:w-15.5 lg:h-10 border rounded">
                        <Image src={tickets_3} alt="" className="absolute ss:mt-3 ss:ml-2 sm:mt-3 sm:ml-2 lg:mt-4.5 lg:ml-2 bg-gray-lighter p-2 rounded-3xl" />
                        <h3 className="relative ss:ml-4.5 ss:mt-3.3 sm:ml-4.5 sm:mt-3.5 text-left text-dark text-sm font-normal lg:ml-8 lg:mt-3">2</h3>
                        <h3 className="relative ss:ml-4 ss:mt-3 sm:ml-4 sm:mt-3 text-left text-gray text-sm font-normal lg:ml-8 lg:mt-3">Closed Tickets</h3>
                    </div>

                    <div>
                        <button className="absolute ss:-ml-13 ss:mt-10 ss:h-6 ss:w-19.4 sm:-ml-13 sm:mt-10 sm:h-6 sm:w-19.9 lg:-ml-15.5 lg:mt-10.5 lg:h-6 lg:w-23 border rounded font-bold transparent text-sm text-light-blue">
                            Start New Chat
                        </button>
                    </div>

                    <div className="flex ss:gap-8 sm:gap-10 lg:gap-14 ss:ml-3 ss:mt-6 sm:ml-3 sm:mt-6 lg:ml-3 lg:mt-9">
                        <h3 className="relative text-dark font-semibold text-sm">Opened messages</h3>
                        <h3 className="relative text-gray-light font-semibold text-sm cursor-pointer">Closed messages</h3>
                    </div>

                    <div>
                        <div className="relative ss:w-19.5 ss:h-12.5 ss:ml-3.3 sm:w-19.9 sm:h-12.5 sm:ml-3.3 lg:w-23.1 lg:h-11.7 lg:ml-3.3 bg-gray-light rounded">
                            <input type="radio" name="live-chat" className="relative ss:ml-4 ss:mt-2 sm:ml-4 sm:mt-2 lg:ml-4 lg:mt-2" />
                            <h3 className="relative ss:ml-6.5 ss:-mt-4.6 sm:ml-6.5 sm:-mt-4.6 text-sm text-dark font-semibold text-left lg:ml-6.5 lg:-mt-4.6">
                                Login Issues
                            </h3>
                            <p className="relative ss:mt-1 ss:ml-6.5 sm:mt-1 sm:ml-6.5 text-left text-sm lg:mt-1 lg:ml-6.5 text-gray lg:max-w-20">
                                I can&apos;t log into my account, i tried multiple times but it kept saying the same thing on and on and ...
                            </p>
                            <h3 className="relative ss:mt-1 ss:ml-6.5 sm:mt-1 sm:ml-6.5 text-sm text-gray text-left lg:mt-1 lg:ml-6.5">
                                1w ago
                            </h3>
                        </div>

                        <div className="relative ss:w-19.5 ss:h-12.5 ss:ml-3.3 ss:mt-3 sm:w-19.9 sm:h-12.5 sm:ml-3.3 sm:mt-3 lg:w-23.1 lg:h-11.7 lg:ml-3.3 lg:mt-3 bg-white border rounded">
                            <input type="radio" name="live-chat" className="relative ss:ml-4 ss:mt-2 sm:ml-4 sm:mt-2 lg:ml-4 lg:mt-2" />
                            <h3 className="relative ss:ml-6.5 ss:-mt-4.6 sm:ml-6.5 sm:-mt-4.6 text-sm text-dark font-semibold text-left lg:ml-6.5 lg:-mt-4.6">
                                Login Issues
                            </h3>
                            <p className="relative ss:mt-1 ss:ml-6.5 sm:mt-1 sm:ml-6.5 text-left text-sm lg:mt-1 lg:ml-6.5 text-gray lg:max-w-20">
                                I can&apos;t log into my account, i tried multiple times but it kept saying the same thing on and on and ...
                            </p>
                            <h3 className="relative ss:mt-1 ss:ml-6.5 sm:mt-1 sm:ml-6.5 text-sm text-gray text-left lg:mt-1 lg:ml-6.5">
                                1w ago
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="relative ss:mt-5 ss:w-21.5 ss:h-45 sm:mt-5 sm:w-21.5 sm:h-40 bg-white lg:mt-5 lg:w-36 lg:h-40 rounded">
                    <div>
                        <h3 className="relative ss:ml-5 ss:mt-4.6 sm:ml-5 sm:mt-4.6 text-sm text-dark font-semibold text-left lg:ml-5 lg:mt-4.6">
                            Login Issue
                        </h3>
                        <h3 className="relative ss:ml-5 ss:mt-2 sm:ml-5 sm:mt-2 text-sm text-dark font-normal text-left lg:ml-5 lg:mt-2">
                            Sandra - Support
                        </h3>
                        <h3 className="relative ss:ml-12.5 ss:-mt-4.5 sm:ml-12.5 sm:-mt-4.5 text-sm text-green font-semibold text-left lg:ml-12.5 lg:-mt-4.5">
                            .online
                        </h3>
                        <Image src={line} alt="" className="relative ss:ml-5 ss:mt-4 ss:w-19.25 sm:ml-5 sm:mt-4 sm:w-19.5 lg:ml-5 lg:mt-4 h-0.1 lg:w-32.5" />
                    </div>
                    <div>
                        <h3 className="relative ss:mt-6 sm:mt-6 text-sm text-gray font-normal text-center lg:mt-6">
                            09 Jul 2024
                        </h3>
                        <Image src={profile_image} alt="" className="relative ss:ml-5 ss:mt-4 sm:ml-5 sm:mt-4 size-7 lg:ml-5 lg:mt-4" />
                        <div>
                            <p className="relative ss:ml-10.2 ss:-mt-7 ss:p-3 ss:max-w-17.5 sm:ml-10.2 sm:-mt-7 sm:p-3 sm:max-w-19 lg:max-w-19.7 lg:ml-10.5 lg:-mt-7 rounded-tl-xl rounded-r-xl bg-gray-light text-sm text-dark font-normal text-left lg:p-3">
                                I can&apos;t log into my account, i tried multiple times but it kept saying the same thing
                                on and on and on. I don&apos;t know what to do at this point. Can you please help me? I
                                tried to contact via email but i&apos;ve not gotten a response.
                            </p>
                            <h3 className="relative ss:ml-10.5 ss:mt-4 sm:ml-10.5 sm:mt-4 lg:ml-10.5 text-sm text-gray font-normal text-left lg:mt-4">
                                Sat 5:10 AM
                            </h3>
                        </div>

                        <div>
                            <p className="relative ss:ml-10 ss:mt-5 ss:p-3 ss:max-w-17.5 sm:ml-10 sm:mt-5 sm:p-3 sm:max-w-19 lg:max-w-19.7 lg:ml-18 lg:mt-5 rounded-tl-xl rounded-r-xl bg-gray-light text-sm text-dark font-normal text-left lg:p-3">
                                Hi John, we are so sorry this happened. We are currently having a glitch, please be
                                rest assured our technical team are working to  get this sorted aas soon as possible.
                            </p>
                        </div>
                        <div>
                            <textarea className="relative ss:mt-4.5 ss:ml-10 ss:h-10 ss:w-17.5 sm:mt-4.5 sm:ml-10 sm:h-10 sm:w-19 p-3 text-sm pb-4 lg:mt-4.5 lg:h-12 lg:w-29 lg:ml-10 transparent rounded border resize-none" />
                            <button className="relative ss:ml-17.5 ss:w-10 ss:h-5 sm:ml-17.5 sm:w-10 sm:h-5 lg:ml-28 lg:w-10 lg:h-5 text-sm text-white bg-blue hover:bg-light-blue rounded-2xl">
                                Send
                            </button>
                            <div className="flex gap-2.5 ss:ml-4 ss:-mt-7 sm:ml-4 sm:-mt-7 lg:ml-4 lg:-mt-7">
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