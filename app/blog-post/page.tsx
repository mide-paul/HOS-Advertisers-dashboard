import React from "react";
import Link from "next/link";
import Image from "next/image";
import arrow_left_blue from '../../public/icons/arrow_left_blue.png';
import line from '../../public/icons/line_dark.png';
import search from '../../public/icons/search.png';
import eye from '../../public/icons/eye_dark.png';
import verify from '../../public/icons/verify.png';
import ad_image2 from '../../public/images/ad_image2.png';
import add_square_white from '../../public/icons/add_square_white.png';
import { Header } from "@/components/header";
import Sidebar from "@/components/Sidebar";

const Blogpost = () => {

    const blogPost = [
        { image: ad_image2, title: 'Brand Flyer', category: 'Category', url: 'https://lakers.com', eye: eye, description: 'description description description', views: '30k', verify: verify, clicks: '10k' },
        { image: ad_image2, title: 'Brand Flyer', category: 'Category', url: 'https://lakers.com', eye: eye, description: 'description description description', views: '30k', verify: verify, clicks: '10k' },
        { image: ad_image2, title: 'Brand Flyer', category: 'Category', url: 'https://lakers.com', eye: eye, description: 'description description description', views: '30k', verify: verify, clicks: '10k' },
        { image: ad_image2, title: 'Brand Flyer', category: 'Category', url: 'https://lakers.com', eye: eye, description: 'description description description', views: '30k', verify: verify, clicks: '10k' },
        { image: ad_image2, title: 'Brand Flyer', category: 'Category', url: 'https://lakers.com', eye: eye, description: 'description description description', views: '30k', verify: verify, clicks: '10k' },
        { image: ad_image2, title: 'Brand Flyer', category: 'Category', url: 'https://lakers.com', eye: eye, description: 'description description description', views: '30k', verify: verify, clicks: '10k' }
    ]

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

                <div className="lg:mt-0 md:ml-64 lg:ml-64 lg:h-67 lg:w-full bg-white rounded">
                    <div className="flex">
                        <Link href="/my-ads"><button className=" text-black font-normal text-base text-left pt-5 ml-6 cursor-pointer">Brand Flyer</button></Link>
                        <h3 className="text-blue-900 font-medium text-base text-left mt-5 ml-8">Blog Post</h3>
                    </div>
                    <Image src={line} alt="" className="pt-1 ml-36 w-20 h-1.5" />

                    <div className="flex flex-col lg:flex-row md:gap-6 lg:gap-16 ml-4">
                        <h3 className="pt-6 text-sm text-black text-left text-nowrap">
                            Ad history
                        </h3>

                        <div>
                            <input className="mt-5 pl-6 py-2 w-22 text-sm border rounded" placeholder="search" />
                            <Image src={search} alt="" className="relative -mt-6 ml-2 h-3 w-3" />
                        </div>

                        <a
                            target='_blank'
                            rel='noopener noreferrer' href="https://hosoptima.com/advertise-with-us">
                            <div className="mt-4">
                                <button className="mt-1 mx-auto pl-5 py-2 w-32 text-sm bg-blue-950 text-white rounded hover:bg-blue-900">
                                    Post Ad
                                </button>
                                <Image src={add_square_white} alt="" className="-mt-7 ml-6 h-4 w-4" />
                            </div>
                        </a>
                    </div>

                    <div className="flex gap-6 lg:gap-10 flex-wrap pb-8">
                        {blogPost.map((post, index) => (
                            <div
                                key={index}
                            >
                                <div className="mt-7 ml-4 min-h-[350px] w-80 p-2 rounded border">
                                    <Image src={post.image} alt="history" className="rounded" />
                                    <h3 className="mt-3 text-sm font-bold text-left">{post.title}</h3>
                                    <label className="text-gray mt-1 text-xs font-medium text-left">Category</label>
                                    <Image src={line} alt="" className="mt-2 pt-1.2 h-0.5" />
                                    <h3 className="mt-3 text-sm font-bold text-left">{post.url}</h3>
                                    <label className="text-gray mt-0.5 text-xs font-medium text-left">Ad url</label>
                                    <Image src={line} alt="" className="mt-2 pt-1.2 ml-1.2 h-0.5" />
                                    <h3 className="text-gray ml-1.2 mt-2 text-xs font-bold text-left w-full">{post.description}</h3>
                                    <Image src={eye} alt="" className="absolute mt-2 ml-1.2 w-4" />
                                    <h3 className="text-left text-xs ml-6 mt-2">Total Views - <span className="font-bold">{post.views}</span></h3>
                                    <Image src={verify} alt="" className="absolute mt-2 ml-1.2 w-4" />
                                    <h3 className="text-left text-xs ml-6 mt-2">Total Clicks - <span className="font-bold">{post.clicks}</span></h3>
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

export default Blogpost
export const dynamic = "force-dynamic";