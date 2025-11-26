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
                    Testing & Debugging in Backend Development
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">Testing</span> ensures that your backend code 
                        works as expected, while <span className="text-[#23daff] font-bold">Debugging</span> 
                        helps identify and fix issues when things go wrong.
                    </p>

                    <p>
                        Together, they improve code quality, prevent regressions, and build trust in your system’s stability.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">What to Learn:</p>
                        <ul className="list-disc list-inside">
                            <li>Unit Testing (test individual functions)</li>
                            <li>Integration Testing (test API + DB together)</li>
                            <li>End-to-End (E2E) Testing</li>
                            <li>Mocking & Stubbing (simulate dependencies)</li>
                            <li>Test-Driven Development (TDD)</li>
                            <li>Error handling & debugging strategies</li>
                            <li>Logging & monitoring</li>
                            <li>Performance testing & load testing</li>
                        </ul>

                        <p className="font-bold">Popular Tools & Frameworks:</p>
                        <ul className="list-disc list-inside">
                            <li>Jest (unit + integration tests)</li>
                            <li>Mocha & Chai (flexible testing frameworks)</li>
                            <li>Supertest (API testing in Node.js)</li>
                            <li>Postman / Newman (manual & automated API testing)</li>
                            <li>Cypress (E2E testing, frontend + backend)</li>
                            <li>Sinon.js (mocking & stubbing)</li>
                            <li>Winston / Pino (logging)</li>
                            <li>PM2 / Nodemon (debugging & monitoring)</li>
                        </ul>

                        <p className="font-bold">Resources to Learn Testing & Debugging:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://jestjs.io/docs/getting-started"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">Jest Official Docs</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://mochajs.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">Mocha.js Documentation</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/FgnxcUQ5vho"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Unit Testing in Node.js – freeCodeCamp
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/5Xc8f0zzZXg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Debugging Node.js Apps – Fireship
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