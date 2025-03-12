'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import line from './../public/icons/line_dark.png';
import trophy_image from './../public/images/trophy_image.png';
import verify from './../public/icons/verify.png';
import ad_image2 from './../public/images/ad_image2.png';
import ad_image3 from './../public/images/ad_image3.png';

export const AdplanCards = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
    const router = useRouter();

    const handleSelect = (index: any, price: any) => {
        setSelectedCard(index);
        setSelectedPrice(price);
    };

    const handlePayment = () => {
        if (selectedPrice) {
            router.push(`/payment?price=${selectedPrice.replace(/[$,]/g, '')}`);
        }
    };

    const adPlans = [
        { image: trophy_image, title: 'Champion Level', description: 'Marketplace SMALL', price: '$3,000', line: line, verify: verify, benefitone: 'Logo placement on promotional Material', benefittwo: '1 Sponsored blog post', benefitthree: 'Access to anonymized survey results and performance metrics from participants.' },
        { image: ad_image2, title: 'Advocate Level', description: 'Leaderboard LARGE', price: '$3,500', line: line, verify: verify, benefitone: 'Logo placement on promotional Material', benefittwo: '5 Sponsored blog post', benefitthree: 'Access to anonymized survey results and performance metrics from participants.' },
        { image: ad_image3, title: 'Pioneer Level', description: 'Marketplace MEDIUM', price: '$4,000', line: line, verify: verify, benefitone: 'Logo placement on promotional Material', benefittwo: '3 Sponsored blog post', benefitthree: 'Access to anonymized survey results and performance metrics from participants.' },
        { image: trophy_image, title: 'Visionary Level', description: 'Marketplace LARGE Banner', price: '$4,500', line: line, verify: verify, benefitone: 'Logo placement on promotional Material', benefittwo: 'No Sponsored blog post', benefitthree: 'Access to anonymized survey results and performance metrics from participants.' },
    ];

    return (
        <div className="mt-6 md:ml-64 lg:ml-64 h-full w-full bg-gray-200">
            <div>
                <div className="flex flex-col lg:flex-row flex-wrap gap-6 xl:gap-12 ml-4 lg:w-full pb-7 pr-5">
                    {adPlans.map((plan, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelect(index, plan.price)}
                            className={` bg-white mt-6 min-h-[350px] w-80 p-2 rounded cursor-pointer ${selectedCard === index ? 'border-2 border-blue-950' : ''}`}
                            style={{ opacity: selectedCard !== null && selectedCard !== index ? 0.5 : 1 }}
                        >
                            <Image src={plan.image} alt="" className="rounded" />
                            <h3 className="text-black font-bold text-sm text-left pt-3 ml-2">{plan.title}</h3>
                            <h3 className="text-gray font-normal text-xs text-left pt-1 ml-2">{plan.description}</h3>
                            <h3 className="text-black font-bold text-sm text-left -mt-5 ml-60">{plan.price}</h3>
                            <Image src={line} alt="" className="w-full pt-5" />
                            <Image src={verify} alt="" className="pt-5" />
                            <p className="text-black font-normal text-xs text-left -mt-5 ml-7">
                                {plan.benefitone}
                            </p>
                            <Image src={verify} alt="" className="pt-3" />
                            <p className="text-black font-normal text-xs text-left -mt-5 ml-7">
                                {plan.benefittwo}
                            </p>
                            <Image src={verify} alt="" className="pt-3" />
                            <p className="text-black font-normal text-xs text-left -mt-5 ml-7">
                                {plan.benefitthree}
                            </p>
                            <div>
                                <button
                                    onClick={handlePayment}
                                    className="mt-4 py-2 w-full bg-blue-950 text-white text-sm rounded hover:bg-blue-900">
                                    Proceed
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};