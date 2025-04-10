import React, { useState } from 'react'
import Image from "next/image";
// import settings_profile_image from '../../public/images/settings_profile_image.png';
import edit_pen from '../public/icons/edit_pen.png';
import { useAuthStore } from '@/app/store/authStore';
import toast from "react-hot-toast";
import cookies from "js-cookie";

const Profile = () => {
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
            // Get token from cookies
            const token = cookies.get("token");

            const response = await fetch('https://api.hosoptima.com/api/v1/ad-manager/profile', {
                method: 'PATCH',
                credentials: 'include',
                body: formData,
                headers: { Authorization: `Bearer ${token}` },
            });
            if (!response.ok) throw new Error('Profile update failed!');
            toast.success('Profile updated successfully!');
        } catch (error) {
            console.error(error);
            toast.error("Error updating profile.");
        }
    };

    return (
        <div>
            <div className="ml-0 md:ml-1 lg:ml-1 mt-5 pt-1 w-full h-50 rounded pb-8">
                <div>
                    <div>
                        <Image
                            src={profile.profilePicture || 'icons/profile-pic.svg'}
                            alt="Profile Picture"
                            className="mt-8 ml-7 size-11 lg:mt-8 lg:ml-7 rounded-lg"
                            width={20}
                            height={20}
                        />
                        {user && (
                            <h3 className="-mt-10 ml-24 text-black text-sm font-semibold text-left lg:-mt-10 lg:ml-24">
                                {profile.firstName} {profile.lastName}
                            </h3>
                        )}
                        <h3 className="mt-1 ml-24 text-black text-sm font-normal text-left lg:mt-1 lg:ml-24">
                            {profile.email}
                        </h3>
                        <h3 className="mt-1 ml-24 text-black text-sm font-normal text-left lg:mt-1 lg:ml-24">
                            {profile.phone}
                        </h3>
                        <h3
                            className="mt-6 ml-16 text-light-blue text-sm font-normal text-left lg:mt-6 lg:ml-16 cursor-pointer"
                            onClick={() => document.getElementById('fileInput')?.click()}
                        >
                            Edit Picture
                        </h3>
                        <Image src={edit_pen} alt="" className="absolute -mt-5 ml-7 lg:-mt-5 lg:ml-7" />
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
                    <p className="relative ss:mt-3 ss:ml-3 ss:max-w-19.5 sm:mt-3 sm:ml-3 sm:max-w-19.9 lg:max-w-55 text-black text-sm font-normal text-left whitespace-normal resize-none lg:mt-3 lg:ml-7">
                        My name is John, I'm passionate about driving. I thrive in an interdisciplinary
                        environment, and am adept at working collaboratively and autonomously. With a
                        creative and strategic approach, I carry out my tasks and I provide a positive
                        customer experience. I am excited to take on new challenges in the trucking business
                        space and continue developing innovative solutions that improve the customer experience.
                    </p> */}
                </div>

                <div>
                    {/* <h3 className="relative ss:mt-5 ss:ml-2 sm:mt-5 sm:ml-2 text-black text-sm font-bold text-left lg:mt-7 lg:ml-7">
                        Bio
                    </h3>
                    <div>
                        <textarea className="relative ss:mt-3 ss:ml-3 ss:w-19.5 ss:h-15 sm:mt-3 sm:ml-3 sm:w-19.9 sm:h-15 lg:w-55 lg:h-15 bg-gray-lighter text-black text-sm font-normal text-left whitespace-normal resize-none lg:mt-3 lg:ml-7 p-3"
                            placeholder="My name is John, I'm passionate about driving. I thrive in an interdisciplinary
                        environment, and am adept at working collaboratively and autonomously. With a
                        creative and strategic approach, I carry out my tasks and I provide a positive
                        customer experience. I am excited to take on new challenges in the trucking business
                        space and continue developing innovative solutions that improve the customer experience." />
                    </div> */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 ml-7 mt-12">
                        <div className="flex flex-col lg:flex-col gap-3">
                            <label className="text-sm font-bold text-left text-black">First Name</label>
                            <input
                                name="firstName"
                                value={profile.firstName}
                                onChange={handleChange}
                                className="bg-gray-200 w-72 h-10 text-sm text-black p-2 rounded"
                                placeholder="John"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="relative text-sm font-bold text-left text-black">Email Address</label>
                            <input
                                name="email"
                                value={profile.email}
                                onChange={handleChange}
                                className="relative bg-gray-200 h-10 w-72 text-sm text-black p-2 rounded"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 ml-7 mt-6 lg:mt-12">
                        <div className="flex flex-col lg:flex-col gap-3">
                            <label className="relative text-sm font-bold text-left text-black">Last Name</label>
                            <input
                                name="lastName"
                                value={profile.lastName}
                                onChange={handleChange}
                                className="bg-gray-200 h-10 w-72 text-sm text-black p-2 rounded"
                                placeholder="Doe"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-left text-black">Phone Number</label>
                            <input
                                name="phone"
                                value={profile.phone}
                                onChange={handleChange}
                                className="bg-gray-200 h-10 w-72 text-sm text-black p-2 rounded"
                                placeholder="+1 80 222-344-89"
                            />
                        </div>
                    </div>
                    <button
                        onClick={handleSaveChanges}
                        className="w-72 h-10 mt-12 ml-7 bg-blue-950 text-white text-sm rounded hover:bg-blue-900"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile