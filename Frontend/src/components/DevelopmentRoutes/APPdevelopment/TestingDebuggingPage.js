import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function TestingDebuggingPage({ closeTesting, Done }) {
    const Nexthandler = () => {
        Done();
        closeTesting();
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
                        onClick={closeTesting}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    Testing & Debugging
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">Testing & Debugging</span> 
                        ensure that your app works as expected, is bug-free, and provides 
                        a seamless user experience. Every professional app must go through 
                        multiple levels of testing before release.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Types of Testing:</p>
                        <ul className="list-disc list-inside">
                            <li>Unit Testing – test individual functions or components</li>
                            <li>Integration Testing – test interactions between modules</li>
                            <li>UI/End-to-End Testing – simulate real user actions</li>
                            <li>Performance Testing – test app speed & resource usage</li>
                            <li>Manual vs Automated Testing – when to use each</li>
                        </ul>

                        <p className="font-bold">Debugging Tools:</p>
                        <ul className="list-disc list-inside">
                            <li>React Native Debugger / Flipper</li>
                            <li>Flutter DevTools</li>
                            <li>Chrome DevTools for network & logs</li>
                            <li>Device Logs (adb logcat for Android, Xcode Console for iOS)</li>
                        </ul>

                        <p className="font-bold">Popular Testing Libraries:</p>
                        <ul className="list-disc list-inside">
                            <li><span className="font-semibold">React Native</span>: Jest, React Native Testing Library, Detox (E2E)</li>
                            <li><span className="font-semibold">Flutter</span>: flutter_test, Mockito, integration_test</li>
                        </ul>

                        <p className="font-bold">Best Practices:</p>
                        <ul className="list-disc list-inside">
                            <li>Write testable & modular code</li>
                            <li>Automate repetitive tests (CI/CD integration)</li>
                            <li>Log errors and monitor crashes (Sentry, Firebase Crashlytics)</li>
                            <li>Use test-driven development (TDD) when possible</li>
                        </ul>

                        <p className="font-bold">Resources to Learn:</p>
                        <div className="flex flex-col gap-4">
                            {/* React Native Testing Docs */}
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://reactnative.dev/docs/testing-overview"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        React Native Testing Docs
                                    </span>
                                </a>
                            </div>
                            {/* Flutter Testing Docs */}
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://docs.flutter.dev/cookbook/testing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Flutter Testing Cookbook
                                    </span>
                                </a>
                            </div>
                            {/* YouTube Tutorials */}
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/3e1GHCA3GP0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        React Native Testing Crash Course – Academind
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/2jDy-r3uA2U"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Flutter Testing Tutorial – The Net Ninja
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={closeTesting}
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