import { Link } from "react-scroll";
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";

const Menu = () => {
    return (
        <div className="flex justify-center flex-col items-center">
            <div className="flex gap-4 backdrop-blur-lg bg-gray-600 bg-opacity-30 py-2 px-8 rounded-md fixed bottom-10">
                
                <Link 
                    activeClass="bg-[#1484da] rounded-full"
                    to="Home"
                    smooth={true}
                    spy={true}
                    offset={-50}
                    duration={350}
                > 
                    <IoHomeOutline className="text-[26px] m-[10px] text-center" />
                </Link>

                <Link 
                    activeClass="bg-[#1484da] rounded-full"
                    to="About"
                    smooth={true}
                    spy={true}
                    offset={-200}
                    duration={350}
                > 
                    <IoPersonOutline className="text-[26px] m-[10px] text-center" />
                </Link>

                <Link 
                    activeClass="bg-[#1484da] rounded-full"
                    to="Experience"
                    smooth={true}
                    spy={true}
                    offset={-300}
                    duration={350}
                > 
                    <BsBag className="text-[26px] m-[10px] text-center" />
                </Link>

                <Link 
                    activeClass="bg-[#1484da] rounded-full"
                    to="Skills"
                    smooth={true}
                    spy={true}
                    offset={-250}
                    duration={350}
                > 
                    <HiOutlineLightBulb className="text-[26px] m-[10px] text-center" />
                </Link>

                <Link 
                    activeClass="bg-[#1484da] rounded-full"
                    to="Footer"
                    smooth={true}
                    spy={true}
                    offset={-300}
                    duration={150}
                > 
                    <AiOutlineMessage className="text-[26px] m-[10px] text-center" />
                </Link>

            </div>
        </div>
    );
}

export default Menu;
