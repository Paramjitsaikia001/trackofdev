import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function NeuralNetworksPage({ closeNeuralNetworks, Done }) {
    const Nexthandler = () => {
        Done();
        closeNeuralNetworks();
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
                    <span onClick={closeNeuralNetworks} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Neural Networks & Deep Learning</h2>
                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold">Neural Networks</span> are a subset of machine learning algorithms modeled after the human brain. They consist of layers of interconnected nodes (neurons) that process and learn from data. Key concepts include perceptrons, activation functions, and backpropagation.</p>

                    <p><span className="text-[#23daff] font-bold">Deep Learning</span> is a specialized form of neural networks with multiple hidden layers. It is used to model complex patterns in data and is particularly effective for tasks such as image recognition, natural language processing, and time-series analysis.</p>

                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">What to Learn:</p>
                        <ul className="list-disc list-inside">
                            <li>Neural Networks: Perceptron, activation functions, backpropagation</li>
                            <li>Deep Learning Models: CNNs (for images), RNNs (for time-series), Transformers (for NLP)</li>
                        </ul>

                        <p className="font-bold">Tools:</p>
                        <ul className="list-disc list-inside">
                            <li>TensorFlow, PyTorch, Keras</li>
                            <li>OpenCV (for image processing), Hugging Face (for NLP models)</li>
                        </ul>

                        <p className="font-bold">Resources to become an expert in Neural Networks & Deep Learning:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.coursera.org/specializations/deep-learning" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Deep Learning Specialization – Andrew Ng</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://course.fast.ai/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Fast.ai Deep Learning Course</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://www.deeplearning.ai/neural-networks-deep-learning/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Neural Networks & Deep Learning</span>
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
                    <button onClick={closeNeuralNetworks} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}