import React from "react";
import Link from "next/link";
import Image from "next/image";
import arrow_left_blue from '../../public/icons/arrow_left_blue.png';
import { Header } from "@/components/header";
import { AdplanCards } from "@/components/AdplanCards";
import Sidebar from "@/components/Sidebar";

const Adplan = () => {

    return (
        <div className="h-full w-full overflow-hidden">
            <div>
                <Sidebar />
            </div>

            <Header />

            <div>
                <div className="bg-white md:ml-64 lg:ml-64 mt-24 lg:w-62 lg:h-11 rounded">
                    <Link href="/sponsors"><Image src={arrow_left_blue} alt="" className="relative pt-0.1 ml-2" />
                        <h3 className="text-sm text-left font-bold text-blue ml-12 -mt-8">Back</h3>
                    </Link>
                </div>

                <div className="ml-4">
                    <h3 className="text-black font-bold text-base text-left pt-5 md:ml-64 lg:ml-64">Choose an Ad Plan</h3>
                    <p className="text-black font-normal text-sm text-left pt-4 md:ml-64 lg:ml-64">Kindly choose your preferred ad plan below</p>
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