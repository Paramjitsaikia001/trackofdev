import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function Expresspage({ closeexpress, Done }) {
    const [isFullScreen, setFullScreen] = useState(false);

    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

    const Nexthandler = () => {
        Done();
        closeexpress();
    }

    return (
        <section
            className={getFullscreenClasses(isFullScreen)}
            style={{ boxShadow: "0 0 10px 0px #000000" }}
        >
            <div className="bg-[#0e1542] text-white pb-0 px-4  h-[100%]">
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    <span
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"
                        onClick={fullscreenHandler}
                    >
                        {getFullscreenIconName(isFullScreen)}
                    </span>

                    <span
                        onClick={closeexpress}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Express.js</h2>
                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold">Express.js</span> is a lightweight and flexible web application framework built on top of Node.js. It simplifies the process of building robust and scalable backend applications by providing tools and utilities for handling HTTP requests, routing, middleware integration, and more. Express.js is widely used to create APIs, web servers, and dynamic web applications with minimal effort.
                    </p>
                    <p>
                        If a website were a human body, Express.js would be its nervous system, efficiently routing and processing data between different parts. It acts as the backbone of server-side functionality, enabling smooth communication between the frontend and backend while offering flexibility for developers to build custom solutions tailored to their application's needs.

                    </p>
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Resource to become a expert in Express.js:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://expressjs.com/en/starter/hello-world.html" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Hello world example - Express(Original)</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.geeksforgeeks.org/express-js/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Express.js Tutorial - GeeksforGeeks</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Express web framework (Node.js/JavaScript)-mozilla</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/R11tvGM3nDY?si=TMg-8tPQOslktTII" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Introduction to Express Js | Sigma Web Development Course - Tutorial #88 by CodingWithHarry</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/pKJ4GGyDgJo?si=fDniMgFEUgCdIZWV" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Express.js - Learn What Matters: Mastering the Framework | Backend (Node JS) Series by Sheriayn Coding School</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={closeexpress} className=" px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className=" px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}
