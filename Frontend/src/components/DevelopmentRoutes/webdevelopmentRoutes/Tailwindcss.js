import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function TailwindcssPage({ closeTailwindcss, Done }) {
    const Nexthandler = () => {
        Done();
        closeTailwindcss();
    }
    const [isFullScreen, setFullScreen] = useState(false);
    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    }
    return (
        <section className={getFullscreenClasses(isFullScreen)} style={{ boxShadow: "0 0 10px 0px #000000" }}>
            <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    <span className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"

                        onClick={fullscreenHandler}

                    >
            {getFullscreenIconName(isFullScreen)}
          </span>
                    <span onClick={closeTailwindcss} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Tailwind CSS</h2>
                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold">Tailwind CSS</span> is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your HTML. Unlike traditional CSS frameworks that provide pre-designed components, Tailwind CSS allows developers to create unique designs without having to write custom CSS.</p>

                    <p>Tailwind CSS's utility-first approach makes it easy to create responsive and adaptive designs. By using utility classes, developers can quickly apply styles to elements without having to write custom CSS. This approach ensures that websites built with Tailwind CSS are both visually appealing and functional across a wide range of devices.</p>

                    <p>Learning Tailwind CSS is highly beneficial for web developers due to its growing popularity and adoption in the industry. Many companies, from startups to large enterprises, use Tailwind CSS for their web applications, making it a valuable skill in the job market.</p>

                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Resources to become an expert in Tailwind CSS:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Tailwind CSS Documentation</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.w3schools.com/whatis/whatis_tailwindcss.asp" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Tailwind CSS Tutorial - W3Schools</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/UBOj6rqRUME" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Tailwind CSS Crash Course - Traversy Media</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/pfaSUYaSgRo" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Tailwind CSS Tutorial for Beginners - freeCodeCamp.org</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={closeTailwindcss} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}