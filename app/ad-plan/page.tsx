import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/images/logo.png';
import award from '../../public/icons/award_blue.png';
import arrow_left_blue from '../../public/icons/arrow_left_blue.png';
import line from '../../public/icons/line_dark.png';
import trophy_image from '../../public/images/trophy_image.png';
import verify from '../../public/icons/verify.png';
import ad_image2 from '../../public/images/ad_image2.png';
import ad_image3 from '../../public/images/ad_image3.png';
import settings from '../../public/icons/settings.png';
import logout_dark from '../../public/icons/logout_dark.png';
import { Header } from "@/components/header";

const Adplan = () => {

    return (
        <div className="lg:h-50 lg:w-full xl:h-80 xl:w-full xx:h-109 xx:w-full bg-gray-lighter overflow-hidden">
            <div className="fixed lg:mt-0 lg:ml-0 lg:w-19.6 lg:h-40 lg:border lg:border-gray bg-white rounded z-10 xl:h-59 xx:h-109">
                <div>
                    <Link href="/"> <Image src={logo} alt="image" className="relative lg:mt-0.5 lg:ml-6.2 lg:w-13" /> </Link>
                </div>
                <div className="relative lg:flex lg:flex-col lg:gap-4.6 lg:-mt-11.5 lg:ml-0 lg:text-left lg:text-sm font-semibold xl:gap-2">
                    <div className='flex lg:flex-row lg:mt-11 lg:ml-6.3 lg:w-16.5 lg:h-6 xl:mt-6 items-center gap-2 lg:bg-gray-light p-2 rounded'>
                        <Image src={award} alt="" className="relative size-4" />
                        <h3 className='relative text-blue lg:text-md lg:font-bold'>Sponsors</h3>
                    </div>

                    <Link href="/settings"><div className='flex lg:flex-row lg:ml-6.3 lg:w-16 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 xl:w-18 xl:h-6 xl:pl-1 hover:bg-gray-light hover:h-6 hover:pl-1 hover:w-16.5 hover:rounded cursor-pointer'>
                        <Image src={settings} alt="" className="relative size-4" />
                        <h3 className='relative text-dark lg:text-md lg:font-medium'>Settings</h3>
                    </div></Link>

                    <div className='flex lg:flex-row lg:ml-6.3 lg:w-16 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 xl:w-18 xl:h-6 xl:pl-1 hover:bg-gray-light hover:h-6 hover:pl-1 hover:w-16.5 hover:rounded cursor-pointer'>
                        <Image src={logout_dark} alt="" className="relative size-4" />
                        <h3 className='relative text-dark lg:text-md lg:font-medium'>Logout</h3>
                    </div>
                </div>
            </div>

            <Header />

            <div>
                <div className="relative bg-white lg:ml-20 lg:mt-12 lg:w-62 lg:h-7 rounded">
                    <Link href="/sponsors"><Image src={arrow_left_blue} alt="" className="relative lg:pt-0.1 lg:ml-2" />
                        <h3 className="relative text-sm text-left font-bold text-blue lg:ml-8 lg:-mt-5.3">Back</h3>
                    </Link>
                </div>

                <div>
                    <h3 className="relative text-dark lg:font-bold text-base lg:text-left lg:pt-5 lg:ml-20">Choose an Ad Plan</h3>
                    <p className="relative text-dark lg:font-medium text-sm lg:text-left lg:pt-4 lg:ml-20">Kindly choose your preferred ad plan below</p>
                </div>

                <div className="flex gap-3">
                    <div className="relative lg:mt-3 lg:ml-49 bg-blue lg:h-5 lg:w-5 rounded-full"></div>
                    <div className="relative lg:mt-3 bg-gray-light lg:h-5 lg:w-5 rounded-full"></div>
                    <div className="relative lg:mt-3 bg-gray-light lg:h-5 lg:w-5 rounded-full"></div>
                    <div className="relative lg:mt-3 bg-gray-light lg:h-5 lg:w-5 rounded-full"></div>
                </div>

                <div className="flex gap-3 overflow-scroll overflow-y-hidden lg:w-83 lg:min-w-60 lg:pb-7 lg:pr-5">
                    <div className="relative bg-white lg:mt-6 lg:ml-20 lg:h-27 lg:w-19.2 lg:min-w-19.2 rounded">
                        <Image src={trophy_image} alt="" className="relative lg:w-17.7 lg:pt-2 lg:ml-2" />
                        <h3 className="relative text-dark lg:font-bold text-sm lg:text-left lg:pt-3 lg:ml-2">Champion Level</h3>
                        <h3 className="relative text-gray lg:font-medium text-x lg:text-left lg:pt-1 lg:ml-2">Marketplace SMALL</h3>
                        <h3 className="relative text-dark lg:font-bold text-sm lg:text-left lg:-mt-5 lg:ml-16.5">$3,000</h3>
                        <Image src={line} alt="" className="relative lg:w-17.7 lg:pt-5 lg:ml-2" />
                        <Image src={verify} alt="" className="relative lg:pt-5 lg:ml-2" />
                        <p className="relative text-dark lg:font-medium text-x lg:text-left lg:-mt-4.4 lg:ml-6.3">
                            Logo placement on promotional Material
                        </p>
                        <Image src={verify} alt="" className="relative lg:pt-3 lg:ml-2" />
                        <p className="relative text-dark lg:font-medium text-x lg:text-left lg:-mt-4.4 lg:ml-6.3">
                            1 Sponsored blog post
                        </p>
                        <Image src={verify} alt="" className="relative lg:pt-3 lg:ml-2" />
                        <p className="relative text-dark lg:font-medium text-x lg:text-left lg:-mt-5 lg:ml-6.3">
                            Access to anonymized survey results and performance metrics from participants.
                        </p>
                        <Link href="/payment"><button className="relative lg:mt-4 lg:ml-2 lg:h-6 lg:w-17.7 bg-blue text-white text-sm rounded hover:bg-light-blue">Proceed</button></Link>
                    </div>

                    <div className="relative bg-white lg:mt-6 lg:h-27 lg:w-19.2 lg:min-w-19.2 rounded opacity-50">
                        <Image src={ad_image2} alt="" className="relative lg:w-17.7 lg:pt-2 lg:ml-2" />
                        <h3 className="relative text-dark lg:font-bold text-sm lg:text-left lg:pt-3 lg:ml-2">Advocate Level</h3>
                        <h3 className="relative text-gray lg:font-medium text-x lg:text-left lg:pt-1 lg:ml-2">Leaderboard LARGE</h3>
                        <h3 className="relative text-dark lg:font-bold text-sm lg:text-left lg:-mt-5 lg:ml-16.5">$3,500</h3>
                        <Image src={line} alt="" className="relative lg:w-17.7 lg:pt-5 lg:ml-2" />
                        <Image src={verify} alt="" className="relative lg:pt-5 lg:ml-2" />
                        <p className="relative text-dark lg:font-medium text-x lg:text-left lg:-mt-4.4 lg:ml-6.3">
                            Logo placement on promotional Material
                        </p>
                        <Image src={verify} alt="" className="relative lg:pt-3 lg:ml-2" />
                        <p className="relative text-dark lg:font-medium text-x lg:text-left lg:-mt-4.4 lg:ml-6.3">
                            5 Sponsored blog post
                        </p>
                        <Image src={verify} alt="" className="relative lg:pt-3 lg:ml-2" />
                        <p className="relative text-dark lg:font-medium text-x lg:text-left lg:-mt-5 lg:ml-6.3">
                            Access to anonymized survey results and performance metrics from participants.
                        </p>
                        <button className="relative lg:mt-4 lg:ml-2 lg:h-6 lg:w-17.7 bg-blue text-white text-sm rounded hover:bg-light-blue">Proceed</button>
                    </div>

                    <div className="relative bg-white lg:mt-6 lg:h-27 lg:w-19.2 lg:min-w-19.2 rounded opacity-50">
                        <Image src={ad_image3} alt="" className="relative lg:w-17.7 lg:pt-2 lg:ml-2" />
                        <h3 className="relative text-dark lg:font-bold text-sm lg:text-left lg:pt-3 lg:ml-2">Pioneer Level</h3>
                        <h3 className="relative text-gray lg:font-medium text-x lg:text-left lg:pt-1 lg:ml-2">Marketplace MEDIUM</h3>
                        <h3 className="relative text-dark lg:font-bold text-sm lg:text-left lg:-mt-5 lg:ml-16.5">$4,000</h3>
                        <Image src={line} alt="" className="relative lg:w-17.7 lg:pt-5 lg:ml-2" />
                        <Image src={verify} alt="" className="relative lg:pt-5 lg:ml-2" />
                        <p className="relative text-dark lg:font-medium text-x lg:text-left lg:-mt-4.4 lg:ml-6.3">
                            Logo placement on promotional Material
                        </p>
                        <Image src={verify} alt="" className="relative lg:pt-3 lg:ml-2" />
                        <p className="relative text-dark lg:font-medium text-x lg:text-left lg:-mt-4.4 lg:ml-6.3">
                            3 Sponsored blog post
                        </p>
                        <Image src={verify} alt="" className="relative lg:pt-3 lg:ml-2" />
                        <p className="relative text-dark lg:font-medium text-x lg:text-left lg:-mt-5 lg:ml-6.3">
                            Access to anonymized survey results and performance metrics from participants.
                        </p>
                        <button className="relative lg:mt-4 lg:ml-2 lg:h-6 lg:w-17.7 bg-blue text-white text-sm rounded hover:bg-light-blue">Proceed</button>
                    </div>

                    <div className="relative bg-white lg:mt-6 lg:h-27 lg:w-19.2 lg:min-w-19.2 rounded opacity-50">
                        <Image src={trophy_image} alt="" className="relative lg:w-17.7 lg:pt-2 lg:ml-2" />
                        <h3 className="relative text-dark lg:font-bold text-sm lg:text-left lg:pt-3 lg:ml-2">Visionary Level</h3>
                        <h3 className="relative text-gray lg:font-medium text-x lg:text-left lg:pt-1 lg:ml-2">Marketplace LARGE Banner</h3>
                        <h3 className="relative text-dark lg:font-bold text-sm lg:text-left lg:-mt-5 lg:ml-16.5">$4,500</h3>
                        <Image src={line} alt="" className="relative lg:w-17.7 lg:pt-5 lg:ml-2" />
                        <Image src={verify} alt="" className="relative lg:pt-5 lg:ml-2" />
                        <p className="relative text-dark lg:font-medium text-x lg:text-left lg:-mt-4.4 lg:ml-6.3">
                            Logo placement on promotional Material
                        </p>
                        <Image src={verify} alt="" className="relative lg:pt-3 lg:ml-2" />
                        <p className="relative text-dark lg:font-medium text-x lg:text-left lg:-mt-5 lg:ml-6.3">
                            Access to anonymized survey results and performance metrics from participants.
                        </p>
                        <button className="relative lg:mt-7 lg:ml-2 lg:h-6 lg:w-17.7 bg-blue text-white text-sm rounded hover:bg-light-blue">Proceed</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adplan
export const dynamic = "force-dynamic";