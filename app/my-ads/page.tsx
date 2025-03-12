import React from "react";
import { Header } from "@/components/header";
import { AdComponent } from "@/components/AdComponent";
import Sidebar from "@/components/Sidebar";

const Myads = () => {

    return (
        <div className="h-full w-full overflow-hidden">
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