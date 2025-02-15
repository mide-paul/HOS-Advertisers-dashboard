import React from "react";
import Link from "next/link";
import Image from "next/image";
import arrow_left_blue from '../../public/icons/arrow_left_blue.png';
import line from '../../public/icons/line_dark.png';
import search from '../../public/icons/search.png';
import eye from '../../public/icons/eye_dark.png';
import verify from '../../public/icons/verify.png';
import { Header } from "@/components/header";
import { Postad } from "@/components/postAd";
import Sidebar from "@/components/Sidebar";

const Adhistory: React.FC = () => {

    return (
        <div className="lg:h-80 lg:w-full xl:h-80 xl:w-full xx:h-109 xx:w-full bg-gray-lighter overflow-hidden">
            <div>
                <Sidebar />
            </div>

            <Header />

            <div>
                <div className="relative bg-white lg:ml-20 lg:mt-12 lg:w-62 lg:h-7 rounded">
                    <Link href="/sponsors"><Image src={arrow_left_blue} alt="" className="relative lg:pt-0.1 lg:ml-2" />
                        <h3 className="relative text-sm text-left font-bold text-blue lg:ml-8 lg:-mt-5.3">Back</h3>
                    </Link>
                </div>

                <div className="relative lg:mt-5 lg:ml-20 lg:h-67 lg:w-62 bg-white rounded">
                    <div className="flex">
                        <h3 className="relative text-light-blue lg:font-bold text-base lg:text-left lg:pt-5 lg:ml-6">Brand Flyer</h3>
                        <Link href="/blog-post"><button className="relative text-dark lg:font-medium text-base lg:text-left lg:mt-5 lg:ml-6">Blog Post</button></Link>
                    </div>
                    <Image src={line} alt="" className="relative lg:pt-1 lg:ml-6 lg:w-10.5 lg:h-1.5" />

                    <div className="flex gap-16.3 lg:ml-4">
                        <h3 className="relative lg:pt-6 text-sm text-dark lg:text-left">Ad history</h3>

                        <div>
                            <input className="relative lg:mt-5 pl-5 lg:h-6 lg:w-22 text-sm border rounded" placeholder="search" />
                            <Image src={search} alt="" className="relative lg:-mt-4.51 lg:ml-1 lg:h-1.5 lg:w-1.5" />
                        </div>

                        <div>
                            <Postad />
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="relative lg:mt-7 lg:ml-4 lg:h-26.5 lg:w-19.7 rounded border">
                            <div className="relative lg:ml-1.2 lg:mt-1.2 lg:h-14 lg:w-19.3 bg-gray-light rounded"></div>
                            <h3 className="relative lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Brand Flyer</h3>
                            <h3 className="relative text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Category</h3>
                            <Image src={line} alt="" className="relative lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                            <h3 className="relative lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">https://lakers.com</h3>
                            <h3 className="relative text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Ad url</h3>
                            <Image src={line} alt="" className="relative lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                            <Image src={eye} alt="" className="absolute lg:mt-2 lg:ml-1.2 lg:w-4" />
                            <h3 className="relative text-left text-x lg:ml-6 lg:mt-3.5">Total Views - <span className="font-bold">30k</span></h3>
                            <Image src={verify} alt="" className="absolute lg:mt-2 lg:ml-1.2 lg:w-4" />
                            <h3 className="relative text-left text-x lg:ml-6 lg:mt-3.5">Total Clicks - <span className="font-bold">10k</span></h3>
                            <button className="relative lg:mt-4 lg:ml-1.5 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">See More</button>
                        </div>

                        <div className="relative lg:mt-7 lg:ml-4 lg:h-26.5 lg:w-19.7 rounded border">
                            <div className="relative lg:ml-1.2 lg:mt-1.2 lg:h-14 lg:w-19.3 bg-gray-light rounded"></div>
                            <h3 className="relative lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Brand Flyer</h3>
                            <h3 className="relative text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Category</h3>
                            <Image src={line} alt="" className="relative lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                            <h3 className="relative lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">https://lakers.com</h3>
                            <h3 className="relative text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Ad url</h3>
                            <Image src={line} alt="" className="relative lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                            <Image src={eye} alt="" className="absolute lg:mt-2 lg:ml-1.2 lg:w-4" />
                            <h3 className="relative text-left text-x lg:ml-6 lg:mt-3.5">Total Views - <span className="font-bold">30k</span></h3>
                            <Image src={verify} alt="" className="absolute lg:mt-2 lg:ml-1.2 lg:w-4" />
                            <h3 className="relative text-left text-x lg:ml-6 lg:mt-3.5">Total Clicks - <span className="font-bold">10k</span></h3>
                            <button className="relative lg:mt-4 lg:ml-1.5 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">See More</button>
                        </div>

                        <div className="relative lg:mt-7 lg:ml-4 lg:h-26.5 lg:w-19.7 rounded border">
                            <div className="relative lg:ml-1.2 lg:mt-1.2 lg:h-14 lg:w-19.3 bg-gray-light rounded"></div>
                            <h3 className="relative lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Brand Flyer</h3>
                            <h3 className="relative text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Category</h3>
                            <Image src={line} alt="" className="relative lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                            <h3 className="relative lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">https://lakers.com</h3>
                            <h3 className="relative text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Ad url</h3>
                            <Image src={line} alt="" className="relative lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                            <Image src={eye} alt="" className="absolute lg:mt-2 lg:ml-1.2 lg:w-4" />
                            <h3 className="relative text-left text-x lg:ml-6 lg:mt-3.5">Total Views - <span className="font-bold">30k</span></h3>
                            <Image src={verify} alt="" className="absolute lg:mt-2 lg:ml-1.2 lg:w-4" />
                            <h3 className="relative text-left text-x lg:ml-6 lg:mt-3.5">Total Clicks - <span className="font-bold">10k</span></h3>
                            <button className="relative lg:mt-4 lg:ml-1.5 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">See More</button>
                        </div>

                        <div className="relative lg:mt-7 lg:ml-4 lg:h-26.5 lg:w-19.7 rounded border">
                            <div className="relative lg:ml-1.2 lg:mt-1.2 lg:h-14 lg:w-19.3 bg-gray-light rounded"></div>
                            <h3 className="relative lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Brand Flyer</h3>
                            <h3 className="relative text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Category</h3>
                            <Image src={line} alt="" className="relative lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                            <h3 className="relative lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">https://lakers.com</h3>
                            <h3 className="relative text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Ad url</h3>
                            <Image src={line} alt="" className="relative lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                            <Image src={eye} alt="" className="absolute lg:mt-2 lg:ml-1.2 lg:w-4" />
                            <h3 className="relative text-left text-x lg:ml-6 lg:mt-3.5">Total Views - <span className="font-bold">30k</span></h3>
                            <Image src={verify} alt="" className="absolute lg:mt-2 lg:ml-1.2 lg:w-4" />
                            <h3 className="relative text-left text-x lg:ml-6 lg:mt-3.5">Total Clicks - <span className="font-bold">10k</span></h3>
                            <button className="relative lg:mt-4 lg:ml-1.5 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">See More</button>
                        </div>

                        <div className="relative lg:mt-7 lg:ml-4 lg:h-26.5 lg:w-19.7 rounded border">
                            <div className="relative lg:ml-1.2 lg:mt-1.2 lg:h-14 lg:w-19.3 bg-gray-light rounded"></div>
                            <h3 className="relative lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Brand Flyer</h3>
                            <h3 className="relative text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Category</h3>
                            <Image src={line} alt="" className="relative lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                            <h3 className="relative lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">https://lakers.com</h3>
                            <h3 className="relative text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Ad url</h3>
                            <Image src={line} alt="" className="relative lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                            <Image src={eye} alt="" className="absolute lg:mt-2 lg:ml-1.2 lg:w-4" />
                            <h3 className="relative text-left text-x lg:ml-6 lg:mt-3.5">Total Views - <span className="font-bold">30k</span></h3>
                            <Image src={verify} alt="" className="absolute lg:mt-2 lg:ml-1.2 lg:w-4" />
                            <h3 className="relative text-left text-x lg:ml-6 lg:mt-3.5">Total Clicks - <span className="font-bold">10k</span></h3>
                            <button className="relative lg:mt-4 lg:ml-1.5 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">See More</button>
                        </div>

                        <div className="relative lg:mt-7 lg:ml-4 lg:h-26.5 lg:w-19.7 rounded border">
                            <div className="relative lg:ml-1.2 lg:mt-1.2 lg:h-14 lg:w-19.3 bg-gray-light rounded"></div>
                            <h3 className="relative lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Brand Flyer</h3>
                            <h3 className="relative text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Category</h3>
                            <Image src={line} alt="" className="relative lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                            <h3 className="relative lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">https://lakers.com</h3>
                            <h3 className="relative text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Ad url</h3>
                            <Image src={line} alt="" className="relative lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                            <Image src={eye} alt="" className="absolute lg:mt-2 lg:ml-1.2 lg:w-4" />
                            <h3 className="relative text-left text-x lg:ml-6 lg:mt-3.5">Total Views - <span className="font-bold">30k</span></h3>
                            <Image src={verify} alt="" className="absolute lg:mt-2 lg:ml-1.2 lg:w-4" />
                            <h3 className="relative text-left text-x lg:ml-6 lg:mt-3.5">Total Clicks - <span className="font-bold">10k</span></h3>
                            <button className="relative lg:mt-4 lg:ml-1.5 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">See More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adhistory
export const dynamic = "force-dynamic";