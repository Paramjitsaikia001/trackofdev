import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function MathematicalPage({ closeMathematical, Done }) {
    const Nexthandler = () => {
        Done();
        closeMathematical();
    }
    const [isFullScreen, setFullScreen] = useState(false);
    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };
    return (
        <section className={getFullscreenClasses(isFullScreen)} style={{ boxShadow: "0 0 10px 0px #000000" }}>
            <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    <span
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"
                        onClick={fullscreenHandler}
                    >
                        {getFullscreenIconName(isFullScreen)}
                    </span>
                    <span onClick={closeMathematical} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Mathematical Knowledge</h2>
                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold">Mathematical knowledge</span> is fundamental for AI/ML development. It provides the theoretical foundation for understanding and implementing machine learning algorithms and models.</p>

                    <p>Key areas of mathematics that are essential for AI/ML include Linear Algebra, Probability & Statistics, and Calculus. These areas help in understanding data structures, statistical methods, and optimization techniques used in machine learning.</p>

                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">What to Learn:</p>
                        <ul className="list-disc list-inside">
                            <li>Linear Algebra: Matrices, vectors, eigenvalues</li>
                            <li>Probability & Statistics: Bayes theorem, distributions</li>
                            <li>Calculus: Derivatives, gradient descent</li>
                        </ul>

                        <p className="font-bold">Tools:</p>
                        <ul className="list-disc list-inside">
                            <li>Wolfram Alpha, Khan Academy</li>
                            <li>Jupyter Notebook for calculations</li>
                        </ul>

                        <p className="font-bold">Resources to become an expert in Mathematical Knowledge:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.khanacademy.org/math/linear-algebra" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Khan Academy – Linear Algebra</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.coursera.org/learn/mathematics-for-machine-learning" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Coursera – Mathematics for Machine Learning</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9Kmdp-YIG5Rz4h2gmTf" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">3Blue1Brown – YouTube (Math for AI)</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={closeMathematical} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}