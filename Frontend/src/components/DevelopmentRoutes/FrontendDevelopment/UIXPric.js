import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function UIUXPage({ closeUIUX, Done }) {
    const Nexthandler = () => {
        Done();
        closeUIUX();
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
                    <span onClick={closeUIUX} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">UI/UX & Design</h2>

                {/* Intro */}
                <p className="mb-6">
                    **UI/UX principles**, **design systems**, and tools like **Figma**, combined with **accessibility standards** (WCAG), ensure user-friendly, inclusive applications. These skills bridge development and design for polished, professional interfaces.
                </p>

                {/* UI/UX Principles & Design Systems */}
                <div className="border border-[#38bdf8] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#38bdf8] mb-2">Principles & Design Systems</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**UI (User Interface)**: Focuses on the visual elements users interact with.</li>
                        <li>**UX (User Experience)**: Focuses on how a user feels when using the product.</li>
                        <li>**Design Systems**: A single source of truth for design rules and components, ensuring consistency and efficiency.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://growth.design/psychology" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Growth.Design - UX Case Studies
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/MUiW-yG63q0" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                The 5 UX Laws You Must Know - Jesse Showalter
                            </a>
                        </div>
                    </div>
                </div>

                {/* Design Tools */}
                <div className="border border-[#0288d1] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#0288d1] mb-2">Design Tools (Figma)</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Figma**: The industry-standard tool for UI design and prototyping.</li>
                        <li>Collaborate with designers, inspect layouts, and export assets.</li>
                        <li>Build interactive prototypes to test user flows before writing code.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://www.figma.com/learn/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Figma Learn - Official Tutorials
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/FTQ8y7p1yXg" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Figma Crash Course - Traversy Media
                            </a>
                        </div>
                    </div>
                </div>

                {/* Accessibility */}
                <div className="border border-[#7952b3] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#7952b3] mb-2">Accessibility (a11y)</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**WCAG (Web Content Accessibility Guidelines)**: A set of standards for making web content accessible.</li>
                        <li>Learn about keyboard navigation, screen readers, semantic HTML, and contrast.</li>
                        <li>Building accessible interfaces is a critical skill for creating inclusive products.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://www.w3.org/WAI/fundamentals/accessibility-intro/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                W3C - Introduction to Web Accessibility
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/0Gg_B0J0p58" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Why Accessibility Matters - Kevin Powell
                            </a>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button onClick={closeUIUX} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}