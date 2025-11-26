import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function MLLibandalgPage({ closeMLLibandalg, Done }) {
    const Nexthandler = () => {
        Done();
        closeMLLibandalg();
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
                    <span onClick={closeMLLibandalg} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Machine Learning Libraries & Algorithms</h2>
                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold">Machine Learning Libraries & Algorithms</span> are essential for building and deploying machine learning models. Understanding these libraries and algorithms helps in selecting the right tools and techniques for various tasks in AI/ML development.</p>

                    <p>Key areas to focus on include supervised learning, unsupervised learning, and model evaluation. These concepts help in building and assessing machine learning models effectively.</p>

                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">What to Learn:</p>
                        <ul className="list-disc list-inside">
                            <li>Supervised Learning: Linear regression, logistic regression, decision trees</li>
                            <li>Unsupervised Learning: Clustering (K-Means, DBSCAN, PCA)</li>
                            <li>Model Evaluation: Precision, recall, F1-score</li>
                        </ul>

                        <p className="font-bold">Tools:</p>
                        <ul className="list-disc list-inside">
                            <li>Scikit-learn, XGBoost, LightGBM</li>
                            <li>Kaggle for datasets & competitions</li>
                        </ul>

                        <p className="font-bold">Resources to become an expert in Machine Learning Libraries & Algorithms:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.coursera.org/learn/machine-learning" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Andrew Ng's ML Course – Coursera</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://developers.google.com/machine-learning/crash-course" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Google ML Crash Course</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Hands-On ML with Scikit-Learn & TensorFlow – Book</span>
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
                    <button onClick={closeMLLibandalg} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}