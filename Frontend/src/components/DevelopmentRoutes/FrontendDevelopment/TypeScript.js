import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function TypeScriptPage({ closeTypeScript, Done }) {
    const Nexthandler = () => {
        Done();
        closeTypeScript();
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
                    <span onClick={closeTypeScript} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">TypeScript</h2>

                {/* Intro */}
                <p className="mb-6">
                    **TypeScript** adds type safety to JavaScript, improving code reliability and scalability. Learn interfaces, generics, and TypeScript integration with frameworks like React to build robust, error-free applications.
                </p>

                {/* Core Concepts */}
                <div className="border border-[#38bdf8] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#38bdf8] mb-2">Core Concepts</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Static Typing:** Catch errors before your code runs by explicitly defining data types.</li>
                        <li>**Interfaces:** Define the structure of objects for consistency.</li>
                        <li>**Generics:** Create reusable components that work with a variety of data types.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                TypeScript Official Docs
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/3TSb6q_tJ80" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                TypeScript Full Course for Beginners - FreeCodeCamp
                            </a>
                        </div>
                    </div>
                </div>

                {/* React Integration */}
                <div className="border border-[#0288d1] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#0288d1] mb-2">React Integration</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Props and State:** Type props and component state for predictable data flow.</li>
                        <li>**Event Handlers:** Define types for event handlers to ensure proper event object usage.</li>
                        <li>**Custom Hooks:** Create type-safe custom hooks for better reusability.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://react-typescript-cheatsheet.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                React + TypeScript Cheatsheets
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/W6Ed4Q_3WlE" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                React TypeScript Tutorial - Mosh Hamedani
                            </a>
                        </div>
                    </div>
                </div>

                {/* Advanced Topics */}
                <div className="border border-[#7952b3] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#7952b3] mb-2">Advanced Topics</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Utility Types:** Learn to use built-in types like `Partial`, `Readonly`, and `Omit`.</li>
                        <li>**Type Inference:** Understand how TypeScript infers types to write cleaner code.</li>
                        <li>**Declaration Files:** Work with external JavaScript libraries by creating declaration files (`.d.ts`).</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                TypeScript Handbook - Utility Types
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/f_t4S306fH8" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Advanced TypeScript with Zod & Generics - Ben Awad
                            </a>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button onClick={closeTypeScript} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}