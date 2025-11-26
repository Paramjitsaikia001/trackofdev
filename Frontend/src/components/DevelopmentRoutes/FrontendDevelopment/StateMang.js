import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function AdvancedStatePage({ closeAdvancedState, Done }) {
    const Nexthandler = () => {
        Done();
        closeAdvancedState();
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
                    <span
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"
                        onClick={fullscreenHandler}
                    >
                        {getFullscreenIconName(isFullScreen)}
                    </span>
                    <span onClick={closeAdvancedState} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Advanced State Management</h2>

                {/* Intro */}
                <p className="mb-6">
                    Advanced state management with **Redux Toolkit**, **Zustand**, or **React Context** ensures efficient data flow in complex applications. These skills are critical for maintainability in projects like dashboards or e-commerce platforms.
                </p>

                {/* React Context API */}
                <div className="border border-[#38bdf8] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#38bdf8] mb-2">React Context API</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>A built-in solution for sharing state without prop drilling.</li>
                        <li>Best for less frequent updates and global data like themes or user authentication.</li>
                        <li>Simple to set up for smaller-to-medium-sized applications.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://react.dev/learn/passing-data-deeply-with-context" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                React Docs - Passing Data with Context
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/5LrDIWkK_eY" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                React Context & useContext Hook - Traversy Media
                            </a>
                        </div>
                    </div>
                </div>

                {/* Redux Toolkit */}
                <div className="border border-[#0288d1] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#0288d1] mb-2">Redux Toolkit (RTK)</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>The official, modern way to use Redux.</li>
                        <li>Simplifies complex state management with opinionated tools.</li>
                        <li>Provides a centralized state store for predictable data flow.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Redux Toolkit Official Docs
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/9zyeD2yD-zE" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Redux Toolkit Crash Course - FreeCodeCamp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Zustand */}
                <div className="border border-[#7952b3] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#7952b3] mb-2">Zustand</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>A small, fast, and scalable state management solution.</li>
                        <li>Simple API with minimal boilerplate.</li>
                        <li>Ideal for projects that need a robust solution without the complexity of Redux.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://docs.pmnd.rs/zustand/getting-started/introduction" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Zustand Official Docs
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/O5nJ6oQ6yF4" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                React State Management with Zustand - The Net Ninja
                            </a>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button onClick={closeAdvancedState} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}