import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function FullresourceBackendJS({ closeFullResources, Done }) {
    const Nexthandler = () => {
        Done();
        closeFullResources();
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
                    <span onClick={closeFullResources} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Backend with Node.js</h2>

                {/* Intro */}
                <p className="mb-6">
                    This page provides a comprehensive guide with free resources and key points to help you become a professional backend developer using the JavaScript ecosystem, specifically **Node.js and its frameworks**.
                </p>

                {/* Core Fundamentals */}
                <div className="border border-[#38bdf8] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#38bdf8] mb-2">1. Core Fundamentals</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Node.js & Express.js:** Master the fundamentals of Node.js, including its event-driven, non-blocking I/O model. Use Express.js to build robust and scalable APIs.</li>
                        <li>**Databases:** Understand the difference between relational (SQL) and non-relational (NoSQL) databases. Learn to connect to and manage data in MongoDB and PostgreSQL.</li>
                        <li>**APIs:** Master the concepts of REST APIs and GraphQL. Learn to design and build your own endpoints using Express.js.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/gnsO8-xJncM" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Node.js & Express.js Full Course - FreeCodeCamp
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/M_Y-W_d8z3g" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                MongoDB Tutorial for Beginners - The Net Ninja
                            </a>
                        </div>
                    </div>
                </div>

                {/* Frameworks & Authentication */}
                <div className="border border-[#0288d1] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#0288d1] mb-2">2. Frameworks & Authentication</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Express.js:** The de facto standard for building APIs in Node.js. Learn about middleware, routing, and error handling.</li>
                        <li>**Authentication:** Implement secure user authentication using JSON Web Tokens (JWT) and sessions. Understand how to hash passwords with `bcrypt.js`.</li>
                        <li>**Modern Frameworks:** Explore newer frameworks like NestJS, which provides an opinionated structure for large applications.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/2gDqH2gS2c0" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                JWT Authentication Tutorial - Traversy Media
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/lQ8L-Bf2j4Y" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                NestJS Full Course - FreeCodeCamp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Deployment & DevOps */}
                <div className="border border-[#7952b3] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#7952b3] mb-2">3. Deployment & DevOps</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Cloud Platforms:** Get hands-on with a cloud provider like AWS, Azure, or Google Cloud. Learn to deploy your applications using services like AWS Elastic Beanstalk or Azure App Service.</li>
                        <li>**Containers:** Understand Docker for packaging and running your applications in a consistent environment.</li>
                        <li>**CI/CD:** Set up continuous integration and continuous delivery pipelines to automate your deployment process using tools like GitHub Actions.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/hQc56aD7C3k" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Deploying a Node.js App - The Net Ninja
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/3c-iBlM-tC0" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Docker Crash Course - Traversy Media
                            </a>
                        </div>
                    </div>
                </div>

                {/* Advanced Topics & Career */}
                <div className="border border-[#8f8f8f] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#8f8f8f] mb-2">4. Advanced Topics & Career Prep</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Caching:** Implement caching with Redis to improve application performance and reduce database load.</li>
                        <li>**Microservices & Serverless:** Explore advanced architectures and frameworks like AWS Lambda or Google Cloud Functions.</li>
                        <li>**Testing:** Learn to write unit and integration tests for your backend code using Jest.</li>
                        <li>**Portfolio:** Build 3-5 projects that demonstrate your skills, such as a blog with a database, an e-commerce API, or a real-time chat application using Socket.IO.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/WvR_b_kF0jI" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Redis & Node.js Crash Course - Traversy Media
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/L8_Q3jW2L00" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Real-Time Chat App with Node.js & Socket.IO - The Net Ninja
                            </a>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button onClick={closeFullResources} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}