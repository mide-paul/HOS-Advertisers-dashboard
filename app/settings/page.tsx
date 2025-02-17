'use client';
import React, { useState } from "react";
import dynamic from 'next/dynamic';
import Link from "next/link";
import Image from "next/image";
import line from '../../public/icons/line_dark.png';
// import settings_profile_image from '../../public/images/settings_profile_image.png';
import edit_pen from '../../public/icons/edit_pen.png';
import { Header } from "@/components/header";
import { useAuthStore } from "../store/authStore";
import Sidebar from "@/components/Sidebar";

const Page = () => {
    const user = useAuthStore(state => state.user);

    // State to store form values
    const [profile, setProfile] = useState({
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        email: user?.email || '',
        phone: user?.phone || '',
        profilePicture: user?.profilePicture || ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    // Handle image upload
    const handleImageUpload = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file type and size
            if (file.size < 5 * 1024 * 1024 && file.type.startsWith('image/')) {
                // Proceed with reading the file
                const reader = new FileReader();
                reader.onloadend = () => {
                    setProfile((prevProfile) => ({
                        ...prevProfile,
                        profilePicture: reader.result as string, // Base64 encoded image
                    }));
                };
                reader.readAsDataURL(file);
            } else {
                alert('Please select a valid image file under 5MB.');
            }
        }
    };

    // Handle form submission (Save Changes)
    // const handleSaveChanges = () => {
    //     alert('Profile saved successfully!');
    // };

    // Handle saved changes on the backend
    const handleSaveChanges = async () => {
        const formData = new FormData();
        formData.append('firstName', profile.firstName);
        formData.append('lastName', profile.lastName);
        formData.append('email', profile.email);
        formData.append('phone', profile.phone);
        formData.append('profilePicture', profile.profilePicture); // Base64 string or file object

        try {
            const response = await fetch('https://api.hosoptima.com/api/v1/ad-manager/profile', {
                method: 'PATCH',
                body: formData,
            });
            if (!response.ok) throw new Error('Profile update failed!');
            alert('Profile updated successfully!');
        } catch (error) {
            console.error(error);
            alert('Error updating profile.');
        }
    };

    return (
        <div className="ss:h-71 sm:h-71 lg:h-60 lg:w-full xl:h-80 xl:w-full xx:h-109 xx:w-full bg-gray-lighter overflow-hidden">
            <div>
                <Sidebar />
            </div>

            <Header />

            <div className="relative ss:ml-0 ss:mt-10 ss:w-21.5 ss:h-60 sm:ml-3 sm:mt-10 sm:w-21.5 sm:h-60 bg-white lg:ml-19.5 lg:mt-12 lg:w-64 lg:h-50 xl:ml-23 rounded">
                <div className="flex ss:gap-2 ss:pt-5 ss:ml-2 sm:gap-4 sm:pt-5 sm:ml-2 lg:gap-5 lg:pt-6 lg:ml-7">
                    <h3 className="relative text-sm text-left font-semibold text-light-blue">Profile</h3>
                    <Link href="/plans"><h3 className="relative text-dark text-sm text-left cursor-pointer">Plans</h3></Link>
                    <Link href="/security-and-privacy"><h3 className="relative text-dark text-sm text-left cursor-pointer">Security & Privacy</h3></Link>
                    <Link href="/support"><h3 className="relative text-dark text-sm text-left cursor-pointer">Support</h3></Link>
                    <Image src={line} alt="" className="absolute ss:mt-5 sm:mt-5 lg:mt-5 w-7 h-0.1" />
                </div>

                <div>
                    <div>
                        <Image
                            src={profile.profilePicture || '/default-profile.png'}
                            alt="Profile Picture"
                            className="relative ss:mt-6 ss:ml-2 sm:mt-6 sm:ml-2 size-11 lg:mt-8 lg:ml-7"
                            width={20}
                            height={20}
                        />
                        {user && (
                            <h3 className="relative ss:mt-5 ss:ml-2 sm:mt-5 sm:ml-2 text-dark text-sm font-semibold text-left lg:-mt-10 lg:ml-15.3">
                                {profile.firstName} {profile.lastName}
                            </h3>
                        )}
                        <h3 className="relative ss:mt-1 ss:ml-2 sm:mt-1 sm:ml-2 text-dark text-sm font-normal text-left lg:mt-1 lg:ml-15.3">
                            {profile.email}
                        </h3>
                        <h3 className="relative ss:mt-1 ss:ml-2 sm:mt-1 sm:ml-2 text-dark text-sm font-normal text-left lg:mt-1 lg:ml-15.3">
                            {profile.phone}
                        </h3>
                        <h3
                            className="relative ss:mt-5 ss:ml-7 sm:mt-5 sm:ml-7 text-light-blue text-sm font-normal text-left lg:mt-6.5 lg:ml-10 cursor-pointer"
                            onClick={() => document.getElementById('fileInput')?.click()}
                        >
                            Edit Picture
                        </h3>
                        <Image src={edit_pen} alt="" className="absolute ss:-mt-4.6 ss:ml-2 sm:-mt-4.6 sm:ml-2 lg:-mt-4.6 lg:ml-7" />
                        <input
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleImageUpload}
                        />
                    </div>
                    {/* <h3 className="relative ss:mt-5 ss:ml-2 sm:mt-5 sm:ml-2 text-gray text-sm font-bold text-left lg:mt-5 lg:ml-7">
                        Bio
                    </h3>
                    <p className="relative ss:mt-3 ss:ml-3 ss:max-w-19.5 sm:mt-3 sm:ml-3 sm:max-w-19.9 lg:max-w-55 text-dark text-sm font-normal text-left whitespace-normal resize-none lg:mt-3 lg:ml-7">
                        My name is John, I'm passionate about driving. I thrive in an interdisciplinary
                        environment, and am adept at working collaboratively and autonomously. With a
                        creative and strategic approach, I carry out my tasks and I provide a positive
                        customer experience. I am excited to take on new challenges in the trucking business
                        space and continue developing innovative solutions that improve the customer experience.
                    </p> */}
                </div>

                <div>
                    {/* <h3 className="relative ss:mt-5 ss:ml-2 sm:mt-5 sm:ml-2 text-dark text-sm font-bold text-left lg:mt-7 lg:ml-7">
                        Bio
                    </h3>
                    <div>
                        <textarea className="relative ss:mt-3 ss:ml-3 ss:w-19.5 ss:h-15 sm:mt-3 sm:ml-3 sm:w-19.9 sm:h-15 lg:w-55 lg:h-15 bg-gray-lighter text-dark text-sm font-normal text-left whitespace-normal resize-none lg:mt-3 lg:ml-7 p-3"
                            placeholder="My name is John, I'm passionate about driving. I thrive in an interdisciplinary
                        environment, and am adept at working collaboratively and autonomously. With a
                        creative and strategic approach, I carry out my tasks and I provide a positive
                        customer experience. I am excited to take on new challenges in the trucking business
                        space and continue developing innovative solutions that improve the customer experience." />
                    </div> */}
                    <div className="flex flex-col gap-2 ss:ml-2 ss:mt-6 sm:ml-2 sm:mt-6 lg:ml-7 lg:mt-6">
                        <label className="relative text-sm font-bold text-left text-dark">First Name</label>
                        <input
                            name="firstName"
                            value={profile.firstName}
                            onChange={handleChange}
                            className="relative ss:h-6 ss:w-19.51 sm:h-6 sm:w-19.9 bg-gray-lighter lg:h-6 lg:w-20 text-sm p-2.5 rounded"
                            placeholder="John"
                        />
                    </div>
                    <div className="flex flex-col gap-2 ss:ml-2 ss:mt-4 sm:ml-2 sm:mt-4 lg:ml-25 lg:-mt-8">
                        <label className="relative text-sm font-bold text-left text-dark">Email Address</label>
                        <input
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            className="relative ss:h-6 ss:w-19.51 sm:h-6 sm:w-19.9 bg-gray-lighter lg:h-6 lg:w-20 text-sm p-2.5 rounded"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div className="flex flex-col gap-2 ss:ml-2 ss:mt-4 sm:ml-2 sm:mt-4 lg:ml-7 lg:mt-6">
                        <label className="relative text-sm font-bold text-left text-dark">Last Name</label>
                        <input
                            name="lastName"
                            value={profile.lastName}
                            onChange={handleChange}
                            className="relative ss:h-6 ss:w-19.51 sm:h-6 sm:w-19.9 bg-gray-lighter lg:h-6 lg:w-20 text-sm p-2.5 rounded"
                            placeholder="Doe"
                        />
                    </div>
                    <div className="flex flex-col gap-2 ss:ml-2 ss:mt-4 sm:ml-2 sm:mt-4 lg:ml-25 lg:-mt-8">
                        <label className="relative text-sm font-bold text-left text-dark">Phone Number</label>
                        <input
                            name="phone"
                            value={profile.phone}
                            onChange={handleChange}
                            className="relative ss:h-6 ss:w-19.51 sm:h-6 sm:w-19.9 bg-gray-lighter lg:h-6 lg:w-20 text-sm p-2.5 rounded"
                            placeholder="+1 80 222-344-89"
                        />
                    </div>
                    <button
                        onClick={handleSaveChanges}
                        className="relative ss:w-14 ss:h-6 ss:mt-5 ss:ml-2 sm:w-14 sm:h-6 sm:mt-5 sm:ml-2 bg-blue text-white text-sm lg:w-17 lg:h-6 lg:mt-6 lg:ml-7 rounded hover:bg-light-blue"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default dynamic(() => Promise.resolve(Page), { ssr: false });