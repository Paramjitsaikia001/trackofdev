import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function FoundationPage({ closeFoundation, Done }) {
    const [isFullScreen, setFullScreen] = useState(false);

    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

    const Nexthandler = () => {
        Done();
        closeFoundation();
    };

    return (
        <section
            className={getFullscreenClasses(isFullScreen)}
            style={{ boxShadow: "0 0 10px 0px #000000" }}
        >
            <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
                {/* Header controls */}
                <div className="flex pb-4 justify-between items-center w-[100%]">
                    <span
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"
                        onClick={fullscreenHandler}
                    >
                        {getFullscreenIconName(isFullScreen)}
                    </span>
                    <span
                        onClick={closeFoundation}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    Foundations of Cross-Platform Android & iOS Development
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">Cross-Platform Development</span>
                        allows you to build apps for both Android and iOS using a single codebase.
                        Mastering the foundations ensures you can develop apps that are **responsive, scalable, and
                        production-ready**.
                    </p>

                    <p>
                        The foundations involve understanding **programming languages, mobile concepts,
                        app lifecycle, and platform-specific integrations**.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Core Foundations to Learn:</p>
                        <ul className="list-disc list-inside">
                            <li>Programming Languages: JavaScript/TypeScript (React Native), Dart (Flutter)</li>
                            <li>Mobile UI basics (views, layouts, responsive design)</li>
                            <li>State & data flow (props, state, context, reactivity)</li>
                            <li>Understanding the App Lifecycle (launch, background, termination)</li>
                            <li>Device permissions (camera, location, storage)</li>
                            <li>Handling user input (touch, gestures, forms)</li>
                            <li>Basic networking (fetching data from APIs)</li>
                        </ul>

                        <p className="font-bold">Key Concepts to Master Early:</p>
                        <ul className="list-disc list-inside">
                            <li>Component-based development</li>
                            <li>Cross-platform UI consistency (Android vs iOS look & feel)</li>
                            <li>Navigation basics (stack, tabs, drawers)</li>
                            <li>Debugging tools (React Native Debugger, Flutter DevTools)</li>
                            <li>Using emulators & physical devices for testing</li>
                        </ul>

                        <p className="font-bold">Essential Tools & SDKs:</p>
                        <ul className="list-disc list-inside">
                            <li>Node.js & npm/pnpm/yarn (for React Native)</li>
                            <li>Flutter SDK & Dart DevTools</li>
                            <li>Android Studio Emulator</li>
                            <li>Xcode Simulator (for iOS)</li>
                            <li>Expo (for fast prototyping in React Native)</li>
                        </ul>

                        <p className="font-bold">Resources to Learn Foundations:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://reactnative.dev/docs/environment-setup"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        React Native Official Docs
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://docs.flutter.dev/get-started/install"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Flutter Official Docs
                                    </span>
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
                                    <span className="text-[#28ffd4] underline">
                                        React Native Crash Course – Academind
                                    </span>
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
                                    <span className="text-[#28ffd4] underline">
                                        Flutter Crash Course – Traversy Media
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={closeFoundation}
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