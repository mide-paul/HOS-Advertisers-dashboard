'use client';
import React, { useState } from "react";
import { Modal } from "@/components/Modal";

export const SeeMore = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center">
            <button onClick={() => setIsModalOpen(true)} className="relative lg:mt-4 lg:ml-0 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">
                See More
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="absolute lg:ml-35 lg:mt-13 lg:h-25 lg:w-45 bg-white rounded-xl z-10">
                    <h2 className="lg:mt-5 lg:ml-5 text-dark text-sm font-bold">Overview</h2>
                    <button
                        className="absolute lg:-mt-6 lg:ml-42 text-gray hover:text-gray-light"
                        onClick={() => setIsModalOpen(false)}
                        aria-label="Close modal"
                    >
                        ✖️
                    </button>
                    <h3 className="lg:mt-1 lg:ml-5 text-dark text-sm font-medium">https://lakers.com</h3>
                    <h3 className="lg:mt-1 lg:ml-5 text-dark text-sm font-medium">Updated 5 secs ago</h3>
                </div>
            </Modal>
        </div>
    )
}