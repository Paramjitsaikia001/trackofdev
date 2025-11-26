import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function CareerPage({ closeCareer, Done }) {
    const Nexthandler = () => {
        Done();
        closeCareer();
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
                <div className="flex pb-4 justify-between items-center w-[100%]">
                    <span className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"

                                            onClick={fullscreenHandler}

                                        >
            {getFullscreenIconName(isFullScreen)}
          </span>
                    <span
                        onClick={closeCareer}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    Career & Job Preparation for Backend Developers
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        Breaking into backend development requires not just technical 
                        knowledge but also **interview preparation, projects, and professional presence**.  
                        This section helps you get job-ready and stand out in the hiring process.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Key Focus Areas:</p>
                        <ul className="list-disc list-inside">
                            <li>Mastering **DSA (Data Structures & Algorithms)**</li>
                            <li>Practicing **system design & architecture** questions</li>
                            <li>Building a strong **portfolio of backend projects**</li>
                            <li>Understanding real-world tools: Git, Docker, CI/CD, cloud</li>
                            <li>Improving problem-solving on coding platforms</li>
                            <li>Practicing **behavioral & HR interviews**</li>
                            <li>Contributing to **open-source projects**</li>
                            <li>Learning about freelancing & side hustles</li>
                        </ul>

                        <p className="font-bold">How to Prepare for Interviews:</p>
                        <ul className="list-disc list-inside">
                            <li>Solve coding problems daily (LeetCode, Codeforces, HackerRank)</li>
                            <li>Review backend concepts (databases, APIs, security, caching)</li>
                            <li>Prepare **mock system design interviews**</li>
                            <li>Have 2–3 **production-level projects** on GitHub</li>
                            <li>Study common backend interview questions (auth, scaling, DB design)</li>
                        </ul>

                        <p className="font-bold">Career Tips:</p>
                        <ul className="list-disc list-inside">
                            <li>Create a polished **LinkedIn profile**</li>
                            <li>Write blog posts or tutorials to showcase expertise</li>
                            <li>Network with developers via meetups, Discord, LinkedIn</li>
                            <li>Apply for **internships, freelancing, hackathons**</li>
                            <li>Keep learning new tools (Cloud, DevOps, AI integration)</li>
                        </ul>

                        <p className="font-bold">Resources to Get Job-Ready:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://leetcode.com/explore/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        LeetCode Practice
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://roadmap.sh/backend"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Backend Developer Roadmap (roadmap.sh)
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/0Aqf-FN6ta4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Backend Developer Interview Prep – freeCodeCamp
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/XKu_SEDAykw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Google Coding Interview Example
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={closeCareer}
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        Close
                    </button>
                    <button
                        onClick={Nexthandler}
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        Done
                    </button>
                </div>
            </div>
        </section>
    );
}