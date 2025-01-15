import React from "react";
import { Header } from "@/components/header";
import AdPostChart from "@/components/AdPostChart";
import Sidebar from "@/components/Sidebar";

const SeeMore = () => {

    const data = [
        { month: 'January', views: 1200, clicks: 300 },
        { month: 'February', views: 1500, clicks: 400 },
        { month: 'March', views: 1700, clicks: 450 },
        { month: 'April', views: 2000, clicks: 600 },
        { month: 'May', views: 2200, clicks: 700 },
        { month: 'June', views: 2200, clicks: 700 },
        { month: 'July', views: 2000, clicks: 600 },
        { month: 'August', views: 1200, clicks: 300 },
        { month: 'September', views: 1800, clicks: 600 },
        { month: 'October', views: 1100, clicks: 200 },
        { month: 'November', views: 2200, clicks: 700 },
        { month: 'December', views: 1200, clicks: 300 },
    ];

    return (
        <div className="lg:h-46 lg:w-full xl:h-80 xl:w-full xx:h-109 xx:w-full bg-gray-lighter overflow-hidden">
            <div>
                <Sidebar />
            </div>

            <Header />

            <div>
                <div className="lg:ml-20 lg:mt-12 lg:h-37 lg:w-63 xl:h-41 xl:w-68 xx:h-76 xx:w-138 bg-white rounded-xl z-10">
                    <h2 className="lg:pt-3 lg:ml-5 text-dark text-sm font-bold">Overview</h2>
                    <h3 className="lg:mt-1 lg:ml-5 text-dark text-sm font-medium">https://lakers.com</h3>
                    <h3 className="lg:mt-1 lg:ml-5 text-dark text-sm font-medium">Updated 5 secs ago</h3>
                    <div className="lg:h-30.5 lg:ml-5 xl:h-35 xx:h-67">
                        <AdPostChart data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeeMore
export const dynamic = "force-dynamic";