import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function LibraryandFramework({ closeLibraryFramework, Done }) {
    const [isFullScreen, setFullScreen] = useState(false);

    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

    const nextHandler = () => {
        Done();
        closeLibraryFramework();
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
                    <span onClick={closeLibraryFramework} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Libraries and Frameworks</h2>
                <div className="flex flex-col gap-1">
                    <p>In web development, <span className="text-[#23daff] font-bold">libraries</span> and <span className="text-[#23daff] font-bold">frameworks</span> are essential tools that help developers build applications more efficiently.</p>
                    
                    <div className="section mt-4">
                        <h3 className="text-xl mb-2">What is a Library?</h3>
                        <p>A library is a collection of pre-written code that developers can use to optimize tasks. Libraries provide specific functionality and are used to perform common tasks, such as manipulating the DOM, making HTTP requests, or handling data transformations.</p>
                        <h4 className="text-lg mt-2">Examples of Libraries:</h4>
                        <ul className="list-disc list-inside">
                            <li>React</li>
                            <li>jQuery</li>
                            <li>Lodash</li>
                            <li>Axios</li>
                            <li>D3.js</li>
                        </ul>
                    </div>
                    
                    <div className="section mt-4">
                        <h3 className="text-xl mb-2">What is a Framework?</h3>
                        <p>A framework provides a structured way to build applications. Frameworks include libraries, tools, and best practices to help developers create robust and scalable applications. They offer a foundation on which developers can build, ensuring consistency and efficiency in the development process.</p>
                        <h4 className="text-lg mt-2">Examples of Frameworks:</h4>
                        <ul className="list-disc list-inside">
                            <li>Angular</li>
                            <li>Vue.js</li>
                            <li>Express.js</li>
                            <li>Django</li>
                            <li>Ruby on Rails</li>
                        </ul>
                    </div>
                    
                    <div className="section mt-4">
                        <h3 className="text-xl mb-2">Resources to Learn More</h3>
                        <ul className="list-disc list-inside flex flex-col gap-3">
                            <li className="flex gap-3 items-center">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">The Difference Between a Framework and a Library - freeCodeCamp</a>
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.codecademy.com/articles/library-vs-framework" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">Library vs. Framework - Codecademy</a>
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/jBKjjtg0XbA" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">Library vs Framework - What's the Difference? - Academind</a>
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/szXbuO3bVRk" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">Library vs Framework - Traversy Media</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={closeLibraryFramework} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={nextHandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}