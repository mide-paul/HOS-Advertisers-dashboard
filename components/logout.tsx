'use client';
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import logout_dark from './../public/icons/logout_dark.png';
import { useAuthStore } from '@/app/store/authStore';

export const Logout = () => {
    const { logout } = useAuthStore();
    const router = useRouter();

	const handleLogout = () => {
		logout(true, "User manually logged out");
        router.push('/');
	};
    
    return (
        <div className='flex ss:flex-col ss:mt-2 sm:flex-col sm:mt-2 lg:flex-row lg:ml-6.3 lg:w-16 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 xl:w-18 xl:h-6 xl:pl-1 hover:bg-gray-light hover:h-6 hover:pl-1 hover:w-16.5 hover:rounded cursor-pointer'>
            <Image src={logout_dark} alt="" className="relative size-4" />
            <h3
            className='relative text-dark ss:font-normal sm:font-normal lg:text-md lg:font-normal'
            onClick={handleLogout}
            >Logout</h3>
        </div>
    )
}