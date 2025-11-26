import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function ProjectBuild({ closeProjectBuild, Done }) {
    const [isFullScreen, setFullScreen] = useState(false);

    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

    const nextHandler = () => {
        Done();
        closeProjectBuild();
    };

    return (
        <section
            className={getFullscreenClasses(isFullScreen)}
            style={{ boxShadow: "0 0 10px 0px #000000" }}
        >
            <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    <span 
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden" 
                        onClick={fullscreenHandler}
                    >
                        {getFullscreenIconName(isFullScreen)}
                    </span>
                    <span onClick={closeProjectBuild} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Project Build Tools</h2>
                <div className="flex flex-col gap-1">
                    <p>Building projects is a great way to apply your knowledge and improve your skills in web development. Here are some project ideas categorized by difficulty level, along with resources to help you get started.</p>
                    
                    <div className="section mt-4">
                        <h3 className="text-xl mb-2">Beginner Level</h3>
                        <ul className="list-disc list-inside">
                            <li>Personal Portfolio Website</li>
                            <li>To-Do List App</li>
                            <li>Simple Blog</li>
                            <li>Weather App</li>
                            <li>Calculator</li>
                        </ul>
                        <h4 className="text-lg mt-2">Resources:</h4>
                        <ul className="list-disc list-inside flex flex-col gap-3">
                            <li className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/27JtRAI3QO8" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">Build a Personal Portfolio Website - freeCodeCamp.org</a>
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/1g2Bf4YewyU" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">To-Do List App Tutorial - Traversy Media</a>
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/6BozpmSjk-Y" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">Build a Simple Blog - The Net Ninja</a>
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/WZNG8UomjSI" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">Weather App Tutorial - Code Explained</a>
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/j59qQ7YWLxw" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">Build a Calculator - Web Dev Simplified</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="section mt-4">
                        <h3 className="text-xl mb-2">Intermediate Level</h3>
                        <ul className="list-disc list-inside">
                            <li>E-commerce Website</li>
                            <li>Chat Application</li>
                            <li>Recipe App</li>
                            <li>Expense Tracker</li>
                            <li>Movie Database</li>
                        </ul>
                        <h4 className="text-lg mt-2">Resources:</h4>
                        <ul className="list-disc list-inside flex flex-col gap-3">
                            <li className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/--KhunYb2hU" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">Build an E-commerce Website - Clever Programmer</a>
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/zQyrwxMPm88" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">Chat Application Tutorial - JavaScript Mastery</a>
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/4q2vvZn5aoo" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">Recipe App Tutorial - The Net Ninja</a>
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/XtMThy8QKqU" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">Expense Tracker Tutorial - Traversy Media</a>
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/biOMz4puGt8" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">Movie Database Tutorial - freeCodeCamp.org</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="section mt-4">
                        <h3 className="text-xl mb-2">Industry Level</h3>
                        <ul className="list-disc list-inside">
                            <li>Social Media Platform</li>
                            <li>Project Management Tool</li>
                            <li>Online Learning Platform</li>
                            <li>Job Board</li>
                            <li>Real-Time Collaboration Tool</li>
                        </ul>
                        <h4 className="text-lg mt-2">Resources:</h4>
                        <ul className="list-disc list-inside flex flex-col gap-3">
                            <li className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/ldGl6L4Vktk" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">Build a Social Media Platform - Clever Programmer</a>
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/0cpc1hrRL3g" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">Project Management Tool Tutorial - Traversy Media</a>
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/2jy4D4v4Z6g" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">Online Learning Platform Tutorial - freeCodeCamp.org</a>
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/1NrHkjlWVhM" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">Job Board Tutorial - JavaScript Mastery</a>
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/3GgVUKcG9Wc" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">Real-Time Collaboration Tool Tutorial - The Net Ninja</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between mt-6">
                    <button onClick={closeProjectBuild} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={nextHandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}