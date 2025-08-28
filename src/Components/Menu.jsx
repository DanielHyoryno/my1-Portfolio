import { Link } from "react-scroll";
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";

// Tune these once, then forget about "why is it off by 40px" forever.
const OFFSETS = {
  Home: -72,        // header height
  About: -96,       // usually a bit more top padding
  Experience: -96,  // same vibe
  Skills: -96,
  Footer: -72       // usually doesn’t need extra
};

const NAV = [
  { to: "Home",       icon: IoHomeOutline,     label: "Home" },
  { to: "About",      icon: IoPersonOutline,   label: "About" },
  { to: "Experience", icon: BsBag,             label: "Experience" },
  { to: "Skills",     icon: HiOutlineLightBulb,label: "Skills" },
  { to: "Footer",     icon: AiOutlineMessage,  label: "Contact" },
];

export default function Menu() {
  return (
    <nav
      role="navigation"
      aria-label="Section navigation"
      className="pointer-events-none fixed inset-x-0 bottom-10 z-40 flex justify-center"
    >
      <div className="pointer-events-auto flex gap-2 rounded-xl bg-gray-600/30 px-3 py-2 backdrop-blur-lg">
        {NAV.map(({ to, icon: Icon, label }) => (
          <Link
            key={to}
            to={to}
            spy={true}
            smooth={true}
            duration={300}
            spyThrottle={200}
            offset={OFFSETS[to] ?? -80}
            // react-scroll applies this class to the Link when active
            activeClass="active"
            // Base styles live here so activeClass actually shows.
            className="
              group flex h-12 w-12 items-center justify-center rounded-full
              text-white/80 transition
              hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400
              [&.active]:bg-[#1484da] [&.active]:text-white
            "
            aria-label={label}
            title={label}
          >
            <Icon className="text-[22px]" />
          </Link>
        ))}
      </div>
    </nav>
  );
}
