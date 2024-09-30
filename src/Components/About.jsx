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
        <div ref={comp} id="About" className='py-28 lg:px-44 px-[20px] text-white'>
            <h2 className='text-4xl font-bold mb-4 text-center'>About Me</h2>
            <p className='text-xl mb-12 text-center'></p>

            <div id="intro-slider" className="flex lg:flex-row flex-col lg:items-start items-center justify-center gap-12">
                <div id="profile-image" className="px-[40px] py-[5px] w-[300px]">
                    <img className='w-[500hx] h-[400px] rounded-xl' src={profile2} alt="Profile" />
                </div>

                <div className="lg:w-1/2 justify-center items-center text-center lg:text-left">
                    <div className="flex justify-center lg:justify-start gap-[20px] mb-[40px] flex-wrap">
                        <div className="bg-gray-900 p-[15px] rounded-xl flex flex-col items-center justify-center">
                            <FaAward className="text-[24px] text-center text-[#1484da] mb-[6px]" />
                            <h3 className="text-[18px] font-bold about-text">Experience</h3>
                            <span className="text-[16px] about-text">1 Year</span>
                        </div>

                        <div className="bg-gray-900 p-[15px] rounded-xl flex flex-col items-center justify-center">
                            <GrAccessibility className="text-[24px] text-center text-[#1484da] mb-[6px]" />
                            <h3 className="text-[18px] font-bold about-text">Best-in</h3>
                            <span className="text-[16px] about-text">Group Projects</span>
                        </div>

                        <div className="bg-gray-900 p-[15px] rounded-xl flex flex-col items-center justify-center">
                            <GrUserExpert className="text-[24px] text-center text-[#1484da] mb-[6px]" />
                            <h3 className="text-[18px] font-bold about-text">Expert</h3>
                            <span className="text-[16px] about-text">Discipline</span>
                        </div>
                    </div>

                    <p className="text-[16px] mb-6 about-text">
                        For the past year, I have been on an exciting journey to launch my own start-up business.
                        My vision centers around creating a website-based platform that I believe has great potential.
                    </p>
                    <p className="text-[16px] about-text">
                        Throughout this time, I have dedicated myself to learning both front-end and back-end programming, 
                        equipping myself with the skills necessary to bring my vision to life.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
