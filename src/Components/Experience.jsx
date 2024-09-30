import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Experience = () => {
    const comp = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".experience-item", {
                opacity: 0.01,
                y: 100,
                stagger: 1, // Increased stagger for slower sequential animation
                duration: 3, // Increased duration
                scrollTrigger: {
                    trigger: "#Experience",
                    start: "top center",
                    end: "bottom center",
                    scrub: 1, // Increased scrub for slower scroll-based animation
                }
            });

            gsap.from(".timeline-dot", {
                scale: 0,
                duration: 1, // Increased duration
                scrollTrigger: {
                    trigger: "#Experience",
                    start: "top center",
                    end: "bottom center",
                    scrub: 1, // Increased scrub for slower scroll-based animation
                }
            });
        }, comp);

        return () => ctx.revert();
    }, []);

    return(
        <div ref={comp} className="py-44 lg:px-62 md:px-28 bg-gray-900">
            <h1 className="text-4xl text-white font-bold mb-10 text-center">Experience</h1>
            <div id="Experience" className="max-w-7xl mx-auto w-[600px] grid grid-cols-9 px-2">
                {/* Left side experience */}
                <div className="col-span-4 w-full h-full">
                    <div className="experience-item w-full h-full p-2 md:pl-4">
                        <time className="mb-1 text-sm font-semibold leading-none text-gray-400">February 2022</time>
                        <h3 className="text-lg font-semibold text-gray-200 my-2">MERN Stack Developer</h3>
                        <p className="mb-4 text-base font-normal text-gray-500">Description of your MERN Stack Developer experience goes here.</p>
                    </div>
                </div>

                {/* Timeline bar */}
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-[#1484da]"></div>
                    <div className="timeline-dot absolute w-6 h-6 rounded-full bg-[#1484da] z-10 text-white text-center">
                    </div>
                </div>

                {/* Right side - empty for first item */}
                <div className="col-span-4 w-full h-full"></div>

                {/* Left side - empty for second item */}
                <div className="col-span-4 w-full h-full"></div>

                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-[#1484da]"></div>
                    <div className="timeline-dot absolute w-6 h-6 rounded-full bg-[#1484da] z-10 text-white text-center">
                    </div>
                </div>

                <div className="col-span-4 w-full h-full">
                    <div className="experience-item w-full h-full p-2 md:pr-4">
                        <time className="mb-1 text-sm font-semibold leading-none text-gray-400">January 2021</time>
                        <h3 className="text-lg font-semibold text-gray-200 my-2">Frontend Developer</h3>
                        <p className="mb-4 text-base font-normal text-gray-500">Description of your Frontend Developer experience goes here.</p>
                    </div>
                </div>

                <div className="col-span-4 w-full h-full">
                    <div className="experience-item w-full h-full p-2 md:pl-4">
                        <time className="mb-1 text-sm font-semibold leading-none text-gray-400">February 2022</time>
                        <h3 className="text-lg font-semibold text-gray-200 my-2">MERN Stack Developer</h3>
                        <p className="mb-4 text-base font-normal text-gray-500">Description of your MERN Stack Developer experience goes here.</p>
                    </div>
                </div>

                {/* Timeline bar */}
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-[#1484da]"></div>
                    <div className="timeline-dot absolute w-6 h-6 rounded-full bg-[#1484da] z-10 text-white text-center">
                    </div>
                </div>

                {/* Right side - empty for first item */}
                <div className="col-span-4 w-full h-full"></div>

                {/* Left side - empty for second item */}
                <div className="col-span-4 w-full h-full"></div>

                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-[#1484da]"></div>
                    <div className="timeline-dot absolute w-6 h-6 rounded-full bg-[#1484da] z-10 text-white text-center">
                    </div>
                </div>

                <div className="col-span-4 w-full h-full">
                    <div className="experience-item w-full h-full p-2 md:pr-4">
                        <time className="mb-1 text-sm font-semibold leading-none text-gray-400">January 2021</time>
                        <h3 className="text-lg font-semibold text-gray-200 my-2">Frontend Developer</h3>
                        <p className="mb-4 text-base font-normal text-gray-500">Description of your Frontend Developer experience goes here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;