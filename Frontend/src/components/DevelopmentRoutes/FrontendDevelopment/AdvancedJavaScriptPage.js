import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function AdvancedJavaScriptPage({ closeAdvancedJavaScript, Done }) {
    const Nexthandler = () => {
        Done();
        closeAdvancedJavaScript();
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
                    <span onClick={closeAdvancedJavaScript} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Advanced JavaScript</h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">Advanced JavaScript</span> goes beyond the basics, 
                        covering powerful features and deep concepts that help you write efficient, maintainable, 
                        and scalable code.
                    </p>

                    <p>
                        Mastering these concepts prepares you for building complex, high-performance applications.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">What to Learn:</p>
                        <ul className="list-disc list-inside">
                            <li>Closures and Scope</li>
                            <li>Prototypes and Inheritance</li>
                            <li>Asynchronous JavaScript (Promises, async/await)</li>
                            <li>Event Loop and Concurrency Model</li>
                            <li>Advanced ES6+ Features</li>
                        </ul>

                        <p className="font-bold">Tools:</p>
                        <ul className="list-disc list-inside">
                            <li>Browser DevTools</li>
                            <li>Node.js for testing concepts</li>
                        </ul>

                        <p className="font-bold">Resources to Learn Advanced JavaScript:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">MDN JavaScript Docs</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://javascript.info/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">The Modern JavaScript Tutorial</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/PoRJizFvM7s" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">JavaScript Advanced Concepts – freeCodeCamp</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://frontendmasters.com/courses/javascript-hard-parts/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">JavaScript: The Hard Parts – Frontend Masters</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button onClick={closeAdvancedJavaScript} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}
