import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function FullResources({ closeFullResources, Done }) {
    const Nexthandler = () => {
        Done();
        closeFullResources();
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
                    <span onClick={closeFullResources} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Full Stack Web Development</h2>
                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold">Full stack web development</span> involves working on both the front-end and back-end portions of an application. A full stack developer has the skills to handle all aspects of web development, from designing user interfaces to managing databases and server-side logic.</p>

                    <p>Full stack developers are in high demand due to their versatility and ability to manage entire projects. They can work on various parts of a web application, making them valuable assets to any development team.</p>

                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Resources to become an expert in Full Stack Web Development:</p>
                        
                        {/* Documentation Resources */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl mb-2">Documentation</h3>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://developer.mozilla.org/en-US/docs/Learn/Full_stack" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">MDN Web Docs - Full Stack Development</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.freecodecamp.org/learn" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">freeCodeCamp - Full Stack Development</span>
                                </a>
                            </div>
                        </div>

                        {/* YouTube Playlists */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl mb-2">YouTube Playlists</h3>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://www.youtube.com/playlist?list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Full Stack Web Development - Traversy Media</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://www.youtube.com/playlist?list=PLWKjhJtqVAbkFiqHnNaxpOPhh9tSWMXIF" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Full Stack Web Development - freeCodeCamp.org</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://www.youtube.com/playlist?list=PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Full Stack Web Development - The Net Ninja</span>
                                </a>
                            </div>
                        </div>

                        {/* YouTube Channels */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl mb-2">YouTube Channels</h3>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://www.youtube.com/c/TraversyMedia" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Traversy Media YouTube Channel</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://www.youtube.com/c/Freecodecamp" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">freeCodeCamp.org YouTube Channel</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://www.youtube.com/c/TheNetNinja" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">The Net Ninja YouTube Channel</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={closeFullResources} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}