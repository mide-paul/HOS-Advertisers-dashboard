import React from "react";
import { SupportGroup } from "@/components/supportGroup";

const Support = () => {

    return (
        <div className="h-screen w-full bg-white overflow-hidden">
            <div className="ml-0 md:ml-1 lg:ml-1 mt-4 pt-1 w-full h-50 rounded pb-8">
                <div>
                    <SupportGroup />
                </div>
            </div>
        </div>
    )
}

export default Support
export const dynamic = "force-dynamic";