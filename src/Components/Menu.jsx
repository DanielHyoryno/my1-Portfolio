import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { BsBag, BsGrid } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";

// Tune these once
const OFFSETS = {
  Home: -72,
  About: -72,
  Experience: -72,
  ProjectCard: -72,
  Skills: -72,
  Footer: -72,
};

const NAV = [
  { to: "Home",        icon: IoHomeOutline,     label: "Home" },
  { to: "ProjectCard", icon: BsGrid,            label: "ProjectCard" },
  { to: "About",       icon: IoPersonOutline,   label: "About" },
  { to: "Experience",  icon: BsBag,             label: "Experience" },
  { to: "Skills",      icon: HiOutlineLightBulb,label: "Skills" },
  { to: "Footer",      icon: AiOutlineMessage,  label: "Contact" },
];

export default function Menu() {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const THRESHOLD = 80; // px from bottom to trigger Footer active
    const onScroll = () => {
      const doc = document.documentElement;
      const scrolledToBottom =
        window.scrollY + window.innerHeight >= doc.scrollHeight - THRESHOLD;
      setAtBottom(scrolledToBottom);
    };

    onScroll(); // init
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Section navigation"
      className="pointer-events-none fixed inset-x-0 bottom-10 z-40 flex justify-center"
    >
      {/* key swap hard-resets any leftover .active classes when bottom state changes */}
      <div
        key={atBottom ? "bottom" : "normal"}
        className="pointer-events-auto flex gap-2 rounded-xl bg-gray-600/30 px-3 py-2 backdrop-blur-lg"
      >
        {NAV.map(({ to, icon: Icon, label }) => {
          const forceFooterActive = to === "Footer" && atBottom;
          const disableSpy = atBottom && to !== "Footer"; // kill spy for others at bottom

          // Only include the [&.active] styles when spy is enabled
          const activeStyles = disableSpy
            ? ""
            : "[&.active]:bg-[#1484da] [&.active]:text-white";

          return (
            <Link
              key={to}
              to={to}
              spy={!disableSpy}
              smooth
              duration={300}
              spyThrottle={200}
              offset={OFFSETS[to] ?? -80}
              activeClass="active"
              aria-label={label}
              title={label}
              className={[
                "group flex h-12 w-12 items-center justify-center rounded-full",
                "text-white/80 transition",
                "hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400",
                activeStyles, // only applies when spy is on
                forceFooterActive ? "bg-[#1484da] text-white" : "",
              ].join(" ")}
              aria-current={forceFooterActive ? "page" : undefined}
            >
              <Icon className="text-[22px]" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
