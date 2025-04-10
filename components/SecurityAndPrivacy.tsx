"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import cookies from "js-cookie";
import { Eye, EyeOff } from "lucide-react";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[?&()_+={}[:;'"<>,|/~!@#$%]).{8,15}$/;

const SecurityAndPrivacy = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [validNewPassword, setValidNewPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Validate new password
    useEffect(() => {
        setValidNewPassword(PWD_REGEX.test(newPassword));
    }, [newPassword]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission

        if (!validNewPassword) {
            toast.error("New password does not meet the required criteria.");
            return;
        }

        try {
            const token = cookies.get("token"); // Retrieve token from cookies
            if (!token) {
                throw new Error("No token found");
            }

            const response = await fetch(
                "https://api.hosoptima.com/api/v1/ad-manager/reset-password",
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        currentPassword, // Send current password
                        newPassword, // Send new password
                    }),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to change password");
            }

            // Show success toast
            toast.success("Password changed successfully!");
            setCurrentPassword(""); // Clear inputs
            setNewPassword("");
        } catch (error: any) {
            // Show error toast
            toast.error(error.message);
        }
    };

    return (
        <div className="h-screen w-full bg-white overflow-hidden">
            <div className="ml-0 md:ml-1 lg:ml-1 mt-4 pt-1 w-full h-50 rounded pb-8">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h3 className="ml-5 text-black text-sm font-bold text-left">Change Password</h3>
                    </div>
                    <div>
                        <div className="ml-5 mt-4 w-80 h-52 bg-white lg:w-80 lg:h-48 border rounded lg:mt-4">
                            <div className="flex flex-col gap-2 ml-4 mt-4 lg:ml-4 lg:mt-4">
                                <h3 className="text-sm text-left text-black">Current Password</h3>
                                <div className="flex items-center">
                                    <input
                                        className="relative text-sm text-black w-72 h-10 pl-4 bg-gray-200 rounded"
                                        placeholder="Enter your current password"
                                        id="currentPassword"
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                        type={showPassword ? "text" : "password"}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="relative right-7 text-gray-600"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 ml-4 mt-4 lg:ml-4 lg:mt-4">
                                <h3 className="relative text-sm text-left text-black">Enter New Password</h3>
                                <div className="flex items-center">
                                    <input
                                        className="relative text-sm text-black w-72 h-10 pl-4 bg-gray-200 rounded"
                                        placeholder="Enter new password"
                                        id="newPassword"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        type={showPassword ? "text" : "password"}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="relative right-7 text-gray-600"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="relative ss:ml-2 ss:mt-4 ss:w-19.51 ss:h-16 sm:ml-2 sm:mt-4 sm:w-20 sm:h-16 bg-white lg:w-35 lg:h-13 border rounded lg:ml-7 lg:mt-5">
                        <div className="flex flex-col gap-2 ss:ml-4 ss:mt-4 sm:ml-4 sm:mt-4 lg:ml-4 lg:mt-4">
                            <div className="flex flex-row ss:gap-15 sm:gap-15.6 lg:gap-26">
                            <h3 className="relative text-sm font-semibold text-left">Enable 2FA</h3>
                            <Image src={toggle_icon} alt="" className="relative cursor-pointer" />
                            </div>
                            <p className="relative text-sm text-gray font-normal text-left ss:max-w-19.3 sm:max-w-19.5 lg:max-w-33">
                                Two-Factor Authentication (2FA) is an extra layer of security that requires two
                                forms of identification during login, adding enhanced protection to your account.
                                It reduces the risk of unauthorized access, providing peace of mind and
                                safeguarding against cyber threats. Enable 2FA for added security.
                            </p>
                        </div>
                    </div> */}
                    {/* <div>
                        <div className="ml-5 mt-4 w-80 h-11 bg-white border rounded lg:ml-7 lg:mt-7">
                            <div className="w-72 h-8 mt-1 ml-3 bg-gray-200 lg:w-72 lg:h-8 rounded">
                                <h3 className="pl-8 pt-1 text-sm text-left text-gray cursor-pointer">Log Out</h3>
                                <Image src={logout} alt="" className="ml-1 -mt-4.5 -mt-4 size-4 lg:ml-1 cursor-pointer" />
                                <Image src={arrow_right} alt="" className="-mt-4 ml-64 lg:-mt-4 size-4 z-10 cursor-pointer" />
                            </div>
                        </div>
                    </div> */}
                    <button
                        disabled={!validNewPassword}
                        type="submit"
                        className="w-80 ml-5 h-8 mt-6 bg-blue-950 text-white text-sm rounded hover:bg-blue-900 disabled:bg-gray-400"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SecurityAndPrivacy;
export const dynamic = "force-dynamic";