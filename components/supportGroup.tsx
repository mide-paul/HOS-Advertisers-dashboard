'use client';
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import chat from './../public/icons/chat.png';
import envelope from './../public/icons/envelope.png';
import instagram_gray from './../public/icons/instagram_gray.png';
import facebook_gray from './../public/icons/facebook_gray.png';
import question from './../public/icons/question.png';
import arrow_right from './../public/icons/arrow_right_dark.png';

export const SupportGroup = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [opentwo, setOpentwo] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null)
    const dropRef = useRef<HTMLDivElement>(null)

    const handleClickOutsideDropdown = (e: any) => {
        if (open && !dropdownRef.current?.contains(e.target as Node)) {
            setOpen(false)
        }
    }

    const handleClickOutsideDrop = (e: any) => {
        if (opentwo && !dropRef.current?.contains(e.target as Node)) {
            setOpentwo(false)
        }
    }

    window.addEventListener("click", handleClickOutsideDropdown)
    window.addEventListener("click", handleClickOutsideDrop)

    return (
        <div>
            <div className="w-80 lg:w-96 h-full ml-4 mt-6 p-3 bg-white border rounded lg:ml-7 lg:mt-8">
                <div ref={dropRef}>
                    <div onClick={() => setOpentwo(true)} className="w-full h-8 bg-gray-200 rounded">
                        <h3 className="pl-8 pt-2 text-xs text-left text-gray cursor-pointer">Live Chat</h3>
                        <Image src={chat} alt="" className="-mt-4 ml-2 size-4 z-10 cursor-pointer" />
                        <Image src={arrow_right} alt="" className="-mt-3 ml-64 lg:ml-80 size-4 cursor-pointer" />
                        {opentwo && (
                            <div className="relative ml-7 -mt-14 w-72 h-80 p-2 bg-white border rounded lg:ml-7 z-10">
                                <h3 className="ml-2 mt-4 text-sm font-semibold text-left">Select a topic</h3>

                                <Link href="/live-chat">
                                    <div className="mt-3 w-full h-8 bg-gray-200 rounded">
                                        <h3 className="pl-2 pt-2 text-xs text-left text-gray cursor-pointer">Log in issues</h3>
                                        <Image src={arrow_right} alt="" className="-mt-3 ml-60 size-4 cursor-pointer" />
                                    </div>
                                </Link>
                                <div className="mt-3 w-full h-8 bg-gray-200 rounded">
                                    <h3 className="pl-2 pt-2 text-xs text-left text-gray cursor-pointer">Account Suspension</h3>
                                    <Image src={arrow_right} alt="" className="-mt-3 ml-60 size-4 cursor-pointer" />
                                </div>
                                <div className="mt-3 w-full h-8 bg-gray-200 rounded">
                                    <h3 className="pl-2 pt-2 text-xs text-left text-gray cursor-pointer">Failed Payment</h3>
                                    <Image src={arrow_right} alt="" className="-mt-3 ml-60 size-4 cursor-pointer" />
                                </div>
                                <div className="mt-3 w-full h-8 bg-gray-200 rounded">
                                    <h3 className="pl-2 pt-2 text-xs text-left text-gray cursor-pointer">Empty Course Content</h3>
                                    <Image src={arrow_right} alt="" className="-mt-3 ml-60 size-4 cursor-pointer" />
                                </div>
                                <div className="mt-3 w-full h-8 bg-gray-200 rounded">
                                    <h3 className="pl-2 pt-2 text-xs text-left text-gray cursor-pointer">Missing Course Progress</h3>
                                    <Image src={arrow_right} alt="" className="-mt-3 ml-60 size-4 cursor-pointer" />
                                </div>
                                <div className="mt-3 w-full h-8 bg-gray-200 rounded">
                                    <h3 className="pl-2 pt-2 text-xs text-left text-gray cursor-pointer">Something Else</h3>
                                    <Image src={arrow_right} alt="" className="-mt-3 ml-60 size-4 cursor-pointer" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <Link href="mailto:support@hosoptima.com">
                    <div className="mt-5 w-full h-8 bg-gray-200 rounded">
                        <h3 className="pl-8 pt-2 text-xs text-left text-gray cursor-pointer">Email</h3>
                        <Image src={envelope} alt="" className="-mt-4 ml-2 size-4 z-10 cursor-pointer" />
                        <Image src={arrow_right} alt="" className="-mt-3 ml-64 lg:ml-80 size-4 cursor-pointer" />
                    </div>
                </Link>

                <Link href="https://www.instagram.com/hosoptima_/">
                    <div className="mt-5 w-full h-8 bg-gray-200 rounded">
                        <h3 className="pl-8 pt-2 text-xs text-left text-gray cursor-pointer">Instagram</h3>
                        <Image src={instagram_gray} alt="" className="-mt-4 ml-2 size-4 z-10 cursor-pointer" />
                        <Image src={arrow_right} alt="" className="-mt-3 ml-64 lg:ml-80 size-4 cursor-pointer" />
                    </div>
                </Link>

                <Link href="https://www.facebook.com/hosoptima">
                    <div className="mt-5 w-full h-8 bg-gray-200 rounded">
                        <h3 className="pl-8 pt-2 text-xs text-left text-gray cursor-pointer">Facebook</h3>
                        <Image src={facebook_gray} alt="" className="-mt-4 ml-2 size-4 z-10 cursor-pointer" />
                        <Image src={arrow_right} alt="" className="-mt-3 ml-64 lg:ml-80 size-4 cursor-pointer" />
                    </div>
                </Link>

                <Link href="https://hosoptima.com/faqs">
                    <div className="mt-5 w-full h-8 bg-gray-200 rounded">
                        <h3 className="pl-8 pt-2 text-xs text-left text-gray cursor-pointer">FAQs</h3>
                        <Image src={question} alt="" className="-mt-4 ml-2 size-4 z-10 cursor-pointer" />
                        <Image src={arrow_right} alt="" className="-mt-3 ml-64 lg:ml-80 size-4 cursor-pointer" />
                    </div>
                </Link>
            </div>
        </div>
    )
}