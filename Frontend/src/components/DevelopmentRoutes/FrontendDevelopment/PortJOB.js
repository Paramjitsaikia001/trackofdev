import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function PortfolioPage({ closePortfolio, Done }) {
    const Nexthandler = () => {
        Done();
        closePortfolio();
    };

    const [isFullScreen, setFullScreen] = useState(false);
    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

    return (
        <section
            className={getFullscreenClasses(isFullScreen)}
            style={{ boxShadow: "0 0 10px 0px #000000" }}
        >
            <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
                {/* Header controls */}
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    <span className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"

                                            onClick={fullscreenHandler}

                                        >
            {getFullscreenIconName(isFullScreen)}
          </span>
                    <span onClick={closePortfolio} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Portfolio & Career Prep</h2>

                {/* Intro */}
                <p className="mb-6">
                    A **strong portfolio** with 3-5 diverse projects (e.g., animated landing pages, 3D product viewers, SPAs) showcases your skills. Combine with open-source contributions, a technical blog, and coding interview prep (LeetCode, HackerRank) to land a frontend role.
                </p>

                {/* Portfolio Projects */}
                <div className="border border-[#38bdf8] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#38bdf8] mb-2">Build a Strong Portfolio</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>Showcase **3-5 diverse projects** that demonstrate a range of skills.</li>
                        <li>Include a project with CSS animations/GSAP, a 3D model viewer, and a full-stack SPA.</li>
                        <li>**Document each project** with a clear README, a live demo link, and a link to the source code.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://www.freecodecamp.org/news/how-to-build-a-killer-developer-portfolio/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                FreeCodeCamp - How to Build a Killer Portfolio
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/835q5D13W8Y" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Portfolio Project Ideas - The Net Ninja
                            </a>
                        </div>
                    </div>
                </div>

                {/* Resume & Networking */}
                <div className="border border-[#0288d1] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#0288d1] mb-2">Resume & Networking</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>Craft a professional resume that highlights your projects and skills.</li>
                        <li>Use **LinkedIn** to connect with recruiters and other developers.</li>
                        <li>Contribute to **open-source projects** to showcase collaboration skills.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://www.freecodecamp.org/news/resume-tips-for-developers/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Resume Tips for Developers
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/JmUv2gC6Xl4" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Open Source Contributions Guide - Eddie Jaoude
                            </a>
                        </div>
                    </div>
                </div>

                {/* Interview Prep */}
                <div className="border border-[#7952b3] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#7952b3] mb-2">Coding Interview Prep</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>Practice common data structures and algorithms on platforms like **LeetCode** and **HackerRank**.</li>
                        <li>Prepare for behavioral questions and be ready to talk about your projects in detail.</li>
                        <li>Understand core frontend concepts like the event loop, closure, and the DOM.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://www.leetcode.com/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                LeetCode
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/n3ePqT-l_f0" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Frontend Interview Prep Guide - The Net Ninja
                            </a>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button onClick={closePortfolio} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}