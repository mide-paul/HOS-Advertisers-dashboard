import React from "react";
import Link from "next/link";
import Image from "next/image";
import arrow_left_blue from '../../public/icons/arrow_left_blue.png';
import line from '../../public/icons/line_dark.png';
import search from '../../public/icons/search.png';
import eye from '../../public/icons/eye_dark.png';
import verify from '../../public/icons/verify.png';
import add_square_white from '../../public/icons/add_square_white.png';
import { Header } from "@/components/header";
import Sidebar from "@/components/Sidebar";

const Blogpost = () => {

    return (
        <div className="ss:h-242 sm:h-242 lg:h-95 lg:w-full xl:h-80 xl:w-full xx:h-109 xx:w-full bg-gray-lighter overflow-hidden">
            <div>
                <Sidebar />
            </div>

            <Header />

            <div>
                <div className="relative ss:ml-0 ss:mt-10 ss:w-20 ss:h-7 sm:ml-3 sm:mt-10 sm:w-21.5 sm:h-7 bg-white lg:ml-20 lg:mt-12 lg:w-62 lg:h-7 rounded">
                    <Link href="/sponsors"><Image src={arrow_left_blue} alt="" className="relative lg:pt-0.1 lg:ml-2" />
                        <h3 className="relative ss:ml-7 ss:-mt-5.3 sm:ml-7 sm:-mt-5.3 text-sm text-left font-bold text-blue lg:ml-8 lg:-mt-5.3">Back</h3>
                    </Link>
                </div>

                <div className="relative ss:mt-5 ss:ml-0 ss:h-227 ss:w-20 sm:mt-5 sm:ml-3 sm:h-227 sm:w-21.5 lg:mt-5 lg:ml-20 lg:h-80 lg:w-62 bg-white rounded">
                    <div className="flex">
                        <Link href="/my-ads"><button className="relative ss:pt-5 ss:ml-4 ss:text-sm sm:pt-5 sm:ml-4 sm:text-sm text-dark lg:font-medium text-base lg:text-left lg:pt-5 lg:ml-6 cursor-pointer">Brand Flyer</button></Link>
                        <h3 className="relative ss:mt-5 ss:ml-6 ss:text-sm sm:mt-5 sm:ml-6 sm:text-sm text-light-blue lg:font-bold text-base lg:text-left lg:mt-5 lg:ml-7.5">Blog Post</h3>
                    </div>
                    <Image src={line} alt="" className="relative ss:pt-1 ss:ml-11.7 ss:w-9.5 ss:h-1.5 sm:pt-1 sm:ml-11.7 sm:w-9.5 sm:h-1.5 lg:pt-1 lg:ml-14 lg:w-9.5 lg:h-1.5" />

                    <div className="flex gap-16.3 lg:ml-4">
                        <h3 className="relative ss:pt-6 ss:ml-3 ss:text-nowrap sm:pt-6 sm:ml-3 sm:text-nowrap lg:pt-6 text-sm text-dark lg:text-left">Ad history</h3>

                        <div>
                            <input className="relative ss:mt-5 ss:-ml-16 ss-5 ss:h-6 ss:w-13 sm:mt-5 sm:-ml-16 sm-5 sm:h-6 sm:w-13 lg:mt-5 lg:ml-0.1 pl-5 lg:h-6 lg:w-22 text-sm border rounded" placeholder="search" />
                            <Image src={search} alt="" className="absolute ss:-mt-4.51 ss:-ml-15.9 ss:h-1.5 ss:w-1.5 sm:-mt-4.51 sm:-ml-15.9 sm:h-1.5 sm:w-1.5 lg:-mt-4.51 lg:ml-1 lg:h-1.5 lg:w-1.5" />
                        </div>

                        <a
                            target='_blank'
                            rel='noopener noreferrer' href="https://hosoptima.com/advertise-with-us"><div>
                                <button className="relative ss:mt-5 ss:pl-0 ss:h-6 ss:w-10 ss:-ml-19.1 sm:mt-5 sm:pl-0 sm:h-6 sm:w-10 sm:-ml-18 lg:-mt-7 lg:ml-0.1 lg:pl-5 lg:h-6 lg:w-12 text-sm bg-blue text-white rounded hover:bg-light-blue">
                                    Post Ad
                                </button>
                                <Image src={add_square_white} alt="" className="relative lg:-mt-5 lg:ml-4.7 lg:h-4 lg:w-4" />
                            </div>
                        </a>
                    </div>

                    <div className="flex ss:flex-col sm:flex-col lg:flex-row flex-wrap">
                        <div className="relative ss:mt-7 ss:ml-1 ss:h-33.5 ss:w-19.7 sm:mt-7 sm:ml-4.51 sm:h-33.5 sm:w-19.7 lg:mt-7 lg:ml-4 lg:h-33 lg:w-19.7 rounded border">
                            <div className="relative ss:ml-1.2 ss:mt-1.2 ss:h-14 ss:w-19.3 sm:ml-1.2 sm:mt-1.2 sm:h-14 sm:w-19.3 lg:ml-1.2 lg:mt-1.2 lg:h-14 lg:w-19.3 bg-gray-light rounded"></div>
                            <h3 className="relative ss:ml-1.2 ss:mt-3 sm:ml-1.2 sm:mt-3 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Brand Flyer</h3>
                            <h3 className="relative ss:ml-1.2 ss:mt-0.5 sm:ml-1.2 sm:mt-0.5 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Category</h3>
                            <Image src={line} alt="" className="relative ss:mt-1 ss:pt-1.2 ss:ml-1.2 ss:w-19.3 ss:h-1.5 sm:mt-1 sm:pt-1.2 sm:ml-1.2 sm:w-19.3 sm:h-1.5 lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                            <h3 className="relative ss:ml-1.2 ss:mt-3 sm:ml-1.2 sm:mt-3 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">https://lakers.com</h3>
                            <h3 className="relative ss:ml-1.2 ssm:mt-0.5 sm:ml-1.2 sm:mt-0.5 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Ad url</h3>
                            <Image src={line} alt="" className="relative ss:mt-1 ss:pt-1.2 ss:ml-1.2 ss:w-19.3 ss:h-1.5 sm:mt-1 sm:pt-1.2 sm:ml-1.2 sm:w-19.3 sm:h-1.5 lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                            <h3 className="relative ss:mt-3 ss:ml-1.2 sm:mt-3 sm:ml-1.2 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Title goes here</h3>
                            <h3 className="relative ss:mt-3 ss:ml-1.2 sm:mt-3 sm:ml-1.2 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left lg:max-w-19.5">description description
                                description description description description description description description description
                                description description description description description description
                            </h3>
                            <Image src={eye} alt="" className="absolute ss:mt-2 ss:ml-1.2 ss:w-4 sm:mt-2 sm:ml-1.2 sm:w-4 lg:mt-2 lg:ml-1.2 lg:w-4" />
                            <h3 className="relative ss:ml-6 ss:mt-3.5 sm:ml-6 sm:mt-3.5 text-left text-x lg:ml-6 lg:mt-3.5">Total Views - <span className="font-bold">30k</span></h3>
                            <Image src={verify} alt="" className="absolute ss:mt-2 ss:ml-1.2 ss:w-4 sm:mt-2 sm:ml-1.2 sm:w-4 lg:mt-2 lg:ml-1.2 lg:w-4" />
                            <h3 className="relative ss:ml-6 ss:mt-3.5 sm:ml-6 sm:mt-3.5 text-left text-x lg:ml-6 lg:mt-3.5">Total Clicks - <span className="font-bold">10k</span></h3>
                            <Link href="/see-more"><button className="relative ss:mt-4 ss:ml-1.5 ss:h-6 ss:w-19.3 sm:mt-4 sm:ml-1.5 sm:h-6 sm:w-19.3 lg:mt-4 lg:ml-1.5 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">See More</button></Link>
                        </div>

                        <div className="relative ss:mt-7 ss:ml-1 ss:h-33.5 ss:w-19.7 sm:mt-7 sm:ml-4.51 sm:h-33.5 sm:w-19.7 lg:mt-7 lg:ml-4 lg:h-33 lg:w-19.7 rounded border">
                            <div className="relative ss:ml-1.2 ss:mt-1.2 ss:h-14 ss:w-19.3 sm:ml-1.2 sm:mt-1.2 sm:h-14 sm:w-19.3 lg:ml-1.2 lg:mt-1.2 lg:h-14 lg:w-19.3 bg-gray-light rounded"></div>
                            <h3 className="relative ss:ml-1.2 ss:mt-3 sm:ml-1.2 sm:mt-3 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Brand Flyer</h3>
                            <h3 className="relative ss:ml-1.2 ss:mt-0.5 sm:ml-1.2 sm:mt-0.5 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Category</h3>
                            <Image src={line} alt="" className="relative ss:mt-1 ss:pt-1.2 ss:ml-1.2 ss:w-19.3 ss:h-1.5 sm:mt-1 sm:pt-1.2 sm:ml-1.2 sm:w-19.3 sm:h-1.5 lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                            <h3 className="relative ss:ml-1.2 ss:mt-3 sm:ml-1.2 sm:mt-3 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">https://lakers.com</h3>
                            <h3 className="relative ss:ml-1.2 ssm:mt-0.5 sm:ml-1.2 sm:mt-0.5 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Ad url</h3>
                            <Image src={line} alt="" className="relative ss:mt-1 ss:pt-1.2 ss:ml-1.2 ss:w-19.3 ss:h-1.5 sm:mt-1 sm:pt-1.2 sm:ml-1.2 sm:w-19.3 sm:h-1.5 lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                            <h3 className="relative ss:mt-3 ss:ml-1.2 sm:mt-3 sm:ml-1.2 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Title goes here</h3>
                            <h3 className="relative ss:mt-3 ss:ml-1.2 sm:mt-3 sm:ml-1.2 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left lg:max-w-19.5">description description
                                description description description description description description description description
                                description description description description description description
                            </h3>
                            <Image src={eye} alt="" className="absolute ss:mt-2 ss:ml-1.2 ss:w-4 sm:mt-2 sm:ml-1.2 sm:w-4 lg:mt-2 lg:ml-1.2 lg:w-4" />
                            <h3 className="relative ss:ml-6 ss:mt-3.5 sm:ml-6 sm:mt-3.5 text-left text-x lg:ml-6 lg:mt-3.5">Total Views - <span className="font-bold">30k</span></h3>
                            <Image src={verify} alt="" className="absolute ss:mt-2 ss:ml-1.2 ss:w-4 sm:mt-2 sm:ml-1.2 sm:w-4 lg:mt-2 lg:ml-1.2 lg:w-4" />
                            <h3 className="relative ss:ml-6 ss:mt-3.5 sm:ml-6 sm:mt-3.5 text-left text-x lg:ml-6 lg:mt-3.5">Total Clicks - <span className="font-bold">10k</span></h3>
                            <Link href="/see-more"><button className="relative ss:mt-4 ss:ml-1.5 ss:h-6 ss:w-19.3 sm:mt-4 sm:ml-1.5 sm:h-6 sm:w-19.3 lg:mt-4 lg:ml-1.5 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">See More</button></Link>
                        </div>

                        <div className="relative ss:mt-7 ss:ml-1 ss:h-33.5 ss:w-19.7 sm:mt-7 sm:ml-4.51 sm:h-33.5 sm:w-19.7 lg:mt-7 lg:ml-4 lg:h-33 lg:w-19.7 rounded border">
                            <div className="relative ss:ml-1.2 ss:mt-1.2 ss:h-14 ss:w-19.3 sm:ml-1.2 sm:mt-1.2 sm:h-14 sm:w-19.3 lg:ml-1.2 lg:mt-1.2 lg:h-14 lg:w-19.3 bg-gray-light rounded"></div>
                            <h3 className="relative ss:ml-1.2 ss:mt-3 sm:ml-1.2 sm:mt-3 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Brand Flyer</h3>
                            <h3 className="relative ss:ml-1.2 ss:mt-0.5 sm:ml-1.2 sm:mt-0.5 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Category</h3>
                            <Image src={line} alt="" className="relative ss:mt-1 ss:pt-1.2 ss:ml-1.2 ss:w-19.3 ss:h-1.5 sm:mt-1 sm:pt-1.2 sm:ml-1.2 sm:w-19.3 sm:h-1.5 lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                            <h3 className="relative ss:ml-1.2 ss:mt-3 sm:ml-1.2 sm:mt-3 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">https://lakers.com</h3>
                            <h3 className="relative ss:ml-1.2 ssm:mt-0.5 sm:ml-1.2 sm:mt-0.5 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Ad url</h3>
                            <Image src={line} alt="" className="relative ss:mt-1 ss:pt-1.2 ss:ml-1.2 ss:w-19.3 ss:h-1.5 sm:mt-1 sm:pt-1.2 sm:ml-1.2 sm:w-19.3 sm:h-1.5 lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                            <h3 className="relative ss:mt-3 ss:ml-1.2 sm:mt-3 sm:ml-1.2 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Title goes here</h3>
                            <h3 className="relative ss:mt-3 ss:ml-1.2 sm:mt-3 sm:ml-1.2 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left lg:max-w-19.5">description description
                                description description description description description description description description
                                description description description description description description
                            </h3>
                            <Image src={eye} alt="" className="absolute ss:mt-2 ss:ml-1.2 ss:w-4 sm:mt-2 sm:ml-1.2 sm:w-4 lg:mt-2 lg:ml-1.2 lg:w-4" />
                            <h3 className="relative ss:ml-6 ss:mt-3.5 sm:ml-6 sm:mt-3.5 text-left text-x lg:ml-6 lg:mt-3.5">Total Views - <span className="font-bold">30k</span></h3>
                            <Image src={verify} alt="" className="absolute ss:mt-2 ss:ml-1.2 ss:w-4 sm:mt-2 sm:ml-1.2 sm:w-4 lg:mt-2 lg:ml-1.2 lg:w-4" />
                            <h3 className="relative ss:ml-6 ss:mt-3.5 sm:ml-6 sm:mt-3.5 text-left text-x lg:ml-6 lg:mt-3.5">Total Clicks - <span className="font-bold">10k</span></h3>
                            <Link href="/see-more"><button className="relative ss:mt-4 ss:ml-1.5 ss:h-6 ss:w-19.3 sm:mt-4 sm:ml-1.5 sm:h-6 sm:w-19.3 lg:mt-4 lg:ml-1.5 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">See More</button></Link>
                        </div>

                        <div className="relative ss:mt-7 ss:ml-1 ss:h-33.5 ss:w-19.7 sm:mt-7 sm:ml-4.51 sm:h-33.5 sm:w-19.7 lg:mt-7 lg:ml-4 lg:h-33 lg:w-19.7 rounded border">
                            <div className="relative ss:ml-1.2 ss:mt-1.2 ss:h-14 ss:w-19.3 sm:ml-1.2 sm:mt-1.2 sm:h-14 sm:w-19.3 lg:ml-1.2 lg:mt-1.2 lg:h-14 lg:w-19.3 bg-gray-light rounded"></div>
                            <h3 className="relative ss:ml-1.2 ss:mt-3 sm:ml-1.2 sm:mt-3 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Brand Flyer</h3>
                            <h3 className="relative ss:ml-1.2 ss:mt-0.5 sm:ml-1.2 sm:mt-0.5 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Category</h3>
                            <Image src={line} alt="" className="relative ss:mt-1 ss:pt-1.2 ss:ml-1.2 ss:w-19.3 ss:h-1.5 sm:mt-1 sm:pt-1.2 sm:ml-1.2 sm:w-19.3 sm:h-1.5 lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                            <h3 className="relative ss:ml-1.2 ss:mt-3 sm:ml-1.2 sm:mt-3 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">https://lakers.com</h3>
                            <h3 className="relative ss:ml-1.2 ssm:mt-0.5 sm:ml-1.2 sm:mt-0.5 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Ad url</h3>
                            <Image src={line} alt="" className="relative ss:mt-1 ss:pt-1.2 ss:ml-1.2 ss:w-19.3 ss:h-1.5 sm:mt-1 sm:pt-1.2 sm:ml-1.2 sm:w-19.3 sm:h-1.5 lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                            <h3 className="relative ss:mt-3 ss:ml-1.2 sm:mt-3 sm:ml-1.2 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Title goes here</h3>
                            <h3 className="relative ss:mt-3 ss:ml-1.2 sm:mt-3 sm:ml-1.2 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left lg:max-w-19.5">description description
                                description description description description description description description description
                                description description description description description description
                            </h3>
                            <Image src={eye} alt="" className="absolute ss:mt-2 ss:ml-1.2 ss:w-4 sm:mt-2 sm:ml-1.2 sm:w-4 lg:mt-2 lg:ml-1.2 lg:w-4" />
                            <h3 className="relative ss:ml-6 ss:mt-3.5 sm:ml-6 sm:mt-3.5 text-left text-x lg:ml-6 lg:mt-3.5">Total Views - <span className="font-bold">30k</span></h3>
                            <Image src={verify} alt="" className="absolute ss:mt-2 ss:ml-1.2 ss:w-4 sm:mt-2 sm:ml-1.2 sm:w-4 lg:mt-2 lg:ml-1.2 lg:w-4" />
                            <h3 className="relative ss:ml-6 ss:mt-3.5 sm:ml-6 sm:mt-3.5 text-left text-x lg:ml-6 lg:mt-3.5">Total Clicks - <span className="font-bold">10k</span></h3>
                            <Link href="/see-more"><button className="relative ss:mt-4 ss:ml-1.5 ss:h-6 ss:w-19.3 sm:mt-4 sm:ml-1.5 sm:h-6 sm:w-19.3 lg:mt-4 lg:ml-1.5 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">See More</button></Link>
                        </div>

                        <div className="relative ss:mt-7 ss:ml-1 ss:h-33.5 ss:w-19.7 sm:mt-7 sm:ml-4.51 sm:h-33.5 sm:w-19.7 lg:mt-7 lg:ml-4 lg:h-33 lg:w-19.7 rounded border">
                            <div className="relative ss:ml-1.2 ss:mt-1.2 ss:h-14 ss:w-19.3 sm:ml-1.2 sm:mt-1.2 sm:h-14 sm:w-19.3 lg:ml-1.2 lg:mt-1.2 lg:h-14 lg:w-19.3 bg-gray-light rounded"></div>
                            <h3 className="relative ss:ml-1.2 ss:mt-3 sm:ml-1.2 sm:mt-3 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Brand Flyer</h3>
                            <h3 className="relative ss:ml-1.2 ss:mt-0.5 sm:ml-1.2 sm:mt-0.5 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Category</h3>
                            <Image src={line} alt="" className="relative ss:mt-1 ss:pt-1.2 ss:ml-1.2 ss:w-19.3 ss:h-1.5 sm:mt-1 sm:pt-1.2 sm:ml-1.2 sm:w-19.3 sm:h-1.5 lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                            <h3 className="relative ss:ml-1.2 ss:mt-3 sm:ml-1.2 sm:mt-3 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">https://lakers.com</h3>
                            <h3 className="relative ss:ml-1.2 ssm:mt-0.5 sm:ml-1.2 sm:mt-0.5 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Ad url</h3>
                            <Image src={line} alt="" className="relative ss:mt-1 ss:pt-1.2 ss:ml-1.2 ss:w-19.3 ss:h-1.5 sm:mt-1 sm:pt-1.2 sm:ml-1.2 sm:w-19.3 sm:h-1.5 lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                            <h3 className="relative ss:mt-3 ss:ml-1.2 sm:mt-3 sm:ml-1.2 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Title goes here</h3>
                            <h3 className="relative ss:mt-3 ss:ml-1.2 sm:mt-3 sm:ml-1.2 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left lg:max-w-19.5">description description
                                description description description description description description description description
                                description description description description description description
                            </h3>
                            <Image src={eye} alt="" className="absolute ss:mt-2 ss:ml-1.2 ss:w-4 sm:mt-2 sm:ml-1.2 sm:w-4 lg:mt-2 lg:ml-1.2 lg:w-4" />
                            <h3 className="relative ss:ml-6 ss:mt-3.5 sm:ml-6 sm:mt-3.5 text-left text-x lg:ml-6 lg:mt-3.5">Total Views - <span className="font-bold">30k</span></h3>
                            <Image src={verify} alt="" className="absolute ss:mt-2 ss:ml-1.2 ss:w-4 sm:mt-2 sm:ml-1.2 sm:w-4 lg:mt-2 lg:ml-1.2 lg:w-4" />
                            <h3 className="relative ss:ml-6 ss:mt-3.5 sm:ml-6 sm:mt-3.5 text-left text-x lg:ml-6 lg:mt-3.5">Total Clicks - <span className="font-bold">10k</span></h3>
                            <Link href="/see-more"><button className="relative ss:mt-4 ss:ml-1.5 ss:h-6 ss:w-19.3 sm:mt-4 sm:ml-1.5 sm:h-6 sm:w-19.3 lg:mt-4 lg:ml-1.5 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">See More</button></Link>
                        </div>

                        <div className="relative ss:mt-7 ss:ml-1 ss:h-33.5 ss:w-19.7 sm:mt-7 sm:ml-4.51 sm:h-33.5 sm:w-19.7 lg:mt-7 lg:ml-4 lg:h-33 lg:w-19.7 rounded border">
                            <div className="relative ss:ml-1.2 ss:mt-1.2 ss:h-14 ss:w-19.3 sm:ml-1.2 sm:mt-1.2 sm:h-14 sm:w-19.3 lg:ml-1.2 lg:mt-1.2 lg:h-14 lg:w-19.3 bg-gray-light rounded"></div>
                            <h3 className="relative ss:ml-1.2 ss:mt-3 sm:ml-1.2 sm:mt-3 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Brand Flyer</h3>
                            <h3 className="relative ss:ml-1.2 ss:mt-0.5 sm:ml-1.2 sm:mt-0.5 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Category</h3>
                            <Image src={line} alt="" className="relative ss:mt-1 ss:pt-1.2 ss:ml-1.2 ss:w-19.3 ss:h-1.5 sm:mt-1 sm:pt-1.2 sm:ml-1.2 sm:w-19.3 sm:h-1.5 lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                            <h3 className="relative ss:ml-1.2 ss:mt-3 sm:ml-1.2 sm:mt-3 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">https://lakers.com</h3>
                            <h3 className="relative ss:ml-1.2 ssm:mt-0.5 sm:ml-1.2 sm:mt-0.5 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Ad url</h3>
                            <Image src={line} alt="" className="relative ss:mt-1 ss:pt-1.2 ss:ml-1.2 ss:w-19.3 ss:h-1.5 sm:mt-1 sm:pt-1.2 sm:ml-1.2 sm:w-19.3 sm:h-1.5 lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                            <h3 className="relative ss:mt-3 ss:ml-1.2 sm:mt-3 sm:ml-1.2 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Title goes here</h3>
                            <h3 className="relative ss:mt-3 ss:ml-1.2 sm:mt-3 sm:ml-1.2 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left lg:max-w-19.5">description description
                                description description description description description description description description
                                description description description description description description
                            </h3>
                            <Image src={eye} alt="" className="absolute ss:mt-2 ss:ml-1.2 ss:w-4 sm:mt-2 sm:ml-1.2 sm:w-4 lg:mt-2 lg:ml-1.2 lg:w-4" />
                            <h3 className="relative ss:ml-6 ss:mt-3.5 sm:ml-6 sm:mt-3.5 text-left text-x lg:ml-6 lg:mt-3.5">Total Views - <span className="font-bold">30k</span></h3>
                            <Image src={verify} alt="" className="absolute ss:mt-2 ss:ml-1.2 ss:w-4 sm:mt-2 sm:ml-1.2 sm:w-4 lg:mt-2 lg:ml-1.2 lg:w-4" />
                            <h3 className="relative ss:ml-6 ss:mt-3.5 sm:ml-6 sm:mt-3.5 text-left text-x lg:ml-6 lg:mt-3.5">Total Clicks - <span className="font-bold">10k</span></h3>
                            <Link href="/see-more"><button className="relative ss:mt-4 ss:ml-1.5 ss:h-6 ss:w-19.3 sm:mt-4 sm:ml-1.5 sm:h-6 sm:w-19.3 lg:mt-4 lg:ml-1.5 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">See More</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogpost
export const dynamic = "force-dynamic";