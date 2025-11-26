import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function NestJSPage({ closeNestJS, Done }) {
    const Nexthandler = () => {
        Done();
        closeNestJS();
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
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    <span className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"

                                            onClick={fullscreenHandler}

                                        >
            {getFullscreenIconName(isFullScreen)}
          </span>
                    <span onClick={closeNestJS} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">NestJS</h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">NestJS</span> is a progressive Node.js framework 
                        for building efficient, scalable, and enterprise-grade server-side applications. 
                        It uses TypeScript by default and leverages strong design patterns like Dependency Injection 
                        and Modular Architecture.
                    </p>

                    <p>
                        Learning NestJS prepares you for building robust backends, REST APIs, GraphQL services, and 
                        microservices with ease.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">What to Learn:</p>
                        <ul className="list-disc list-inside">
                            <li>Setting up a NestJS project</li>
                            <li>Modules, Controllers, and Providers</li>
                            <li>Dependency Injection</li>
                            <li>Middleware, Pipes, Guards, and Interceptors</li>
                            <li>Database Integration (TypeORM, Prisma, Mongoose)</li>
                            <li>Authentication & Authorization (JWT, Passport)</li>
                            <li>Microservices and GraphQL with NestJS</li>
                            <li>Testing with Jest</li>
                        </ul>

                        <p className="font-bold">Tools:</p>
                        <ul className="list-disc list-inside">
                            <li>Node.js & npm (or pnpm/yarn)</li>
                            <li>Postman / Thunder Client for API testing</li>
                            <li>TypeORM / Prisma for database handling</li>
                        </ul>

                        <p className="font-bold">Resources to Learn NestJS:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://docs.nestjs.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">NestJS Official Docs</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/wqhNoDE6pb4" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">NestJS Crash Course – freeCodeCamp</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://www.udemy.com/course/nestjs-zero-to-hero/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">NestJS Zero to Hero – Udemy</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://dev.to/nestjs" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">NestJS Community Articles</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button onClick={closeNestJS} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}