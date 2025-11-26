import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function PerformancePage({ closePerformance, Done }) {
    const Nexthandler = () => {
        Done();
        closePerformance();
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
                    <span onClick={closePerformance} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Performance & Optimization</h2>

                {/* Intro */}
                <p className="mb-6">
                    Optimizing performance with **lazy loading**, **code splitting**, and **asset optimization** (images, fonts) ensures fast applications. Use tools like **Lighthouse** to audit and improve load times, vital for user retention and SEO.
                </p>

                {/* Code Optimization */}
                <div className="border border-[#38bdf8] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#38bdf8] mb-2">Code Optimization</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Lazy Loading**: Load components only when they're needed, not on initial page load.</li>
                        <li>**Code Splitting**: Break your JavaScript bundle into smaller chunks to reduce initial load time.</li>
                        <li>**Bundle Auditing**: Use tools like Webpack Bundle Analyzer to visualize and reduce bundle size.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://react.dev/reference/react/lazy" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                React Docs - Lazy Loading
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/3B7_G8R5-yU" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Code Splitting & Lazy Loading in React - The Net Ninja
                            </a>
                        </div>
                    </div>
                </div>

                {/* Asset Optimization */}
                <div className="border border-[#0288d1] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#0288d1] mb-2">Asset Optimization (Images & Fonts)</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Image Compression**: Use responsive images, modern formats (WebP, AVIF), and compression to reduce file size without losing quality.</li>
                        <li>**Font Optimization**: Load only the necessary font weights and subsets to improve rendering time.</li>
                        <li>**Caching**: Implement browser and server caching strategies to speed up repeat visits.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://web.dev/fast/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                web.dev - Make the Web Faster
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/L8eRzzY-c3c" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Image Optimization Explained - Fireship
                            </a>
                        </div>
                    </div>
                </div>

                {/* Auditing & Monitoring */}
                <div className="border border-[#7952b3] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#7952b3] mb-2">Auditing & Monitoring</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Google Lighthouse**: A tool for auditing performance, accessibility, SEO, and best practices.</li>
                        <li>**Core Web Vitals**: Understand and monitor key metrics like Largest Contentful Paint (LCP) and First Input Delay (FID).</li>
                        <li>**Performance Monitoring**: Use tools like Sentry or Datadog to track real-world user performance.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://developers.google.com/web/tools/lighthouse" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Lighthouse Documentation
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/83w5x25P5Gk" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                What are Core Web Vitals? - Google Chrome Developers
                            </a>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button onClick={closePerformance} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}