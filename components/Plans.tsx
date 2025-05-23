'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from "next/image";
import line from '../public/icons/line_dark.png';
import trophy_image from '../public/images/trophy_image.png';
import verify from '../public/icons/verify.png';
import ad_image2 from '../public/images/ad_image2.png';
import ad_image3 from '../public/images/ad_image3.png';
import toast from "react-hot-toast";

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

const Plans = () => {
    const [subscriptions, setSubscriptions] = useState<Subscription[]>([
        { id: 1, image: trophy_image, title: 'Champion Level', description: 'Marketplace SMALL', price: '$3,000', line: line, current: 'Current Plan', expiry: 'Expires: 14/02/2025', expired: 'Expired Plan', expireddate: 'Expired: 14/02/2025', verify: verify, benefitone: 'Logo placement on promotional Material', benefittwo: '1 Sponsored blog post', benefitthree: 'Access to anonymized survey results and performance metrics from participants.' },
        { id: 2, image: ad_image2, title: 'Advocate Level', description: 'Leaderboard LARGE', price: '$3,500', line: line, current: 'Current Plan', expiry: 'Expires: 14/02/2025', expired: 'Expired Plan', expireddate: 'Expired: 14/02/2025', verify: verify, benefitone: 'Logo placement on promotional Material', benefittwo: '5 Sponsored blog post', benefitthree: 'Access to anonymized survey results and performance metrics from participants.' },
        { id: 3, image: ad_image3, title: 'Pioneer Level', description: 'Marketplace MEDIUM', price: '$4,000', line: line, current: 'Current Plan', expiry: 'Expires: 14/02/2025', expired: 'Expired Plan', expireddate: 'Expired: 14/02/2025', verify: verify, benefitone: 'Logo placement on promotional Material', benefittwo: '3 Sponsored blog post', benefitthree: 'Access to anonymized survey results and performance metrics from participants.' },
        { id: 4, image: trophy_image, title: 'Visionary Level', description: 'Marketplace LARGE Banner', price: '$4,500', line: line, current: 'Current Plan', expiry: 'Expires: 14/02/2025', expired: 'Expired Plan', expireddate: 'Expired: 14/02/2025', verify: verify, benefitone: 'Logo placement on promotional Material', benefittwo: 'No Sponsored blog post', benefitthree: 'Access to anonymized survey results and performance metrics from participants.' },
    ]);

    const handleCancelSubscription = (id: number) => {
        setSubscriptions(subscriptions.map(plan => plan.id === id ? { ...plan, current: false } : plan));
        toast.success('Subscription cancelled!');
    };

    const handleRenewSubscription = (id: number) => {
        setSubscriptions(subscriptions.map(plan => plan.id === id ? { ...plan, current: true } : plan));
        toast.success('Subscription renewed!');
    };

    const handleChangePlan = (id: number) => {
        toast.success(`Change plan functionality for plan ID: ${id}`);
    };

    return (
        <div className='h-screen min-h-[1200px] w-full bg-white'>
            <div className="ml-0 md:ml-1 lg:ml-1 mt-4 pt-1 w-full h-full rounded pb-8">
                <div>
                    <div className="flex flex-wrap flex-col mt-6 lg:flex-row gap-6 lg:gap-6 xl:gap-10 ml-4 h-full w-full pb-7 pr-5">
                        {subscriptions.map((plan) => (
                            <div
                                key={plan.id}
                                className={`relative min-h-[350px] w-80 p-2 ml-3 bg-white rounded ${plan.current ? 'border-blue-950 border' : 'min-h-[350px] w-80 p-2 border-blue-950 border'}`}
                            >
                                <Image src={plan.image} alt="" className="rounded" />
                                <h3 className="pt-3 text-black font-bold text-sm text-left">{plan.title}</h3>
                                <h3 className="pt-1 text-gray font-normal text-xs text-left">{plan.description}</h3>
                                <h3 className="-mt-5 ml-60 text-black font-bold text-sm text-left">{plan.price}</h3>
                                <Image src={line} alt="" className="w-full pt-5" />
                                {plan.current ? (
                                    <>
                                        <div className='flex flex-row gap-24 mt-4 items-center'>
                                            <h3 className='text-xs text-black p-0.5 bg-blue-faint rounded'>{plan.current}</h3>
                                            <h3 className='text-xs text-blue'>{plan.expiry}</h3>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className='flex flex-row gap-24 mt-4 items-center'>
                                            <h3 className='text-xs text-black p-0.5 bg-blue-faint rounded'>{plan.expired}</h3>
                                            <h3 className='text-xs text-blue'>{plan.expireddate}</h3>
                                        </div>
                                    </>
                                )}
                                <Image src={verify} alt="" className="pt-5" />
                                <p className="-mt-5 ml-7 text-black font-normal text-xs text-left">
                                    {plan.benefitone}
                                </p>
                                <Image src={verify} alt="" className="pt-3" />
                                <p className="-mt-5 ml-7 text-black font-normal text-xs text-left">
                                    {plan.benefittwo}
                                </p>
                                <Image src={verify} alt="" className="pt-3" />
                                <p className="-mt-5 ml-7 text-black font-normal text-xs text-left">
                                    {plan.benefitthree}
                                </p>
                                {plan.current ? (
                                    <>
                                        <button
                                            onClick={() => handleCancelSubscription(plan.id)}
                                            className="mt-4 h-8 w-full bg-blue-950 text-white font-normal text-sm rounded hover:bg-blue-900">
                                            Cancel Subscription
                                        </button>
                                        <button
                                            onClick={() => handleChangePlan(plan.id)}
                                            className="mt-4 h-8 w-full bg-white text-blue-950 text-sm border border-blue-950 rounded hover:bg-gray-200">
                                            Change plan
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => handleRenewSubscription(plan.id)}
                                            className="mt-4 h-8 w-full bg-blue-950 text-white text-sm rounded hover:bg-blue-900">
                                            Renew Subscription
                                        </button>
                                        <button
                                            onClick={() => handleChangePlan(plan.id)}
                                            className="mt-4 h-8 w-full bg-white text-blue-950 text-sm border border-blue-950 rounded hover:bg-gray-light">
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

export default dynamic(() => Promise.resolve(Plans), { ssr: false });