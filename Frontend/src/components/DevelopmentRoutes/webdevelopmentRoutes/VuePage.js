import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function VuePage({ closeVue, Done }) {
    const [isFullScreen, setFullScreen] = useState(false);

    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

    const nextHandler = () => {
        Done();
        closeVue();
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
                    <span onClick={closeVue} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Vue.js</h2>
                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold">Vue.js</span> is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, meaning you can use as much or as little of Vue as you need. Developed and maintained by Evan You and the Vue core team, Vue.js is known for its simplicity and flexibility.</p>

                    <p>Vue's component-based architecture and reactive data binding make it easy to build interactive and dynamic user interfaces. It also includes a wide range of features, such as directives, transitions, and state management, which help streamline the development process.</p>

                    <p>Learning Vue.js is highly beneficial for web developers due to its growing popularity and adoption in the industry. Many companies, from startups to large enterprises, use Vue for their web applications, making it a valuable skill in the job market.</p>

                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Resources to become an expert in Vue.js:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://vuejs.org/v2/guide/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Vue.js Guide</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.freecodecamp.org/learn/front-end-libraries/vue/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Vue.js Course - freeCodeCamp</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/FXpIoQ_rT_c" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Vue.js Crash Course - Traversy Media</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/4deVCNJq3qc" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Vue.js Tutorial for Beginners - freeCodeCamp.org</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={closeVue} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={nextHandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}