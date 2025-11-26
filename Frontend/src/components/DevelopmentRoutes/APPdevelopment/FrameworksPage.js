import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function FrameworksPage({ closeFrameworks, Done }) {
    const Nexthandler = () => {
        Done();
        closeFrameworks();
    };

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
                {/* Header controls */}
                <div className="flex pb-4 justify-between items-center w-[100%]">
                    <span className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"

                                            onClick={fullscreenHandler}

                                        >
            {getFullscreenIconName(isFullScreen)}
          </span>
                    <span
                        onClick={closeFrameworks}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    Cross-Platform Frameworks for Android & iOS
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">Frameworks</span> are the backbone of 
                        cross-platform app development. They allow developers to write code once and run it on both 
                        Android and iOS, saving time and ensuring consistency.
                    </p>

                    <p>
                        The right framework depends on your **team’s expertise, project type, and performance needs**.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Popular Cross-Platform Frameworks:</p>
                        <ul className="list-disc list-inside">
                            <li>
                                <span className="text-[#28ffd4] font-semibold">React Native</span> – Uses JavaScript/TypeScript, 
                                large community, supported by Meta.
                            </li>
                            <li>
                                <span className="text-[#28ffd4] font-semibold">Flutter</span> – Uses Dart, powered by Google, 
                                great performance with its own rendering engine.
                            </li>
                            <li>
                                <span className="text-[#28ffd4] font-semibold">Expo</span> – Built on React Native, allows fast prototyping, 
                                easy deployments, and OTA updates.
                            </li>
                            <li>
                                <span className="text-[#28ffd4] font-semibold">NativeScript</span> – Uses JavaScript/TypeScript, 
                                gives access to native APIs directly.
                            </li>
                            <li>
                                <span className="text-[#28ffd4] font-semibold">Ionic</span> – Based on web technologies (HTML, CSS, JS), 
                                works with Angular, React, Vue.
                            </li>
                        </ul>

                        <p className="font-bold">Key Features to Compare:</p>
                        <ul className="list-disc list-inside">
                            <li>Performance (React Native vs Flutter engine)</li>
                            <li>Community & Ecosystem support</li>
                            <li>Third-party plugins & libraries</li>
                            <li>Ease of setup & developer experience</li>
                            <li>Integration with native APIs & SDKs</li>
                        </ul>

                        <p className="font-bold">Resources to Learn Frameworks:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://reactnative.dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">React Native Official Docs</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://flutter.dev/docs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">Flutter Official Docs</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://docs.expo.dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">Expo Documentation</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/0-S5a0eXPoc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">React Native Crash Course – Academind</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/fq4N0hgOWzU"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">Flutter Crash Course – Traversy Media</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={closeFrameworks}
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        Close
                    </button>
                    <button
                        onClick={Nexthandler}
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        Done
                    </button>
                </div>
            </div>
        </section>
    );
}