import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function APIpage({ closeAPI, Done }) {
    const Nexthandler = () => {
        Done();
        closeAPI();
    }
    const [isFullScreen, setFullScreen] = useState(false);
    const fullscreenHandler = () => setFullScreen(prev => !prev);

    return (
        <section className={getFullscreenClasses(isFullScreen)} style={{ boxShadow: "0 0 10px 0px #000000" }}>
            <div className="bg-[#0e1542] text-white pb-0 px-4  h-[100%]">
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    <span className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden" onClick={fullscreenHandler}>
                        {getFullscreenIconName(isFullScreen)}
                    </span>

                    <span
                        onClick={closeAPI}
                        class="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">JavaScript</h2>
                <div className="flex flex-col gap-1">
                    <p> An <span className="text-[#23daff] font-bold"> API (Application Programming Interface)</span>  is a set of rules and protocols that allows different software applications to communicate and exchange data. APIs act as intermediaries, enabling developers to integrate third-party services, build scalable systems, and provide seamless interactions between client and server.
                    </p>
                    <p>In web development, APIs are crucial for tasks like fetching data from a database, interacting with external services (e.g., payment gateways, weather data), or enabling real-time features in applications. Common types of APIs include REST (Representational State Transfer), GraphQL, and WebSocket APIs.
                    </p>
                    <p>
                        If a website were a human body, an API would be its voice and hands, facilitating communication and interaction with the outside world. It empowers applications to "speak" and "exchange" data with other systems, enhancing functionality and user experience.
                    </p>
                    <div className="types flex flex-col gap-4">
                        <h1>Types of API:</h1>
                        <ul className="flex flex-col gap-4 pl-8">
                            <li className="list-disc"><span className="font-bold">REST (Representational State Transfer)</span>: Uses HTTP protocols like GET, POST, PUT, DELETE for communication.</li>
                            <li className="list-disc"><span className="font-bold">GraphQL</span>: Allows clients to request specific data and get exactly what they need.</li>
                            <li className="list-disc"><span className="font-bold">SOAP (Simple Object Access Protocol)</span>: Uses XML for message format and relies on application-level protocols like HTTP or SMTP.</li>
                        </ul>
                    </div>
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Resource to learn APIs:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">MDN Web Docs on APIs</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://restfulapi.net/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">REST API Design Guide</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/WXsD0ZgxjRw?si=N-oe91VQtWUUUPKP" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">APIs for Beginners - How to use an API (Full Course / Tutorial) by freeCodeCamp.org
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/gRLdHSabW3o?si=28u75jtTmMDgQnTZ" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Async/Await & Fetch API in JavaScript with Examples | Sigma Web Development Course - Tutorial #76 by CodeWithHarry
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hand-on-practice flex flex-col gap-4">
                        <h1>Hand on practice:</h1>
                        <ul className="flex flex-col gap-4 pl-8">
                            <li className="list-disc"><span className="text-[#23daff]">Postman</span> :for testing and interacting with APIs.</li>
                            <ul className="flex flex-col gap-4 pl-8">
                                <li className="list-disc">Postman is a popular tool for testing and interacting with APIs. It allows developers to send requests, inspect responses, and automate workflows for API development and testing.</li>
                                <li className="list-disc">With Postman, you can create and save requests, organize them into collections, and share them with team members. It also offers features like environment variables, scripts, and test suites for comprehensive API testing and validation.</li>
                                <li className="resources list-disc">
                                    <h2>Resources to learn Postman</h2>
                                    <ul className="flex flex-col gap-2 pl-8">
                                        <li className="flex gap-3">
                                            <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                            <a href="https://learning.postman.com/docs/getting-started/introduction/" target="_blank" rel="noopener noreferrer">
                                                <span className="text-[#28ffd4] underline">Postman Learning Center</span></a>
                                        </li>
                                        <li className="flex gap-3 items-center">
                                            <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                                play_arrow
                                            </span>
                                            <a href="https://www.youtube.com/watch?v=6fZk8xuAe9Y" target="_blank" rel="noopener noreferrer">
                                                <span className="text-[#28ffd4] underline">Postman Tutorial for Beginners by freeCodeCamp.org</span></a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={closeAPI} className=" px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className=" px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}
