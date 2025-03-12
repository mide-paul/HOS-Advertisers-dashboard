import React from "react";
import Link from "next/link";
import Image from "next/image";
import arrow_left_blue from '../../public/icons/arrow_left_blue.png';
import line from '../../public/icons/line_dark.png';
import search from '../../public/icons/search.png';
import eye from '../../public/icons/eye_dark.png';
import verify from '../../public/icons/verify.png';
import ad_image2 from '../../public/images/ad_image2.png';
import { Header } from "@/components/header";
import { Postad } from "@/components/postAd";
import Sidebar from "@/components/Sidebar";

const Adhistory: React.FC = () => {

    const adHistory = [
        { image: ad_image2, title: 'Brand Flyer', category: 'Category', url: 'https://lakers.com', eye: eye, views: '30k', verify: verify, clicks: '10k' },
        { image: ad_image2, title: 'Brand Flyer', category: 'Category', url: 'https://lakers.com', eye: eye, views: '30k', verify: verify, clicks: '10k' },
        { image: ad_image2, title: 'Brand Flyer', category: 'Category', url: 'https://lakers.com', eye: eye, views: '30k', verify: verify, clicks: '10k' },
        { image: ad_image2, title: 'Brand Flyer', category: 'Category', url: 'https://lakers.com', eye: eye, views: '30k', verify: verify, clicks: '10k' },
        { image: ad_image2, title: 'Brand Flyer', category: 'Category', url: 'https://lakers.com', eye: eye, views: '30k', verify: verify, clicks: '10k' },
        { image: ad_image2, title: 'Brand Flyer', category: 'Category', url: 'https://lakers.com', eye: eye, views: '30k', verify: verify, clicks: '10k' }
    ]

    return (
        <div className="h-full w-full overflow-hidden">
            <div>
                <Sidebar />
            </div>

            <Header />

            <div>
                <div className="bg-white lg:ml-64 mt-24 lg:w-62 lg:h-11 rounded">
                    <Link href="/sponsors"><Image src={arrow_left_blue} alt="" className="relative pt-0.1 ml-2" />
                        <h3 className="text-sm text-left font-bold text-blue ml-12 -mt-8">Back</h3>
                    </Link>
                </div>

                <div className="lg:mt-0 lg:ml-64 lg:h-67 lg:w-full bg-white rounded">
                    <div className="flex">
                        <h3 className="text-blue-900 lg:font-medium text-base text-left pt-5 ml-2 lg:ml-6">Brand Flyer</h3>
                        <Link href="/blog-post"><button className="text-black lg:font-normal text-base text-left mt-5 ml-4 lg:ml-6">Blog Post</button></Link>
                    </div>
                    <Image src={line} alt="" className="pt-1 ml-2 lg:ml-5 w-24 lg:h-1.5" />

                    <div className="flex gap-16 ml-4">
                        <h3 className="pt-6 text-sm text-black text-left text-nowrap">Ad history</h3>

                        <div>
                            <input className="mt-5 pl-6 h-8 w-22 text-sm border rounded" placeholder="search" />
                            <Image src={search} alt="" className="relative -mt-5 ml-2 h-3 w-3" />
                        </div>

                        <div>
                            <Postad />
                        </div>
                    </div>
                    
                    <div className="flex gap-6 flex-wrap pb-8">
                    {adHistory.map((history, index) => (
                        <div
                            key={index}
                            >
                            <div className="mt-7 ml-4 min-h-[350px] w-80 p-2 rounded border">
                                <Image src={history.image} alt="history" className="rounded" />
                                <h3 className="mt-3 text-sm font-bold text-left">{history.title}</h3>
                                <label className="text-gray mt-1 text-xs font-medium text-left">Category</label>
                                <Image src={line} alt="" className="mt-2 pt-1.2 h-0.5" />
                                <h3 className="mt-3 text-sm font-bold text-left">{history.url}</h3>
                                <label className="text-gray mt-0.5 text-xs font-medium text-left">Ad url</label>
                                <Image src={line} alt="" className="mt-2 pt-1.2 ml-1.2 h-0.5" />
                                <Image src={eye} alt="" className="absolute mt-2 ml-1.2 w-4" />
                                <h3 className="text-left text-xs ml-6 mt-2">Total Views - <span className="font-bold">{history.views}</span></h3>
                                <Image src={verify} alt="" className="absolute mt-2 ml-1.2 w-4" />
                                <h3 className="text-left text-xs ml-6 mt-2">Total Clicks - <span className="font-bold">{history.clicks}</span></h3>
                                <button className="mt-4 h-8 w-full text-blue-900 font-semibold text-sm rounded border hover:bg-gray-light">See More</button>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adhistory
export const dynamic = "force-dynamic";