import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/images/logo.png';
import dashboard from '../../public/icons/dashboard.png';
import speaker from '../../public/icons/speaker.svg';
import shopify from '../../public/images/shopify.svg';
import invision from '../../public/images/invision.svg';
import companylogo from '../../public/images/companylogo.svg';
import logistics from '../../public/images/logistics.svg';
import paypal from '../../public/images/paypal.svg';
import company_logo from '../../public/images/company_logo.svg';
import settings from '../../public/icons/settings.png';
import logout_dark from '../../public/icons/logout_dark.png';
import { Header } from "@/components/header";

const Dashboard = () => {

    return (
        <div className="ss:h-199 sm:h-185 lg:h-105 lg:w-full xl:h-105 xl:w-full xx:h-109 xx:w-full bg-gray-lighter overflow-hidden">
            <div className="fixed ss:bg-gray-light ss:w-screen ss:h-10 ss:mt-28 sm:bg-gray-light sm:w-screen sm:h-10 sm:mt-37 lg:-mt-1 lg:ml-0 lg:w-19.6 lg:h-40 lg:border lg:border-gray lg:bg-white rounded z-10 xl:h-60 xx:h-109">
                <div>
                    <Image src={logo} alt="image" className="relative sm:w-10 sm:-mt-19.3 lg:mt-0.5 lg:ml-6.2 lg:w-13 ss:invisible sm:invisible lg:visible xx:visible" />
                </div>
                <div className="relative ss:flex ss:flex-row ss:-mt-15.7 ss:ml-1.5 ss:text-x ss:gap-6 sm:flex sm:flex-row sm:mt-18 sm:ml-3 sm:text-sm sm:gap-6 lg:flex lg:flex-col lg:gap-4.6 lg:-mt-11.5 lg:ml-0.1 lg:text-left lg:text-sm font-semibold xl:gap-2">
                    <div className='flex ss:flex-col sm:flex-col lg:flex-row lg:mt-11 lg:ml-6.3 lg:w-16.5 lg:h-6 xl:mt-11 items-center gap-2 lg:bg-gray-light p-2 rounded'>
                        <Image src={dashboard} alt="" className="relative size-4" />
                        <h3 className='relative text-blue lg:text-md lg:font-bold'>Dashboard</h3>
                    </div>

                    <Link href="/my-ads"><div className='flex ss:flex-col ss:mt-2 sm:flex-col sm:mt-2 lg:flex-row lg:ml-6.3 lg:w-16.5 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 xl:w-18 xl:h-6 xl:pl-1 hover:bg-gray-light hover:h-6 hover:pl-1 hover:w-16.5 hover:rounded cursor-pointer'>
                        <Image src={speaker} alt="" className="relative size-4" />
                        <h3 className='relative text-dark ss:font-medium sm:font-medium lg:text-md lg:font-medium'>My Ads</h3>
                    </div></Link>

                    <Link href="/settings"><div className='flex ss:flex-col ss:mt-2 sm:flex-col sm:mt-2 lg:flex-row lg:ml-6.3 lg:w-16 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 xl:w-18 xl:h-6 xl:pl-1 hover:bg-gray-light hover:h-6 hover:pl-1 hover:w-16.5 hover:rounded cursor-pointer'>
                        <Image src={settings} alt="" className="relative size-4" />
                        <h3 className='relative text-dark ss:font-medium sm:font-medium lg:text-md lg:font-medium'>Settings</h3>
                    </div></Link>

                    <div className='flex ss:flex-col ss:mt-2 sm:flex-col sm:mt-2 lg:flex-row lg:ml-6.3 lg:w-16 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 xl:w-18 xl:h-6 xl:pl-1 hover:bg-gray-light hover:h-6 hover:pl-1 hover:w-16.5 hover:rounded cursor-pointer'>
                        <Image src={logout_dark} alt="" className="relative size-4" />
                        <h3 className='relative text-dark ss:font-medium sm:font-medium lg:text-md lg:font-medium'>Logout</h3>
                    </div>
                </div>
            </div>

            <Header />

            <div>
                <div className="relative ss:pb-3 sm:pb-3 lg:ml-20 lg:mt-12 bg-white lg:w-62 lg:h-95 xl:ml-23 xx:w-132 rounded">
                    <h3 className="relative ss:mt-8 ss:pt-4 ss:ml-3 sm:mt-8 sm:pt-4 sm:ml-3 text-dark lg:font-bold text-base lg:text-left lg:pt-4 lg:ml-5">
                        Sponsors
                    </h3>
                    <p className="relative ss:max-w-19.5 ss:text-left ss:pt-4 ss:ml-3 sm:max-w-21.5 sm:text-left sm:pt-4 sm:ml-3 text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5 xx:max-w-120">
                        HOSoptima is excited to present an exclusive sponsorship opportunity for the HOS
                        Assessment Challenge. The HOS Assessment Challenge is a free online initiative designed
                        to assess truck drivers&apos; knowledge of Hours of Service (HOS) regulations. Participants
                        can take the assessment at no cost, with bi-weekly prizes offered to top performers. By
                        sponsoring this challenge, companies gain visibility among a targeted audience of
                        trucking professionals while promoting safety and compliance within the industry
                    </p>

                    <div className="flex ss:ml-5 ss:mt-6 sm:ml-7 sm:mt-6 gap-5 flex-wrap lg:ml-5 lg:mt-6">
                        <Image src={shopify} alt="" className="relative lg:h-15 lg:w-19.1 shadow" />
                        <Image src={invision} alt="" className="relative lg:h-15 lg:w-19.1 shadow" />
                        <Image src={companylogo} alt="" className="relative lg:h-15 lg:w-19.1 shadow" />
                        <Image src={logistics} alt="" className="relative lg:h-15 lg:w-19.1 shadow" />
                        <Image src={paypal} alt="" className="relative lg:h-15 lg:w-19.1 shadow" />
                        <Image src={invision} alt="" className="relative lg:h-15 lg:w-19.1 shadow" />
                        <Image src={company_logo} alt="" className="relative lg:h-15 lg:w-19.1 shadow" />
                    </div>

                    <div>
                        <h3 className="relative ss:mt-6 ss:ml-3 sm:mt-6 sm:ml-3 text-dark lg:font-semibold text-base lg:text-left lg:mt-8 lg:ml-5">
                            Who should consider sponsoring?
                        </h3>
                        <p className="relative ss:max-w-19.5 ss:text-left ss:pt-4 ss:ml-3 sm:max-w-21.5 sm:text-left sm:pt-4 sm:ml-3 text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5 xx:max-w-120">
                            We are looking for partners who are as dedicated as we are to enhancing safety,
                            compliance, and industry excellence. If your target market are truck drivers, then this a
                            golden opportunity to see a real return on advertising dollars. Suitable prospects
                            include:
                        </p>
                        <p className="relative ss:max-w-19.5 ss:text-left ss:pt-4 ss:ml-3 sm:max-w-21.5 sm:text-left sm:pt-4 sm:ml-3 text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5">
                            Fuel Card Companies<br />
                            Truck Insurance<br />
                            ELD Manufacturers<br />
                            Trucking Associations
                        </p>
                    </div>

                    <div>
                        <h3 className="relative ss:mt-5 ss:ml-3 sm:mt-5 sm:ml-3 text-dark lg:font-semibold text-base lg:text-left lg:mt-5 lg:ml-5">
                            Why sponsor?
                        </h3>
                        <p className="relative ss:max-w-19.5 ss:pt-4 ss:ml-3 sm:max-w-21.5 sm:pt-4 sm:ml-3 text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5 xx:max-w-120">
                            For sponsors who donate products or services, there are several compelling benefits we can offer:<br />
                            1.     Brand Exposure: Sponsors will receive prominent recognition on our website, social media channels, and marketing materials, showcasing their generosity and commitment to the trucking community.<br /> <br />

                            2.     Targeted Audience Reach: By aligning their brand with our HOS Assessment Challenge, sponsors can directly engage with a highly targeted audience of truck drivers, fleet managers, and industry professionals.<br /> <br />

                            3.     Lead Generation: Sponsors can collect leads through the giveaway process, capturing valuable contact information from potential customers interested in their products or services.<br /> <br />

                            4.     Enhanced Brand Image: Supporting a meaningful initiative like the HOS Assessment Challenge demonstrates corporate social responsibility and a dedication to promoting safety and compliance within the trucking industry.<br /> <br />

                            5.     Networking Opportunities: Sponsors will have the chance to network with other industry leaders and participants, fostering potential collaborations and partnerships for future endeavors.<br /> <br />

                            6.     Customized Recognition: We can tailor recognition opportunities to suit sponsors&apos; preferences, including shoutouts during challenge announcements, featured articles, or branded content pieces.<br /> <br />

                            7.     Data Insights: Sponsors will receive valuable insights into participant demographics and engagement metrics, helping them refine their marketing strategies and better understand their target audience.<br /> <br />

                            8.     Long-Term Exposure: As the HOS Assessment Challenge grows in popularity and reach, sponsors will continue to benefit from ongoing exposure and association with the initiative, maintaining visibility over an extended period.
                        </p>
                        <Link href="/agreement"><button className="ss:mt-3 ss:ml-3 ss:text-white ss:text-sm ss:bg-blue ss:w-10 ss:h-6 sm:mt-3 sm:ml-3 sm:text-white sm:text-sm sm:bg-blue sm:w-10 sm:h-6 lg:mt-3 lg:ml-5 lg:text-white lg:text-sm lg:bg-blue lg:w-10 lg:h-6 rounded hover:bg-blue-deeper">Proceed</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
export const dynamic = "force-dynamic";