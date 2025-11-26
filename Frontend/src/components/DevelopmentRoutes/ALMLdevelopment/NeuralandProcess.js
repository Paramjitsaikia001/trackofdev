import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function NLPPage({ closeNLP, Done }) {
    const Nexthandler = () => {
        Done();
        closeNLP();
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
                    <span onClick={closeNLP} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Natural Language Processing (NLP)</h2>

                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold">Natural Language Processing (NLP)</span> is a branch of AI that enables machines to understand, interpret, and generate human language. It's essential in applications like chatbots, sentiment analysis, translation, and more.</p>

                    <p>NLP blends computational linguistics with machine learning and deep learning to process human language effectively.</p>

                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">What to Learn:</p>
                        <ul className="list-disc list-inside">
                            <li>Text Preprocessing: Tokenization, stopword removal, stemming, lemmatization</li>
                            <li>Vectorization Techniques: Bag of Words, TF-IDF, Word2Vec, GloVe</li>
                            <li>Sequence Models: RNN, LSTM, GRU</li>
                            <li>Transformers and BERT models</li>
                        </ul>

                        <p className="font-bold">Tools:</p>
                        <ul className="list-disc list-inside">
                            <li>NLTK, spaCy, Hugging Face Transformers</li>
                            <li>Google Colab, Jupyter Notebook</li>
                        </ul>

                        <p className="font-bold">Resources to become an expert in NLP:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.coursera.org/learn/language-processing" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Natural Language Processing – Coursera</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://nlp.stanford.edu/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Stanford NLP Group</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://huggingface.co/learn/nlp-course/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Hugging Face NLP Course</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/OQQ-W_63UgQ" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">NLP Crash Course by freeCodeCamp</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between">
                    <button onClick={closeNLP} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}
