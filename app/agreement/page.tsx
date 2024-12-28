import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/images/logo.png';
import award from '../../public/icons/award_blue.png';
import arrow_left_blue from '../../public/icons/arrow_left_blue.png';
import settings from '../../public/icons/settings.png';
import logout_dark from '../../public/icons/logout_dark.png';
import { Header } from "@/components/header";

const Agreement = () => {

    return (
        <div className="lg:h-90 lg:w-full xl:h-80 xl:w-full xx:h-109 xx:w-full bg-gray-lighter overflow-hidden">
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

                <div className="relative lg:ml-20 lg:mt-5 bg-white lg:w-62 lg:h-74 rounded">
                    <h3 className="relative text-dark lg:font-bold text-base lg:text-left lg:pt-4 lg:ml-5">
                        HOS Assessment Sponsorship Agreement
                    </h3>
                    <p className="relative text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5">
                        This Sponsorship Agreement (&quot;Agreement&quot;) is entered into by and between [HOSoptima Inc.]
                        (&quot;HOSoptima&quot;) and [Sponsor Name] (&quot;Sponsor&quot;) as of [Effective Date].
                    </p>

                    <div>
                        <div>
                            <p className="relative text-dark lg:font-semibold text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5">
                                1.     Sponsorship Details:<br /> <br />
                            </p>
                            <p className="relative text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:-mt-1 lg:ml-5">
                                HOSoptima agrees to provide sponsorship benefits to Sponsor as outlined in Exhibit A attached hereto (&quot;Sponsorship Benefits&quot;).<br />
                                Sponsor agrees to provide the sponsorship fee of [Amount] (&quot;Sponsorship Fee&quot;) in exchange for the Sponsorship Benefits.
                            </p>
                        </div>
                        <div>
                            <p className="relative text-dark lg:font-semibold text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5">
                                2.     Terms:<br /> <br />
                            </p>
                            <p className="relative text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:-mt-1 lg:ml-5">
                                The term of this Agreement shall commence on the Effective Date and continue until the
                                completion of the HOS Assessment Challenge (&quot;Challenge&quot;).
                            </p>
                        </div>
                        <div>
                            <p className="relative text-dark lg:font-semibold text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5">
                                3.     Sponsorship Benefits:<br /> <br />
                            </p>
                            <p className="relative text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:-mt-1 lg:ml-5">
                                3.1  The Sponsorship Benefits include, but are not limited to, the following:<br /> <br />

                                Logo placement on Challenge promotional materials.<br />
                                Recognition on the HOSoptima website and social media channels.<br />
                                Opportunity to provide branded materials or prizes for Challenge participants.<br />
                                [Other Benefits as Agreed Upon]
                            </p>
                        </div>
                        <div>
                            <p className="relative text-dark lg:font-semibold text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5">
                                4.     Sponsorship Fee<br /> <br />
                            </p>
                            <p className="relative text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:-mt-1 lg:ml-5">
                                The Sponsorship Fee shall be paid by Sponsor to HOSoptima in accordance with the payment
                                terms specified in Exhibit A.
                            </p>
                        </div>
                        <div>
                            <p className="relative text-dark lg:font-semibold text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5">
                                5.     Representations & Warranties<br /> <br />
                            </p>
                            <p className="relative text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:-mt-1 lg:ml-5">
                                HOSoptima represents and warrants that it has the right to grant the Sponsorship Benefits to Sponsor.<br />
                                Sponsor represents and warrants that it has the authority to enter into this Agreement and fulfill its obligations hereunder.
                            </p>
                        </div>
                        <div>
                            <p className="relative text-dark lg:font-semibold text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5">
                                6.     Termination<br /> <br />
                            </p>
                            <p className="relative text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:-mt-1 lg:ml-5">
                                Either party may terminate this Agreement upon written notice to the other party if the
                                other party materially breaches any provision of this Agreement and fails to cure such
                                breach within [number] days of receiving written notice thereof.
                            </p>
                        </div>
                        <div>
                            <p className="relative text-dark lg:font-semibold text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5">
                                7.     Confidentiality<br /> <br />
                            </p>
                            <p className="relative text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:-mt-1 lg:ml-5">
                                Each party agrees to keep confidential any proprietary or confidential information
                                disclosed by the other party in connection with this Agreement.
                            </p>
                        </div>
                        <div>
                            <p className="relative text-dark lg:font-semibold text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5">
                                8.     Governing Law<br /> <br />
                            </p>
                            <p className="relative text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:-mt-1 lg:ml-5">
                                This Agreement shall be governed by and construed in accordance with the laws of the State
                                of [State], without regard to its conflict of law principles.
                            </p>
                        </div>
                        <div>
                            <p className="relative text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:mt-5 lg:ml-5">
                                IN WITNESS WHEREOF, the parties have executed this Agreement as of the Effective Date.
                            </p>
                            <p className="relative text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:mt-5 lg:ml-5">
                                [HOSoptima Inc.] By: ____________________________ Name: [Name] Title: [Title]
                            </p>
                            <p className="relative text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:mt-5 lg:ml-5">
                                [Sponsor Name] By: ____________________________ Name: [Name] Title: [Title]
                            </p>
                            <p className="relative text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:mt-5 lg:ml-5">
                                <span className="font-semibold">Exhibit A - Sponsorship Benefits:</span> [Detailed Description of Sponsorship Benefits and Payment Terms]
                            </p>
                            <p className="relative text-dark lg:font-semibold text-sm lg:max-w-55 lg:text-left lg:mt-5 lg:ml-5">
                                Last updated: [Date]
                            </p>
                        </div>
                        <div className="flex gap-3 lg:ml-5">
                            <button className="relative lg:h-6 lg:w-19.6 lg:mt-7 font-bold transparent text-sm text-light-blue border rounded hover:bg-gray-light">
                                Download PDF
                            </button>
                            <button className="relative lg:h-6 lg:w-19.6 lg:mt-7 font-bold bg-blue text-sm text-white border rounded hover:bg-light-blue">
                                Upload Signed Document
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Agreement
export const dynamic = "force-dynamic";