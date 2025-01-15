import React, { useState, useEffect, useRef } from 'react'
import Image from "next/image";
import { useAuthStore } from '@/app/store/authStore';
import envelope from './../public/icons/envelope.png';

const EMAIL_REGEX = /^(?=.*[a-z])(?=.*[@]).{3,23}$/;

export const ResetPassword: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef<HTMLInputElement[]>([]);

    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutsideDropdown =(e:any)=>{
            if(open && !dropdownRef.current?. contains(e.target as Node)){
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
        <div className="flex flex-col ss:-ml-4 sm:-ml-4 lg:ml-0.1 items-center justify-center">
            <section>
                <div className="relative ss:mt-10 ss:ml-4 sm:mt-10 sm:ml-4 lg:-mt-27.5 lg:ml-13">
                    <div className="relative ss:w-19.4 ss:h-32.5 ss:mt-5 ss:pt-1 sm:w-21 sm:h-32.5 sm:mt-5 sm:pt-1 lg:w-34 lg:h-34 lg:pt-1 lg:-mt-8 lg:ml-24 bg-white xl:w-40 xl:h-37 xl:pt-1 xl:-mt-40 xl:ml-25 xx:-mt-35 xx:ml-55 rounded">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <h3 className="relative ss:ml-4 ss:mt-9 ss:text-sm sm:ml-4 sm:mt-9 sm:text-sm lg:ml-10 lg:mt-15 xl:mt-12 text-dark lg:text-sm font-bold">
                                    Forgot Password?
                                </h3>
                                <p className="relative ss:ml-4 ss:mt-4.5 ss:text-sm sm:ml-4 sm:mt-4.5 sm:text-sm lg:ml-10 lg:mt-1 lg:max-w-24 text-dark lg:text-sm font-normal">
                                    Please provide your email address and we will send a one-time password (OTP) to ensure a secure login
                                </p>
                            </div>

                            <div className="flex ss:gap-2 ss:flex-col ss:mt-4 ss:ml-4 sm:gap-2 sm:flex-col lg:flex-col sm:mt-4 sm:ml-4 lg:mt-3 lg:ml-10 lg:gap-1 xl:ml-10 xx:ml-10">
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
                                    // onFocus={() => setEmailFocus(true)}
                                    // onBlur={() => setEmailFocus(false)}
                                    className="relative ss:mt-4 ss:w-19.1 ss:h-6.2 ss:pl-5.3 ss:text-sm ss:text-dark ss:bg-white sm:mt-4 sm:w-19.6 sm:h-6 sm:pl-5.3 sm:text-sm sm:text-dark sm:bg-white lg:mt-0 lg:w-24.2 lg:h-6.2 lg:pl-5.3 lg:text-sm lg:text-dark lg:bg-white border border-gray rounded xl:w-29 xx:w-29"
                                />
                                <Image src={envelope} alt="" className="relative ss:-mt-6.25 ss:ml-1 ss:h-4 ss:w-4 sm:-mt-6.2 sm:ml-1 sm:h-4 sm:w-4 lg:-mt-6.1 lg:ml-1" />
                                {/* <p id="uidnote" className={emailFocus && email &&
                                        !validEmail ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        4 to 24 characters.<br />
                                        Must begin with a letter. <br />
                                        only lowercase is allowed.
                                        Allowed special characters: @
                                    </p> */}
                            </div>
                            <div ref={dropdownRef}>
                                <button
                                    disabled={!validEmail ? true : false}
                                    type="submit"
                                    onClick={() => setOpen(!open)}
                                    className="relative ss:h-6.2 ss:w-19.1 ss:mt-4 ss:ml-4 ss:text-white sm:h-6.2 sm:w-19.6 sm:mt-4 sm:ml-4 sm:text-white bg-blue lg:h-6.2 lg:w-24.2 lg:mt-6 lg:ml-10 text-sm lg:text-white rounded xl:mt-3 xl:w-29 xx:mt-3 xx:w-29 cursor-pointer hover:bg-light-blue disabled:bg-gray">
                                    Reset Password
                                    {open && (
                                        <div
                                        onClick={handleModalClick} // Stop propagation inside modal
                                        className="absolute ss:-ml-5 ss:-mt-17 ss:w-19.7 ss:h-22 sm:-ml-5 sm:-mt-17 sm:w-21.9 sm:h-22 lg:-ml-20 lg:-mt-17 lg:w-30 lg:h-22 bg-white rounded items-center justify-center shadow">
                                            <h3 className="ss:mt-5 sm:mt-5 lg:mt-5 text-center text-base text-dark font-bold">OTP Verfication</h3>
                                            <p className='mt-4 sm:ml-1 ss:max-w-20 sm:max-w-21 lg:ml-7 lg:max-w-23 text-center text-sm text-dark font-normal'>
                                                For verification, we&apos;ve sent a 6-digit code to viviadams@gmail.com.
                                                Please check your inbox and enter the code to complete the process
                                            </p>

                                            <form onSubmit={handleSubmit}>
                                                <div className="relative flex ss:gap-0 sm:gap-1 lg:gap-0.1">
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
                                                            className="relative text-dark ss:text-xl ss:p-1 ss:pl-1.5 ss:ml-4 ss:mt-5.4 ss:h-6.2 ss:w-6 sm:text-xl sm:p-1 sm:pl-1.5 sm:ml-4 sm:mt-5.4 sm:h-6.2 sm:w-6 lg:text-2xl lg:p-3 lg:pl-4.6 lg:h-8 lg:w-8 font-semibold float-left sm:bg-white border border-gray shadow-sm rounded-xl"
                                                        />
                                                    ))}
                                                </div>
                                                {error && <p className="text-red font-semibold mt-2">{error}</p>}

                                                <button
                                                    type="button"
                                                    className='relative ss:mt-6 ss:ml-0 ss:h-6.3 ss:w-19 ss:text-sm sm:mt-6 sm:ml-0 sm:h-6.3 sm:w-19 sm:text-base lg:mt-5 lg:h-6.3 lg:w-19 lg:text-sm bg-blue text-white text-sm rounded disabled:bg-gray-lighter disabled:text-white font-montserrat'
                                                    disabled={code.some((digit) => !digit)}
                                                >
                                                    Submit
                                                </button>
                                            </form>
                                            <div>
                                                <button className='mt-4 text-blue font-bold text-center text-sm'>
                                                    Resend OTP
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}