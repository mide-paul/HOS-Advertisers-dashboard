import React from "react";
import Link from "next/link";
import Image from "next/image";
import arrow_left_blue from '../../public/icons/arrow_left_blue.png';
import { Header } from "@/components/header";
import { AgreementComp } from "@/components/AgreementComp";
import Sidebar from "@/components/Sidebar";

const Agreement = () => {

    return (
        <div className="ss:h-129 sm:h-121 lg:h-90 lg:w-full xl:h-85 xl:w-full xx:h-109 xx:w-full bg-gray-lighter overflow-hidden">
            <div>
                <Sidebar />
            </div>

            <Header />

            <div>
                <div className="relative ss:ml-3 ss:mt-9 ss:w-19.5 ss:h-7 sm:ml-3 sm:mt-9 sm:w-21.5 sm:h-7 bg-white lg:ml-20 lg:mt-12 lg:w-62 lg:h-7 rounded">
                    <Link href="/sponsors"><Image src={arrow_left_blue} alt="" className="relative lg:pt-0.1 lg:ml-2" />
                        <h3 className="relative ss:ml-6.5 ss:-mt-5.3 sm:ml-7 sm:-mt-5.3 text-sm text-left font-bold text-blue lg:ml-8 lg:-mt-5.3">Back</h3>
                    </Link>
                </div>

                <div>
                    <AgreementComp />
                </div>
            </div>
        </div>
    )
}

export default Agreement
export const dynamic = "force-dynamic";