import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";
export default function NodeJSpage({ closeNodeJS, Done }) {
    const Nexthandler = () => {
        Done();
        closeNodeJS();
    }
    const [isFullScreen, setFullScreen] = useState(false);
    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    }
    return (
        <section className={getFullscreenClasses(isFullScreen)} style={{ boxShadow: "0 0 10px 0px #000000" }}>
            <div className="bg-[#0e1542] text-white pb-0 px-4  h-[100%]">
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    <span
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"
                        onClick={fullscreenHandler}
                    >
                        {getFullscreenIconName(isFullScreen)}
                    </span>
                    <span
                        onClick={closeNodeJS}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2"> Node.js</h2>
                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold"> Node.js</span> is a powerful, open-source runtime environment that allows developers to execute JavaScript code outside of the browser, typically on a server. Built on Google Chrome's V8 engine, Node.js is known for its speed, scalability, and event-driven architecture. It is widely used for building backend services like APIs, web servers, and real-time applications, making it a cornerstone of modern full-stack development.



                    </p>
                    <p>
                        If a website were a human body, Node.js would be its circulatory system, managing the flow of data between the frontend and backend. It efficiently handles requests and responses, ensuring seamless communication and real-time interactivity, which is essential for creating fast and dynamic web applications.
                    </p>
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Resource to learn NodeJS:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Introduction to Node.js(Original)</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.w3schools.com/nodejs/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Node.js Tutorial - W3Schools</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.geeksforgeeks.org/nodejs/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Node.js Tutorial | Learn NodeJS - GeeksforGeeks</span>
                                </a>
                            </div>

                            <div className="flex gap-3 items-center">
                                <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/G-bKyVpKwIQ?si=l-hXMqsGSsBYCnt1" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Backend (Node JS) Series - Learn What Matters 1: Understanding the Internet by Sheriyan Coding School</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/CKgDta5ACWA?si=LOjYj4Zv5c7FsS9U" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Node.js Tutorial in Hindi #1: Introduction to Node JS by Thapa Technical</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={closeNodeJS} className=" px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className=" px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}
