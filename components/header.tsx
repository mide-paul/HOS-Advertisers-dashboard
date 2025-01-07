import Image from "next/image";
import logo from './../public/images/logo.png';
import doe from './../public/images/doe.png';
import dropdown_icon from './../public/icons/dropdown_icon.png';
import notification from './../public/icons/notification.png';
import hand_raised from './../public/icons/hand_raised.png';

export const Header = () => {
    return (
        <div className="fixed bg-white ss:h-8 ss:w-screen sm:h-8 sm:w-screen lg:h-11 lg:w-70 lg:ml-19.6 xl:w-95 z-20 xx:w-142">
            <Image src={logo} alt="image" className="ss:w-12 ss:-mt-0.5 ss:ml-1 sm:w-12 sm:-mt-0.5 sm:ml-1 ss:visible sm:visible lg:invisible xx:invisible" />
            <h3 className="fixed lg:-mt-6 lg:ml-6 text-blue lg:font-bold lg:text-left lg:text-base ss:invisible sm:invisible lg:visible xx:visible">Hey there</h3>
            <Image src={hand_raised} alt="" className="relative lg:-mt-5.3 lg:ml-12 ss:invisible sm:invisible lg:visible xx:visible" />
            <Image src={notification} alt="" className="relative ss:ml-15 ss:-mt-8.5 sm:ml-16 sm:-mt-8.5 md:ml-37.4 lg:ml-49.5 lg:-mt-4 xl:ml-55 xx:ml-123" />
            <Image src={doe} alt="" className="relative ss:-mt-6.2 ss:ml-16 sm:-mt-6.2 sm:ml-17.6 md:ml-39.5 lg:ml-52 lg:-mt-6.2 xl:ml-58 xx:ml-126" />
            <h3 className="relative ss:text-sm ss:-mt-6 ss:ml-19.1 sm:-mt-6 sm:ml-19.4 md:ml-43 lg:ml-56 lg:-mt-6.2 xl:ml-62 xx:ml-131">John Doe</h3>
            <Image src={dropdown_icon} alt="" className="relative lg:ml-63 lg:-mt-2 xl:ml-68 xx:ml-138 ss:invisible sm:invisible lg:visible xx:visible" />
        </div>
    )
}