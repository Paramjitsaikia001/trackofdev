import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function APIsNetworkingPage({ closeAPIs, Done }) {
    const Nexthandler = () => {
        Done();
        closeAPIs();
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
                        onClick={closeAPIs}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    APIs & Networking in Mobile Apps
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">APIs & Networking</span> 
                        enable apps to communicate with servers, fetch data, and connect to 
                        third-party services. Mastering this ensures your apps can be dynamic 
                        and connected.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Core Concepts:</p>
                        <ul className="list-disc list-inside">
                            <li>Understanding REST APIs (GET, POST, PUT, DELETE)</li>
                            <li>GraphQL basics (queries, mutations, subscriptions)</li>
                            <li>Networking libraries (Fetch API, Axios, http in Flutter)</li>
                            <li>Authentication in API calls (JWT, OAuth, API keys)</li>
                            <li>Error handling & retry strategies</li>
                            <li>Offline caching & local storage sync</li>
                            <li>WebSockets & real-time communication</li>
                        </ul>

                        <p className="font-bold">Popular Libraries & Tools:</p>
                        <ul className="list-disc list-inside">
                            <li><span className="font-semibold">React Native</span>: Axios, Fetch API, React Query, Apollo Client</li>
                            <li><span className="font-semibold">Flutter</span>: http, Dio, GraphQL Flutter, Provider with networking</li>
                            <li><span className="font-semibold">Testing APIs</span>: Postman, Insomnia</li>
                        </ul>

                        <p className="font-bold">Best Practices:</p>
                        <ul className="list-disc list-inside">
                            <li>Always handle loading & error states</li>
                            <li>Use interceptors for tokens and headers</li>
                            <li>Secure sensitive keys with environment variables</li>
                            <li>Paginate data for performance</li>
                            <li>Implement retries & exponential backoff</li>
                        </ul>

                        <p className="font-bold">Resources to Learn APIs & Networking:</p>
                        <div className="flex flex-col gap-4">
                            {/* React Native */}
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://reactnative.dev/docs/network"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        React Native Networking Docs
                                    </span>
                                </a>
                            </div>
                            {/* Flutter */}
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://docs.flutter.dev/cookbook/networking/fetch-data"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Flutter Networking Docs
                                    </span>
                                </a>
                            </div>
                            {/* Axios */}
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://axios-http.com/docs/intro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Axios Documentation
                                    </span>
                                </a>
                            </div>
                            {/* Videos */}
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/HE6mK0mK3rE"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        React Native API Fetch Tutorial – Programming with Mash
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/x0uinJvhNxI"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Flutter Networking Crash Course – The Net Ninja
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={closeAPIs}
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