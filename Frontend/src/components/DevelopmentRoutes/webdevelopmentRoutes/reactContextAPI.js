import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function ContextAPIPage({ closeContextAPI, Done }) {
    const [isFullScreen, setFullScreen] = useState(false);

    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

    const Nexthandler = () => {
        Done();
        closeContextAPI();
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
                    <span onClick={closeContextAPI} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">React Context API</h2>

                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold">React Context API</span> is a way to manage global state in a React application without the need for prop drilling.</p>

                    <p>It allows you to create a central store (Context) that can be accessed by any component in the component tree, making it easier to share data such as user authentication, theme settings, and app state.</p>
                    <p>Using Context API is ideal for medium-sized projects or when you need lightweight state management without adding external libraries like Redux.</p>

                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Resources to learn React Context API:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://react.dev/learn/passing-data-deeply-with-context" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Official React Context API Docs</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">guide</span>
                                <a href="https://www.freecodecamp.org/news/context-api-in-react/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">freeCodeCamp - Context API Explained</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/35lXWvCuM8o" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">React Context API Tutorial - Codevolution</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/XLJN4JfniH4" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">React Context & useContext Hook - Net Ninja</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between">
                    <button onClick={closeContextAPI} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}
