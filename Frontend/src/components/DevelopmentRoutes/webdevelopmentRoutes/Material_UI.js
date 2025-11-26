import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function MaterialUIPage({ closeMaterialUI, Done }) {
    const Nexthandler = () => {
        Done();
        closeMaterialUI();
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
                    <span onClick={closeMaterialUI} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Material-UI</h2>
                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold">Material-UI</span> is a popular React component library that implements Google's Material Design. It provides a set of reusable, customizable, and accessible components that make it easy to build beautiful and consistent user interfaces.</p>

                    <p>Material-UI's components are designed to follow Material Design guidelines, ensuring that your applications have a modern and cohesive look and feel. The library includes a wide range of components, such as buttons, cards, dialogs, and navigation bars, that can be easily integrated into your React applications.</p>

                    <p>Learning Material-UI is highly beneficial for web developers due to its widespread adoption in the industry. Many companies, from startups to large enterprises, use Material-UI for their web applications, making it a valuable skill in the job market.</p>

                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Resources to become an expert in Material-UI:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://mui.com/getting-started/installation/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Material-UI Documentation</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.w3schools.com/whatis/whatis_material_ui.asp" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Material-UI Tutorial - W3Schools</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/0KEpWHtG9_0" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Material-UI Crash Course - Traversy Media</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/Xoz31I1FuiY" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Material-UI Tutorial for Beginners - freeCodeCamp.org</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={closeMaterialUI} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}