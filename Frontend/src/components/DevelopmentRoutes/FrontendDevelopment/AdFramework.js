import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function AdFrameworkPage({ closeAdvancedFrameworks, Done }) {
    const Nexthandler = () => {
        Done();
        closeAdvancedFrameworks();
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
                    <span onClick={closeAdvancedFrameworks} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Advanced React Frameworks</h2>

                {/* Intro */}
                <p className="mb-6">
                    Advanced frameworks like **Next.js** or **Gatsby** enhance React with server-side rendering and static site generation. These tools are key for building SEO-friendly, high-performance applications like blogs or e-commerce platforms.
                </p>

                {/* Next.js */}
                <div className="border border-[#38bdf8] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#38bdf8] mb-2">Next.js</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Server-Side Rendering (SSR):** Renders pages on the server for faster initial load times and better SEO.</li>
                        <li>**Static Site Generation (SSG):** Pre-renders pages at build time for ultimate performance.</li>
                        <li>An all-in-one solution with file-based routing, API routes, and image optimization.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Next.js Official Docs
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/A6ZZiL8Y_W8" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Next.js 13 Tutorial - The Net Ninja
                            </a>
                        </div>
                    </div>
                </div>

                {/* Gatsby */}
                <div className="border border-[#0288d1] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#0288d1] mb-2">Gatsby</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>A framework for building blazing-fast websites and apps with React.</li>
                        <li>Focuses on **Static Site Generation (SSG)** and can pull data from any source (CMS, Markdown, APIs).</li>
                        <li>Rich plugin ecosystem for features like image optimization and offline support.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://www.gatsbyjs.com/docs/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Gatsby Official Docs
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/8t0Yl2cT9aY" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Gatsby Tutorial - FreeCodeCamp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Key Concepts */}
                <div className="border border-[#7952b3] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#7952b3] mb-2">Key Concepts</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**SSR vs. SSG:** Understand when to choose between server-side rendering for dynamic content and static site generation for static content.</li>
                        <li>**Hybrid Rendering:** Learn how to use both SSR and SSG within the same application.</li>
                        <li>**Data Fetching:** Master different data fetching methods like `getStaticProps` and `getServerSideProps` in Next.js.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://nextjs.org/docs/basic-features/data-fetching/overview" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Next.js Data Fetching Overview
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/x1sR2J_F9t8" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                SSR vs. SSG Explained - Fireship
                            </a>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button onClick={closeAdvancedFrameworks} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}