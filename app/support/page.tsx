import React from "react";
import Link from "next/link";
import Image from "next/image";
import line from '../../public/icons/line_dark.png';
import { SupportGroup } from "@/components/supportGroup";
import { Header } from "@/components/header";
import Sidebar from "@/components/Sidebar";

const Support = () => {

    return (
        <div className="ss:h-41 sm:h-40 lg:h-60 lg:w-full xl:h-80 xl:w-full xx:h-109 xx:w-full bg-gray-lighter overflow-hidden">
            <div>
                <Sidebar />
            </div>

            <Header />

            <div className="relative ss:ml-0 ss:mt-10 ss:w-21.5 ss:h-30 sm:ml-2 sm:mt-10 sm:w-21.5 sm:h-30 bg-white lg:ml-20 lg:mt-12 lg:w-62 lg:h-50 xl:ml-23 rounded">
                <div className="flex ss:gap-2 ss:ml-2 ss:pt-6 sm:gap-2 sm:ml-2 sm:pt-6 lg:gap-5 lg:pt-6 lg:ml-7">
                    <Link href="/settings"><h3 className="relative text-sm text-left text-dark cursor-pointer">Profile</h3></Link>
                    <Link href="/plans"><h3 className="relative text-sm text-left text-dark font-normal cursor-pointer">Plans</h3></Link>
                    <Link href="/security-and-privacy"><h3 className="relative text-sm text-left text-dark font-normal cursor-pointer">Security & Privacy</h3></Link>
                    <h3 className="relative text-light-blue font-semibold text-sm text-left">Support</h3>
                    <Image src={line} alt="" className="absolute ss:mt-5 ss:ml-16.6 sm:mt-5 sm:ml-16.6 lg:mt-5 w-8 h-0.1 lg:ml-19.1" />
                </div>

                <div>
                    <SupportGroup />
                </div>
            </div>
        </div>
    )
}

export default Support
export const dynamic = "force-dynamic";