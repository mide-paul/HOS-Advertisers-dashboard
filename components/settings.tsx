'use client';
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import settings from './../public/icons/settings.png';
import line_vertical from './../public/icons/line_vertical.png';

export const Settings = () => {
    const [ open, setOpen ] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null)

    const handleClickOutsideDropdown =(e:any)=>{
        if(open && !dropdownRef.current?. contains(e.target as Node)){
          setOpen(false)
          }
        }
        
    window.addEventListener("click",handleClickOutsideDropdown)

    return (
        <div ref={dropdownRef}>
            <div onClick={() => setOpen(true)} className='flex lg:flex-row lg:ml-6.3 lg:w-16 lg:h-6 lg:pl-1 xl:mt-6 items-center gap-2 xl:w-18 xl:h-6 xl:pl-1 hover:bg-gray-light hover:h-6 hover:pl-1 hover:w-16.5 hover:rounded cursor-pointer'>
                <Image src={settings} alt="" className="relative size-4"/>
                <h3 className='relative text-dark lg:text-md lg:font-medium'>Settings</h3>
                { open && (
                    <div className="absolute lg:mt-11 lg:ml-9">
                        <Image src={line_vertical} alt="" className="absolute lg:-ml-2"/>
                        <Link href="/settings"><div className="relative text-dark text-left text-sm lg:p-0.6 pb-2 lg:h-6 hover:bg-gray-light hover:p-0.6 hover:h-6 hover:rounded cursor-pointer">
                            General Settings</div>
                        </Link>
                        <div className="relative text-dark text-left text-sm lg:p-0.6 hover:text-red">
                            Logout
                        </div>
                    </div>
                )}
            </div>
            </div>
    )
}