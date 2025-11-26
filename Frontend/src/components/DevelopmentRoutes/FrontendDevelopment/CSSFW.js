import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function CSSFrameworksPage({ closeCSSFrameworks, Done }) {
    const Nexthandler = () => {
        Done();
        closeCSSFrameworks();
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
                    <span onClick={closeCSSFrameworks} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">CSS Frameworks</h2>

                {/* Intro */}
                <p className="mb-6">
                    <span className="text-[#23daff] font-bold">CSS Frameworks</span> like Tailwind CSS, Material UI, and Bootstrap 
                    help speed up styling and design by providing prebuilt components, utilities, and responsive layouts.
                </p>

                {/* Tailwind CSS */}
                <div className="border border-[#38bdf8] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#38bdf8] mb-2">Tailwind CSS</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>Utility-first CSS framework</li>
                        <li>Highly customizable design system</li>
                        <li>Responsive and mobile-first</li>
                        <li>Works seamlessly with React, Vue, Angular</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Tailwind CSS Official Docs
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/dFgzHOX84xQ" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Tailwind CSS Crash Course – Traversy Media
                            </a>
                        </div>
                    </div>
                </div>

                {/* Material UI */}
                <div className="border border-[#0288d1] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#0288d1] mb-2">Material UI</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>React component library based on Google’s Material Design</li>
                        <li>Prebuilt and accessible components</li>
                        <li>Custom theming and styling options</li>
                        <li>Responsive design out-of-the-box</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://mui.com/material-ui/getting-started/overview/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Material UI Official Docs
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/Xoz31I1FuiY" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Material UI Crash Course – Traversy Media
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bootstrap */}
                <div className="border border-[#7952b3] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#7952b3] mb-2">Bootstrap</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>Popular CSS framework for responsive design</li>
                        <li>Grid system for layout</li>
                        <li>Prebuilt UI components and utilities</li>
                        <li>Supports JavaScript plugins</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://getbootstrap.com/docs/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Bootstrap Official Docs
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/Jyvffr3aCp0" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Bootstrap Crash Course – Traversy Media
                            </a>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button onClick={closeCSSFrameworks} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}
