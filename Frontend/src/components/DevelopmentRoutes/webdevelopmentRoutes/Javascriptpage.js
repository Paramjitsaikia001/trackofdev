import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function Jspage({ closejs, Done }) {
    const [isFullScreen, setFullScreen] = useState(false);

    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

    const nextHandler = () => {
        Done();
        closejs();
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
                    <span onClick={closejs} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">JavaScript</h2>
                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold">JavaScript</span> is a powerful programming language that adds interactivity, functionality, and dynamic behavior to web pages. While HTML structures the content and CSS styles it, JavaScript enables users to interact with a website through features like form validation, interactive maps, animations, and real-time content updates. It works seamlessly with HTML and CSS to create responsive and engaging web applications.


                    </p>
                    <p>If a website were a human body, JavaScript would be its brain, nerves, and reflexes, controlling actions and responding to stimuli. It brings the static structure (HTML) and appearance (CSS) to life by enabling dynamic features and user-driven functionality, making it an essential tool for modern web development.
                    </p>
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Resource to become a expert in JavaScript:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.w3schools.com/Js/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">JavaScript Tutorial - W3Schools</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.geeksforgeeks.org/javascript/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">JavaScript Tutorial - GeeksforGeeks</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.javatpoint.com/javascript-tutorial" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Learn JavaScript Tutorial - Javatpoint</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/VlPiVmYuoqw?si=jmPMwTpRDN4Ya7kl" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">JavaScript Tutorial (2024) for Beginners to Pro (with Notes, Projects & Practice Questions)</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/EerdGm-ehJQ?si=GJay7iD_VVkCyq0R" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">JavaScript Tutorial full Course-Beginner to Pro (2024) By SuperSimpleDev</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={closejs} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={nextHandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}
