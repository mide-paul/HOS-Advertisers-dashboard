'use client';
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo_white from '../../public/images/logo_white.png';
import truck_white from '../../public/icons/truck_white.png';
import facebook from '../../public/icons/facebook_signup2.png';
import twitter from '../../public/icons/twitter_signup.png';
import instagram from '../../public/icons/instagram_signup.png';
import youtube from '../../public/icons/youtube_signup.png';
import google from '../../public/icons/google.png';
// import { Icon } from 'react-icons-kit';
// import { eyeOff } from 'react-icons-kit/feather/eyeOff';
// import { eye } from 'react-icons-kit/feather/eye';
import { useAuthStore } from "../store/authStore";

const USER_REGEX = /^[A-z][A-z0-9-_ ]{0,40}$/;
const EMAIL_REGEX = /^(?=.*[a-z])(?=.*[@]).{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[?&()_+={}[:;'"<>,|/~!@#$%]).{8,15}$/;


const CompanySignup = () => {
  const userRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLDivElement | null>(null);

  const [companyName, setCompanyName] = useState('');
  const [validCompanyName, setValidCompanyName] = useState(false);
  //const [companyNameFocus, setcompanyNameFocus] = useState(false);

  const [companyEmail, setcompanyEmail] = useState("");
  const [validcompanyEmail, setValidCompanyEmail] = useState(false);
  //const [companyEmailFocus, setcompanyEmailFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  //const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  //const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const [type, setType] = useState('password');
  // const [icon, setIcon] = useState(eyeOff);

  const { signup, error } = useAuthStore();

  // const handleToggle = () => {
  //   if (type === 'password') {
  //     setIcon(eye);
  //     setType('text')
  //   } else {
  //     setIcon(eyeOff)
  //     setType('password')
  //   }
  // }

  useEffect(() => {
    if (userRef.current !== null) {
      userRef.current.focus();
    }
  }, [])

  useEffect(() => {
    setValidCompanyName(USER_REGEX.test(companyName));
  }, [companyName])

  useEffect(() => {
    setValidCompanyEmail(EMAIL_REGEX.test(companyEmail));
  }, [companyEmail])

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidMatch(password === matchPassword);
  }, [password, matchPassword])

  useEffect(() => {
    setErrMsg('');
  }, [companyName, password, matchPassword])

  const router = useRouter()

  const handleSignup = async (e: any) => {
    e.preventDefault();
    try {
      await signup(companyEmail, password, companyName);
      setSuccess(true);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <div className="relative ss:h-68 ss:w-full sm:h-68 sm:w-full lg:h-38 xl:h-59 xl:w-full xx:h-108 xx:w-full overflow-hidden">
        <div className="relative ss:h-68 ss:w-full ss:bg-blue sm:h-68 sm:w-full sm:bg-blue lg:h-42 lg:w-full lg:bg-blue xl:h-120 xl:w-full xl:bg-blue">
          <div className="relative ss:pt-9 ss:ml-4 ss:h-6 ss:w-15 sm:pt-9 sm:ml-4 sm:h-6 sm:w-15 lg:pt-7 lg:ml-10 lg:h-6 lg:w-15 xl:pt-10 xl:ml-13 xx:pt-25 xx:ml-13">
            <Image src={logo_white} alt="image" />
          </div>

          <div>
            <Image src={truck_white} alt="" className="relative ss:mt-7.5 ss:ml-8.5 sm:mt-7.5 sm:ml-10.5 lg:mt-13 lg:ml-10 bg-fade-blue p-5 rounded-full xl:mt-19 xl:ml-13 s:invisible lg:visible xl:visible" />
          </div>

          <div className="relative ss:mt-7 ss:ml-4 sm:mt-7 sm:ml-4 gap-5 flex lg:mt-7 lg:ml-10 xl:mt-17 xl:ml-13">
            <Link href="https://www.facebook.com/hosoptima"><Image src={facebook} alt="" className="relative" /></Link>
            <Link href="https://x.com/hosoptima"><Image src={twitter} alt="" className="relative" /></Link>
            <Link href="https://www.instagram.com/hosoptima_/"><Image src={instagram} alt="" className="relative" /></Link>
            {/* <Link href="https://www.linkedin.com/company/hosoptima/"><Image src={youtube} alt="" className="relative" /></Link> */}
            <Image src={youtube} alt="" className="relative" />
          </div>

          <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <div className="relative ss:mt-10 ss:ml-4 sm:mt-10 sm:ml-4 lg:-mt-27.5 lg:ml-18">
              <div className="relative ss:w-19.4 ss:h-32.5 ss:mt-5 ss:pt-1 sm:w-21 sm:h-32.5 sm:mt-5 sm:pt-1 lg:w-34 lg:h-34 lg:pt-1 lg:-mt-8 lg:ml-24 bg-white xl:w-34.3 xl:h-37 xl:pt-1 xl:-mt-40 xl:ml-25 xx:w-34.3 xx:-mt-35 xx:ml-55 rounded">
                <form onSubmit={handleSignup}>
                  <div>
                    <h3 className="relative ss:ml-4 ss:mt-6.2 ss:text-sm sm:ml-4 sm:mt-6.2 sm:text-sm lg:ml-10 lg:mt-6 text-blue lg:text-base font-bold cursor-pointer">
                      Sign Up
                    </h3>
                  </div>

                  <div className="flex sm:gap-2 s:flex-col lg:flex-col sm:mt-4 s:ml-4 lg:gap-1 xl:ml-10 xx:ml-10">
                    <input
                      type="username"
                      id="username"
                      placeholder="Name"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setCompanyName(e.target.value)}
                      value={companyName}
                      required
                      aria-invalid={validCompanyName ? "false" : "true"}
                      aria-describedby="uidnote"
                      // onFocus={() => setcompanyNameFocus(true)}
                      // onBlur={() => setcompanyNameFocus(false)}
                      className="relative ss:mt-4 ss:ml-4 ss:w-19.1 ss:h-6.2 ss:pl-3 ss:text-sm ss:text-dark ss:bg-white sm:mt-4 sm:ml-4 sm:w-19.6 sm:h-6 sm:pl-3 sm:text-sm sm:text-dark sm:bg-white lg:mt-4 lg:ml-10 lg:w-24.2 lg:h-6.2 lg:pl-3 lg:text-sm lg:text-dark lg:bg-white border border-gray rounded xl:w-29 xx:w-29"
                    />
                  </div>
                  {/* <p id="uidnote" className={companyNameFocus && companyName && !validCompanyName ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                2 to 40 characters.<br />
                Must begin with a letter.<br />
                Letters, numbers, underscores, hyphens allowed.
              </p> */}


                  <div className="flex ss:gap-2 ss:flex-col ss:mt-4 ss:ml-4 sm:gap-2 sm:flex-col lg:flex-col sm:mt-4 sm:ml-4 lg:ml-10 lg:gap-1 xl:ml-10 xx:ml-10">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email"
                      autoComplete="off"
                      value={companyEmail}
                      onChange={(e) => setcompanyEmail(e.target.value)}
                      required
                      aria-invalid={validcompanyEmail ? "false" : "true"}
                      aria-describedby="uidnote"
                      // onFocus={() => setEmailFocus(true)}
                      // onBlur={() => setEmailFocus(false)}
                      className="relative ss:mt-4 ss:w-19.1 ss:h-6.2 ss:pl-3 ss:text-sm ss:text-dark ss:bg-white sm:mt-4 sm:w-19.6 sm:h-6 sm:pl-3 sm:text-sm sm:text-dark sm:bg-white lg:mt-3 lg:w-24.2 lg:h-6.2 lg:pl-3 lg:text-sm lg:text-dark lg:bg-white border border-gray rounded xl:w-29 xx:w-29"
                    />
                    {/* <p id="uidnote" className={companyEmailFocus && companyEmail &&
                  !validcompanyEmail ? "instructions" : "offscreen"}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  4 to 24 characters.<br />
                  Must begin with a letter. <br />
                  only lowercase is allowed.
                  Allowed special characters: @
                </p> */}
                  </div>

                  <div className="flex ss:gap-2 ss:flex-col ss:ml-4 ss:mt-6 sm:gap-2 sm:flex-col sm:ml-4 sm:mt-6 lg:flex-col lg:ml-10 lg:gap-1 xl:ml-10 xx:ml-10">
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
                      className="relative ss:w-19.1 ss:h-6.2 ss:pl-3 ss:text-sm ss:text-dark ss:bg-white sm:w-19.6 sm:h-6 sm:pl-3 sm:text-sm sm:text-dark sm:bg-white lg:mt-0 lg:w-24.2 lg:h-6.2 lg:pl-3 lg:text-sm lg:text-dark lg:bg-white border border-gray rounded xl:w-29 xx:w-29"
                    />
                    {/* <span style={{ color: '#000000' }} onClick={handleToggle}>
                      <Icon className="relative s:-ml-6 s:mt-0.3 lg:-ml-6 lg:mt-0.5 z-30" icon={icon} size={20} />
                    </span> */}
                  </div>
                  {/* <p id="pwdnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 15 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.
                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
              </p> */}

                  <div className="flex ss:gap-2 ss:flex-col ss:ml-4 ss:mt-6 sm:gap-2 sm:flex-col sm:ml-4 sm:mt-6 lg:flex-col lg:ml-10 lg:gap-1 xl:ml-10 xx:ml-10">
                    <input
                      type={type}
                      id="password"
                      placeholder="Confirm Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      required
                      autoComplete="new-password"
                      aria-invalid={validPassword ? "false" : "true"}
                      aria-describedby="pwdnote"
                      // onFocus={() => setPasswordFocus(true)}
                      // onBlur={() => setPasswordFocus(false)}
                      className="relative ss:w-19.1 ss:h-6.2 ss:pl-3 ss:text-sm ss:text-dark ss:bg-white sm:w-19.6 sm:h-6 sm:pl-3 sm:text-sm sm:text-dark sm:bg-white lg:mt-0 lg:w-24.2 lg:h-6.2 lg:pl-3 lg:text-sm lg:text-dark lg:bg-white border border-gray rounded xl:w-29 xx:w-29"
                    />
                    {/* <span style={{ color: '#000000' }} className="items-center" onClick={handleToggle}>
                      <Icon className="relative s:-ml-5.4 s:mt-0.5 lg:-ml-6 lg:mt-0.5 z-10" icon={icon} size={20} />
                    </span> */}
                  </div>
                  {/* <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
              </p> */}
                  {error && <p className="text-red text-center font-semibold lg:mt-2 xl:-mt-0.5 z-20">{error}</p>}

                  <div className="flex sm:gap-2 lg:gap-3 xl:gap-3 sm:mt-4 s:ml-3.5 lg:mt-2 lg:ml-10.5 xl:mt-4 xl:ml-15.2">
                    <input
                      type='checkbox'
                      required
                      className="relative ss:ml-4 sm:ml-4 lg:-ml-1.7 z-10 xl:-ml-10.5 xx:-ml-10.5" />
                    <p className="relative ss:mt-2 ss:ml-1 ss:max-w-19.1 ss:text-x sm:-mt-1.2 sm:-ml-0.2 sm:max-w-19.1 sm:text-xxs text-light-blue lg:mt-0.5 lg:max-w-22 lg:text-xxs text-left z-10 xl:max-w-19.1 xl:text-xs">
                      By creating an account means you agree to the <span className="text-dark">Terms & Conditions</span> and our <span className="text-dark">Privacy Policy</span>
                    </p>
                  </div>

                  <button
                    disabled={!validCompanyName || !validPassword || !validMatch ? true : false}
                    type="submit"
                    className="relative ss:mt-2 ss:ml-4 ss:w-19.1 ss:h-6 ss:text-sm ss:bg-blue ss:text-white sm:mt-2 sm:ml-4 sm:w-19.6 sm:h-6 sm:bg-blue sm:text-white lg:mt-3 lg:ml-10 lg:text-sm lg:text-white lg:w-24.2 lg:h-6 lg:bg-blue z-30 rounded hover:bg-blue-deep cursor-pointer xl:mt-3 xl:ml-0 xl:float-left disabled:bg-gray-light">
                    Sign Up
                  </button>

                  <div>
                    <div className="relative ss:mt-4 ss:ml-4 ss:w-19.1 ss:h-6 ss:text-sm ss:text-center sm:mt-4 sm:ml-4 sm:w-19.6 sm:h-6 sm:text-center text-light-blue text-sm lg:mt-4 lg:ml-10 lg:text-center border font-bold lg:h-5.3 pt-0.6 lg:w-24.2 rounded hover:bg-gray-light cursor-pointer z-10 xl:mt-8 xl:ml-10 xx:mt-8 xx:ml-10">
                      Sign Up with Google
                    </div>
                    <Image src={google} alt="" className="relative ss:ml-8 ss:-mt-5 sm:ml-10 sm:-mt-5 size-4 lg:ml-15.9 lg:-mt-4.6 z-10 xl:ml-15.9 xx:ml-15.9" />
                  </div>

                  {success ? <div className="reg-sucess-message">Registration successful</div> : <></>}
                </form>
              </div>
            </div>
          </section>

          <div>
            <h3 className="relative ss:mt-6 ss:ml-0 ss:text-sm ss:text-center sm:mt-6 sm:ml-0 sm:text-sm sm:text-center lg:-mt-7 lg:ml-10 lg:text-left lg:text-sm text-white xl:text-left xl:text-base xl:mt-12 xl:ml-13 xx:mt-19">© 2024 Rights are Reserved by hosoptima.com</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CompanySignup;