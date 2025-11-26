import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function ZustandPage({ closeZustand, Done }) {
    const [isFullScreen, setFullScreen] = useState(false);

    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

    const Nexthandler = () => {
        Done();
        closeZustand();
    };

    return (
        <section className={getFullscreenClasses(isFullScreen)} style={{ boxShadow: "0 0 10px 0px #000000" }}>
            <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    <span className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden" onClick={fullscreenHandler}>
                        {getFullscreenIconName(isFullScreen)}
                    </span>
                    <span onClick={closeZustand} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">close</span>
                </div>

                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-full rounded-md p-2">Zustand</h2>

                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold">Zustand</span> is a small, fast, and scalable state management solution for React applications.</p>
                    <p>It is built by the creators of Jotai and React-Three-Fiber and uses hooks to manage state in a much simpler and more modern way compared to Redux.</p>
                    <p>Zustand avoids boilerplate, supports middleware, and is easy to scale across small or large applications.</p>

                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Resources to learn Zustand:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://zustand-demo.pmnd.rs/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Zustand Official Docs</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                                <a href="https://youtu.be/wH9ZrjOB8i0" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Zustand Crash Course - Dave Gray</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                                <a href="https://youtu.be/8D1g0CkwrYg" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Zustand Beginner Tutorial - The Code Vox</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between">
                    <button onClick={closeZustand} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}
