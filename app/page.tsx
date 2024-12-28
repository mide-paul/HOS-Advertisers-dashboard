'use client';
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo_white from './../public/images/logo_white.png';
import truck_white from './../public/icons/truck_white.png';
import facebook from './../public/icons/facebook_signup2.png';
import twitter from './../public/icons/twitter_signup.png';
import instagram from './../public/icons/instagram_signup.png';
import youtube from './../public/icons/youtube_signup.png';
import google from './../public/icons/google.png';
import envelope from './../public/icons/envelope.png';
import lock from './../public/icons/lock_dark.svg';
// import { Icon } from 'react-icons-kit';
// import { eyeOff } from 'react-icons-kit/feather/eyeOff';
// import { eye } from 'react-icons-kit/feather/eye';
import { useAuthStore } from "./store/authStore";

const EMAIL_REGEX = /^(?=.*[a-z])(?=.*[@]).{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z][a-z][a-z])(?=.*[A-Z][A-Z])(?=.*[0-9][0-9])(?=.*[?&()_+={}[:;'"<>,|/~!@#$%]).{8,15}$/;


const CompanyLogin = () => {
    const userRef = useRef<HTMLInputElement | null>(null);

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    // const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    // const [passwordFocus, setPasswordFocus] = useState(false);

    const [type, setType] = useState('password');
    //   const [icon, setIcon] = useState(eyeOff);

    const { login, error } = useAuthStore();

    //   const handleToggle = () => {
    //     if (type === 'password') {
    //       setIcon(eye);
    //       setType('text')
    //     } else {
    //       setIcon(eyeOff)
    //       setType('password')
    //     }
    //   }

    useEffect(() => {
        if (userRef.current !== null) {
            userRef.current.focus();
        }
    }, [])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password));
    }, [password])

    const router = useRouter()

    const handleLogin = async (e: any) => {
        e.preventDefault();
        await login(email, password);
        router.push("/sponsors");
    };

    return (
        <div className="relative ss:h-68 ss:w-full sm:h-68 sm:w-full lg:h-38 xl:h-59 xl:w-full xx:h-108 xx:w-full overflow-hidden">
            <div className="relative ss:h-68 ss:w-full ss:bg-blue sm:h-68 sm:w-full sm:bg-blue lg:h-42 lg:w-full lg:bg-blue xl:h-120 xl:w-full xl:bg-blue">
                <div className="relative ss:pt-9 ss:ml-4 ss:h-6 ss:w-15 sm:pt-9 sm:ml-4 sm:h-6 sm:w-15 lg:pt-7 lg:ml-10 lg:h-6 lg:w-15 xl:pt-10 xl:ml-13 xx:pt-25 xx:ml-13">
                    <Image src={logo_white} alt="image" />
                </div>

                <div>
                    <Image src={truck_white} alt="" className="relative ss:mt-7.5 ss:ml-8.5 sm:mt-7.5 sm:ml-10.5 lg:mt-13 lg:ml-10 bg-fade-blue p-5 rounded-full xl:mt-19 xl:ml-13 s:invisible lg:visible xl:visible" />
                </div>

                <div className="relative ss:mt-7 ss:ml-4 sm:mt-7 sm:ml-4 gap-5 flex lg:mt-7 lg:ml-10 xl:mt-17 xl:ml-13">
                    <Image src={facebook} alt="" className="relative" />
                    <Image src={twitter} alt="" className="relative" />
                    <Image src={instagram} alt="" className="relative" />
                    <Image src={youtube} alt="" className="relative" />
                </div>

                <section>
                    <div className="relative ss:mt-10 ss:ml-4 sm:mt-10 sm:ml-4 lg:-mt-27.5 lg:ml-18">
                        <div className="relative ss:w-19.4 ss:h-32.5 ss:mt-5 ss:pt-1 sm:w-21 sm:h-32.5 sm:mt-5 sm:pt-1 lg:w-34 lg:h-34 lg:pt-1 lg:-mt-8 lg:ml-24 bg-white xl:w-40 xl:h-37 xl:pt-1 xl:-mt-40 xl:ml-25 xx:-mt-35 xx:ml-55 rounded">
                            <form onSubmit={handleLogin}>
                                <div>
                                    <h3 className="relative ss:ml-4 ss:mt-9 ss:text-sm sm:ml-4 sm:mt-9 sm:text-sm lg:ml-10 lg:mt-11 text-blue lg:text-base font-bold">
                                        Sign In
                                    </h3>
                                    <p className="relative ss:ml-4 ss:mt-4.5 ss:text-sm sm:ml-4 sm:mt-4.5 sm:text-sm lg:ml-10 lg:mt-1 text-dark lg:text-sm font-medium">
                                        Welcome back! Please enter your details below
                                    </p>
                                </div>

                                <div className="flex ss:gap-2 ss:flex-col ss:mt-4 ss:ml-4 sm:gap-2 sm:flex-col lg:flex-col sm:mt-4 sm:ml-4 lg:-mt-8 lg:ml-10 lg:gap-1 xl:ml-10 xx:ml-10">
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
                                        className="relative ss:mt-4 ss:w-19.1 ss:h-6.2 ss:pl-5.3 ss:text-sm ss:text-dark ss:bg-white sm:mt-4 sm:w-19.6 sm:h-6 sm:pl-5.3 sm:text-sm sm:text-dark sm:bg-white lg:mt-10 lg:w-24.2 lg:h-6.2 lg:pl-5.3 lg:text-sm lg:text-dark lg:bg-white border border-gray rounded xl:w-29 xx:w-29"
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

                                <div className="flex ss:gap-2 ss:flex-col ss:ml-4 ss:mt-6 sm:gap-2 sm:flex-col sm:ml-4 sm:mt-6 lg:flex-col lg:ml-10 lg:mt-5 lg:gap-1 xl:ml-10 xx:ml-10">
                                    <input
                                        type={type}
                                        id="password"
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        required
                                        autoComplete="new-password"
                                        aria-invalid={validPassword ? "false" : "true"}
                                        aria-describedby="pwdnote"
                                        // onFocus={() => setPasswordFocus(true)}
                                        // onBlur={() => setPasswordFocus(false)}
                                        className="relative ss:w-19.1 ss:h-6.2 ss:pl-5.3 ss:text-sm ss:text-dark ss:bg-white sm:w-19.6 sm:h-6 sm:pl-5.3 sm:text-sm sm:text-dark sm:bg-white lg:w-24.2 lg:h-6.2 lg:pl-5.3 lg:text-sm lg:text-dark lg:bg-white border border-gray rounded xl:w-29 xx:w-29"
                                    />
                                    <Image src={lock} alt="" className="relative ss:-mt-6.25 ss:ml-1 ss:h-4 ss:w-4 sm:-mt-6.2 sm:ml-1 sm:h-4 sm:w-4 lg:-mt-6.1 lg:ml-1 lg:h-4 lg:w-4" />
                                    {/* <p id="pwdnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    8 to 15 characters.<br />
                                    Must include at least two uppercase letters, at least three lowercase letters, at least two digits and a special character.<br />
                                </p> */}
                                </div>
                                {error && <p className="text-red text-center font-semibold mt-2">{error}</p>}

                                <div>
                                    <input
                                        type='checkbox'
                                        className="relative ss:mt-5 ss:ml-4 sm:mt-5 sm:ml-4 lg:mt-5 lg:ml-10 xl:mt-5 xl:ml-10 z-10" />
                                    <p className="relative ss:-mt-4.6 ss:ml-6.2 ss:text-sm sm:-mt-4.6 sm:ml-6.2 sm:text-sm text-light-blue lg:-mt-4.6 max-w-19 lg:ml-11 xl:-mt-4.6 xl:ml-11 lg:text-sm text-left xx:-mt-4.6 xx:ml-11 z-10">
                                        Remember me
                                    </p>
                                    <p className="relative ss:-mt-4.5 ss:ml-15 ss:text-sm sm:-mt-4.5 sm:ml-16.5 sm:text-sm text-light-blue lg:-mt-4.5 max-w-19 lg:ml-22 lg:text-sm text-left z-10 xl:-mt-4.6 xl:ml-27 xx:-mt-4.6 xx:ml-27 cursor-pointer">
                                        Forgot Password?
                                    </p>
                                </div>

                                <button
                                    disabled={!validEmail || !validPassword ? true : false}
                                    type="submit"
                                    className="relative ss:h-6.2 ss:w-19.1 ss:mt-4 ss:ml-4 ss:text-white sm:h-6.2 sm:w-19.6 sm:mt-4 sm:ml-4 sm:text-white bg-blue lg:h-6.2 lg:w-24.2 lg:ml-10 text-sm lg:text-white rounded lg:mt-3 xl:mt-3 xl:w-29 xx:mt-3 xx:w-29 cursor-pointer hover:bg-light-blue disabled:bg-gray-light">
                                    Sign in
                                </button>

                                <div>
                                    <div className="relative ss:mt-5 ss:ml-4 ss:h-6.2 ss:w-19.1 ss:text-center sm:mt-5 sm:ml-4 sm:h-6.2 sm:w-19.6 sm:text-center text-light-blue text-sm lg:text-center lg:mt-5 lg:ml-10 border font-bold lg:h-6.2 pt-1 lg:w-24.2 xl:mt-6 xl:ml-10 xl:w-29 xx:w-29 rounded hover:bg-gray-light cursor-pointer z-10">
                                        Sign In with Google
                                    </div>
                                    <Image src={google} alt="for facebook link" className="relative ss:ml-8 ss:-mt-5.1 sm:ml-10 sm:-mt-5.1 size-4 lg:ml-15.7 lg:-mt-5.1 xl:ml-17.5 xx:ml-17.5 z-10" />
                                </div>

                                {/* <div>
                                    <p className="relative text-dark text-sm lg:text-center lg:mt-6 xl:mt-6 xl:ml-1 xx:mt-6 xx:ml-1 z-10">
                                        Don&apos;t have an account?
                                        <Link href="/sign-up"><span className="text-blue font-semibold pl-0.5">
                                            sign Up</span>
                                        </Link>
                                    </p>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </section>

                {/* <span className="items-center" onClick={handleToggle}>
                    <Icon className="absolute lg:ml-28.7 lg:mt-19.9 z-10 xl:mt-28.3 xl:ml-24 cursor-pointer" icon={icon} size={20} />
                </span> */}

                <div>
                    <h3 className="relative ss:mt-6 ss:ml-0 ss:text-sm ss:text-center sm:mt-6 sm:ml-0 sm:text-sm sm:text-center lg:-mt-7 lg:ml-10 lg:text-left lg:text-sm text-white xl:text-left xl:text-base xl:mt-12 xl:ml-13 xx:mt-19">© 2024 Rights are Reserved by HOSOptima.com</h3>
                </div>
            </div>
        </div>
    );
};

export default CompanyLogin;