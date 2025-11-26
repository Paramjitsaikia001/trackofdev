import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function WebAnimationPage({ closeWebAnimation, Done }) {
    const Nexthandler = () => {
        Done();
        closeWebAnimation();
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
                    <span onClick={closeWebAnimation} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Web Animation</h2>

                {/* Intro */}
                <p className="mb-6">
                    <span className="text-[#23daff] font-bold">Web Animation</span> tools help developers create smooth, interactive, and engaging visual effects 
                    for websites and apps, enhancing the user experience.
                </p>

                {/* Framer Motion */}
                <div className="border border-[#ff4081] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#ff4081] mb-2">Framer Motion</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>Production-ready animation library for React</li>
                        <li>Easy syntax with declarative animations</li>
                        <li>Supports drag, gestures, and layout animations</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Framer Motion Official Docs
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/1j7q4cx8H28" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Framer Motion Tutorial – Fireship
                            </a>
                        </div>
                    </div>
                </div>

                {/* GSAP */}
                <div className="border border-[#00ff99] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#00ff99] mb-2">GSAP</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>High-performance JavaScript animation library</li>
                        <li>Cross-browser support with smooth rendering</li>
                        <li>Advanced timeline and sequencing features</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://greensock.com/gsap/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                GSAP Official Docs
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/PoRJizFvM7s" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                GSAP Crash Course – Traversy Media
                            </a>
                        </div>
                    </div>
                </div>

                {/* Lottie */}
                <div className="border border-[#ffdd00] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#ffdd00] mb-2">Lottie</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>Lightweight animations from After Effects JSON</li>
                        <li>Works in web, iOS, and Android apps</li>
                        <li>Scalable vector animations without quality loss</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://lottiefiles.com/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Lottie Official Docs
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/ZU2uGA4lgcc" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Lottie in React – Web Dev Simplified
                            </a>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button onClick={closeWebAnimation} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}
