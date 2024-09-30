import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandBootstrap, TbBrandCss3, TbBrandTailwind } from "react-icons/tb";
import { DiJavascript1 } from "react-icons/di";
import { IoLogoReact } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const comp = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.utils.toArray('.skill-item').forEach((item, index) => {
                gsap.from(item, {
                    opacity: 0,
                    y: 50 + (index * 10), // Increasing y offset for each item
                    x: index % 2 === 0 ? -20 : 20, // Alternating x offset
                    rotation: index % 2 === 0 ? -5 : 5, // Alternating slight rotation
                    scale: 0.8,
                    duration: 1 + (index * 0.1), // Increasing duration for each item
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom-=100",
                        end: "top center",
                        scrub: 1,
                    }
                });
            });
        }, comp);

        return () => ctx.revert();
    }, []);

    const skillsData = [
        { Icon: AiOutlineHtml5, name: "HTML", level: "Advanced" },
        { Icon: TbBrandCss3, name: "CSS", level: "Advanced" },
        { Icon: DiJavascript1, name: "JavaScript", level: "Intermediate" },
        { Icon: IoLogoReact, name: "React JSX", level: "Basic" },
        { Icon: TbBrandBootstrap, name: "Bootstrap", level: "Basic" },
        { Icon: TbBrandTailwind, name: "Tailwind CSS", level: "Basic" },
    ];

    return (
        <div ref={comp} className="py-44 lg:px-44 md:px-40 px-[20px]" id="Skills">
            <h1 className="text-4xl text-white font-bold mb-10 text-center">Skills</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                {skillsData.map(({ Icon, name, level }, index) => (
                    <div key={name} className="skill-item bg-slate-900 p-[20px] rounded-xl flex flex-col items-center justify-center">
                        <Icon className="text-[60px] my-4 text-center text-[#1484da]" />
                        <h2 className="text-[17px] font-bold mb-4">{name}</h2>
                        <span className="py-[1px] text-[16px] text-center">{level}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;