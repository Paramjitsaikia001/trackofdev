import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function NustPage({ closeNuxt, Done }) {
    const Nexthandler = () => {
        Done();
        closeNuxt();
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
                    <span onClick={closeNuxt} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Nuxt.js</h2>
                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold">Nuxt.js</span> is a powerful framework built on top of Vue.js for creating server-side rendered (SSR) and static web applications. Developed and maintained by the Nuxt.js team, Nuxt.js provides a comprehensive solution for building fast, scalable, and SEO-friendly web applications.</p>

                    <p>Nuxt.js works by allowing developers to create pages that can be pre-rendered at build time (static generation) or on each request (server-side rendering). This approach ensures that web applications are highly performant and can handle dynamic content efficiently.</p>

                    <p>Nuxt.js also includes a wide range of features, such as file-based routing, API routes, and built-in CSS and Sass support, which help streamline the development process. It is designed to work seamlessly with Vue.js, making it easy for developers to build complex and interactive user interfaces.</p>

                    <p>Learning Nuxt.js is highly beneficial for web developers due to its growing popularity and adoption in the industry. Many companies, from startups to large enterprises, use Nuxt.js for their web applications, making it a valuable skill in the job market.</p>

                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Resources to become an expert in Nuxt.js:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://nuxtjs.org/docs" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Nuxt.js Documentation</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.freecodecamp.org/news/the-nuxt-js-handbook/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Nuxt.js Handbook - freeCodeCamp</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/ltzlhAxJr74" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Nuxt.js Crash Course - Traversy Media</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/5tTUkbnYqhw" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Nuxt.js Tutorial for Beginners - freeCodeCamp.org</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/7pK8fKQbnxg" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Nuxt.js Full Course - JavaScript Mastery</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/7pK8fKQbnxg" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Nuxt.js & Vue - The Complete Guide - Academind</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={closeNuxt} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}