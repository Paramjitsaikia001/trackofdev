import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function DeploymentDistributionPage({ closeDeployment, Done }) {
    const Nexthandler = () => {
        Done();
        closeDeployment();
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
                        onClick={closeDeployment}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    Deployment & Distribution
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">Deployment & Distribution</span> 
                        is the final stage of app development — preparing your app for release, 
                        testing it on real devices, and publishing it to Google Play Store and Apple App Store.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Preparing for Release:</p>
                        <ul className="list-disc list-inside">
                            <li>Set up app icons & splash screens</li>
                            <li>Configure versioning & app metadata</li>
                            <li>Optimize bundle size</li>
                            <li>Test release build on devices</li>
                        </ul>

                        <p className="font-bold">Android Deployment:</p>
                        <ul className="list-disc list-inside">
                            <li>Generate Signed APK / AAB</li>
                            <li>Configure Gradle for release keys</li>
                            <li>Upload to Google Play Console</li>
                            <li>Internal & beta testing</li>
                        </ul>

                        <p className="font-bold">iOS Deployment:</p>
                        <ul className="list-disc list-inside">
                            <li>Generate iOS build with Xcode</li>
                            <li>Set up App Store Connect & provisioning profiles</li>
                            <li>TestFlight for beta distribution</li>
                            <li>Publish to App Store</li>
                        </ul>

                        <p className="font-bold">CI/CD & Automation:</p>
                        <ul className="list-disc list-inside">
                            <li>Fastlane for automated builds</li>
                            <li>App Center / Firebase App Distribution</li>
                            <li>GitHub Actions / GitLab CI pipelines</li>
                            <li>Continuous testing & release automation</li>
                        </ul>

                        <p className="font-bold">📚 Resources to Learn:</p>
                        <div className="flex flex-col gap-4">

                            {/* Docs */}
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://reactnative.dev/docs/signed-apk-android"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">React Native Android Release Guide</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://docs.flutter.dev/deployment/android"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">Flutter Deployment Docs</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://developer.apple.com/ios/submit/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">Apple App Store Submission Guide</span>
                                </a>
                            </div>

                            {/* YouTube Tutorials */}
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/M0q3LhJj8eA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">React Native Publish App to Play Store & App Store</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/qJ4PEz0jq0A"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">Flutter App Deployment Tutorial</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={closeDeployment}
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