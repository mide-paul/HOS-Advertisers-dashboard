'use client';
import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/Modal";
import add_square_white from './../public/icons/add_square_white.png';
import click_upload from './../public/icons/click_upload.png';

export const Postad: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col sm:-ml-39 lg:ml-0.1 items-center justify-center">
            <button onClick={() => setIsModalOpen(true)} className="relative ss:-mt-7 ss:pl-0 ss:h-5 ss:w-10 ss:-ml-28 sm:-mt-6 sm:ml-19 sm:pl-0 sm:h-6 sm:w-10 md:ml-48 lg:-mt-7 lg:ml-0.1 lg:pl-5 lg:h-6 lg:w-12 text-sm bg-blue text-white rounded hover:bg-light-blue">
                Post Ad
            </button>
            <Image src={add_square_white} alt="" className="relative lg:-mt-5 lg:-ml-8 lg:h-4 lg:w-4" />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="absolute sm:-ml-2 sm:mt-21 sm:h-30 sm:w-20 lg:ml-19.2 lg:mt-21 lg:h-30 lg:w-30 bg-gray-lighter z-50">
                    <div className="relative bg-white h-6.5 w-full">
                        <h3 className="relative sm:ml-3 sm:pt-2.5 lg:ml-3 lg:pt-2.5 text-dark text-sm text-left font-bold">Post Ad</h3>
                    </div>
                    <button
                        className="absolute sm:-mt-6 sm:ml-19 lg:-mt-6 lg:ml-27.7 text-gray hover:text-gray-light"
                        onClick={() => setIsModalOpen(false)}
                        aria-label="Close modal"
                    >
                        ✖️
                    </button>
                    <div className="relative sm:mt-4 sm:ml-4 sm:h-25 sm:w-21 lg:mt-4 lg:ml-4 lg:h-25 lg:w-28 bg-white">
                        <div>
                            <h3 className="relative lg:ml-4 lg:pt-4 text-sm text-dark text-left font-bold">Category</h3>
                            <p className="relative lg:mt-1 lg:h-6 lg:w-26 ml-3 pl-3 pt-0.6 text-left text-gray text-sm bg-gray-light rounded">Brand Flyer</p>
                        </div>
                        <div>
                            <h3 className="relative lg:ml-4 lg:pt-4 text-sm text-dark text-left font-bold">Ad URL</h3>
                            <input className="relative lg:mt-1 lg:h-6 lg:w-26 ml-3 pl-3 text-dark text-sm bg-gray-light rounded" placeholder="Input URL"></input>
                        </div>
                        <div>
                            <h3 className="relative lg:ml-4 lg:pt-4 text-sm text-dark text-left font-bold">Image</h3>
                            <input type="file" className="relative lg:mt-1 lg:h-14 lg:w-26 lg:ml-3 text-dark text-sm bg-gray-light rounded" />
                            <Image src={click_upload} alt="" className="absolute lg:h-7 lg:w-7 lg:-mt-12 lg:ml-16.3 " />
                            <p className="relative text-dark text-sm lg:-mt-8 lg:ml-12.5 max-w-16"><span className="text-light-blue font-semibold">Click to upload</span> or drag and drop CSV File of 5mb</p>
                        </div>
                    </div>
                    <div className="relative lg:-mt-6.5 lg:ml-12.5 lg:h-6 lg:w-17 lg:p-0.6 text-sm text-white text-center bg-blue hover:bg-light-blue rounded">Post Ad</div>
                </div>
            </Modal>
        </div>
    );
};