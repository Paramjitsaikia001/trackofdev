import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function AIMLProjectPage({ closeAIMLProject, Done }) {
    const Nexthandler = () => {
        Done();
        closeAIMLProject();
    }
    const [isFullScreen, setFullScreen] = useState(false);
    const fullscrenHandler = () => {
        if (isFullScreen === "left-[60%]") {
            setFullScreen("left-[20%]");
        } else {
            setFullScreen("left-[60%]");
        }
    }
    return (
        <section className={getFullscreenClasses(isFullScreen)} style={{ boxShadow: "0 0 10px 0px #000000" }}>
            <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    <span className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"

                                            onClick={fullscreenHandler}

                                        >
            {getFullscreenIconName(isFullScreen)}
          </span>
                    <span onClick={closeAIMLProject} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Real-World AI/ML Projects</h2>
                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold">Real-World AI/ML Projects</span> are essential for applying theoretical knowledge to practical scenarios. Working on projects helps in understanding the end-to-end process of building, training, and deploying machine learning models.</p>

                    <p>Here are some project ideas to get started:</p>
                    <ul className="list-disc list-inside">
                        <li>Spam Detector (NLP)</li>
                        <li>Face Recognition (Computer Vision)</li>
                        <li>Stock Market Predictor (ML)</li>
                        <li>Learn model deployment using Flask/FastAPI</li>
                    </ul>

                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Tools:</p>
                        <ul className="list-disc list-inside">
                            <li>Flask, FastAPI for API development</li>
                            <li>Docker, AWS/GCP for cloud deployment</li>
                        </ul>

                        <p className="font-bold">Resources to become an expert in AI/ML Projects:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://fullstackdeeplearning.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Full Stack Deep Learning</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.coursera.org/learn/deploying-machine-learning-models" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Deploy ML Models with Flask</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://www.kaggle.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Kaggle Datasets</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/aircAruvnKk" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Neural Networks and Deep Learning by 3Blue1Brown</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={closeAIMLProject} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}