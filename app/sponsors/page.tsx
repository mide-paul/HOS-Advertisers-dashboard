import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/images/logo.png';
import award from '../../public/icons/award_blue.png';
import shopify from '../../public/images/shopify.png';
import invision from '../../public/images/invision.png';
import logistics from '../../public/images/logistics.png';
import paypal from '../../public/images/paypal.png';
import settings from '../../public/icons/settings.png';
import logout_dark from '../../public/icons/logout_dark.png';
import { Header } from "@/components/header";

const Sponsors = () => {

    return (
        <div className="lg:h-105 lg:w-full xl:h-80 xl:w-full xx:h-109 xx:w-full bg-gray-lighter overflow-hidden">
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
                <div className="relative lg:ml-20 lg:mt-12 bg-white lg:w-62 lg:h-95 xl:ml-23 rounded">
                    <h3 className="relative text-dark lg:font-bold text-base lg:text-left lg:pt-4 lg:ml-5">
                        Sponsors
                    </h3>
                    <p className="relative text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5">
                        HOSoptima is excited to present an exclusive sponsorship opportunity for the HOS
                        Assessment Challenge. The HOS Assessment Challenge is a free online initiative designed
                        to assess truck drivers&apos; knowledge of Hours of Service (HOS) regulations. Participants
                        can take the assessment at no cost, with bi-weekly prizes offered to top performers. By
                        sponsoring this challenge, companies gain visibility among a targeted audience of
                        trucking professionals while promoting safety and compliance within the industry
                    </p>

                    <div className="flex gap-4 flex-wrap lg:ml-5 lg:mt-6">
                        <Image src={shopify} alt="" className="relative lg:h-15.2 lg:w-19.2 shadow" />
                        <Image src={invision} alt="" className="relative lg:h-15.2 lg:w-19.2 shadow" />
                        <Image src={shopify} alt="" className="relative lg:h-15.2 lg:w-19.2 shadow" />
                        <Image src={logistics} alt="" className="relative lg:h-15.2 lg:w-19.2 shadow" />
                        <Image src={paypal} alt="" className="relative lg:h-15.2 lg:w-19.2 shadow" />
                        <Image src={invision} alt="" className="relative lg:h-15.2 lg:w-19.2 shadow" />
                        <Image src={paypal} alt="" className="relative lg:h-15.2 lg:w-19.2 shadow" />
                        <Link href="/agreement"><div className="relative sm:pt-5 lg:pt-7 lg:h-15.2 lg:w-19.2 bg-blue hover:bg-light-blue rounded text-white text-center font-bold text-xl cursor-pointer">
                            Become a<br />Sponsor
                        </div></Link>
                    </div>

                    <div>
                        <h3 className="relative text-dark lg:font-semibold text-base lg:text-left lg:mt-8 lg:ml-5">
                            Who should consider sponsoring?
                        </h3>
                        <p className="relative text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5">
                            We are looking for partners who are as dedicated as we are to enhancing safety,
                            compliance, and industry excellence. If your target market are truck drivers, then this a
                            golden opportunity to see a real return on advertising dollars. Suitable prospects
                            include:
                        </p>
                        <p className="relative text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5">
                            Fuel Card Companies<br />
                            Truck Insurance<br />
                            ELD Manufacturers<br />
                            Trucking Associations
                        </p>
                    </div>

                    <div>
                        <h3 className="relative text-dark lg:font-semibold text-base lg:text-left lg:mt-5 lg:ml-5">
                            Why sponsor?
                        </h3>
                        <p className="relative text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsors
export const dynamic = "force-dynamic";