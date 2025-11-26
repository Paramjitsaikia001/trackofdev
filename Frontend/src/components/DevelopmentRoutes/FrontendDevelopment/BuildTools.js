import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function BuildToolsPage({ closeBuildTools, Done }) {
    const Nexthandler = () => {
        Done();
        closeBuildTools();
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
                    <span onClick={closeBuildTools} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Build Tools & Deployment</h2>

                {/* Intro */}
                <p className="mb-6">
                    **Build tools** like Webpack and Vite, and **package managers** (npm/yarn) streamline development by bundling code and managing dependencies. Learn these alongside basic CI/CD concepts to deploy production-ready apps to platforms like Netlify or Vercel.
                </p>

                {/* Package Managers */}
                <div className="border border-[#38bdf8] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#38bdf8] mb-2">Package Managers (npm/yarn)</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>Install, manage, and update project dependencies.</li>
                        <li>Run scripts for development, testing, and building.</li>
                        <li>Understand `package.json` and `node_modules`.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://docs.npmjs.com/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                npm Official Docs
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/jHDshpt2H8k" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                npm Crash Course - Traversy Media
                            </a>
                        </div>
                    </div>
                </div>

                {/* Build Tools & Bundlers */}
                <div className="border border-[#0288d1] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#0288d1] mb-2">Build Tools (Webpack, Vite)</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Webpack**: A powerful and highly-configurable module bundler.</li>
                        <li>**Vite**: A modern, faster build tool with a simple configuration.</li>
                        <li>Learn concepts like code splitting, hot module replacement, and minification.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://webpack.js.org/concepts/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Webpack Concepts
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/Kq-Fp_z8bBE" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Webpack & Vite Explained - The Net Ninja
                            </a>
                        </div>
                    </div>
                </div>

                {/* CI/CD & Hosting */}
                <div className="border border-[#7952b3] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#7952b3] mb-2">CI/CD & Hosting</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>Automate the deployment process to save time and reduce errors.</li>
                        <li>Learn to connect a Git repository to a hosting platform.</li>
                        <li>Use services like **Netlify** or **Vercel** for seamless deployment.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://docs.netlify.com/get-started/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Netlify Docs - Get Started
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/u8_m14u30zE" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Deploy a React App to Netlify - Brian Design
                            </a>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button onClick={closeBuildTools} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}