import React, { useState, useEffect, useRef } from 'react'
import Image from "next/image";
import { useAuthStore } from '@/app/store/authStore';
import sms from './../public/icons/sms.svg';
import logo from './../public/images/logo.png';

const EMAIL_REGEX = /^(?=.*[a-z])(?=.*[@]).{3,100}$/;

export const ResetPassword: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef<HTMLInputElement[]>([]);

    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutsideDropdown = (e: any) => {
            if (open && !dropdownRef.current?.contains(e.target as Node)) {
                setOpen(false)
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener("click", handleClickOutsideDropdown);
        }

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("click", handleClickOutsideDropdown);
        };
    }, [open]);

    const { forgotPassword, error } = useAuthStore();

    // const router = useRouter()

    const handleChange = (index: any, value: any) => {
        const newCode = [...code];

        if (value.length > 1) {
            const pastedCode = value.slice(0, 6).split("");
            for (let i = 0; i < 6; i++) {
                newCode[i] = pastedCode[i] || "";
            }
            setCode(newCode);
            const lastFilledIndex = newCode.findLastIndex((digit: any) => digit !== "");
            const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
            inputRefs.current[focusIndex].focus();
        } else {
            newCode[index] = value;
            setCode(newCode);

            // Move focus to the next input field if value is entered
            if (value && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index: any, e: any) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();  // Prevent click inside modal from closing it
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await forgotPassword(email);
    };

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-self-center h-6 w-40">
                    <Image src={logo} alt="logo image" />
                </div>

                <div>
                    <h3 className="ml-0 mt-11 text-blue text-base font-bold">
                        Forgot Password?
                    </h3>
                    <p className="ml-0 mt-8 text-blue text-base font-normal">
                        Please provide your email address and we will send a one-time password (OTP) to ensure a secure login
                    </p>
                </div>

                <div className="flex flex-col mt-0 ml-0 gap-1">
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby="uidnote"
                        className="mt-10 w-24.2 p-2 pl-8 text-sm text-black bg-white border border-gray rounded"
                    />
                    <Image src={sms} alt="" className="-mt-8 ml-2" />
                </div>
                <div ref={dropdownRef}>
                    <button
                        disabled={!validEmail ? true : false}
                        type="submit"
                        onClick={() => setOpen(!open)}
                        className="bg-blue-950 h-6.2 w-full p-2 ml-0 text-sm text-white rounded mt-6 cursor-pointer hover:bg-blue-900 disabled:bg-gray-400">
                        Reset Password
                        {open && (
                            <div
                                onClick={handleModalClick} // Stop propagation inside modal
                                className="px-3 lg:px-6 absolute w-72 lg:w-96 -mt-72 lg:-mt-44 -ml-10 lg:ml-0 bg-white rounded items-center justify-center shadow-md z-10">
                                <h3 className="mt-5 text-center text-base text-black font-bold">OTP Verfication</h3>
                                <p className='mt-4 ml-7 lg:max-w-23 text-center text-sm text-black font-normal'>
                                    For verification, we&apos;ve sent a 6-digit code to viviadams@gmail.com.
                                    Please check your inbox and enter the code to complete the process
                                </p>

                                <form onSubmit={handleSubmit}>
                                    <div className="relative flex gap-1 lg:gap-5 mt-5">
                                        {code.map((digit, index) => (
                                            <input
                                                type="code"
                                                key={index}
                                                ref={(el: HTMLInputElement | null) => {
                                                    if (el) {
                                                        inputRefs.current[index] = el;
                                                    }
                                                }}
                                                maxLength={6}
                                                value={digit}
                                                onChange={(e) => handleChange(index, e.target.value)}
                                                onKeyDown={(e) => handleKeyDown(index, e)}
                                                className=" text-black text-2xl p-2 min-w-10 min-h-10 pl-3 h-8 lg:w-8 font-semibold float-left bg-white border border-gray shadow-sm rounded-xl"
                                            />
                                        ))}
                                    </div>
                                    {error && <p className="text-red-600 font-semibold mt-2">{error}</p>}

                                    <button
                                        type="button"
                                        className='mt-5 lg:h-6.3 w-full h-8 lg:text-sm bg-blue-950 text-white text-sm rounded disabled:bg-gray-disabled disabled:text-white font-montserrat'
                                        disabled={code.some((digit) => !digit)}
                                    >
                                        Submit
                                    </button>
                                </form>
                                <div>
                                    <button className='mt-4 pb-4 text-blue-950 font-bold text-center text-sm'>
                                        Resend OTP
                                    </button>
                                </div>
                            </div>
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}