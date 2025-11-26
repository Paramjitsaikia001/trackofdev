import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function FullresourceAIML({ closeFullResources, Done }) {
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
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">AI & ML Full Course Resources</h2>

                {/* Intro */}
                <p className="mb-6">
                    This page provides a comprehensive guide with free resources to help you become a professional in AI and Machine Learning.
                </p>

                {/* Core Fundamentals */}
                <div className="border border-[#38bdf8] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#38bdf8] mb-2">1. Core Fundamentals</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Mathematics:** Master Linear Algebra, Calculus, Probability, and Statistics.</li>
                        <li>**Programming:** Become an expert in Python, including libraries like NumPy, Pandas, and Matplotlib.</li>
                        <li>**Algorithms & Data Structures:** A strong foundation is crucial for efficient model development.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/kc2sM4G1_8U" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                3Blue1Brown - The Essence of Linear Algebra
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/rfscVS0vtbw" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                FreeCodeCamp - Python Full Course
                            </a>
                        </div>
                    </div>
                </div>

                {/* Machine Learning & Deep Learning */}
                <div className="border border-[#0288d1] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#0288d1] mb-2">2. Machine Learning & Deep Learning</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Classic ML:** Understand supervised vs. unsupervised learning, regression, classification, and clustering.</li>
                        <li>**Deep Learning:** Learn about neural networks, convolutional neural networks (CNNs), and recurrent neural networks (RNNs).</li>
                        <li>**Frameworks:** Master TensorFlow/Keras or PyTorch for building and training models.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/i_Lwz_1_C_g" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                FreeCodeCamp - Machine Learning Course
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/aircAruvnKk" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Andrew Ng - Machine Learning (Coursera, free audit)
                            </a>
                        </div>
                    </div>
                </div>

                {/* Data & Deployment */}
                <div className="border border-[#7952b3] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#7952b3] mb-2">3. Data & Deployment</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Data Preprocessing:** Learn to clean, transform, and normalize data, which is 80% of an AI/ML project.</li>
                        <li>**Model Evaluation:** Understand metrics like accuracy, precision, recall, and F1-score.</li>
                        <li>**Deployment:** Learn to serve your models using frameworks like Flask or FastAPI and deploy on cloud platforms (AWS, Azure, GCP).</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://scikit-learn.org/stable/modules/preprocessing.html" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                scikit-learn - Preprocessing Data
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/t4kE_nO9U3Y" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Deploy a ML Model with FastAPI - FreeCodeCamp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Advanced Topics & Career */}
                <div className="border border-[#8f8f8f] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#8f8f8f] mb-2">4. Advanced Topics & Career Prep</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Specialization:** Choose a field like NLP, Computer Vision, or Reinforcement Learning.</li>
                        <li>**Portfolio:** Build 3-5 projects showcasing your skills. Use datasets from Kaggle.</li>
                        <li>**Cloud Skills:** Get familiar with cloud services for data storage, model training, and deployment.</li>
                        <li>**Communication:** Learn to explain complex concepts to non-technical stakeholders.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://www.kaggle.com/datasets" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Kaggle Datasets
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/aP9Wb2J9q8w" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Introduction to NLP - The Net Ninja
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