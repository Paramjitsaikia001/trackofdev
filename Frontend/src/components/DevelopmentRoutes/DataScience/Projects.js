import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function ProjectsPage({ closeProjects, Done }) {
  const Nexthandler = () => {
    Done();
    closeProjects();
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
            onClick={closeProjects}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 6: Build Projects & Portfolio 💼
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Theoretical knowledge is great, but a strong portfolio is what gets you hired.
            Projects are how you demonstrate your ability to solve real-world problems from start to
            finish. They are a reflection of your skills and dedication.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">What to Do:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Choose a Real-World Problem:</span> Pick a topic you're
                genuinely interested in. It could be predicting stock prices, analyzing sports
                statistics, or building a sentiment analysis tool for social media.
              </li>
              <li>
                <span className="font-bold">Follow the Data Science Lifecycle:</span>
                <ul className="list-circle list-inside ml-5">
                  <li><span className="font-bold">Problem Definition & Data Collection:</span> Find a dataset from a source like Kaggle.</li>
                  <li><span className="font-bold">Data Cleaning & Preprocessing:</span> Clean the data using Pandas.</li>
                  <li><span className="font-bold">Exploratory Data Analysis:</span> Find initial insights using Matplotlib/Seaborn.</li>
                  <li><span className="font-bold">Model Building & Evaluation:</span> Use scikit-learn to train and test a model.</li>
                  <li><span className="font-bold">Deployment & Maintenance:</span> (Optional for beginners) Learn to deploy your model as a web app.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Document Everything:</span> Write a clear, concise report or notebook explaining your process,
                findings, and the final result.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Essential Platforms:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Kaggle:</span> A platform for data science competitions and a great
                source for datasets and project ideas.
              </li>
              <li>
                <span className="font-bold">GitHub:</span> The best place to host your project code. Learn to
                use Git to manage your code and showcase your work.
              </li>
              <li>
                <span className="font-bold">Google Colab:</span> A free, cloud-based platform for writing and
                running Python code, great for projects without a powerful local machine.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/ua-CiDNNj3o"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Real-World Data Science Projects - Krish Naik
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.kaggle.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Kaggle (Website)</span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://docs.github.com/en/get-started"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">GitHub Documentation</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeProjects}
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