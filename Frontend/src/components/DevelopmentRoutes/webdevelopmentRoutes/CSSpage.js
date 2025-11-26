import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function CSSpage({ closeCSS, Done }) {
    const [isFullScreen, setFullScreen] = useState(false);

    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

    const nextHandler = () => {
        Done();
        closeCSS();
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
                    <span onClick={closeCSS} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">CSS (Cascading Style Sheets)</h2>
                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold">CSS (Cascading Style Sheets)</span> is the language used to style and visually enhance web pages. While HTML provides the structure, CSS adds color, layout, fonts, and animations, transforming a basic skeleton into an aesthetically pleasing and user-friendly design. By separating content from presentation, CSS allows developers to maintain consistent styling across multiple pages and adapt designs for different screen sizes and devices.

                    </p>
                    <p>
                        If a website were a human body, CSS would be its skin, muscles, and appearance, giving shape, color, and movement to the skeletal framework provided by HTML. From defining layouts to creating responsive designs and dynamic visual effects, CSS is the creative force that brings a website to life.
                    </p>
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Resource to become a expert in CSS:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.w3schools.com/Css/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">CSS Tutorial - W3Schools</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.geeksforgeeks.org/css-tutorial/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">CSS Tutorial - GeeksforGeeks</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/OXGznpKZ_sA?si=A2Xo8WgoLiQii96s" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">CSS Tutorial – Full Course for Beginners by freeCodeCamp.org</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/ESNrn1kAD4E?si=mqOHXRxD3QOkUqgb" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">CSS Tutorial for Beginners | Complete CSS with Project, Notes & Code by APNA COLLEGE</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={closeCSS} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={nextHandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}
