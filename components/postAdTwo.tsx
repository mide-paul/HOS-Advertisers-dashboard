'use client';
import React, { useState } from "react";
import { Modal } from "@/components/Modal";
// import click_upload from './../public/icons/click_upload.png';

export const PostadTwo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center bg-gray">
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="absolute lg:ml-19.2 lg:mt-27 lg:h-39.5 lg:w-30 bg-gray-lighter z-10 ">
                    <div className="relative bg-white h-6.5 w-full">
                        <h3 className="relative lg:ml-3 lg:pt-2.5 text-black text-sm text-left font-bold">Post Ad</h3>
                    </div>
                    <button
                        className="absolute lg:-mt-6 lg:ml-27.7 text-gray hover:text-gray-light"
                        onClick={() => setIsModalOpen(false)}
                        aria-label="Close modal"
                    >
                        ✖️
                    </button>
                    <div className="relative lg:mt-4 lg:ml-4 lg:h-35 lg:w-28 bg-white">
                        <div>
                            <h3 className="relative lg:ml-4 lg:pt-4 text-sm text-black text-left font-bold">Category</h3>
                            <p className="relative lg:mt-1 lg:h-6 lg:w-26 ml-3 pl-3 pt-0.6 text-left text-gray text-sm bg-gray-light rounded">Blog Post</p>
                        </div>
                        <div>
                            <h3 className="relative lg:ml-4 lg:pt-2 text-sm text-black text-left font-bold">Blog Post Title</h3>
                            <input className="relative lg:mt-1 lg:h-6 lg:w-26 ml-3 pl-3 text-black text-sm bg-gray-light rounded" placeholder="Input Title"></input>
                        </div>
                        <div>
                            <h3 className="relative lg:ml-4 lg:pt-2 text-sm text-black text-left font-bold">Blog Post Description</h3>
                            <textarea className="relative lg:mt-1 lg:h-8 lg:w-26 ml-3 pl-3 pt-1 text-black text-sm bg-gray-light rounded resize-none" placeholder="Input Description"></textarea>
                        </div>
                        <div>
                            <h3 className="relative lg:ml-4 lg:pt-1 text-sm text-black text-left font-bold">Ad URL</h3>
                            <input className="relative lg:mt-1 lg:h-6 lg:w-26 ml-3 pl-3 text-black text-sm bg-gray-light rounded" placeholder="Input URL"></input>
                        </div>
                        <div>
                            <h3 className="relative lg:ml-4 lg:pt-2 text-sm text-black text-left font-bold">Image</h3>
                            <input type="file" className="relative lg:mt-1 lg:h-7 lg:w-26 ml-3 lg:ml-0 text-black text-sm bg-gray-light rounded" />
                            {/* <Image src={click_upload} alt="" className="absolute lg:h-7 lg:w-7 lg:-mt-13.5 lg:ml-16.3 " /> */}
                            <p className="relative text-black text-sm lg:text-center lg:-mt-6 lg:ml-12.5 max-w-16"><span className="text-light-blue font-semibold">Click to upload</span> or drag and drop CSV File of 5mb</p>
                        </div>
                    </div>
                    <div className="relative lg:-mt-14 lg:ml-12.5 lg:h-6 lg:w-17 lg:p-0.6 text-sm text-white text-center bg-blue hover:bg-light-blue rounded">Post Ad</div>
                </div>
            </Modal>
        </div>
    )
}