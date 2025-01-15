import React from "react";
import { Header } from "@/components/header";
import { AdComponent } from "@/components/AdComponent";
import Sidebar from "@/components/Sidebar";

const Myads = () => {

    return (
        <div className="ss:h-200 sm:h-200 md:h-115 lg:h-80 lg:w-full xl:h-80 xl:w-full xx:h-109 xx:w-full bg-gray-lighter overflow-hidden">
            <div>
                <Sidebar />
            </div>

            <Header />

            <div>
                <AdComponent />
            </div>
        </div>
    )
}

export default Myads
export const dynamic = "force-dynamic";