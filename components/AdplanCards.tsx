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
        <div className="lg:ml-20 lg:h-50 lg:w-62 xl:h-80 xl:w-full xx:h-109 xx:w-full bg-gray-lighter overflow-scroll scroll-smooth overflow-y-hidden">
            <div>
                <div className="flex gap-3 lg:w-70 lg:min-w-60 lg:pb-7 lg:pr-5">
                    {adPlans.map((plan, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelect(index, plan.price)}
                            className={`relative bg-white lg:mt-6 lg:h-27 lg:w-19.2 lg:min-w-19.2 rounded cursor-pointer ${selectedCard === index ? 'border-2 border-blue' : ''}`}
                            style={{ opacity: selectedCard !== null && selectedCard !== index ? 0.5 : 1 }}
                        >
                            <Image src={plan.image} alt="" className="relative lg:w-17.7 lg:pt-2 lg:ml-2" />
                            <h3 className="relative text-dark lg:font-bold text-sm lg:text-left lg:pt-3 lg:ml-2">{plan.title}</h3>
                            <h3 className="relative text-gray lg:font-medium text-x lg:text-left lg:pt-1 lg:ml-2">{plan.description}</h3>
                            <h3 className="relative text-dark lg:font-bold text-sm lg:text-left lg:-mt-5 lg:ml-16.2">{plan.price}</h3>
                            <Image src={line} alt="" className="relative lg:w-17.7 lg:pt-5 lg:ml-2" />
                            <Image src={verify} alt="" className="relative lg:pt-5 lg:ml-2" />
                            <p className="relative text-dark lg:font-medium text-x lg:text-left lg:-mt-4.4 lg:ml-6.3">
                                {plan.benefitone}
                            </p>
                            <Image src={verify} alt="" className="relative lg:pt-3 lg:ml-2" />
                            <p className="relative text-dark lg:font-medium text-x lg:text-left lg:-mt-4.4 lg:ml-6.3">
                                {plan.benefittwo}
                            </p>
                            <Image src={verify} alt="" className="relative lg:pt-3 lg:ml-2" />
                            <p className="relative text-dark lg:font-medium text-x lg:text-left lg:-mt-5 lg:ml-6.3">
                                {plan.benefitthree}
                            </p>
                            <div>
                                <button
                                    onClick={handlePayment}
                                    className="relative lg:mt-4 lg:ml-2 lg:h-6 lg:w-17.7 bg-blue text-white text-sm rounded hover:bg-light-blue">
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