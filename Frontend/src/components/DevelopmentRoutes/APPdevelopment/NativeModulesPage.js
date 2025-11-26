import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function NativeModulesDevicePage({ closeNative, Done }) {
    const Nexthandler = () => {
        Done();
        closeNative();
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
                        onClick={closeNative}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    Native Modules & Device Features
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">Native Modules & Device Features</span> 
                        allow your app to tap into powerful capabilities of mobile devices like 
                        camera, GPS, storage, notifications, and sensors. This is key for building 
                        fully functional, real-world apps.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Core Features to Learn:</p>
                        <ul className="list-disc list-inside">
                            <li>Camera & Image Picker (photos, videos, gallery access)</li>
                            <li>Location & GPS services</li>
                            <li>Push Notifications & Local Notifications</li>
                            <li>Accessing device sensors (accelerometer, gyroscope, etc.)</li>
                            <li>File System (read/write, storage management)</li>
                            <li>Contacts, SMS, and Phone APIs (with permissions)</li>
                            <li>Platform APIs (iOS-specific & Android-specific modules)</li>
                        </ul>

                        <p className="font-bold">Native Modules in Cross-Platform Apps:</p>
                        <ul className="list-disc list-inside">
                            <li><span className="font-semibold">React Native</span>: 
                                Linking native code (Java/Kotlin for Android, Swift/Obj-C for iOS)</li>
                            <li><span className="font-semibold">Flutter</span>: 
                                Platform Channels for communication with native code</li>
                            <li>Bridging between JS/Dart and Native APIs</li>
                        </ul>

                        <p className="font-bold">Popular Libraries:</p>
                        <ul className="list-disc list-inside">
                            <li><span className="font-semibold">React Native</span>: react-native-camera, react-native-geolocation-service, react-native-push-notification</li>
                            <li><span className="font-semibold">Flutter</span>: image_picker, geolocator, firebase_messaging, sensors_plus</li>
                        </ul>

                        <p className="font-bold">Best Practices:</p>
                        <ul className="list-disc list-inside">
                            <li>Always request runtime permissions safely</li>
                            <li>Handle denied permissions gracefully</li>
                            <li>Test device features on real hardware (emulators may be limited)</li>
                            <li>Optimize usage of sensors to save battery</li>
                            <li>Fallback gracefully if a feature is unavailable</li>
                        </ul>

                        <p className="font-bold">Resources to Learn:</p>
                        <div className="flex flex-col gap-4">
                            {/* React Native Docs */}
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://reactnative.dev/docs/native-modules-intro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        React Native – Native Modules Docs
                                    </span>
                                </a>
                            </div>
                            {/* Flutter Docs */}
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://docs.flutter.dev/development/platform-integration/platform-channels"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Flutter – Platform Channels
                                    </span>
                                </a>
                            </div>
                            {/* Tutorials */}
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/bNWuQD0wV2A"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        React Native Camera & Permissions Tutorial – Programming with Mash
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/LMSztYC_h9I"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Flutter Device Features Crash Course – The Net Ninja
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={closeNative}
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