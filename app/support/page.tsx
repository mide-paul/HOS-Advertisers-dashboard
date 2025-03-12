import React from "react";
import Link from "next/link";
import Image from "next/image";
import line from '../../public/icons/line_dark.png';
import { SupportGroup } from "@/components/supportGroup";
import { Header } from "@/components/header";
import Sidebar from "@/components/Sidebar";

const Support = () => {

    return (
        <div className="h-full w-full bg-gray-200 overflow-hidden">
            <div>
                <Sidebar />
            </div>

            <Header />

            <div className="bg-white ml-0 md:ml-64 lg:ml-64 mt-24 w-full h-50 rounded pb-8">
                <div className="flex gap-4 pt-5 ml-4 lg:gap-5 lg:pt-6 md:ml-4 lg:ml-7">
                    <Link href="/settings"><h3 className="text-sm text-left text-black cursor-pointer">Profile</h3></Link>
                    <Link href="/plans"><h3 className="text-sm text-left text-black font-normal cursor-pointer">Plans</h3></Link>
                    <Link href="/security-and-privacy"><h3 className="text-sm text-left text-black font-normal cursor-pointer">Security & Privacy</h3></Link>
                    <h3 className="text-light-blue font-semibold text-sm text-left">Support</h3>
                    <Image src={line} alt="" className="absolute ml-60 lg:ml-64 mt-6 w-16 h-0.1" />
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