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
        <div className="h-full w-full bg-gray-200 overflow-hidden">
            <div>
                <Sidebar />
            </div>

            <Header />

            <div>
                <div className="md:ml-64 lg:ml-64 mt-20 h-full w-full bg-white rounded-xl z-10 pb-8">
                    <h2 className="pt-3 ml-5 text-black text-sm font-bold">Overview</h2>
                    <h3 className="mt-1 ml-5 text-black text-sm font-medium">https://lakers.com</h3>
                    <h3 className="mt-1 ml-5 text-black text-sm font-medium">Updated 5 secs ago</h3>
                    <div className="h-44 md:h-60 xl:min-h-[500px] 2xl:min-h-[700px] ml-5 xl:h-35 xx:h-67">
                        <AdPostChart data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeeMore
export const dynamic = "force-dynamic";