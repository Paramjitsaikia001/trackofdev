import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function ApiPage({ closeApi, Done }) {
    const Nexthandler = () => {
        Done();
        closeApi();
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
                    <span
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"
                        onClick={fullscreenHandler}
                    >
                        {getFullscreenIconName(isFullScreen)}
                    </span>
                    <span
                        onClick={closeApi}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    APIs in Backend Development
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        An <span className="text-[#23daff] font-bold">API (Application Programming Interface)</span> 
                        defines how different software components communicate.  
                        In backend development, APIs allow frontend clients, mobile apps, and external services 
                        to interact with your server and database securely and efficiently.
                    </p>

                    <p>
                        Understanding APIs is essential for building scalable, reliable, and secure backend systems.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">What to Learn:</p>
                        <ul className="list-disc list-inside">
                            <li>REST API fundamentals (GET, POST, PUT, DELETE)</li>
                            <li>GraphQL basics (queries, mutations, resolvers)</li>
                            <li>gRPC and RPC APIs</li>
                            <li>API versioning and documentation</li>
                            <li>Handling request validation & errors</li>
                            <li>Rate limiting & throttling</li>
                            <li>CORS and security best practices</li>
                            <li>Testing APIs (Postman, Jest, Supertest)</li>
                        </ul>

                        <p className="font-bold">Popular Tools & Frameworks:</p>
                        <ul className="list-disc list-inside">
                            <li>Express.js (REST APIs)</li>
                            <li>NestJS (REST & GraphQL APIs)</li>
                            <li>Apollo Server (GraphQL)</li>
                            <li>Postman / Insomnia (API testing)</li>
                            <li>Swagger / OpenAPI (API documentation)</li>
                            <li>gRPC (high-performance RPC framework)</li>
                        </ul>

                        <p className="font-bold">Resources to Learn APIs:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://swagger.io/specification/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        OpenAPI (Swagger) Specification
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://graphql.org/learn/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        GraphQL Official Docs
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/-MTSQjw5DrM"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        REST API Crash Course – Traversy Media
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/ZQL7tL2S0oQ"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        GraphQL Full Course – freeCodeCamp
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={closeApi}
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