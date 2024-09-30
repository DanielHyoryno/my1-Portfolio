import {Link} from "react-scroll";
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";


const Menu = () => {
    return(
        <div className="flex justify-center flex-col items-center">
            <div className="flex gap-4 bg-gray-600 backdrop-blur-sm bg-opacity-50 py-2 px-8 rounded-md fixed backdrop-filter bg-clip-padding bottom-10">
                
                <Link  activeClass="bg-[#1484da] rounded-full"
                    to="Home"
                    smooth={true}
                    spy={true}
                    offset={50}
                    duration={50}
                > 
                    <IoHomeOutline className="text-[26px] m-[10px] text-center" />
                </Link>

                <Link  activeClass="bg-[#1484da] rounded-full"
                    to="About"
                    smooth={true}
                    spy={true}
                    offset={50}
                    duration={50}
                > 
                    <IoPersonOutline className="text-[26px] m-[10px] text-center" />
                </Link>

                <Link  activeClass="bg-[#1484da] rounded-full"
                    to="Experience"
                    smooth={true}
                    spy={true}
                    offset={50}
                    duration={50}
                > 
                    <BsBag className="text-[26px] m-[10px] text-center" />
                </Link>

                <Link  activeClass="bg-[#1484da] rounded-full"
                    to="Skills"
                    smooth={true}
                    spy={true}
                    offset={50}
                    duration={50}
                > 
                    <HiOutlineLightBulb className="text-[26px] m-[10px] text-center" />
                </Link>

                <Link  activeClass="bg-[#1484da] rounded-full"
                    to="Footer"
                    smooth={true}
                    spy={true}
                    offset={50}
                    duration={50}
                > 
                    <AiOutlineMessage className="text-[26px] m-[10px] text-center" />
                </Link>

            </div>

        </div>
    );
}

export default Menu;