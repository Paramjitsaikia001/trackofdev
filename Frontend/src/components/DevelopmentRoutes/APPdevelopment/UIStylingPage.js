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
                    APIs & Networking in Cross-Platform Apps
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">APIs & Networking</span> are the 
                        backbone of mobile apps. They allow apps to communicate with servers, databases, 
                        and third-party services.
                    </p>

                    <p>
                        Understanding REST, GraphQL, and WebSockets is essential for real-time, scalable 
                        applications.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Key Networking Concepts:</p>
                        <ul className="list-disc list-inside">
                            <li>HTTP methods: GET, POST, PUT, DELETE</li>
                            <li>REST APIs and JSON data handling</li>
                            <li>GraphQL APIs for flexible queries</li>
                            <li>Authentication: JWT, OAuth2, API Keys</li>
                            <li>Real-time data with WebSockets / Socket.IO</li>
                            <li>Error handling and retries</li>
                        </ul>

                        <p className="font-bold">Popular Libraries & Tools:</p>
                        <ul className="list-disc list-inside">
                            <li>
                                <span className="text-[#28ffd4] font-semibold">Axios</span> – Promise-based HTTP client for JS/TS.
                            </li>
                            <li>
                                <span className="text-[#28ffd4] font-semibold">Fetch API</span> – Native API for network requests.
                            </li>
                            <li>
                                <span className="text-[#28ffd4] font-semibold">Apollo Client</span> – For GraphQL APIs.
                            </li>
                            <li>
                                <span className="text-[#28ffd4] font-semibold">React Query / TanStack Query</span> – Data fetching, caching & state management.
                            </li>
                            <li>
                                <span className="text-[#28ffd4] font-semibold">Socket.IO</span> – Real-time communication.
                            </li>
                        </ul>

                        <p className="font-bold">Resources to Learn APIs & Networking:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://axios-http.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">Axios Official Docs</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://tanstack.com/query/latest"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">React Query Docs</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://www.apollographql.com/docs/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">Apollo GraphQL Docs</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/GZvSYJDk-us"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">REST API Crash Course – Traversy Media</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/7wzR4Ig5pTI"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">GraphQL Crash Course – Net Ninja</span>
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