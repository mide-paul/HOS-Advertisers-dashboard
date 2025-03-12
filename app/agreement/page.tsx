import React from "react";
import Link from "next/link";
import Image from "next/image";
import arrow_left_blue from '../../public/icons/arrow_left_blue.svg';
import { Header } from "@/components/header";
import { AgreementComp } from "@/components/AgreementComp";
import Sidebar from "@/components/Sidebar";

const Agreement = () => {

    return (
        <div className="md:pr-40 lg:pr-40 h-full w-full overflow-hidden">
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

                <div className="pr-6 md:pr-32 lg:pr-32">
                    <AgreementComp />
                </div>
            </div>
        </div>
    )
}

export default Agreement
export const dynamic = "force-dynamic";