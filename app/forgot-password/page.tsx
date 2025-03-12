'use client'
import Link from "next/link";
import Image from "next/image";
// import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo_white from '../../public/images/logo_white.png';
import locked from '../../public/icons/locked.svg';
import facebook from '../../public/icons/facebook.svg';
import twitter from '../../public/icons/twitter.svg';
import instagram from '../../public/icons/instagram.svg';
import youtube from '../../public/icons/youtube.svg';
import { ResetPassword } from "@/components/resetPassword";


const ForgotPassword = () => {

    return (
        <div className="flex items-center justify-center min-h-screen w-full lg:bg-blue-950 p-4">
            <div className="bg-white lg:bg-white rounded shadow p-10 max-w-[310px] lg:min-w-[500px] lg:min-h-[600px]">
                <div>
                    <ResetPassword />
                </div>

                <div>
                    <h3 className="relative ss:mt-6 ss:ml-0 ss:text-sm ss:text-center sm:mt-6 sm:ml-0 sm:text-sm sm:text-center lg:-mt-7 lg:ml-10 lg:text-left lg:text-sm text-white xl:text-left xl:text-base xl:mt-12 xl:ml-13 xx:mt-19">
                        © 2025 Rights are Reserved by hosoptima.com
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword
export const dynamic = "force-dynamic";