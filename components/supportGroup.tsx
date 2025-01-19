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
            <div className="relative ss:w-19.51 ss:h-19.8 ss:ml-2 ss:mt-6 sm:w-20 sm:h-19.8 sm:ml-2 sm:mt-6 bg-white lg:w-35 lg:h-19.7 border rounded lg:ml-7 lg:mt-8">
                <div ref={dropRef}>
                    <div onClick={() => setOpentwo(true)} className="relative ss:mt-5 ss:ml-3 ss:w-19.2 ss:h-6 sm:mt-5 sm:ml-3 sm:w-19.3 sm:h-6 bg-gray-lighter lg:w-31.5 lg:h-6 rounded lg:mt-5 lg:ml-5">
                        <h3 className="relative ss:pl-6 ss:pt-1 sm:pl-6 sm:pt-1 text-sm text-left text-gray lg:pl-6 lg:pt-1 cursor-pointer">Live Chat</h3>
                        <Image src={chat} alt="" className="ss:-mt-4.5 ss:ml-1 sm:-mt-4.5 sm:ml-1 lg:-mt-4.5 size-4 lg:ml-1 z-10 cursor-pointer" />
                        <Image src={arrow_right} alt="" className="ss:-mt-3.5 ss:ml-19 sm:-mt-3.5 sm:ml-19.2 lg:-mt-3.5 size-4 lg:ml-30 cursor-pointer" />
                        {opentwo && (
                            <div className="relative ss:ml-3 ss:mt-3 ss:w-19 ss:h-21 sm:ml-7 sm:mt-3 sm:w-19 sm:h-21 bg-white lg:w-35 lg:h-25.7 border rounded lg:ml-7 lg:mt-8 z-10">
                                <h3 className="relative ss:ml-3 ss:mt-4 sm:ml-3 sm:mt-4 text-sm font-semibold text-left lg:ml-5 lg:mt-6">Select a topic</h3>

                                <Link href="/live-chat"><div className="relative ss:mt-3 ss:ml-3 ss:w-16.5 ss:h-6 sm:mt-3 sm:ml-3 sm:w-16.5 sm:h-6 bg-gray-lighter lg:w-31.5 lg:h-6 rounded lg:mt-5 lg:ml-5">
                                    <h3 className="relative ss:pl-2 ss:pt-1 sm:pl-2 sm:pt-1 text-sm text-left text-gray lg:pl-2 lg:pt-1 cursor-pointer">Log in issues</h3>
                                    <Image src={arrow_right} alt="" className="ss:-mt-3.5 ss:ml-15.7 sm:-mt-3.5 sm:ml-15.7 lg:-mt-3.5 size-4 lg:ml-30 cursor-pointer" />
                                </div></Link>
                                <div className="relative ss:mt-3 ss:ml-3 ss:w-16.5 ss:h-6 sm:mt-3 sm:ml-3 sm:w-16.5 sm:h-6 bg-gray-lighter lg:w-31.5 lg:h-6 rounded lg:mt-5 lg:ml-5">
                                    <h3 className="relative ss:pl-2 ss:pt-1 sm:pl-2 sm:pt-1 text-sm text-left text-gray lg:pl-2 lg:pt-1 cursor-pointer">Account Suspension</h3>
                                    <Image src={arrow_right} alt="" className="ss:-mt-3.5 ss:ml-15.7 sm:-mt-3.5 sm:ml-15.7 lg:-mt-3.5 size-4 lg:ml-30 cursor-pointer" />
                                </div>
                                <div className="relative ss:mt-3 ss:ml-3 ss:w-16.5 ss:h-6 sm:mt-3 sm:ml-3 sm:w-16.5 sm:h-6 bg-gray-lighter lg:w-31.5 lg:h-6 rounded lg:mt-5 lg:ml-5">
                                    <h3 className="relative ss:pl-2 ss:pt-1 sm:pl-2 sm:pt-1 text-sm text-left text-gray lg:pl-2 lg:pt-1 cursor-pointer">Failed Payment</h3>
                                    <Image src={arrow_right} alt="" className="ss:-mt-3.5 ss:ml-15.7 sm:-mt-3.5 sm:ml-15.7 lg:-mt-3.5 size-4 lg:ml-30 cursor-pointer" />
                                </div>
                                <div className="relative ss:mt-3 ss:ml-3 ss:w-16.5 ss:h-6 sm:mt-3 sm:ml-3 sm:w-16.5 sm:h-6 bg-gray-lighter lg:w-31.5 lg:h-6 rounded lg:mt-5 lg:ml-5">
                                    <h3 className="relative ss:pl-2 ss:pt-1 sm:pl-2 sm:pt-1 text-sm text-left text-gray lg:pl-2 lg:pt-1 cursor-pointer">Empty Course Content</h3>
                                    <Image src={arrow_right} alt="" className="ss:-mt-3.5 ss:ml-15.7 sm:-mt-3.5 sm:ml-15.7 lg:-mt-3.5 size-4 lg:ml-30 cursor-pointer" />
                                </div>
                                <div className="relative ss:mt-3 ss:ml-3 ss:w-16.5 ss:h-6 sm:mt-3 sm:ml-3 sm:w-16.5 sm:h-6 bg-gray-lighter lg:w-31.5 lg:h-6 rounded lg:mt-5 lg:ml-5">
                                    <h3 className="relative ss:pl-2 ss:pt-1 sm:pl-2 sm:pt-1 text-sm text-left text-gray lg:pl-2 lg:pt-1 cursor-pointer">Missing Course Progress</h3>
                                    <Image src={arrow_right} alt="" className="ss:-mt-3.5 ss:ml-15.7 sm:-mt-3.5 sm:ml-15.7 lg:-mt-3.5 size-4 lg:ml-30 cursor-pointer" />
                                </div>
                                <div className="relative ss:mt-3 ss:ml-3 ss:w-16.5 ss:h-6 sm:mt-3 sm:ml-3 sm:w-16.5 sm:h-6 bg-gray-lighter lg:w-31.5 lg:h-6 rounded lg:mt-5 lg:ml-5">
                                    <h3 className="relative ss:pl-2 ss:pt-1 sm:pl-2 sm:pt-1 text-sm text-left text-gray lg:pl-2 lg:pt-1 cursor-pointer">Something Else</h3>
                                    <Image src={arrow_right} alt="" className="ss:-mt-3.5 ss:ml-15.7 sm:-mt-3.5 sm:ml-15.7 lg:-mt-3.5 size-4 lg:ml-30 cursor-pointer" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <Link href="mailto:support@hosoptima.com"><div className="relative ss:mt-5 ss:ml-3 ss:w-19.2 ss:h-6 sm:mt-5 sm:ml-3 sm:w-19.3 sm:h-6 bg-gray-lighter lg:w-31.5 lg:h-6 rounded lg:mt-5 lg:ml-5">
                    <h3 className="relative ss:pl-6 ss:pt-1 sm:pl-6 sm:pt-1 text-sm text-left text-gray lg:pl-6 lg:pt-1 cursor-pointer">Email</h3>
                    <Image src={envelope} alt="" className="ss:-mt-4.5 ss:ml-1 sm:-mt-4.5 sm:ml-1 lg:-mt-4.5 size-4 lg:ml-1 cursor-pointer" />
                    <Image src={arrow_right} alt="" className="ss:-mt-3.5 ss:ml-19 sm:-mt-3.5 sm:ml-19.2 lg:-mt-3.5 size-4 lg:ml-30 cursor-pointer" />
                </div></Link>

                <Link href="https://www.instagram.com/hosoptima_/"><div className="relative ss:mt-5 ss:ml-3 ss:w-19.2 ss:h-6 sm:mt-5 sm:ml-3 sm:w-19.3 sm:h-6 bg-gray-lighter lg:w-31.5 lg:h-6 rounded lg:mt-5 lg:ml-5">
                    <h3 className="relative ss:pl-6 ss:pt-1 sm:pl-6 sm:pt-1 text-sm text-left text-gray lg:pl-6 lg:pt-1 cursor-pointer">Instagram</h3>
                    <Image src={instagram_gray} alt="" className="ss:-mt-4.5 ss:ml-1 sm:-mt-4.5 sm:ml-1 lg:-mt-4.5 size-4 lg:ml-1 cursor-pointer" />
                    <Image src={arrow_right} alt="" className="ss:-mt-3.5 ss:ml-19 sm:-mt-3.5 sm:ml-19.2 lg:-mt-3.5 size-4 lg:ml-30 cursor-pointer" />
                </div></Link>

                <Link href="https://www.facebook.com/hosoptima"><div className="relative ss:mt-5 ss:ml-3 ss:w-19.2 ss:h-6 sm:mt-5 sm:ml-3 sm:w-19.3 sm:h-6 bg-gray-lighter lg:w-31.5 lg:h-6 rounded lg:mt-5 lg:ml-5">
                    <h3 className="relative ss:pl-6 ss:pt-1 sm:pl-6 sm:pt-1 text-sm text-left text-gray lg:pl-6 lg:pt-1 cursor-pointer">Facebook</h3>
                    <Image src={facebook_gray} alt="" className="ss:-mt-4.5 ss:ml-1 sm:-mt-4.5 sm:ml-1 lg:-mt-4.5 size-4 lg:ml-1 cursor-pointer" />
                    <Image src={arrow_right} alt="" className="ss:-mt-3.5 ss:ml-19 sm:-mt-3.5 sm:ml-19.2 lg:-mt-3.5 size-4 lg:ml-30 cursor-pointer" />
                </div></Link>

                <Link href="https://hosoptima.com/faqs"><div className="relative ss:mt-5 ss:ml-3 ss:w-19.2 ss:h-6 sm:mt-5 sm:ml-3 sm:w-19.3 sm:h-6 bg-gray-lighter lg:w-31.5 lg:h-6 rounded lg:mt-5 lg:ml-5">
                    <h3 className="relative ss:pl-6 ss:pt-1 sm:pl-6 sm:pt-1 text-sm text-left text-gray lg:pl-6 lg:pt-1 cursor-pointer">FAQs</h3>
                    <Image src={question} alt="" className="ss:-mt-4.5 ss:ml-1 sm:-mt-4.5 sm:ml-1 lg:-mt-4.5 size-4 lg:ml-1 cursor-pointer" />
                    <Image src={arrow_right} alt="" className="ss:-mt-3.5 ss:ml-19 sm:-mt-3.5 sm:ml-19.2 lg:-mt-3.5 size-4 lg:ml-30 cursor-pointer" />
                </div></Link>
            </div>
        </div>
    )
}