import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function AngularUniversalPage({ closeAngularUniversal, Done }) {
    const Nexthandler = () => {
        Done();
        closeAngularUniversal();
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
                    <span onClick={closeAngularUniversal} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Angular Universal</h2>
                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold">Angular Universal</span> is a technology that allows Angular applications to be rendered on the server side. This server-side rendering (SSR) improves the performance and SEO of Angular applications by generating static HTML content on the server and sending it to the client.</p>

                    <p>Angular Universal works by pre-rendering Angular applications on the server, which can then be served to the client as static HTML. This approach ensures that web applications are highly performant and can handle dynamic content efficiently.</p>

                    <p>Angular Universal also includes a wide range of features, such as lazy loading, preboot, and transfer state, which help streamline the development process. It is designed to work seamlessly with Angular, making it easy for developers to build complex and interactive user interfaces.</p>

                    <p>Learning Angular Universal is highly beneficial for web developers due to its growing popularity and adoption in the industry. Many companies, from startups to large enterprises, use Angular Universal for their web applications, making it a valuable skill in the job market.</p>

                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Resources to become an expert in Angular Universal:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://angular.io/guide/universal" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Angular Universal Guide</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.freecodecamp.org/news/angular-universal-server-side-rendering-guide/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Angular Universal Guide - freeCodeCamp</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/1q6g1iRD4a8" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Angular Universal Crash Course - Academind</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/5qQ1AKVwXgE" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Angular Universal Tutorial - Codevolution</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/1q6g1iRD4a8" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Angular Universal Full Course - JavaScript Mastery</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/5qQ1AKVwXgE" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Angular Universal & Angular - The Complete Guide - Academind</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={closeAngularUniversal} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}