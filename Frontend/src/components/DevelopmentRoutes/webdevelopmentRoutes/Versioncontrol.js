import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function VersionControlSystems({ closeVCS, Done }) {
    const [isFullScreen, setFullScreen] = useState(false);

    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

    const nextHandler = () => {
        Done();
        closeVCS();
    };

    return (
        <section
            className={getFullscreenClasses(isFullScreen)}
            style={{ boxShadow: "0 0 10px 0px #000000" }}
        >
            <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    <span 
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden" 
                        onClick={fullscreenHandler}
                    >
                        {getFullscreenIconName(isFullScreen)}
                    </span>
                    <span onClick={closeVCS} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Version Control Systems</h2>
                <div className="flex flex-col gap-3">
                    <p>A<span className="text-[#23daff] font-bold"> Version Control System (VCS)</span>  is a tool that helps developers manage changes to source code over time. It tracks revisions, allows collaboration, and makes it easy to revert to previous versions if needed. Git is the most popular distributed VCS, and GitHub is a platform built on Git, offering cloud-based repository hosting and additional features for collaboration, project management, and deployment.


                    </p>
                    <p>If a website were a human body, a VCS like Git and GitHub would be its memory log, keeping track of every action and decision, ensuring seamless recovery and coordination when multiple "minds" (developers) contribute to its growth.
                    </p>
                    <div className="flex flex-col">
                        <h3>Key Features of GitHub:</h3>
                        <ul className="flex flex-col gap-2 pl-6">
                            <li className="list-decimal">
                                <p><b>Code Collaboration:</b> Multiple developers can work on the same project, using features like pull requests and code reviews.</p>
                            </li>
                            <li className="list-decimal">
                                <p><b>Branching and Merging:</b> Developers can work on separate branches, experiment with features, and merge them into the main branch when ready.</p>
                            </li>
                            <li className="list-decimal">
                                <p><b>Project Management:</b>  Includes tools like GitHub Issues, Projects, and Discussions for task tracking and communication.
                                </p>
                            </li>
                            <li className="list-decimal">
                                <p><b>Integration and Deployment:</b>Supports CI/CD pipelines, automated testing, and deployment workflows using GitHub Actions.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Resources to Learn Git and GitHub:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white h-6 py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://docs.github.com/en/get-started/start-your-journey/hello-world" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">GitHub Docs – Official documentation to get started with GitHub.</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.w3schools.com/git/default.asp" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Git Tutorial - W3Schools</span>
                                </a>
                            </div>

                            <div className="flex gap-3 items-center">
                                <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/Ez8F0nW6S-w?si=TR3F2TnqIjqWtSE_" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">
                                        Complete Git and GitHub Tutorial for Beginners by Apna College
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/r8QQOAicu8Y?si=13ZmWBhRFtFId1yw" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Master Git & GitHub in One Video! 🚀 Level Up Your Skills Now! by Sheryians Coding School
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={closeVCS} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={nextHandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}
