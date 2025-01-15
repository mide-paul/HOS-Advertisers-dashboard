'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from "next/link";
import Image from "next/image";
import line from '../../public/icons/line_dark.png';
import Sidebar from '@/components/Sidebar';
import { Header } from '@/components/header';
import trophy_image from '../../public/images/trophy_image.png';
import verify from '../../public/icons/verify.png';
import ad_image2 from '../../public/images/ad_image2.png';
import ad_image3 from '../../public/images/ad_image3.png';

interface Subscription {
    id: number;
    image: any;
    title: string;
    description: string;
    price: string;
    line: any;
    current: boolean | string;
    expiry: string;
    expired: boolean | string;
    expireddate: string;
    verify: any;
    benefitone: string;
    benefittwo: string;
    benefitthree: string;
}

const Page = () => {
    const [subscriptions, setSubscriptions] = useState<Subscription[]>([
        { id: 1, image: trophy_image, title: 'Champion Level', description: 'Marketplace SMALL', price: '$3,000', line: line, current: 'Current Plan', expiry: 'Expires: 14/02/2025', expired: 'Expired Plan', expireddate: 'Expired: 14/02/2025', verify: verify, benefitone: 'Logo placement on promotional Material', benefittwo: '1 Sponsored blog post', benefitthree: 'Access to anonymized survey results and performance metrics from participants.' },
        { id: 2, image: ad_image2, title: 'Advocate Level', description: 'Leaderboard LARGE', price: '$3,500', line: line, current: 'Current Plan', expiry: 'Expires: 14/02/2025', expired: 'Expired Plan', expireddate: 'Expired: 14/02/2025', verify: verify, benefitone: 'Logo placement on promotional Material', benefittwo: '5 Sponsored blog post', benefitthree: 'Access to anonymized survey results and performance metrics from participants.' },
        { id: 3, image: ad_image3, title: 'Pioneer Level', description: 'Marketplace MEDIUM', price: '$4,000', line: line, current: 'Current Plan', expiry: 'Expires: 14/02/2025', expired: 'Expired Plan', expireddate: 'Expired: 14/02/2025', verify: verify, benefitone: 'Logo placement on promotional Material', benefittwo: '3 Sponsored blog post', benefitthree: 'Access to anonymized survey results and performance metrics from participants.' },
        { id: 4, image: trophy_image, title: 'Visionary Level', description: 'Marketplace LARGE Banner', price: '$4,500', line: line, current: 'Current Plan', expiry: 'Expires: 14/02/2025', expired: 'Expired Plan', expireddate: 'Expired: 14/02/2025', verify: verify, benefitone: 'Logo placement on promotional Material', benefittwo: 'No Sponsored blog post', benefitthree: 'Access to anonymized survey results and performance metrics from participants.' },
    ]);

    const handleCancelSubscription = (id: number) => {
        setSubscriptions(subscriptions.map(plan => plan.id === id ? { ...plan, current: false } : plan));
        alert('Subscription cancelled!');
    };

    const handleRenewSubscription = (id: number) => {
        setSubscriptions(subscriptions.map(plan => plan.id === id ? { ...plan, current: true } : plan));
        alert('Subscription renewed!');
    };

    const handleChangePlan = (id: number) => {
        alert(`Change plan functionality for plan ID: ${id}`);
    };

    return (
        <div className='w-screen h-screen bg-gray-lighter overflow-scroll overflow-x-hidden'>
            <div>
                <Sidebar />
            </div>

            <div>
                <Header />
            </div>

            <div className="relative ss:ml-0 ss:mt-10 ss:w-21.5 ss:h-30 sm:ml-2 sm:mt-10 sm:w-21.5 sm:h-30 bg-gray-lighter lg:ml-20 lg:mt-12 lg:w-62 lg:h-50 xl:ml-23 rounded">
                <div className="flex ss:gap-2 ss:ml-2 ss:pt-6 sm:gap-2 sm:ml-2 sm:pt-6 lg:gap-5 lg:pt-6 lg:ml-5">
                    <Link href="/settings"><h3 className="relative text-sm text-left text-dark cursor-pointer">Profile</h3></Link>
                    <h3 className="relative text-sm text-left text-light-blue font-semibold">Plans</h3>
                    <Link href="/security-and-privacy"><h3 className="relative text-sm text-left text-dark font-normal cursor-pointer">Security & Privacy</h3></Link>
                    <Link href="/support"><h3 className="relative text-dark font-normal text-sm text-left">Support</h3></Link>
                    <Image src={line} alt="" className="absolute ss:mt-5 ss:ml-7 sm:mt-5 sm:ml-7 lg:mt-5 w-6.3 h-0.1 lg:ml-8" />
                </div>

                <div>
                    <div className="flex flex-wrap ss:flex-col sm:flex-col lg:flex-row gap-3 lg:w-70 lg:min-w-60 lg:pb-7 lg:pr-5">
                        {subscriptions.map((plan) => (
                            <div
                                key={plan.id}
                                className={`relative ss:mt-6 ss:ml-5.4 ss:h-33 ss:w-19.2 sm:ml-7 sm:h-33 lg:h-33 bg-white rounded ${plan.current ? 'border-blue border-2' : ''}`}
                            >
                                <Image src={plan.image} alt="" className="relative ss:w-17.7 ss:pt-2 ss:ml-2 sm:w-17.7 sm:pt-2 sm:ml-2 lg:w-17.7 lg:pt-2 lg:ml-2" />
                                <h3 className="relative ss:pt-3 ss:ml-2 sm:pt-3 sm:ml-2 text-dark lg:font-bold text-sm lg:text-left lg:pt-3 lg:ml-2">{plan.title}</h3>
                                <h3 className="relative ss:pt-1 ss:ml-2 sm:pt-1 sm:ml-2 text-gray lg:font-normal text-x lg:text-left lg:pt-1 lg:ml-2">{plan.description}</h3>
                                <h3 className="relative ss:-mt-5 ss:ml-16.2 sm:-mt-5 sm:ml-16.2 text-dark lg:font-bold text-sm lg:text-left lg:-mt-5 lg:ml-16.2">{plan.price}</h3>
                                <Image src={line} alt="" className="relative ss:w-17.7 ss:pt-5 ss:ml-2 sm:w-17.7 sm:pt-5 sm:ml-2 lg:w-17.7 lg:pt-5 lg:ml-2" />
                                {plan.current ? (
                                    <>
                                        <div className='flex flex-row gap-8 ml-2.5 mt-4 items-center'>
                                            <h3 className='text-x text-dark p-0.5 bg-blue-faint rounded'>{plan.current}</h3>
                                            <h3 className='text-x text-blue'>{plan.expiry}</h3>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className='flex flex-row gap-8 ml-2.5 mt-4 items-center'>
                                            <h3 className='text-x text-dark p-0.5 bg-blue-faint rounded'>{plan.expired}</h3>
                                            <h3 className='text-x text-blue'>{plan.expireddate}</h3>
                                        </div>
                                    </>
                                )}
                                <Image src={verify} alt="" className="relative ss:pt-5 ss:ml-2 sm:pt-5 sm:ml-2 lg:pt-5 lg:ml-2" />
                                <p className="relative ss:-mt-4.4 ss:ml-6.3 sm:-mt-4.4 sm:ml-6.3 text-dark lg:font-normal text-x lg:text-left lg:-mt-4.4 lg:ml-6.3">
                                    {plan.benefitone}
                                </p>
                                <Image src={verify} alt="" className="relative ss:pt-3 ss:ml-2 sm:pt-3 sm:ml-2 lg:pt-3 lg:ml-2" />
                                <p className="relative ss:-mt-4.4 ss:ml-6.3 sm:-mt-4.4 sm:ml-6.3 text-dark lg:font-normal text-x lg:text-left lg:-mt-4.4 lg:ml-6.3">
                                    {plan.benefittwo}
                                </p>
                                <Image src={verify} alt="" className="relative ss:pt-3 ss:ml-2 sm:pt-3 sm:ml-2 lg:pt-3 lg:ml-2" />
                                <p className="relative ss:-mt-5 ss:ml-6.3 sm:-mt-5 sm:ml-6.3 text-dark lg:font-normal text-x lg:text-left lg:-mt-5 lg:ml-6.3">
                                    {plan.benefitthree}
                                </p>
                                {plan.current ? (
                                    <>
                                        <button
                                            onClick={() => handleCancelSubscription(plan.id)}
                                            className="relative ss:mt-4 ss:ml-2 ss:h-6 ss:w-17.7 sm:mt-4 sm:ml-2 sm:h-6 sm:w-17.7 lg:mt-4 lg:ml-2 lg:h-6 lg:w-17.7 bg-blue text-white text-sm rounded hover:bg-light-blue">
                                            Cancel Subscription
                                        </button>
                                        <button
                                            onClick={() => handleChangePlan(plan.id)}
                                            className="relative ss:mt-4 ss:ml-2 ss:h-6 ss:w-17.7 sm:mt-4 sm:ml-2 sm:h-6 sm:w-17.7 lg:mt-4 lg:ml-2 lg:h-6 lg:w-17.7 bg-white text-blue text-sm border border-blue rounded hover:bg-gray-light">
                                            Change plan
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => handleRenewSubscription(plan.id)}
                                            className="relative ss:mt-4 ss:ml-2 ss:h-6 ss:w-17.7 sm:mt-4 sm:ml-2 sm:h-6 sm:w-17.7 lg:mt-4 lg:ml-2 lg:h-6 lg:w-17.7 bg-blue text-white text-sm rounded hover:bg-light-blue">
                                            Renew Subscription
                                        </button>
                                        <button
                                            onClick={() => handleChangePlan(plan.id)}
                                            className="ss:mt-4 ss:ml-2 ss:h-6 ss:w-17.7 sm:mt-4 sm:ml-2 sm:h-6 sm:w-17.7 lg:mt-4 lg:ml-2 lg:h-6 lg:w-17.7 bg-white text-blue text-sm border border-blue rounded hover:bg-gray-light">
                                            Change Plan
                                        </button>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default dynamic(() => Promise.resolve(Page), { ssr: false });