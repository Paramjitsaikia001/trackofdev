import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function NavigationRoutingPage({ closeNavigation, Done }) {
    const Nexthandler = () => {
        Done();
        closeNavigation();
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
                        onClick={closeNavigation}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    Navigation & Routing in Cross-Platform Apps
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">Navigation & Routing</span> 
                        is crucial in mobile apps to move between screens, manage the stack, 
                        and provide a seamless user experience. It involves stacks, tabs, 
                        drawers, and deep linking.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Core Navigation Patterns:</p>
                        <ul className="list-disc list-inside">
                            <li><span className="font-semibold">Stack Navigation</span> – Push/pop screens like a browser history.</li>
                            <li><span className="font-semibold">Tab Navigation</span> – Bottom tabs for quick screen switching.</li>
                            <li><span className="font-semibold">Drawer Navigation</span> – Side menus for extra navigation options.</li>
                            <li><span className="font-semibold">Nested Navigation</span> – Combining multiple navigators.</li>
                            <li><span className="font-semibold">Deep Linking</span> – Open specific app pages via links.</li>
                        </ul>

                        <p className="font-bold">React Native Navigation Tools:</p>
                        <ul className="list-disc list-inside">
                            <li>React Navigation (most popular)</li>
                            <li>React Native Navigation (Wix) – Native navigation performance</li>
                            <li>Expo Router – File-based routing (Next.js style)</li>
                        </ul>

                        <p className="font-bold">Flutter Navigation Tools:</p>
                        <ul className="list-disc list-inside">
                            <li>Navigator 1.0 (basic push/pop)</li>
                            <li>Navigator 2.0 (declarative routing)</li>
                            <li>go_router (community-driven, simple API)</li>
                            <li>auto_route (advanced routing with code generation)</li>
                        </ul>

                        <p className="font-bold">Key Concepts to Master:</p>
                        <ul className="list-disc list-inside">
                            <li>Passing parameters between screens</li>
                            <li>Navigation state persistence</li>
                            <li>Authentication flows (login → home → logout)</li>
                            <li>Handling back button behavior (Android vs iOS)</li>
                            <li>Navigation guards & middleware</li>
                        </ul>

                        <p className="font-bold">Resources to Learn Navigation:</p>
                        <div className="flex flex-col gap-4">
                            {/* React Native */}
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://reactnavigation.org/docs/getting-started/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        React Navigation Docs
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/xXrhg26VCSc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        React Navigation Tutorial – Programming with Mash
                                    </span>
                                </a>
                            </div>
                            {/* Flutter */}
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://docs.flutter.dev/development/ui/navigation"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Flutter Navigation Docs
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/9rJx-5uUOHc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Flutter Navigation Tutorial – The Net Ninja
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={closeNavigation}
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