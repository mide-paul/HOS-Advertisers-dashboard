'use client';
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
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
      <div className="relative lg:h-38 xl:h-59 xl:w-full xx:h-108 xx:w-full overflow-hidden">
        <div className="relative s:h-52 s:w-full s:bg-blue lg:h-42 lg:w-full lg:bg-blue xl:h-120 xl:w-full xl:bg-blue">
          <div className="relative s:pt-9 s:ml-4 s:h-6 s:w-15 lg:pt-7 lg:ml-10 lg:h-6 lg:w-15 xl:pt-10 xl:ml-13 xx:pt-25 xx:ml-13">
            <Image src={logo_white} alt="image" />
          </div>

          <div>
            <Image src={truck_white} alt="" className="relative s:mt-7 s:ml-9 lg:mt-13 lg:ml-10 bg-fade-blue p-5 rounded-full xl:mt-19 xl:ml-13 s:invisible lg:visible xl:visible" />
          </div>

          <div className="relative s:mt-22 s:ml-9 gap-5 flex lg:mt-7 lg:ml-10 xl:mt-17 xl:ml-13">
            <Image src={facebook} alt="" className="relative" />
            <Image src={twitter} alt="" className="relative" />
            <Image src={instagram} alt="" className="relative" />
            <Image src={youtube} alt="" className="relative" />
          </div>

          <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <div className="relative s:-mt-40 s:-ml-11.51 lg:-mt-27.5 lg:ml-18">
              <div className="relative s:w-21 s:h-32.5 s:mt-5 s:pt-1 lg:w-34 lg:h-34 lg:pt-1 lg:-mt-8 lg:ml-24 bg-white xl:w-34.3 xl:h-37 xl:pt-1 xl:-mt-40 xl:ml-25 xx:w-34.3 xx:-mt-35 xx:ml-55 rounded">
                <form onSubmit={handleSignup}>
                  <div>
                    <h3 className="relative sm:ml-14 sm:-mt-4.5 lg:ml-10 lg:mt-4.6 text-blue lg:text-base font-bold cursor-pointer">
                      Sign Up
                    </h3>
                  </div>

                  <div className="flex s:gap-2 s:flex-col lg:flex-col s:mt-4 s:ml-4 lg:mt-6 lg:ml-10 lg:gap-1 xl:ml-10 xx:ml-10">
                    <label htmlFor="username" className="relative s:text-left s:text-dark s:text-sm lg:-mt-1 lg:text-left lg:text-dark lg:text-sm font-medium xl:mt-5">
                      Company Name
                      {/* <FontAwesomeIcon icon={faCheck} className={validCompanyName ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validCompanyName || !companyName ? "hide" : "invalid"} /> */}
                    </label>
                    <input
                      type="username"
                      id="username"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setCompanyName(e.target.value)}
                      value={companyName}
                      required
                      aria-invalid={validCompanyName ? "false" : "true"}
                      aria-describedby="uidnote"
                      // onFocus={() => setcompanyNameFocus(true)}
                      // onBlur={() => setcompanyNameFocus(false)}
                      className="relative s:w-19.6 s:h-6 s:pl-3 s:text-sm s:text-dark s:bg-gray-light lg:w-24.2 lg:h-6 lg:pl-3 lg:text-sm lg:text-dark lg:bg-gray-light rounded"
                    />
                  </div>
                  {/* <p id="uidnote" className={companyNameFocus && companyName && !validCompanyName ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                2 to 40 characters.<br />
                Must begin with a letter.<br />
                Letters, numbers, underscores, hyphens allowed.
              </p> */}


                  <div className="flex s:gap-2 s:flex-col s:ml-4 s:mt-4 lg:flex-col lg:ml-10 lg:mt-4 lg:gap-1 xl:ml-10 xx:ml-10">
                    <label htmlFor="email" className="relative s:text-left s:text-dark s:text-sm lg:text-left lg:text-dark lg:text-sm font-medium">
                      Company Email
                      {/* <FontAwesomeIcon icon={faCheck} className={validcompanyEmail ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validcompanyEmail || !companyEmail ? "hide" : "invalid"} /> */}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="off"
                      value={companyEmail}
                      onChange={(e) => setcompanyEmail(e.target.value)}
                      required
                      aria-invalid={validcompanyEmail ? "false" : "true"}
                      aria-describedby="uidnote"
                      // onFocus={() => setcompanyEmailFocus(true)}
                      // onBlur={() => setcompanyEmailFocus(false)}
                      className="relative s:w-19.6 s:h-6 s:pl-3 s:text-sm s:text-dark s:bg-gray-light lg:w-24.2 lg:h-6 lg:pl-3 lg:text-sm lg:text-dark lg:bg-gray-light rounded"
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

                  <div className="flex s:gap-2 s:flex-col s:ml-4 s:mt-4 lg:flex-col lg:ml-10 lg:mt-4 lg:gap-1 xl:ml-10 xx:ml-10">
                    <label htmlFor="password" className="relative s:text-left s:text-dark s:text-sm lg:text-left lg:text-dark lg:text-sm font-medium">
                      Password
                      {/* <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validPassword || !password ? "hide" : "invalid"} /> */}
                    </label>
                    <div className="flex">
                      <input
                        type={type}
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        autoComplete="new-password"
                        aria-invalid={validPassword ? "false" : "true"}
                        aria-describedby="pwdnote"
                        // onFocus={() => setPasswordFocus(true)}
                        // onBlur={() => setPasswordFocus(false)}
                        className="relative s:w-19.6 s:h-6 s:pl-3 s:text-sm s:text-dark s:bg-gray-light lg:w-24.2 lg:h-6 lg:pl-3 lg:text-sm lg:text-dark lg:bg-gray-light rounded"
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
                  </div>

                  <div className="flex s:gap-2 s:flex-col s:ml-4 s:mt-3 lg:flex-col lg:ml-10 lg:mt-4 lg:gap-3 xl:ml-10 xx:ml-10">
                    <label htmlFor="confirm_pwd" className="relative s:text-left s:text-dark s:text-sm lg:text-left lg:text-dark lg:text-sm font-medium">
                      Confirm Password
                      {/* <FontAwesomeIcon icon={faCheck} className={validMatch && matchPassword ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPassword ? "hide" : "invalid"} /> */}
                    </label>
                    <div className="flex">
                      <input
                        type={type}
                        id="confirm_pwd"
                        onChange={(e) => setMatchPassword(e.target.value)}
                        value={matchPassword}
                        required
                        autoComplete="new-password"
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        // onFocus={() => setMatchFocus(true)}
                        // onBlur={() => setMatchFocus(false)}
                        className="relative s:w-19.6 s:h-6 s:pl-3 s:text-sm s:text-dark s:bg-gray-light lg:w-24.2 lg:h-6 lg:p-3 lg:text-sm lg:text-dark lg:bg-gray-light rounded"
                      />
                      {/* <span style={{ color: '#000000' }} className="items-center" onClick={handleToggle}>
                      <Icon className="relative s:-ml-5.4 s:mt-0.5 lg:-ml-6 lg:mt-0.5 z-10" icon={icon} size={20} />
                    </span> */}
                    </div>
                    {/* <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
              </p> */}
                  </div>
                  {error && <p className="text-red text-center font-semibold lg:mt-2 xl:-mt-0.5 z-20">{error}</p>}

                  <div className="flex s:gap-2 lg:gap-3 xl:gap-3 s:mt-4 s:ml-3.5 lg:mt-2 lg:ml-10.5 xl:mt-4 xl:ml-15.2">
                    <input
                      type='checkbox'
                      required
                      className="relative z-10 xl:-ml-10.5 xx:-ml-10.5" />
                    <p className="relative s:max-w-19.6 s:text-xxs text-light-blue lg:max-w-22 lg:text-xxs text-left z-10 xl:max-w-19.1 xl:text-xs">
                      By creating an account means you agree to the <span className="text-dark">Terms & Conditions</span> and our <span className="text-dark">Privacy Policy</span>
                    </p>
                  </div>

                  <button
                    disabled={!validCompanyName || !validPassword || !validMatch ? true : false}
                    type="submit"
                    className="relative s:mt-2 s:-ml-14.2 s:w-19.6 s:h-6 s:bg-blue s:text-white lg:mt-3 lg:ml-10 lg:text-sm lg:text-white lg:w-24.2 lg:h-6 lg:bg-blue z-30 rounded hover:bg-blue-deep cursor-pointer xl:mt-3 xl:ml-0 xl:float-left disabled:bg-gray-light">
                    Sign Up
                  </button>

                  <div>
                    <div className="relative s:mt-7.7 s:ml-4 s:w-19.6 s:h-6 text-light-blue text-sm lg:mt-4 lg:ml-10 lg:text-center border font-bold lg:h-5.3 pt-0.6 lg:w-24.2 rounded hover:bg-gray-light cursor-pointer z-10 xl:mt-8 xl:ml-10 xx:mt-8 xx:ml-10">
                      Sign Up with Google
                    </div>
                    <Image src={google} alt="" className="relative s:ml-10 s:-mt-5 size-4 lg:ml-15.9 lg:-mt-4.6 z-10 xl:ml-15.9 xx:ml-15.9" />
                  </div>

                  {success ? <div className="reg-sucess-message">Registration successful</div> : <></>}
                </form>
              </div>
            </div>
          </section>

          <div>
            <h3 className="relative s:mt-6 s:ml-0 s:text-sm lg:-mt-7 lg:ml-10 lg:text-left lg:text-sm text-white xl:text-left xl:text-base xl:mt-12 xl:ml-13 xx:mt-19">© 2024 Rights are Reserved by HOSOptima.com</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CompanySignup;