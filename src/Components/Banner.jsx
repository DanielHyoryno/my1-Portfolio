import { FiGithub, FiInstagram } from 'react-icons/fi';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa6';
import { LuMouse } from 'react-icons/lu';
import profile1 from '../assets/profile1.png';
import profile2 from '../assets/profile2.jpg';

import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import ReactTypingEffect from 'react-typing-effect';

const AlphabetCursor = () => {
    const [currentLetter, setCurrentLetter] = useState('A');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLetter(prevLetter => {
                const nextLetter = String.fromCharCode(prevLetter.charCodeAt(0) + 1);
                return nextLetter > 'Z' ? 'A' : nextLetter; 
            });
        }, 100); // Change letter every 100ms

        return () => clearInterval(interval);
    }, []);

    return <span className="text-blue-400">{currentLetter}</span>;
};

const Banner = () => {
    const comp = useRef(null);
    const [startTyping, setStartTyping] = useState(false);
    const [typingComplete, setTypingComplete] = useState(false);
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline({
                onComplete: () => setStartTyping(true)
            });

            t1.from("#intro-slider", {
                yPercent: "-100",
                duration: 0.7,
                delay: 0.3,
                rotation: 60
            });

            t1.from("#title", {
                opacity: 0,
                y: "+=30",
                stagger: 0.1,
                duration: 0.5,
            });

            t1.from("#image", {
                opacity: 0,
                y: "-=30",
                duration: 0.5
            });

            return t1;
        }, comp);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div ref={comp}>
                <div id="Home" className="px-4 py-10 max-w-6xl mx-auto sm:px-2 md:px-4">
                    <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row items-center md:items-start justify-between w-full">
                        <div id='title' className="home-profile-text md:w-1/2 space-y-2 mb-6 md:mb-0 mx-4">
                            <p className="text-sm md:text-lg text-gray-400">Hello, I'm</p>
                            <h2 id='title' className="text-xl md:text-4xl font-bold flex items-center">
                                <ReactTypingEffect
                                    text={["Daniel Hyoryno Thenaka"]}
                                    speed={100}
                                    eraseSpeed={100}
                                    eraseDelay={2000}
                                    typingDelay={1000}
                                />
                            </h2>
                            
                            <p id='title' className="text-lg md:text-2xl text-blue-400">Novice Developer</p>
                            <p id='title' className="text-sm md:text-base text-gray-300">
                                Hello! I am just a student who is embarking on an exciting journey to establish my own career in Software Engineering.
                            </p>

                            <div className="flex space-x-4 mt-6 flex-wrap">
                                <button className="px-4 py-2 rounded mt-6 border border-[#1484da] hover:bg-blue-400 hover:border-transparent transition duration-300 text-white text-sm">
                                    Download CV
                                </button>
                                <button className="px-4 py-2 rounded mt-6 bg-blue-600 hover:bg-blue-400 transition duration-300 text-white text-sm">
                                    About Me
                                </button>
                            </div>
                        </div>

                        <div className="home-profile-picture md:w-[500px] flex justify-center p-0 m-0">
                            <img id='intro-slider'
                                src={profile1}
                                alt="Daniel Hyoryno Thenaka"
                                className="rounded-full w-32 h-32 md:w-80 md:h-80 object-cover"
                            />
                        </div>
                    </div>
                </div>


                {/* Social Media Links and Second Profile Picture Section */}
                <div className='text-white flex lg:flex-row flex-col lg:justify-around items-center'>
                    <div id="title" className='flex gap-4 lg:flex-col justify-center mt-10'>
                        <FiGithub className='social-icon bg-gray-900 p-[6px] text-3xl rounded' />
                        <FaLinkedinIn className='social-icon bg-gray-900 p-[6px] text-3xl rounded' />
                        <FaFacebookF className='social-icon bg-gray-900 p-[6px] text-3xl rounded' />
                        <FiInstagram className='social-icon bg-gray-900 p-[6px] text-3xl rounded' />
                    </div>

                    <img id="image" className='rounded-t-full lg:h-80 h-96 mt-10' src={profile2} alt="" />

                    <div id="title" className='mouse-section hidden lg:flex flex-col justify-center'>
                        <LuMouse className='text-xl animate-bounce mb-3' />
                        <p className='[writing-mode:vertical-rl]'>Lorem ipsum dolor.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;