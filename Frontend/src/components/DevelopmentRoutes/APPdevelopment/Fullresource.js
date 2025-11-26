import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function FullAppDevResources({ closeFullResources, Done }) {
    const Nexthandler = () => {
        Done();
        closeFullResources();
    }
    const [isFullScreen, setFullScreen] = useState(false);
    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };
    return (
        <section
            className={getFullscreenClasses(isFullScreen)}
            style={{ boxShadow: "0 0 10px 0px #000000" }}
        >
            <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
                {/* Header Controls */}
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

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    Cross-Platform App Development Resources (Android & iOS)
                </h2>

                {/* Description */}
                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold">Cross-platform app development</span> allows you to build apps for both Android and iOS using a single codebase. Frameworks like React Native and Flutter make it possible to develop fast, scalable, and user-friendly apps without duplicating effort.</p>

                    <p>Here’s a collection of the best resources (docs, YouTube, courses) to master cross-platform app development step by step:</p>

                    {/* Documentation Resources */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">📘 Documentation Resources</p>
                        <div className="flex gap-3">
                            <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                            <a href="https://reactnative.dev/docs/getting-started" target="_blank" rel="noopener noreferrer">
                                <span className="text-[#28ffd4] underline">React Native Docs</span>
                            </a>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                            <a href="https://docs.flutter.dev/" target="_blank" rel="noopener noreferrer">
                                <span className="text-[#28ffd4] underline">Flutter Docs</span>
                            </a>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                            <a href="https://docs.expo.dev/" target="_blank" rel="noopener noreferrer">
                                <span className="text-[#28ffd4] underline">Expo Framework Docs</span>
                            </a>
                        </div>
                    </div>

                    {/* YouTube Playlists */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl mb-2">🎥 YouTube Playlists</h3>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://www.youtube.com/watch?v=0-S5a0eXPoc" target="_blank" rel="noopener noreferrer">
                                <span className="text-[#28ffd4] underline">React Native Crash Course – Academind</span>
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://www.youtube.com/watch?v=x0uinJvhNxI" target="_blank" rel="noopener noreferrer">
                                <span className="text-[#28ffd4] underline">Flutter Crash Course – Traversy Media</span>
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://www.youtube.com/@freecodecamp" target="_blank" rel="noopener noreferrer">
                                <span className="text-[#28ffd4] underline">freeCodeCamp – Full Courses</span>
                            </a>
                        </div>
                    </div>

                    {/* Courses */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl mb-2">📚 Courses</h3>
                        <div className="flex gap-3">
                            <span className="text-white py-0 px-2 bg-green-600 rounded-md">course</span>
                            <a href="https://www.udemy.com/course/react-native-the-practical-guide/" target="_blank" rel="noopener noreferrer">
                                <span className="text-[#28ffd4] underline">React Native: The Practical Guide – Academind</span>
                            </a>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-white py-0 px-2 bg-green-600 rounded-md">course</span>
                            <a href="https://www.udemy.com/course/flutter-dart-the-complete-guide/" target="_blank" rel="noopener noreferrer">
                                <span className="text-[#28ffd4] underline">Flutter & Dart – The Complete Guide</span>
                            </a>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-white py-0 px-2 bg-green-600 rounded-md">course</span>
                            <a href="https://frontendmasters.com/learn/react-native/" target="_blank" rel="noopener noreferrer">
                                <span className="text-[#28ffd4] underline">Frontend Masters – React Native</span>
                            </a>
                        </div>
                    </div>

                    {/* YouTube Channels */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl mb-2">📺 YouTube Channels</h3>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://www.youtube.com/c/Academind" target="_blank" rel="noopener noreferrer">
                                <span className="text-[#28ffd4] underline">Academind</span>
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://www.youtube.com/c/TheNetNinja" target="_blank" rel="noopener noreferrer">
                                <span className="text-[#28ffd4] underline">The Net Ninja</span>
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://www.youtube.com/c/Fireship" target="_blank" rel="noopener noreferrer">
                                <span className="text-[#28ffd4] underline">Fireship</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Controls */}
                <div className="flex justify-between mt-5">
                    <button onClick={closeFullResources} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}