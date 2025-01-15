"use client";
import React, { ReactNode } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();  // Prevent click inside modal from closing it
    };

    return (
        <div
            className="absolute lg:-ml-37 inset-0 w-screen h-full bg-dark bg-opacity-50"
            onClick={onClose} // Close modal when clicking the background
        >
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div 
                    className="relative z-10 bg-white rounded-lg shadow-lg w-full max-w-md"
                    onClick={handleModalClick} // Stop propagation inside modal
                >
                    <div className="flex lg:justify-end lg:p-2">
                        <button
                            className="text-gray hover:text-gray-light"
                            onClick={onClose}
                            aria-label="Close modal"
                        >
                            ✖️
                        </button>
                    </div>
                    <div className="lg:p-4">{children}</div>
                </div>
            </div>
        </div>
    );
};