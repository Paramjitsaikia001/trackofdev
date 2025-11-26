import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function MLPage({ closeML, Done }) {
  const Nexthandler = () => {
    Done();
    closeML();
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
        <div className="flex pb-4 justify-between items-center w-[100%]">
          <span className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"

                                  onClick={fullscreenHandler}

                              >
            {getFullscreenIconName(isFullScreen)}
          </span>
          <span
            onClick={closeML}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 5: Machine Learning & Deep Learning 🧠
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            This is the heart of data science, where you transition from analyzing historical
            data to building models that can make predictions. You'll learn the core algorithms
            that power everything from recommendation systems to self-driving cars.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Machine Learning Algorithms:</span>
                <ul className="list-circle list-inside ml-5">
                  <li><span className="font-bold">Supervised Learning:</span> Linear Regression, Logistic Regression, Support Vector Machines.</li>
                  <li><span className="font-bold">Unsupervised Learning:</span> K-Means Clustering, Anomaly Detection.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Deep Learning:</span> Understand the basics of neural networks.
                This is a more advanced topic but essential for modern data science.
              </li>
              <li>
                <span className="font-bold">Model Evaluation:</span> Learn to measure how well your models
                are performing using metrics like accuracy, precision, recall, and F1-score.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Popular Tools:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Scikit-learn:</span> The most popular Python library for machine learning.
              </li>
              <li>
                <span className="font-bold">TensorFlow & PyTorch:</span> Powerful open-source frameworks for deep
                learning, developed by Google and Meta, respectively.
              </li>
              <li>
                <span className="font-bold">Keras:</span> A high-level API for building and training deep learning models,
                often used on top of TensorFlow.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/i_LwzXUVPCA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Machine Learning Full Course - freeCodeCamp.org
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://scikit-learn.org/stable/tutorial/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Scikit-learn User Guide</span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://developers.google.com/machine-learning/crash-course"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Google's Machine Learning Crash Course</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeML}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Close
          </button>
          <button
            onClick={Nexthandler}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Done
          </button>
        </div>
      </div>
    </section>
  );
}