'use client';
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
// import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo_white from './../public/images/logo_white.png';
import truck_white from './../public/icons/truck_white.svg';
import facebook from './../public/icons/facebook.svg';
import twitter from './../public/icons/twitter.svg';
import instagram from './../public/icons/instagram.svg';
import youtube from './../public/icons/youtube.svg';
import google from './../public/icons/google.png';
import sms from './../public/icons/sms.svg';
import lock from './../public/icons/lock_dark.svg';
import { Eye, EyeOff } from "lucide-react";
import { useAuthStore } from "./store/authStore";

const EMAIL_REGEX = /^(?=.*[a-z])(?=.*[@]).{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[?&()_+={}[:;'"<>,|/~!@#$%]).{8,15}$/;


const AdvertisersLogin = () => {
    const userRef = useRef<HTMLInputElement | null>(null);
    const router = useRouter();
    const { login, error, user, isAuthenticated } = useAuthStore();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    // const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    // const [passwordFocus, setPasswordFocus] = useState(false);

    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);

    const [type, setType] = useState('password');
    //   const [icon, setIcon] = useState(eyeOff);

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
        if (userRef.current) userRef.current.focus();
    }, []);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password));
    }, [password]);

    // Redirect if already logged in
    useEffect(() => {
        if (isAuthenticated) {
            router.push("/sponsors");
        }
    }, [isAuthenticated, router]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validEmail || !validPassword) return;

        setLoading(true);
        try {
            // Simulate login request
            const response = await login(email, password); // Assuming this returns a token or user data
            const { token } = response; // Extract token from response

            // Set authentication cookie
            setCookie("authToken", token, {
                maxAge: rememberMe ? 60 * 60 * 24 * 7 : 0, // 7 days if "Remember Me" is checked, session cookie otherwise
                path: "/", // Cookie accessible across the site
                secure: process.env.NODE_ENV === "production", // Use secure cookies in production
                sameSite: "strict", // Prevent CSRF
            });

            if (rememberMe) {
                localStorage.setItem("user", JSON.stringify({ email, password }));
            }

            router.push("/sponsors");
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <div className="relative ss:h-68 ss:w-full sm:h-68 sm:w-full lg:h-38 xl:h-59 xl:w-full xx:h-108 xx:w-full overflow-hidden">
            <div className="relative ss:h-68 ss:w-full ss:bg-blue sm:h-68 sm:w-full sm:bg-blue lg:h-42 lg:w-full lg:bg-blue xl:h-120 xl:w-full xl:bg-blue">
                <div className="relative ss:pt-9 ss:ml-4 ss:h-6 ss:w-15 sm:pt-9 sm:ml-4 sm:h-6 sm:w-15 md:ml-17 lg:pt-7 lg:ml-10 lg:h-6 lg:w-15 xl:pt-10 xl:ml-13 xx:pt-25 xx:ml-13">
                    <Image src={logo_white} alt="image" />
                </div>

                <div>
                    <Image src={truck_white} alt="" className="relative ss:mt-7.5 ss:ml-8.5 sm:mt-7.5 sm:ml-10.5 md:ml-17 lg:mt-13 lg:ml-10 bg-fade-blue p-5 rounded-full xl:mt-19 xl:ml-13 s:invisible lg:visible xl:visible" />
                </div>

                <div className="relative ss:mt-7 ss:ml-4 sm:mt-7 sm:ml-4 gap-5 flex md:ml-17 lg:mt-7 lg:ml-10 xl:mt-17 xl:ml-13">
                    <Link href="https://www.facebook.com/hosoptima"><Image src={facebook} alt="" className="relative" /></Link>
                    <Link href="https://x.com/hosoptima"><Image src={twitter} alt="" className="relative" /></Link>
                    <Link href="https://www.instagram.com/hosoptima_/"><Image src={instagram} alt="" className="relative" /></Link>
                    {/* <Link href="https://www.linkedin.com/company/hosoptima/"><Image src={youtube} alt="" className="relative" /></Link> */}
                    <Image src={youtube} alt="" className="relative" />
                </div>

                <section>
                    <div className="relative ss:mt-10 ss:ml-4 sm:mt-10 sm:ml-4 lg:-mt-27.5 lg:ml-18">
                        <div className="relative ss:w-19.4 ss:h-32.5 ss:mt-5 ss:pt-1 sm:w-21 sm:h-32.5 sm:mt-5 sm:pt-1 md:ml-16 lg:w-34 lg:h-34 lg:pt-1 lg:-mt-8 lg:ml-24 bg-white xl:w-40 xl:h-37 xl:pt-1 xl:-mt-40 xl:ml-25 xx:-mt-35 xx:ml-55 rounded">
                            <form onSubmit={handleLogin}>
                                <div>
                                    <h3 className="relative ss:ml-4 ss:mt-9 ss:text-sm sm:ml-4 sm:mt-9 sm:text-sm lg:ml-10 lg:mt-11 xl:mt-12 text-blue lg:text-base font-bold">
                                        Sign In
                                    </h3>
                                    <p className="relative ss:ml-4 ss:mt-4.5 ss:text-sm sm:ml-4 sm:mt-4.5 sm:text-sm lg:ml-10 lg:mt-1 text-dark lg:text-sm font-normal">
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
                                    <Image src={sms} alt="" className="relative ss:-mt-6.25 ss:ml-1 ss:h-4 ss:w-4 sm:-mt-6.2 sm:ml-1 sm:h-4 sm:w-4 lg:-mt-6.1 lg:ml-1" />
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
                                        type={showPassword ? "text" : "password"}
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
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="relative right-7 ss:-mt-6.3 ss:ml-19.27 ss:pl-0 sm:-mt-6.2 sm:ml-20 sm:pl-0 lg:-mt-6.2 lg:ml-24 lg:pl-5 text-gray xl:ml-28.7"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                    <Image src={lock} alt="" className="relative ss:-mt-5.3 ss:ml-1 ss:h-4 ss:w-4 sm:-mt-5.4 sm:ml-1 sm:h-4 sm:w-4 lg:-mt-5.2 lg:ml-1 lg:h-4 lg:w-4" />
                                    {/* <p id="pwdnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    8 to 15 characters.<br />
                                    Must include at least two uppercase letters, at least three lowercase letters, at least two digits and a special character.<br />
                                </p> */}
                                </div>
                                {error && <p className="text-red text-center font-semibold mt-2 text-sm">{error}</p>}

                                <div>
                                    <input
                                        type='checkbox'
                                        checked={rememberMe}
                                        onChange={handleRememberMeChange}
                                        className="relative ss:mt-5 ss:ml-4 sm:mt-5 sm:ml-4 lg:mt-5 lg:ml-10 xl:mt-5 xl:ml-10 z-10"
                                    />
                                    <p className="relative ss:-mt-4.6 ss:ml-6.2 ss:text-sm sm:-mt-4.6 sm:ml-6.2 sm:text-sm text-dark lg:-mt-4.6 max-w-19 lg:ml-11 xl:-mt-4.6 xl:ml-11 lg:text-sm text-left xx:-mt-4.6 xx:ml-11 z-10">
                                        Remember me
                                    </p>
                                    <Link href="/forgot-password">
                                        <p className="relative ss:-mt-4.5 ss:ml-15 ss:text-sm sm:-mt-4.5 sm:ml-16.5 sm:text-sm text-light-blue lg:-mt-4.5 max-w-19 lg:ml-22 lg:text-sm text-left z-10 xl:-mt-4.6 xl:ml-27 xx:-mt-4.6 xx:ml-27 cursor-pointer">
                                            Forgot Password?
                                        </p>
                                    </Link>
                                </div>

                                <button
                                    disabled={loading || !validEmail || !validPassword}
                                    type="submit"
                                    className="relative ss:h-6.2 ss:w-19.1 ss:mt-4 ss:ml-4 ss:text-white sm:h-6.2 sm:w-19.6 sm:mt-4 sm:ml-4 sm:text-white bg-blue lg:h-6.2 lg:w-24.2 lg:ml-10 text-sm lg:text-white rounded lg:mt-3 xl:mt-3 xl:w-29 xx:mt-3 xx:w-29 cursor-pointer hover:bg-light-blue disabled:bg-gray-disabled">
                                    {loading ? "Signing in..." : "Sign in"}
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
                    <h3 className="relative ss:mt-6 ss:ml-0 ss:text-sm ss:text-center sm:mt-6 sm:ml-0 sm:text-sm sm:text-center lg:-mt-7 lg:ml-10 lg:text-left lg:text-sm text-white xl:text-left xl:text-base xl:mt-12 xl:ml-13 xx:mt-19">
                        © 2025 Rights are Reserved by hosoptima.com
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default AdvertisersLogin;