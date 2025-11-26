import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function Fullresource({ closeFullResources, Done }) {
    const Nexthandler = () => {
        Done();
        closeFullResources();
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
                    <span onClick={closeFullResources} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Full Course Resources</h2>

                {/* Intro */}
                <p className="mb-6">
                    This page provides a collection of free, high-quality resources and key points to guide you from a beginner to a professional in frontend web development.
                </p>

                {/* Core Fundamentals */}
                <div className="border border-[#38bdf8] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#38bdf8] mb-2">1. Core Fundamentals</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**HTML/CSS/JavaScript:** The absolute foundation. Master semantic HTML, modern CSS (Flexbox, Grid), and vanilla JavaScript.</li>
                        <li>**Browser DevTools:** Learn to inspect and debug your code directly in the browser.</li>
                        <li>**Git:** Understand version control for collaborative development.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/zM_f-y3_F-U" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                FreeCodeCamp - Full HTML/CSS/JS Course
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/R_i98x1KXrE" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Git & GitHub Crash Course - Traversy Media
                            </a>
                        </div>
                    </div>
                </div>

                {/* React & Modern Tools */}
                <div className="border border-[#0288d1] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#0288d1] mb-2">2. React & The Ecosystem</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**React.js:** Master components, hooks (`useState`, `useEffect`, `useContext`), and state management.</li>
                        <li>**Advanced State:** Learn Redux Toolkit or Zustand for complex applications.</li>
                        <li>**Routing:** Use React Router to handle navigation within your app.</li>
                        <li>**Styling:** Explore modern CSS frameworks like Tailwind CSS or component libraries like Material UI.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/SqcY0GlETPk" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                FreeCodeCamp - React Course
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/lC6A9_wF4tY" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Tailwind CSS Tutorial - Traversy Media
                            </a>
                        </div>
                    </div>
                </div>

                {/* Build, Test, & Optimize */}
                <div className="border border-[#7952b3] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#7952b3] mb-2">3. Build, Test, & Optimize</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Build Tools:** Understand bundlers like Webpack or Vite.</li>
                        <li>**Testing:** Learn Jest/RTL for unit tests and Cypress for end-to-end tests.</li>
                        <li>**Performance:** Master lazy loading and code splitting. Use Lighthouse to audit and improve your apps.</li>
                        <li>**TypeScript:** Add type safety to your JavaScript for scalable applications.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/Kq-Fp_z8bBE" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Vite & Webpack Explained - The Net Ninja
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/W6Ed4Q_3WlE" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                React + TypeScript Tutorial - Mosh Hamedani
                            </a>
                        </div>
                    </div>
                </div>

                {/* Advanced Topics & Career */}
                <div className="border border-[#8f8f8f] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#8f8f8f] mb-2">4. Advanced Topics & Career Prep</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**SSR/SSG:** Build high-performance apps with Next.js or Gatsby.</li>
                        <li>**UI/UX:** Understand design systems, accessibility (WCAG), and tools like Figma.</li>
                        <li>**Web Animations:** Learn CSS animations, GSAP, or Three.js for immersive visuals.</li>
                        <li>**Portfolio:** Build 3-5 diverse projects. Document them clearly on GitHub and a portfolio site.</li>
                        <li>**Interview Prep:** Practice coding challenges on LeetCode and be ready to discuss your projects.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/A6ZZiL8Y_W8" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Next.js 13 Tutorial - The Net Ninja
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/ftP5f5c-g_I" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                3D Portfolio - Three.js Tutorial
                            </a>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button onClick={closeFullResources} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}