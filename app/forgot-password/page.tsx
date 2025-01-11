'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo_white from '../../public/images/logo_white.png';
import locked from '../../public/icons/locked.svg';
import facebook from '../../public/icons/facebook.svg';
import twitter from '../../public/icons/twitter.svg';
import instagram from '../../public/icons/instagram.svg';
import youtube from '../../public/icons/youtube.svg';
import envelope from '../../public/icons/envelope.png';
import { useAuthStore } from "../store/authStore";

const EMAIL_REGEX = /^(?=.*[a-z])(?=.*[@]).{3,23}$/;


const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    // const [emailFocus, setEmailFocus] = useState(false);

    const [isSubmitted, setIsSubmitted] = useState(false);

    const { forgotPassword } = useAuthStore();

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    // const router = useRouter()

    const handleSubmit = async (e: any) => {
		e.preventDefault();
		await forgotPassword(email);
		setIsSubmitted(true);
	};

    return (
        <div className="relative ss:h-68 ss:w-full sm:h-68 sm:w-full lg:h-38 xl:h-59 xl:w-full xx:h-108 xx:w-full overflow-hidden">
            <div className="relative ss:h-68 ss:w-full ss:bg-blue sm:h-68 sm:w-full sm:bg-blue lg:h-42 lg:w-full lg:bg-blue xl:h-120 xl:w-full xl:bg-blue">
                <div className="relative ss:pt-9 ss:ml-4 ss:h-6 ss:w-15 sm:pt-9 sm:ml-4 sm:h-6 sm:w-15 lg:pt-7 lg:ml-10 lg:h-6 lg:w-15 xl:pt-10 xl:ml-13 xx:pt-25 xx:ml-13">
                    <Image src={logo_white} alt="image" />
                </div>

                <div>
                    <Image src={locked} alt="" className="relative ss:mt-7.5 ss:ml-8.5 sm:mt-7.5 sm:ml-10.5 lg:mt-13 lg:ml-10 bg-fade-blue p-5 rounded-full xl:mt-19 xl:ml-13 s:invisible lg:visible xl:visible" />
                </div>

                <div className="relative ss:mt-7 ss:ml-4 sm:mt-7 sm:ml-4 gap-5 flex lg:mt-7 lg:ml-10 xl:mt-17 xl:ml-13">
                    <Link href="https://www.facebook.com/hosoptima"><Image src={facebook} alt="" className="relative" /></Link>
                    <Link href="https://x.com/hosoptima"><Image src={twitter} alt="" className="relative" /></Link>
                    <Link href="https://www.instagram.com/hosoptima_/"><Image src={instagram} alt="" className="relative" /></Link>
                    {/* <Link href="https://www.linkedin.com/company/hosoptima/"><Image src={youtube} alt="" className="relative" /></Link> */}
                    <Image src={youtube} alt="" className="relative" />
                </div>

                <section>
                    <div className="relative ss:mt-10 ss:ml-4 sm:mt-10 sm:ml-4 lg:-mt-27.5 lg:ml-18">
                        <div className="relative ss:w-19.4 ss:h-32.5 ss:mt-5 ss:pt-1 sm:w-21 sm:h-32.5 sm:mt-5 sm:pt-1 lg:w-34 lg:h-34 lg:pt-1 lg:-mt-8 lg:ml-24 bg-white xl:w-40 xl:h-37 xl:pt-1 xl:-mt-40 xl:ml-25 xx:-mt-35 xx:ml-55 rounded">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <h3 className="relative ss:ml-4 ss:mt-9 ss:text-sm sm:ml-4 sm:mt-9 sm:text-sm lg:ml-10 lg:mt-15 xl:mt-12 text-dark lg:text-sm font-bold">
                                        Forgot Password?
                                    </h3>
                                    <p className="relative ss:ml-4 ss:mt-4.5 ss:text-sm sm:ml-4 sm:mt-4.5 sm:text-sm lg:ml-10 lg:mt-1 lg:max-w-24 text-dark lg:text-sm font-normal">
                                        Please provide your email address and we&aposll send a one-time password (OTP) to ensure a secure login
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

                                <button
                                    disabled={!validEmail ? true : false}
                                    type="submit"
                                    className="relative ss:h-6.2 ss:w-19.1 ss:mt-4 ss:ml-4 ss:text-white sm:h-6.2 sm:w-19.6 sm:mt-4 sm:ml-4 sm:text-white bg-blue lg:h-6.2 lg:w-24.2 lg:mt-6 lg:ml-10 text-sm lg:text-white rounded xl:mt-3 xl:w-29 xx:mt-3 xx:w-29 cursor-pointer hover:bg-light-blue disabled:bg-gray">
                                    Reset Password
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ForgotPassword;