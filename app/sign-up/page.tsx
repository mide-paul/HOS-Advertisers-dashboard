'use client';
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import google from '../../public/icons/google.png';
import { Eye, EyeOff } from "lucide-react";
import { useAuthStore } from "../store/authStore";
import logo from '../../public/images/logo.png';
import user from '../../public/icons/user.svg';
import sms from '../../public/icons/sms.svg';
import call from '../../public/icons/call.svg';
import lock from '../../public/icons/lock_dark.svg';
import toast from "react-hot-toast";

const USER_REGEX = /^[A-z][A-z0-9-_ ]{0,40}$/;
const EMAIL_REGEX = /^(?=.*[a-z])(?=.*[@]).{3,100}$/;
const NUMBER_REGEX = /^[0-9-_ ]{9,20}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[?&()_+={}[:;'"<>,|/~!@#$%]).{8,15}$/;


const CompanySignup = () => {
  const userRef = useRef<HTMLInputElement | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [firstName, setFirstName] = useState('');
  const [validFirstName, setValidFirstName] = useState(false);
  //const [companyNameFocus, setcompanyNameFocus] = useState(false);

  const [lastName, setLastName] = useState('');
  const [validLastName, setValidLastName] = useState(false);
  //const [companyNameFocus, setcompanyNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  //const [emailFocus, setemailFocus] = useState(false);

  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  // const [phoneFocus, setPhoneFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  //const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  //const [matchFocus, setMatchFocus] = useState(false);

  const [success, setSuccess] = useState(false);

  const { signup, error } = useAuthStore();

  useEffect(() => {
    if (userRef.current !== null) {
      userRef.current.focus();
    }
  }, [])

  useEffect(() => {
    setValidFirstName(USER_REGEX.test(firstName));
  }, [firstName])

  useEffect(() => {
    setValidLastName(USER_REGEX.test(lastName));
  }, [lastName])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email])

  useEffect(() => {
    setValidPhone(NUMBER_REGEX.test(phone));
  }, [phone]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidMatch(password === matchPassword);
  }, [password, matchPassword])

  const router = useRouter()

  const handleSignup = async (e: any) => {
    e.preventDefault();
    try {
      await signup(email, password, firstName, lastName, phone);
      setSuccess(true);
      toast.success("Registration successfull.", {
        duration: 3000,
        position: "top-right",
      });
      router.push("/");
    } catch (error: any) {
      toast.error(error?.data?.message?.message ?? "Sign up failed. Please try again.");
    }
  }

  return (
    <main>
      <div className="flex items-center justify-center min-h-screen w-full lg:bg-blue-950 p-4">
        <div className="bg-white lg:bg-white rounded shadow p-10 max-w-[310px] lg:min-w-[500px] lg:min-h-[600px]">
          <form onSubmit={handleSignup}>
            <div className="flex items-center justify-self-center h-6 w-40">
              <Image src={logo} alt="logo image" />
            </div>
            <div>
              <h3 className="ml-0 mt-8 text-blue text-base font-bold">
                Sign Up
              </h3>
            </div>

            <div className="flex flex-col mt-0 ml-0 gap-1">
              <input
                type="username"
                id="firstname"
                placeholder="First Name"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                required
                aria-invalid={validFirstName ? "false" : "true"}
                aria-describedby="uidnote"
                className="mt-8 w-24.2 p-2 pl-8 text-sm text-black bg-white border border-gray rounded"
              />
              <Image src={user} alt="" className="-mt-8 ml-2" />
            </div>

            <div className="flex flex-col mt-0 ml-0 gap-1">
              <input
                type="username"
                id="lastname"
                placeholder="Last Name"
                autoComplete="off"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                required
                aria-invalid={validLastName ? "false" : "true"}
                aria-describedby="uidnote"
                className="mt-10 w-24.2 p-2 pl-8 text-sm text-black bg-white border border-gray rounded"
              />
              <Image src={user} alt="" className="-mt-8 ml-2" />
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

            <div className="flex flex-col mt-0 ml-0 gap-1">
              <input
                type="phone"
                id="phone"
                placeholder="Phone Number"
                autoComplete="off"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
                aria-invalid={validPhone ? "false" : "true"}
                aria-describedby="uidnote"
                className="mt-10 w-24.2 p-2 pl-8 text-sm text-black bg-white border border-gray rounded"
              />
              <Image src={call} alt="" className="-mt-8 ml-2 size-4" />
            </div>

            <div className="relative flex mt-11 items-center">
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
                Password must be 8-15 characters and include uppercase, lowercase, number, and special character.
              </p>
            )}

            <div className="relative flex mt-8 items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="confirmpassword"
                placeholder="Confirm Password"
                onChange={(e) => setMatchPassword(e.target.value)}
                value={matchPassword}
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
            {!validMatch && matchPassword.length > 0 && (
              <p className="text-xs text-red-600 mt-1">Passwords do not match.</p>
            )}
            {error && (
              <p className="text-red-600 text-center text-sm font-semibold mt-2">
                {typeof error === 'string' ? error : error.message ?? "An unexpected error occurred"}
              </p>
            )}
            <div className="flex gap-2 items-center">
              <input
                type='checkbox'
                required
                className="mt-5 ml-0 accent-blue-900" />
              <p className="text-black mt-5 max-w-19 ml-1 text-xs lg:text-xs text-left">
                By creating an account means you agree to the <span className="text-black">Terms & Conditions</span> and our <span className="text-black">Privacy Policy</span>
              </p>
            </div>

            <button
              disabled={!validFirstName || !validPassword || !validMatch ? true : false}
              type="submit"
              className="bg-blue-950 h-6.2 w-full p-2 ml-0 text-sm text-white rounded mt-3 cursor-pointer hover:bg-blue-900 disabled:bg-gray-400">
              Sign Up
            </button>

            <div>
              <Image src={google} alt="" className="absolute size-4 mt-3 ml-9 lg:ml-36 z-20" />
              <div className="text-blue-950 text-sm text-center w-full pl-8 lg:pl-14 mt-3 ml-0 border font-bold p-2 w-24.2 rounded hover:bg-gray-300 cursor-pointer z-10">
                Sign Up with Google
              </div>
            </div>

            <div>
              <p className="relative text-black text-sm lg:text-center mt-6 lg:mt-6 z-10">
                Already have an account?
                <Link href="/"><span className="text-blue-950 font-semibold pl-0.5">
                  sign In</span>
                </Link>
              </p>
            </div>

            {success ? <div className="reg-sucess-message text-green-600">Registration successful</div> : <></>}
          </form>
          <div>
            <h3 className="mt-6 lg:mt-6 ml-3.5 md:ml-0 lg:ml-16 lg:text-nowrap text-center lg:text-left text-xs lg:text-sm text-black">
              © 2025 Rights are Reserved by hosoptima.com
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CompanySignup;