import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function ProjectIdeasPage({ closeProjects, Done }) {
    const Nexthandler = () => {
        Done();
        closeProjects();
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
                        onClick={closeProjects}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    Project Ideas for App Development
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">Project Ideas</span> 
                        are the best way to learn app development. These ideas are 
                        categorized from beginner-friendly to pro-level projects 
                        that cover real-world problems.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-6">

                        {/* Beginner */}
                        <div>
                            <p className="font-bold text-lg">🔹 Beginner Projects</p>
                            <ul className="list-disc list-inside">
                                <li>To-Do List App</li>
                                <li>Simple Calculator</li>
                                <li>Weather App (using public API)</li>
                                <li>Note-Taking App</li>
                                <li>Stopwatch / Timer App</li>
                            </ul>
                        </div>

                        {/* Intermediate */}
                        <div>
                            <p className="font-bold text-lg">🔸 Intermediate Projects</p>
                            <ul className="list-disc list-inside">
                                <li>Expense Tracker</li>
                                <li>Quiz / Flashcard App</li>
                                <li>Recipe Book App</li>
                                <li>Chat App with Firebase</li>
                                <li>Habit Tracker</li>
                            </ul>
                        </div>

                        {/* Advanced */}
                        <div>
                            <p className="font-bold text-lg">🔶 Advanced Projects</p>
                            <ul className="list-disc list-inside">
                                <li>E-commerce App (cart, orders, payments)</li>
                                <li>Food Delivery Clone (Swiggy/Zomato style)</li>
                                <li>Music / Podcast Player</li>
                                <li>Fitness Tracking App (with sensors)</li>
                                <li>Travel Planner with Maps</li>
                            </ul>
                        </div>

                        {/* Pro */}
                        <div>
                            <p className="font-bold text-lg">🏆 Pro-Level Projects</p>
                            <ul className="list-disc list-inside">
                                <li>Social Media App (posts, likes, comments, notifications)</li>
                                <li>EdTech App (courses, quizzes, progress tracking)</li>
                                <li>Healthcare App (doctor booking + medicine reminder)</li>
                                <li>Banking/Finance App (secure transactions)</li>
                                <li>AI-powered App (chatbot, recommendation system, voice assistant)</li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <p className="font-bold">📚 Resources to Learn:</p>
                            <div className="flex flex-col gap-4">
                                {/* Docs */}
                                <div className="flex gap-3">
                                    <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                    <a
                                        href="https://reactnative.dev/docs/environment-setup"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="text-[#28ffd4] underline">React Native Docs</span>
                                    </a>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                    <a
                                        href="https://docs.flutter.dev/get-started/install"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="text-[#28ffd4] underline">Flutter Docs</span>
                                    </a>
                                </div>

                                {/* YouTube Tutorials */}
                                <div className="flex gap-3 items-center">
                                    <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                        play_arrow
                                    </span>
                                    <a
                                        href="https://youtu.be/0-S5a0eXPoc"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="text-[#28ffd4] underline">
                                            React Native Crash Course – Academind
                                        </span>
                                    </a>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                        play_arrow
                                    </span>
                                    <a
                                        href="https://youtu.be/fq4N0hgOWzU"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="text-[#28ffd4] underline">
                                            Flutter Complete Tutorial – The Net Ninja
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={closeProjects}
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