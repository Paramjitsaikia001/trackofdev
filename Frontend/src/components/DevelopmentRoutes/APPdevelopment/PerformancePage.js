import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function AppPerformanceOptimizationPage({ closePerformance, Done }) {
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
                <div className="flex pb-4 justify-between items-center w-[100%]">
                    <span className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"

                                            onClick={fullscreenHandler}

                                        >
            {getFullscreenIconName(isFullScreen)}
          </span>
                    <span
                        onClick={closePerformance}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    App Performance Optimization
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">App Performance Optimization</span> 
                        ensures that your application runs smoothly, consumes fewer resources, 
                        and provides a fast, seamless user experience across devices.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Bundle Size Optimization:</p>
                        <ul className="list-disc list-inside">
                            <li>Use code splitting & lazy loading</li>
                            <li>Tree shaking to remove unused code</li>
                            <li>Optimize images (WebP, SVG, Lottie)</li>
                            <li>Minify & compress JS/CSS bundles</li>
                        </ul>

                        <p className="font-bold">Rendering Performance:</p>
                        <ul className="list-disc list-inside">
                            <li>Avoid unnecessary re-renders (React.memo, useMemo)</li>
                            <li>Use FlatList/SectionList instead of ScrollView for long lists</li>
                            <li>Batch state updates</li>
                            <li>Minimize inline functions inside render</li>
                        </ul>

                        <p className="font-bold">Profiling & Monitoring:</p>
                        <ul className="list-disc list-inside">
                            <li>Use React DevTools Profiler</li>
                            <li>Enable Flipper for debugging React Native</li>
                            <li>Use Xcode Instruments & Android Profiler</li>
                            <li>Track startup time & memory usage</li>
                        </ul>

                        <p className="font-bold">Battery & Resource Management:</p>
                        <ul className="list-disc list-inside">
                            <li>Minimize background tasks & timers</li>
                            <li>Pause animations when not visible</li>
                            <li>Batch network requests</li>
                        </ul>

                        <p className="font-bold">Network Optimization:</p>
                        <ul className="list-disc list-inside">
                            <li>Use caching for repeated requests</li>
                            <li>Enable gzip/deflate compression on APIs</li>
                            <li>Optimize images & media via CDN</li>
                            <li>Implement offline mode with local storage/SQLite</li>
                        </ul>

                        <p className="font-bold">Animations & UI Smoothness:</p>
                        <ul className="list-disc list-inside">
                            <li>Use native driver for animations in React Native</li>
                            <li>Prefer Lottie animations over GIFs</li>
                            <li>Limit overdraw with flatter UI hierarchies</li>
                            <li>Monitor FPS in dev tools</li>
                        </ul>

                        <p className="font-bold">Resources to Learn:</p>
                        <div className="flex flex-col gap-4">
                            {/* React Native Docs */}
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://reactnative.dev/docs/optimizing-performance"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        React Native Performance Docs
                                    </span>
                                </a>
                            </div>
                            {/* Flutter Docs */}
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://docs.flutter.dev/perf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Flutter Performance Guide
                                    </span>
                                </a>
                            </div>
                            {/* YouTube Tutorials */}
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/HU2i7j_Dv24"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        React Native Performance Optimization – Academind
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/WjRZ2rJ0Zqg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Flutter Performance Best Practices – The Net Ninja
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={closePerformance}
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