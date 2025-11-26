import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function ReactPage({ closeReact, Done }) {
    const [isFullScreen, setFullScreen] = useState(false);

    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

    const nextHandler = () => {
        Done();
        closeReact();
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
                    <span onClick={closeReact} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">React</h2>
                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold">React.js</span> is a popular JavaScript library for building user interfaces, particularly single-page applications where you need a fast and interactive user experience. Developed and maintained by Facebook, React allows developers to create large web applications that can update and render efficiently in response to data changes.</p>

                    <p>React's component-based architecture makes it easy to build reusable UI components, manage the state of your application, and handle user interactions. This approach not only improves development efficiency but also enhances the maintainability and scalability of your codebase.</p>

                    <p>Learning React.js is highly beneficial for web developers due to its widespread adoption in the industry. Many companies, from startups to large enterprises, use React for their web applications, making it a valuable skill in the job market.</p>

                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Resources to become an expert in React.js:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">React Documentation</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.freecodecamp.org/learn/front-end-libraries/react/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">React Course - freeCodeCamp</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/4UZrsTqkcW4" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">React JS Crash Course - Traversy Media</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/bMknfKXIFA8" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">React Tutorial for Beginners - freeCodeCamp.org</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={closeReact} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={nextHandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}