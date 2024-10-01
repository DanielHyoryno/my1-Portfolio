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
                stagger: 1,
                duration: 1.5, // Decreased duration for quicker animation
                scrollTrigger: {
                    trigger: "#Experience",
                    start: "top 150%",
                    end: "bottom 50%",
                    scrub: 1,
                }
            });

            gsap.from(".timeline-dot", {
                scale: 0,
                duration: 0.5, // Decreased duration
                scrollTrigger: {
                    trigger: "#Experience",
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                }
            });
        }, comp);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={comp} className="py-20 lg:py-28 md:px-10 px-4 bg-gray-900"> {/* Adjusted padding */}
            <h1 className="text-3xl md:text-4xl text-white font-bold mb-6 text-center">Experience</h1> {/* Adjusted heading size */}
            <div id="Experience" className="max-w-6xl mx-auto w-full grid grid-cols-9 px-2"> {/* Adjusted max width */}
                {/* Left side experience */}
                <div className="col-span-4 w-full h-full">
                    <div className="experience-item w-full h-full p-2 md:pl-2"> {/* Adjusted padding */}
                        <time className="mb-1 text-xs md:text-sm font-semibold leading-none text-gray-400">February 2022</time> {/* Adjusted text size */}
                        <h3 className="text-md md:text-lg font-semibold text-gray-200 my-1">MERN Stack Developer</h3> {/* Adjusted text size */}
                        <p className="mb-2 text-xs md:text-base font-normal text-gray-500">Description of your MERN Stack Developer experience goes here.</p> {/* Adjusted text size */}
                    </div>
                </div>

                {/* Timeline bar */}
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-[#1484da]"></div>
                    <div className="timeline-dot absolute w-4 h-4 rounded-full bg-[#1484da] z-10 text-white text-center"></div> {/* Adjusted size */}
                </div>

                {/* Right side - empty for first item */}
                <div className="col-span-4 w-full h-full"></div>

                {/* Left side - empty for second item */}
                <div className="col-span-4 w-full h-full"></div>

                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-[#1484da]"></div>
                    <div className="timeline-dot absolute w-4 h-4 rounded-full bg-[#1484da] z-10 text-white text-center"></div> {/* Adjusted size */}
                </div>

                <div className="col-span-4 w-full h-full">
                    <div className="experience-item w-full h-full p-2 md:pr-2"> {/* Adjusted padding */}
                        <time className="mb-1 text-xs md:text-sm font-semibold leading-none text-gray-400">January 2021</time> {/* Adjusted text size */}
                        <h3 className="text-md md:text-lg font-semibold text-gray-200 my-1">Frontend Developer</h3> {/* Adjusted text size */}
                        <p className="mb-2 text-xs md:text-base font-normal text-gray-500">Description of your Frontend Developer experience goes here.</p> {/* Adjusted text size */}
                    </div>
                </div>

                <div className="col-span-4 w-full h-full">
                    <div className="experience-item w-full h-full p-2 md:pl-2"> {/* Adjusted padding */}
                        <time className="mb-1 text-xs md:text-sm font-semibold leading-none text-gray-400">February 2022</time> {/* Adjusted text size */}
                        <h3 className="text-md md:text-lg font-semibold text-gray-200 my-1">MERN Stack Developer</h3> {/* Adjusted text size */}
                        <p className="mb-2 text-xs md:text-base font-normal text-gray-500">Description of your MERN Stack Developer experience goes here.</p> {/* Adjusted text size */}
                    </div>
                </div>

                {/* Timeline bar */}
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-[#1484da]"></div>
                    <div className="timeline-dot absolute w-4 h-4 rounded-full bg-[#1484da] z-10 text-white text-center"></div> {/* Adjusted size */}
                </div>

                {/* Right side - empty for first item */}
                <div className="col-span-4 w-full h-full"></div>

                {/* Left side - empty for second item */}
                <div className="col-span-4 w-full h-full"></div>

                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-[#1484da]"></div>
                    <div className="timeline-dot absolute w-4 h-4 rounded-full bg-[#1484da] z-10 text-white text-center"></div> {/* Adjusted size */}
                </div>

                <div className="col-span-4 w-full h-full">
                    <div className="experience-item w-full h-full p-2 md:pr-2"> {/* Adjusted padding */}
                        <time className="mb-1 text-xs md:text-sm font-semibold leading-none text-gray-400">January 2021</time> {/* Adjusted text size */}
                        <h3 className="text-md md:text-lg font-semibold text-gray-200 my-1">Frontend Developer</h3> {/* Adjusted text size */}
                        <p className="mb-2 text-xs md:text-base font-normal text-gray-500">Description of your Frontend Developer experience goes here.</p> {/* Adjusted text size */}
                    </div>
                </div>

                {/* Additional experience items can be added here following the same structure */}
            </div>
        </div>
    );
}

export default Experience;