import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function CodeEditor({ closeEditor, Done }) {
    const [isFullScreen, setFullScreen] = useState(false);

    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

    const nextHandler = () => {
        Done();
        closeEditor();
    };

    return (
        <section
            className={getFullscreenClasses(isFullScreen)}
            style={{ boxShadow: "0 0 10px 0px #000000" }}
        >
            <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    <span 
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden" 
                        onClick={fullscreenHandler}
                    >
                        {getFullscreenIconName(isFullScreen)}
                    </span>
                    <span onClick={closeEditor} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Code Editor Setup</h2>
                <div className="flex flex-col gap-1">
                    <p>A <span className="text-[#23daff] font-bold">Code editor</span> is a software application designed to help developers write, edit, and debug code more efficiently. It provides features like syntax highlighting, auto-completion, and indentation, which make coding faster and easier.
                    </p>
                    <p> For web development, code editors typically support HTML, CSS, JavaScript, and frameworks like React, Angular, and Vue.js , everything we need for it. They often come with features like live preview, Git integration, and extensions to debug or enhance functionality.
                    </p>
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Popular Code Editor for Web development :</p>
                        <div className="flex flex-col gap-4">


                            {/* visual studio code */}
                            <div className="vscode my-4 flex flex-col gap-2 ">
                                <h3 className="font-bold text-lg">Visual Studio Code (VS Code)
                                    <span className="text-[#2c423e]">Recommanded</span>:
                                </h3>
                                <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4]"> Download VS Code</span></a>
                                <p className="font-bold text-sm">Set Up  Tutorial:</p>
                                <p className="flex gap-3 items-center">
                                    <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                    <a href="https://code.visualstudio.com/docs/editor/vscode-web" target="_blank" rel="noopener noreferrer">
                                        <span className="text-[#28ffd4] underline">Visual Studio Code for the Web</span>
                                    </a>
                                    <span>Original</span>
                                </p>
                                <div className="flex gap-3 items-center">
                                    <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                        play_arrow
                                    </span>
                                    <a href="https://youtu.be/mL1IcxIUd5Y?si=Txtd9dxLCn0CRdYP" target="_blank" rel="noopener noreferrer">
                                        <span className="text-[#28ffd4] underline">Setup VS Code for Web Development by Skillbuild Trainning</span>
                                    </a>
                                </div>
                            </div>

                            {/* sublimetext */}
                            <div className="SublimeText my-4 flex flex-col gap-2">
                                <h3 className="font-bold text-lg">Sublime Text:
                                </h3>
                                <a href="https://www.sublimetext.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4]"> Download Sublime Text</span></a>
                                <p className="font-bold text-sm">Set Up  Tutorial:</p>
                                <div className="flex gap-3 items-center">
                                    <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                        play_arrow
                                    </span>
                                    <a href="https://youtu.be/J72ZRoQY1mI?si=serrXqlqM39gsa1p" target="_blank" rel="noopener noreferrer">
                                        <span className="text-[#28ffd4] underline">Building a Website in 2023 With Sublime</span>
                                    </a>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                        play_arrow
                                    </span>
                                    <a href="https://youtu.be/sH0-1rQJu3E?si=T8n4oF6eLf-tV_YS" target="_blank" rel="noopener noreferrer">
                                        <span className="text-[#28ffd4] underline">How to Run HTML in Sublime Text | Quick Tutorial</span>
                                    </a>
                                </div>
                            </div>

                            {/* atom */}
                            <div className="Atom my-4 flex flex-col gap-2">
                                <h3 className="font-bold text-lg">Atom:
                                </h3>
                                <a href="https://atom-editor.cc/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4]">Download Atom</span></a>
                                <p className="font-bold text-sm">Set Up  Tutorial:</p>
                                <div className="flex gap-3 items-center">
                                    <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                        play_arrow
                                    </span>
                                    <a href="https://youtu.be/WWwBQQOGllo?si=ZsTdCwGTncZS4AqP" target="_blank" rel="noopener noreferrer">
                                        <span className="text-[#28ffd4] underline">Atom Editor Tutorials by Syntax</span>
                                    </a>
                                </div>
                            </div>

                            {/* webstorm */}
                            <div className=" WebStorm my-4 flex flex-col gap-2">
                                <h3 className="font-bold text-lg">WebStorm:
                                </h3>
                                <a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4]"> Download  WebStorm</span></a>
                                <p className="font-bold text-sm">Set Up  Tutorial:</p>
                                <div className="flex gap-3 items-center">
                                    <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                        play_arrow
                                    </span>
                                    <a href="https://youtu.be/qMGpLDy_qTM?si=pk5WjY8aKjOrL2Su" target="_blank" rel="noopener noreferrer">
                                        <span className="text-[#28ffd4] underline">How to install & Setup WebStorm For Web Development </span>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="font-bold text-xl">Online Code Editors:</h2>
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-2">
                                    <a href="https://codepen.io/" target="_blank" rel="noopener noreferrer">
                                        <h4 className="text-[#28ffd4] text-lg- font-bold">CodePen:</h4>
                                    </a>
                                    <p>For experimenting with HTML, CSS, and JavaScript in an online playground.</p>
                                </div>
                                <div className="flex gap-2">
                                    <a href="https://jsfiddle.net/" target="_blank" rel="noopener noreferrer">
                                        <h4 className="text-[#28ffd4] text-lg- font-bold">JSFiddle:</h4>
                                    </a>
                                    <p> Ideal for quick prototyping and testing.
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <a href="https://replit.com/" target="_blank" rel="noopener noreferrer">
                                        <h4 className="text-[#28ffd4] text-lg- font-bold">Replit:</h4>
                                    </a>
                                    <p> A collaborative browser-based coding platform.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={closeEditor} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={nextHandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}
