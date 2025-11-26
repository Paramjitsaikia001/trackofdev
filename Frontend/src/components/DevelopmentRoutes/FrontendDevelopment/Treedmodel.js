import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function ThreeDModelingPage({ closeThreeDModeling, Done }) {
    const Nexthandler = () => {
        Done();
        closeThreeDModeling();
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
                    <span onClick={closeThreeDModeling} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">3D Modeling for the Web</h2>

                {/* Intro */}
                <p className="mb-6">
                    **3D modeling** enhances web experiences with immersive visuals. Learn **Three.js** or **Babylon.js** to create and render 3D graphics, integrating interactive models or animations into web applications for games, product showcases, or visualizations.
                </p>

                {/* Three.js */}
                <div className="border border-[#38bdf8] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#38bdf8] mb-2">Three.js</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>A powerful and popular JavaScript library for creating and displaying 3D graphics in the browser.</li>
                        <li>Simplifies WebGL, making it accessible for developers.</li>
                        <li>Widely used for games, interactive visualizations, and product configurators.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://threejs.org/docs/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Three.js Official Docs
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/xJ1_B9e5T68" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Three.js Tutorial for Beginners - The Net Ninja
                            </a>
                        </div>
                    </div>
                </div>

                {/* Babylon.js */}
                <div className="border border-[#0288d1] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#0288d1] mb-2">Babylon.js</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>A robust, open-source 3D engine for creating games and immersive experiences.</li>
                        <li>Known for its high performance and extensive feature set out-of-the-box.</li>
                        <li>Includes tools for physics, animation, and a complete scene editor.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://doc.babylonjs.com/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Babylon.js Official Docs
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/yG-w_4y1t3s" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Babylon.js Full Course - FreeCodeCamp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Key Concepts */}
                <div className="border border-[#7952b3] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#7952b3] mb-2">Key Concepts</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Scene**: The container for all objects, lights, and cameras.</li>
                        <li>**Mesh**: The 3D object itself, composed of vertices, faces, and materials.</li>
                        <li>**Camera**: Defines the user's viewpoint in the 3D world.</li>
                        <li>**Lights**: Illuminates the scene to make objects visible.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://www.khronos.org/webgl/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                WebGL Fundamentals
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/6_S0J6pW84s" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Introduction to 3D Graphics - FreeCodeCamp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button onClick={closeThreeDModeling} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}