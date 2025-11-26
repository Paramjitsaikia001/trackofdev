import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function PythonPage({ closePython, Done }) {
    const [isFullScreen, setFullScreen] = useState(false);

    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

    const Nexthandler = () => {
        Done();
        closePython();
    }

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
                    <span onClick={closePython} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Python & Programming Basics</h2>
                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold">Python</span> is a versatile and powerful programming language widely used in AI/ML development. It is known for its simplicity and readability, making it an excellent choice for beginners and experienced developers alike.</p>

                    <p>In AI/ML development, Python is used for data manipulation, analysis, and visualization, as well as for building machine learning models. Essential libraries such as NumPy, Pandas, and Matplotlib provide the tools needed to work with data effectively.</p>

                    <p>Learning Python and its essential libraries is crucial for AI/ML development. Additionally, understanding version control with Git/GitHub is important for code collaboration and management.</p>

                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">What to Learn:</p>
                        <ul className="list-disc list-inside">
                            <li>Python syntax, OOP concepts, and scripting</li>
                            <li>Essential libraries: NumPy, Pandas, Matplotlib</li>
                            <li>Git/GitHub for version control</li>
                        </ul>

                        <p className="font-bold">Tools:</p>
                        <ul className="list-disc list-inside">
                            <li>Jupyter Notebook, Google Colab, VS Code</li>
                            <li>Git & GitHub for code collaboration</li>
                        </ul>

                        <p className="font-bold">Resources to become an expert in Python:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.w3schools.com/python/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">W3Schools Python Tutorial</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://realpython.com/python-basics/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Real Python – Python Basics</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/rfscVS0vtbw" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Python Crash Course for Beginners by freeCodeCamp.org</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/8DvywoWv6fI" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Learn Python – Full Course for Beginners by Programming with Mosh</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={closePython} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}