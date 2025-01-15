'use client';
import Image from "next/image";
import logo from './../public/images/logo.png';
import doe from './../public/images/doe.png';
import notification from './../public/icons/notification.png';
import hand_raised from './../public/icons/hand_raised.png';
import { useAuthStore } from "@/app/store/authStore";

export const Header = () => {
    const user = useAuthStore(state => state.user);

    return (
        <div className="fixed bg-white ss:h-8 ss:w-screen sm:h-8 sm:w-screen lg:h-11 lg:w-70 lg:ml-19.2 xl:w-95 z-20 xx:w-144">
            <Image src={logo} alt="image" className="ss:w-12 ss:-mt-3 ss:ml-1 sm:w-12 sm:-mt-3 sm:ml-1 ss:visible sm:visible lg:invisible xx:invisible" />
            <div className="flex lg:flex-col">
                <div>
                    <h3 className="fixed lg:-mt-6 lg:ml-6 text-blue lg:font-bold lg:text-left lg:text-base ss:invisible sm:invisible lg:visible xx:visible">Hey there</h3>
                    <Image src={hand_raised} alt="" className="relative lg:-mt-5.3 lg:ml-12 ss:invisible sm:invisible lg:visible xx:visible" />
                </div>
                {user && <p className="absolute ss:-mt-5 ss:ml-2 ss:text-sm sm:-mt-5 sm:ml-0 sm:text-sm lg:text-base font-normal lg:mt-1 lg:ml-6">Welcome back, {user.firstName}</p>}
            </div>
            <div className="flex ss:gap-2 ss:-mt-8.5 ss:ml-15 sm:gap-3 lg:gap-5 sm:-mt-8.5 sm:ml-15.5 md:ml-35 lg:ml-52 lg:-mt-6 items-center xl:ml-55 xx:ml-123">
                <Image src={notification} alt="" className="size-4" />
                <Image src={doe} alt="" className="" />
                {user && <h3 className="text-dark ss:text-sm">{user.firstName} {user.lastName}</h3>}
            </div>
        </div>
    )
}