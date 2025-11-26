import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function AdvancedTopicsPage({ closeAdvanced, Done }) {
    const Nexthandler = () => {
        Done();
        closeAdvanced();
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
                        onClick={closeAdvanced}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    Advanced Topics in Cross-Platform Development
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">Advanced Topics</span> 
                        help you move from a competent developer to a **professional, 
                        production-ready engineer**. These cover scalability, native integration, 
                        advanced state handling, and enterprise-level patterns.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Enterprise & Architecture:</p>
                        <ul className="list-disc list-inside">
                            <li>Clean Architecture & SOLID Principles</li>
                            <li>MVVM, Redux, and BLoC Patterns</li>
                            <li>Monorepos & scalable folder structures</li>
                            <li>Code generation & automation tools</li>
                        </ul>

                        <p className="font-bold">Advanced State Management:</p>
                        <ul className="list-disc list-inside">
                            <li>Redux Toolkit (React Native)</li>
                            <li>MobX, Zustand, Recoil</li>
                            <li>Provider, Riverpod, BLoC (Flutter)</li>
                            <li>Persistent & offline state handling</li>
                        </ul>

                        <p className="font-bold">Advanced Native Features:</p>
                        <ul className="list-disc list-inside">
                            <li>Augmented Reality (ARCore, ARKit)</li>
                            <li>Push Notifications (Firebase Cloud Messaging, APNs)</li>
                            <li>Deep Linking & Universal Links</li>
                            <li>Background Services & Workers</li>
                        </ul>

                        <p className="font-bold">CI/CD & Automation:</p>
                        <ul className="list-disc list-inside">
                            <li>GitHub Actions / GitLab CI for mobile</li>
                            <li>Fastlane for automated builds</li>
                            <li>App Center / Firebase App Distribution</li>
                            <li>End-to-end release pipelines</li>
                        </ul>

                        <p className="font-bold">Scaling & Advanced Features:</p>
                        <ul className="list-disc list-inside">
                            <li>Offline-first architecture</li>
                            <li>Realtime sync (WebSockets, Firebase Realtime DB)</li>
                            <li>GraphQL with Apollo/Hasura</li>
                            <li>Multi-language & localization (i18n)</li>
                            <li>Accessibility (a11y) & inclusive design</li>
                        </ul>

                        <p className="font-bold">Resources to Learn:</p>
                        <div className="flex flex-col gap-4">
                            {/* Docs */}
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://redux-toolkit.js.org/introduction/getting-started"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Redux Toolkit Docs
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://riverpod.dev/docs/introduction/why_riverpod"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Riverpod for Flutter Docs
                                    </span>
                                </a>
                            </div>
                            {/* YouTube Tutorials */}
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/2kKXWZJ1nDg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Advanced React Native State Management – Academind
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/BOs5QgaQ1fs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Flutter BLoC & Riverpod Advanced Tutorial – Reso Coder
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={closeAdvanced}
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