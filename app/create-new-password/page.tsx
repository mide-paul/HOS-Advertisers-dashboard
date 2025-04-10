'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import logo from '../../public/images/logo.png';
import lock from '../../public/icons/lock_dark.svg';
import { useAuthStore } from "../store/authStore";
import { Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[?&()_+={}[:;'"<>,|/~!@#$%]).{8,15}$/;


const CreatePassword = () => {

    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(false);
    // const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    //const [matchFocus, setMatchFocus] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const { resetPassword, error } = useAuthStore();

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password));
    }, [password])

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password));
        setValidMatch(password === matchPassword);
    }, [password, matchPassword])

    const { token } = useParams<{ token: string }>();
    const router = useRouter()

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (password !== matchPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            await resetPassword(token, password);

            toast.success("Password reset successfully, redirecting to login page...");
            setTimeout(() => {
                router.push("/");
            }, 2000);
        } catch (error: any) {
            console.error(error);
            toast.error(error.message || "Error resetting password");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen w-full lg:bg-blue-950 p-4">
            <div className="bg-white lg:bg-white rounded shadow p-10 max-w-[310px] lg:min-w-[500px] lg:min-h-[600px]">
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center justify-self-center h-6 w-40">
                        <Image src={logo} alt="logo image" />
                    </div>
                    <div>
                        <h3 className="ml-0 mt-11 text-blue text-base font-bold">
                            Create new password
                        </h3>
                        <p className="ml-0 mt-1 pt-2 text-black text-sm font-normal">
                            Create a strong and unique password that you&apos;ll use to access your account regularly.
                        </p>
                    </div>

                    <div className="relative flex mt-6 items-center">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Password"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            aria-invalid={validPassword ? "false" : "true"}
                            aria-describedby="uidnote"
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

                    <div className="relative flex mt-6 items-center">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="confirmpassword"
                            placeholder="Confirm Password"
                            autoComplete="off"
                            value={matchPassword}
                            onChange={(e) => setMatchPassword(e.target.value)}
                            required
                            aria-invalid={validPassword ? "false" : "true"}
                            aria-describedby="uidnote"
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
                    {error && (
                        <p className="text-red-600 text-center text-sm font-semibold mt-2">
                            {typeof error === 'string' ? error : error.message ?? "An unexpected error occurred"}
                        </p>
                    )}

                    <button
                        disabled={!validPassword || !validMatch ? true : false}
                        type="submit"
                        className="bg-blue-950 h-6.2 w-full p-2 ml-0 text-sm text-white rounded mt-6 cursor-pointer hover:bg-blue-900 disabled:bg-gray-400">
                        Reset Password
                    </button>
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

export default CreatePassword;
export const dynamic = "force-dynamic";