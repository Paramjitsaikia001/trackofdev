import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function EthicsAIPage({ closeEthicsAI, Done }) {
    const Nexthandler = () => {
        Done();
        closeEthicsAI();
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
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    <span className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"

                                            onClick={fullscreenHandler}

                                        >
            {getFullscreenIconName(isFullScreen)}
          </span>
                    <span onClick={closeEthicsAI} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Ethics & Responsible AI</h2>

                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold">Ethics and Responsible AI</span> focus on building and deploying AI technologies that are fair, transparent, accountable, and beneficial to all of society.</p>

                    <p>It’s essential to ensure AI systems are aligned with human values, avoid bias, respect privacy, and promote inclusivity.</p>

                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">What to Learn:</p>
                        <ul className="list-disc list-inside">
                            <li>Fairness, Accountability, Transparency, and Explainability (FATE)</li>
                            <li>Bias and Discrimination in AI Systems</li>
                            <li>Data Privacy and Consent</li>
                            <li>Ethical Guidelines for AI Development</li>
                            <li>AI Governance and Regulation</li>
                        </ul>

                        <p className="font-bold">Tools & Practices:</p>
                        <ul className="list-disc list-inside">
                            <li>AI Fairness 360 by IBM</li>
                            <li>Google's What-If Tool</li>
                            <li>LIME, SHAP for explainability</li>
                        </ul>

                        <p className="font-bold">Resources to become responsible in AI:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://ethicsinaction.ieee.org/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">IEEE Global Initiative on Ethics of Autonomous and Intelligent Systems</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.coursera.org/learn/ai-ethics" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">AI For Everyone by Andrew Ng – Coursera</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/0yISzTTrlHE" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">What is Ethical AI? – YouTube (World Economic Forum)</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://responsibleai.microsoft.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Responsible AI by Microsoft</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between">
                    <button onClick={closeEthicsAI} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}
