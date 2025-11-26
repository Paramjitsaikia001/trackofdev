import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function BootstrapPage({ closeBootstrap, Done }) {
    const Nexthandler = () => {
        Done();
        closeBootstrap();
    }
    const [isFullScreen, setFullScreen] = useState(false);
    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };
    return (
        <section className={getFullscreenClasses(isFullScreen)} style={{ boxShadow: "0 0 10px 0px #000000" }}>
            <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    <span
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"
                        onClick={fullscreenHandler}
                    >
                        {getFullscreenIconName(isFullScreen)}
                    </span>
                    <span onClick={closeBootstrap} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Bootstrap</h2>
                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold">Bootstrap</span> is a popular open-source CSS framework used for developing responsive and mobile-first websites. It provides a collection of CSS and JavaScript components, such as navigation bars, buttons, forms, and modals, that help developers quickly build and style web pages.</p>

                    <p>Bootstrap's grid system and pre-designed components make it easy to create layouts that adapt to different screen sizes and devices. This ensures that websites built with Bootstrap are both visually appealing and functional across a wide range of devices.</p>

                    <p>Learning Bootstrap is highly beneficial for web developers due to its widespread adoption in the industry. Many companies, from startups to large enterprises, use Bootstrap for their web applications, making it a valuable skill in the job market.</p>

                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Resources to become an expert in Bootstrap:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Bootstrap Documentation</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.w3schools.com/bootstrap5/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Bootstrap 5 Tutorial - W3Schools</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/5GcQtLDGXy8" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Bootstrap 5 Crash Course - Traversy Media</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/9cKsq14Kfsw" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Bootstrap 5 Tutorial for Beginners - freeCodeCamp.org</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={closeBootstrap} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}