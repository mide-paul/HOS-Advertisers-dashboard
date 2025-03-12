import React from "react";
import Link from "next/link";
import Image from "next/image";
import shopify from '../../public/images/shopify.svg';
import invision from '../../public/images/invision.svg';
import companylogo from '../../public/images/companylogo.svg';
import logistics from '../../public/images/logistics.svg';
import paypal from '../../public/images/paypal.svg';
import company_logo from '../../public/images/company_logo.svg';
import { Header } from "@/components/header";
import Sidebar from "@/components/Sidebar";

const Dashboard = () => {

    return (
        <div className="lg:h-105 lg:w-full bg-gray-lighter overflow-hidden">
            <div>
                <Sidebar />
            </div>

            <Header />

            <div>
                <div className="mt-20 ml-4 pb-6 pr-4 md:ml-72 lg:ml-64 lg:mt-20 bg-white lg:w-62 lg:h-95 rounded">
                    <h3 className="mt-8 pt-4 text-black lg:font-bold text-base lg:text-left lg:pt-4 lg:ml-5">
                        Sponsors
                    </h3>
                    <p className="text-left pt-4 text-black lg:font-normal text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5 xx:max-w-120">
                        HOSoptima is excited to present an exclusive sponsorship opportunity for the HOS
                        Assessment Challenge. The HOS Assessment Challenge is a free online initiative designed
                        to assess truck drivers&apos; knowledge of Hours of Service (HOS) regulations. Participants
                        can take the assessment at no cost, with bi-weekly prizes offered to top performers. By
                        sponsoring this challenge, companies gain visibility among a targeted audience of
                        trucking professionals while promoting safety and compliance within the industry
                    </p>

                    <div className="flex ml-0 mt-6 gap-5 flex-wrap lg:ml-5 lg:mt-6">
                        <Image src={shopify} alt="" className="relative lg:h-15 lg:w-19.1 shadow" />
                        <Image src={invision} alt="" className="relative lg:h-15 lg:w-19.1 shadow" />
                        <Image src={companylogo} alt="" className="relative lg:h-15 lg:w-19.1 shadow" />
                        <Image src={logistics} alt="" className="relative lg:h-15 lg:w-19.1 shadow" />
                        <Image src={paypal} alt="" className="relative lg:h-15 lg:w-19.1 shadow" />
                        <Image src={invision} alt="" className="relative lg:h-15 lg:w-19.1 shadow" />
                        <Image src={company_logo} alt="" className="relative lg:h-15 lg:w-19.1 shadow" />
                    </div>

                    <div>
                        <h3 className="mt-6 text-black lg:font-semibold text-base lg:text-left lg:mt-8 lg:ml-5">
                            Who should consider sponsoring?
                        </h3>
                        <p className="text-left pt-4 text-black lg:font-normal text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5 xx:max-w-120">
                            We are looking for partners who are as dedicated as we are to enhancing safety,
                            compliance, and industry excellence. If your target market are truck drivers, then this a
                            golden opportunity to see a real return on advertising dollars. Suitable prospects
                            include:
                        </p>
                        <p className="text-left pt-4 text-black lg:font-normal text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5">
                            Fuel Card Companies<br />
                            Truck Insurance<br />
                            ELD Manufacturers<br />
                            Trucking Associations
                        </p>
                    </div>

                    <div>
                        <h3 className="mt-5 text-black lg:font-semibold text-base lg:text-left lg:mt-5 lg:ml-5">
                            Why sponsor?
                        </h3>
                        <p className="relative ss:max-w-19.5 ss:pt-4 ss:ml-3 sm:max-w-21.5 sm:pt-4 sm:ml-3 text-black lg:font-normal text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5 xx:max-w-120">
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
                        <Link href="/agreement"><button className="px-4 py-2 mt-3 lg:ml-5 text-white text-sm bg-blue-950 rounded hover:bg-blue-deeper">Proceed</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
export const dynamic = "force-dynamic";