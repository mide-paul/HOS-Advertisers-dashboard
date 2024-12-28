import Image from "next/image";
import doe from './../public/images/doe.png';
import dropdown_icon from './../public/icons/dropdown_icon.png';
import notification from './../public/icons/notification.png';
import hand_raised from './../public/icons/hand_raised.png';

export const Header = () => {
    return (
        <div className="fixed bg-white lg:h-11 lg:w-70 lg:ml-19.6 xl:w-95 z-20 xx:w-142">
            <h3 className="fixed lg:mt-6.3 lg:ml-6 text-blue lg:font-bold lg:text-left lg:text-base">Hey there</h3>
            <Image src={hand_raised} alt="" className="relative lg:mt-6.6 lg:ml-12" />
            <Image src={notification} alt="" className="relative lg:ml-49.5 lg:-mt-4 xl:ml-55 xx:ml-123" />
            <Image src={doe} alt="" className="relative lg:ml-52 lg:-mt-6.2 xl:ml-58 xx:ml-126" />
            <h3 className="relative lg:ml-56 lg:-mt-6.2 xl:ml-62 xx:ml-131">John Doe</h3>
            <Image src={dropdown_icon} alt="" className="relative lg:ml-63 lg:-mt-2 xl:ml-68 xx:ml-138" />
        </div>
    )
}