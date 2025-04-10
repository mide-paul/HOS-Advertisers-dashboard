'use client';
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from './../public/images/logo.png';
import google from './../public/icons/google.png';
import sms from './../public/icons/sms.svg';
import lock from './../public/icons/lock_dark.svg';
import { Eye, EyeOff } from "lucide-react";
import { useAuthStore } from "./store/authStore";
import toast from "react-hot-toast";
import Cookies from "js-cookie"

const EMAIL_REGEX = /^(?=.*[a-z])(?=.*[@]).{3,100}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[?&()_+={}[:;'"<>,|/~!@#$%]).{8,15}$/;


const AdvertisersLogin = () => {
    const userRef = useRef<HTMLInputElement | null>(null);
    const router = useRouter();
    const { login, error } = useAuthStore();
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

    useEffect(() => {
        if (userRef.current) userRef.current.focus();
    }, []);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password));
    }, [password]);

    // // Redirect if already logged in
    // useEffect(() => {
    //     if (isAuthenticated) {
    //         router.push("/sponsors");
    //     }
    // }, [isAuthenticated, router]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validEmail || !validPassword) return;

        setLoading(true);
        try {
            // Simulate login request
            const response = await login(email, password); // Assuming this returns a token or user data
            const { token } = response; // Extract token from response

            if (!token) {
                console.error("❌ Token not found in response.");
                return;
            }

            // Store authentication token in cookies
            Cookies.set("token", token, {
                expires: rememberMe ? 7 : undefined, // 7 days if "Remember Me" is checked, session cookie otherwise
                path: "/", // Cookie accessible across the entire site
                secure: process.env.NODE_ENV === "production", // Use secure cookies in production
                sameSite: "Strict", // Prevent CSRF
            });

            // Remove localStorage since middleware relies on cookies
            localStorage.removeItem("token");

            if (rememberMe) {
                localStorage.setItem("user", JSON.stringify({ email, password }));
            }

            // Show success toast with the username
            const { firstName } = response || {}; // Extract firstName safely
            toast.success(`Welcome back, ${firstName || "User"}!`, {
                duration: 3000,
                position: "top-right",
            });

            router.push("/sponsors");
        } catch (err: any) {
            console.error(err);
            toast.error(err?.data?.message?.message ?? "Login failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <div className="flex items-center justify-center min-h-screen w-full lg:bg-blue-950 p-4">
            <div className="bg-white lg:bg-white rounded shadow p-10 max-w-[310px] lg:min-w-[500px] lg:min-h-[600px]">
                <form onSubmit={handleLogin}>
                    <div className="flex items-center justify-self-center h-6 w-40">
                        <Image src={logo} alt="logo image" />
                    </div>
                    <div>
                        <h3 className="ml-0 mt-11 text-blue text-base font-bold">
                            Sign In
                        </h3>
                        <p className="ml-0 mt-1 pt-2 text-black text-sm font-normal">
                            Welcome back! Please enter your details below
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
                    {!validEmail && email.length > 0 && (
                        <p className="text-xs text-red-600 mt-3">Please enter a valid email address.</p>
                    )}

                    <div className="relative flex mt-7 items-center">
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
                            className="mt-0 min-w-[230px] lg:min-w-[420px] p-2 pl-8 text-sm text-black bg-white border border-gray rounded pr-2"
                        />
                        <Image src={lock} alt="" className="absolute left-2" />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="relative right-7 text-gray-600"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                    {!validPassword && password.length > 0 && (
                        <p className="text-xs text-red-600 mt-1">
                            Please enter a valid password.
                        </p>
                    )}
                    {error && (
                        <p className="text-red-600 text-center text-sm font-semibold mt-2">
                            {typeof error === 'string' ? error : error.message ?? "An unexpected error occurred"}
                        </p>
                    )}
                    <div>
                        <div className="flex items-center">
                            <input
                                type='checkbox'
                                checked={rememberMe}
                                onChange={handleRememberMeChange}
                                className="mt-5 ml-0"
                            />
                            <p className="text-black mt-5 max-w-19 ml-1 text-xs lg:text-sm text-left">
                                Remember me
                            </p>
                        </div>
                        <Link href="/forgot-password">
                            <p className="text-blue-950 -mt-4 lg:-mt-5 max-w-19 ml-32 lg:ml-72 text-xs lg:text-sm text-left z-10 cursor-pointer">
                                Forgot Password?
                            </p>
                        </Link>
                    </div>

                    <button
                        disabled={loading || !validEmail || !validPassword}
                        type="submit"
                        className="bg-blue-950 h-6.2 w-full p-2 ml-0 text-sm text-white rounded mt-3 cursor-pointer hover:bg-blue-900 disabled:bg-gray-400">
                        {loading ? "Signing in..." : "Sign in"}
                    </button>

                    <div>
                        <Image src={google} alt="for facebook link" className="absolute size-4 mt-3 ml-9 lg:ml-36 z-20" />
                        <div className="text-blue-950 text-sm text-center w-full pl-8 lg:pl-12 mt-3 ml-0 border font-bold p-2 w-24.2 rounded hover:bg-gray-300 cursor-pointer z-10">
                            Sign In with Google
                        </div>
                    </div>

                    <div>
                        <p className="relative text-black text-sm lg:text-center mt-6 lg:mt-6 z-10">
                            Don&apos;t have an account?
                            <Link href="/sign-up"><span className="text-blue-950 font-semibold pl-0.5">
                                sign Up</span>
                            </Link>
                        </p>
                    </div>
                </form>

                <div>
                    <h3 className="mt-6 lg:mt-6 ml-3.5 md:ml-0 lg:ml-16 lg:text-nowrap text-center lg:text-left text-xs lg:text-sm text-black">
                        © 2025 Rights are Reserved by hosoptima.com
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default AdvertisersLogin;