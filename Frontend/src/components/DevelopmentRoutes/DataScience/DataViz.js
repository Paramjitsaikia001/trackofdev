import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function DataVizPage({ closeViz, Done }) {
  const Nexthandler = () => {
    Done();
    closeViz();
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
            onClick={closeViz}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 3: Data Visualization & Analysis 📈
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Raw data is often messy and difficult to understand. This step is about transforming
            that data into a clean, usable format and creating meaningful visual representations
            to communicate insights to others.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Data Preprocessing & Cleaning:</span> Techniques to handle
                missing values, remove duplicates, and deal with outliers to prepare data for analysis.
              </li>
              <li>
                <span className="font-bold">Exploratory Data Analysis (EDA):</span> Use summary statistics
                and initial visualizations to understand the main characteristics of a dataset.
              </li>
              <li>
                <span className="font-bold">Data Visualization:</span> Create various types of plots
                like bar charts, histograms, heatmaps, and scatter plots to present findings clearly.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Popular Tools:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Matplotlib & Seaborn:</span> Python libraries for creating
                static, animated, and interactive visualizations.
              </li>
              <li>
                <span className="font-bold">Excel & Power BI:</span> Powerful spreadsheet and business
                intelligence tools for quick analysis and dashboard creation.
              </li>
              <li>
                <span className="font-bold">Quadratic AI:</span> A modern spreadsheet tool that combines
                the functionalities of Excel and Python with AI assistance.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/3tH8R8-o1rA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Data Visualization with Python - freeCodeCamp.org
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/bX2M5tQ0PGE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Matplotlib and Seaborn Tutorial - Corey Schafer
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.data-to-viz.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Data to Viz (Website)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeViz}
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