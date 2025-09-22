// src/Components/Experience.jsx
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

// Put newest last if you want the diagonal to "descend" as you go
const EXPERIENCE = [
  {
    time: "2024 - 2025",
    title: "External Event Organizer",
    org: "Bina Nusantara Computer Club (BNCC)",
    desc:
      "Organized external events and Specialized in event design and documentation, ensuring smooth planning, branding consistency, and clear reporting for external collaborations.",
  },
  {
    time: "2022 - 2023",
    title: "Inventory manager",
    org: "Proxima Centauri",
    desc:
      "Manage and maintain inventory stocks & Provided front desk support, addressing client inquiries and offering.",
  },
];

const EDUCATION = [
  { time: "2023 - Present", title: "Bina Nusantara University", org: "Computer Science", desc: "" },
  { time: "2020 - 2023", title: "Gembala Baik - Senior High School", org: "School of Mathematics and Science", desc: "" },
  { time: "2017 - 2020", title: "Gembala Baik - Junior High School", org: "Science, Bilingual", desc: "" },
];

export default function Experience() {
  const comp = useRef(null);
  const [showExperience, setShowExperience] = useState(true);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: "#Experience", start: "top 75%" },
      });

      gsap.utils.toArray(".tl-card").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      gsap.utils.toArray(".timeline-dot").forEach((dot) => {
        gsap.from(dot, {
          scale: 0.2,
          opacity: 0,
          duration: 0.35,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: dot, start: "top 90%" },
        });
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  const data = showExperience ? EXPERIENCE : EDUCATION;

  return (
    <div ref={comp} className="bg-gray-900 py-20 lg:py-28 md:px-10 px-4">
      <h1 className="text-3xl md:text-4xl text-white font-bold mb-6 text-center">
        {showExperience ? "Experience" : "Education"}
      </h1>

      {/* Toggle */}
      <div className="mx-auto mb-10 flex max-w-xl justify-center rounded-full bg-white/5 p-1">
        <button
          onClick={() => setShowExperience(true)}
          className={`w-1/2 rounded-full px-4 py-2 text-sm font-medium transition ${
            showExperience ? "bg-blue-600 text-white" : "text-white/70 hover:text-white"
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => setShowExperience(false)}
          className={`w-1/2 rounded-full px-4 py-2 text-sm font-medium transition ${
            !showExperience ? "bg-blue-600 text-white" : "text-white/70 hover:text-white"
          }`}
        >
          Education
        </button>
      </div>

      {/* Timeline */}
      <div id="Experience" className="relative mx-auto max-w-5xl">
        {/* center vertical line — always visible, behind cards */}
        <div className="timeline-line pointer-events-none absolute left-1/2 top-0 z-0 h-full w-[2px] -translate-x-1/2 bg-[#1484da]" />

        <div className="flex flex-col gap-10 md:gap-8">
          {data.map((item, idx) => {
            const leftSide = idx % 2 === 0; // even = left, odd = right
            return (
              <div
                key={item.time + item.title}
                className="grid items-center gap-4 px-1
                           [grid-template-columns:minmax(0,1fr)_16px_minmax(0,1fr)]"
              >
                {/* Left cell */}
                <div className="col-[1/2] z-10">
                  {leftSide ? (
                    <div className="tl-card rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur-sm transition hover:bg-white/10">
                      <time className="mb-1 block text-xs md:text-sm font-semibold text-gray-400">{item.time}</time>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-100">{item.title}</h3>
                      {item.org && <p className="text-sm text-blue-300">{item.org}</p>}
                      {item.desc && <p className="mt-2 text-sm text-gray-300">{item.desc}</p>}
                    </div>
                  ) : (
                    <div className="h-0" />
                  )}
                </div>

                {/* Middle dot */}
                <div className="col-[2/3] flex justify-center z-10">
                  <span className="timeline-dot block h-4 w-4 rounded-full bg-[#1484da]" />
                </div>

                {/* Right cell */}
                <div className="col-[3/4] z-10">
                  {!leftSide ? (
                    <div className="tl-card rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur-sm transition hover:bg-white/10">
                      <time className="mb-1 block text-xs md:text-sm font-semibold text-gray-400">{item.time}</time>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-100">{item.title}</h3>
                      {item.org && <p className="text-sm text-blue-300">{item.org}</p>}
                      {item.desc && <p className="mt-2 text-sm text-gray-300">{item.desc}</p>}
                    </div>
                  ) : (
                    <div className="h-0" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
