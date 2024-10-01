import { GrAccessibility, GrUserExpert } from "react-icons/gr";
import profile2 from "../assets/profile2.jpg";
import { FaAward } from "react-icons/fa";
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const About = () => {
    const comp = useRef(null); 
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: '#intro-slider',
                    start: 'top 90%',
                    end: 'bottom 100%', 
                    scrub: 2,
                },
            });

            t1.from("#profile-image", { 
                opacity: 0, 
                x: -200, 
                duration: 200
            });

            t1.from(".about-text", { 
                opacity: 0, 
                y: 50, 
                stagger: 1, 
                duration: 20
            });
        }, comp);

        return () => ctx.revert(); // Clean up GSAP context on component unmount
    }, []);

    return (
        <div ref={comp} id="About" className='py-10 lg:py-20 px-4 max-w-6xl mx-auto text-white'> {/* Adjusted padding and max width */}
            <h2 className='text-3xl lg:text-4xl font-bold mb-4 text-center'>About Me</h2> {/* Adjusted heading size */}
            <p className='text-lg mb-12 text-center'></p> {/* Adjusted paragraph size */}

            <div id="intro-slider" className="flex flex-col lg:flex-row items-center justify-center gap-6"> {/* Maintain row layout */}
                <div id="profile-image" className="px-2 py-2 w-[150px] lg:w-[300px]"> {/* Adjusted width */}
                    <img className='w-full h-[200px] lg:h-[400px] rounded-xl' src={profile2} alt="Profile" /> {/* Adjusted image size */}
                </div>

                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <div className="flex justify-center lg:justify-start gap-4 mb-6 flex-wrap"> {/* Adjusted gap */}
                        <div className="bg-gray-900 p-2 lg:p-4 rounded-xl flex flex-col items-center justify-center w-[80px] lg:w-auto"> {/* Adjusted padding and width */}
                            <FaAward className="text-[16px] lg:text-[24px] text-center text-[#1484da] mb-2" /> {/* Adjusted icon size */}
                            <h3 className="text-[12px] lg:text-[18px] font-bold about-text">Experience</h3> {/* Adjusted text size */}
                            <span className="text-[10px] lg:text-[16px] about-text">1 Year</span> {/* Adjusted text size */}
                        </div>

                        <div className="bg-gray-900 p-2 lg:p-4 rounded-xl flex flex-col items-center justify-center w-[80px] lg:w-auto"> {/* Adjusted padding and width */}
                            <GrAccessibility className="text-[16px] lg:text-[24px] text-center text-[#1484da] mb-2" /> {/* Adjusted icon size */}
                            <h3 className="text-[12px] lg:text-[18px] font-bold about-text">Best-in</h3> {/* Adjusted text size */}
                            <span className="text-[10px] lg:text-[16px] about-text">Group Projects</span> {/* Adjusted text size */}
                        </div>

                        <div className="bg-gray-900 p-2 lg:p-4 rounded-xl flex flex-col items-center justify-center w-[80px] lg:w-auto"> {/* Adjusted padding and width */}
                            <GrUserExpert className="text-[16px] lg:text-[24px] text-center text-[#1484da] mb-2" /> {/* Adjusted icon size */}
                            <h3 className="text-[12px] lg:text-[18px] font-bold about-text">Expert</h3> {/* Adjusted text size */}
                            <span className="text-[10px] lg:text-[16px] about-text">Discipline</span> {/* Adjusted text size */}
                        </div>
                    </div>

                    <div className="bg-transparent p-2 lg:p-4 rounded-lg max-w-lg mx-auto text-left lg:text-left">
                        <p className="text-[12px] lg:text-[16px] mb-3 lg:mb-6 about-text"> {/* Adjusted text size */}
                            For the past year, I have been on an exciting journey to launch my own start-up business.
                            My vision centers around creating a website-based platform that I believe has great potential.
                        </p>
                        <p className="text-[12px] lg:text-[16px] about-text"> {/* Adjusted text size */}
                            Throughout this time, I have dedicated myself to learning both front-end and back-end programming, 
                            equipping myself with the skills necessary to bring my vision to life.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;