'use client';
import React from 'react'
// import Image from 'next/image'
import { useRouter } from 'next/navigation';
// import logout_dark from './../public/icons/logout_dark.png';
import { useAuthStore } from '@/app/store/authStore';

export const Logout = () => {
    const { logout } = useAuthStore();
    const router = useRouter();

	const handleLogout = () => {
		logout(true, "User manually logged out");
        router.push('/');
	};
    
    return (
        <div className='flex ss:flex-col ss:-ml-14.5 ss:mt-2 sm:flex-col sm:-ml-14.5 sm:mt-2 lg:flex-row lg:ml-0.1 lg:w-16 lg:h-6.5 lg:pl-4 xl:mt-0 items-center gap-2 xl:ml-1 xl:w-18 xl:h-6 xl:pl-1 xx:ml-1 hover:bg-gray-light hover:h-6.5 hover:pl-4 hover:w-17 hover:rounded-lg cursor-pointer'>
            {/* <Image src={logout_dark} alt="" className="relative size-4" /> */}
            <h3
            className='relative text-dark text-sm ss:font-normal sm:font-normal lg:text-sm lg:font-normal'
            onClick={handleLogout}
            >Logout</h3>
        </div>
    )
}