import React from "react";
import Link from "next/link";
import Image from "next/image";
import arrow_left_blue from '../../public/icons/arrow_left_blue.png';
import { Header } from "@/components/header";
import { AdplanCards } from "@/components/AdplanCards";
import Sidebar from "@/components/Sidebar";

const Adplan = () => {

    return (
        <div className="ss:h-140 sm:h-140 lg:h-50 lg:w-full xl:h-80 xl:w-full xx:h-109 xx:w-full bg-gray-lighter overflow-hidden">
            <div>
                <Sidebar />
            </div>

            <Header />

            <div>
                <div className="relative ss:ml-0 ss:mt-10 ss:w-20 ss:h-7 sm:ml-3 sm:mt-10 sm:w-21.5 sm:h-7 md:w-46 bg-white lg:ml-20 lg:mt-12 lg:w-62 lg:h-7 xl:w-68 rounded">
                    <Link href="/sponsors"><Image src={arrow_left_blue} alt="" className="relative lg:pt-0.1 lg:ml-2" />
                        <h3 className="relative ss:ml-7 ss:-mt-5.3 sm:ml-7 sm:-mt-5.3 text-sm text-left font-bold text-blue lg:ml-8 lg:-mt-5.3">Back</h3>
                    </Link>
                </div>

                <div>
                    <h3 className="relative ss:pt-5 ss:ml-3 ss:text-center sm:pt-5 sm:ml-3 sm:text-center text-dark lg:font-bold text-base lg:text-left lg:pt-5 lg:ml-20">Choose an Ad Plan</h3>
                    <p className="relative ss:pt-4 ss:ml-3 ss:text-center sm:pt-4 sm:ml-3 sm:text-center text-dark lg:font-normal text-sm lg:text-left lg:pt-4 lg:ml-20">Kindly choose your preferred ad plan below</p>
                </div>

                <div>
                    <AdplanCards />
                </div>
            </div>
        </div>
    )
}

export default Adplan
export const dynamic = "force-dynamic";