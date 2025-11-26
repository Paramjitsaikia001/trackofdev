import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function Fullresource({ closeFullResources, Done }) {
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
        <div className="flex pb-4 justify-between items-center w-[100%]">
          <span className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"

                                  onClick={fullscreenHandler}

                              >
            {getFullscreenIconName(isFullScreen)}
          </span>
          <span
            onClick={closeFullResources}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Full Data Science Resources 📚
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Here is a comprehensive list of free resources that cover the entire data science roadmap,
            from foundational knowledge to advanced topics and hands-on practice.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">Foundational Skills: Python, Math & Stats</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">freeCodeCamp.org:</span> Excellent full video courses on
                Python, SQL, Machine Learning, and more. A perfect starting point.
                <a
                  href="https://youtu.be/zR5M7F6gU8I"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Python Full Course
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">Khan Academy:</span> Provides a comprehensive, free curriculum
                for math, statistics, and linear algebra.
                <a
                  href="https://www.khanacademy.org/math/statistics-probability"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Statistics and Probability
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">SQLBolt:</span> An interactive website to learn SQL fundamentals through
                hands-on exercises.
                <a
                  href="https://sqlbolt.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    SQLBolt (Interactive Tutorial)
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">W3Schools:</span> Provides simple, clear tutorials on SQL.
                <a
                  href="https://www.w3schools.com/sql/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    W3Schools SQL Tutorial
                  </span>
                </a>
              </li>
            </ul>

            <p className="font-bold text-lg mt-8 text-[#28ffd4]">Data Manipulation & Visualization</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Pandas Official Documentation:</span> The best place to learn
                this essential library for data analysis and manipulation.
                <a
                  href="https://pandas.pydata.org/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Pandas Docs
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">Data to Viz:</span> A guide to finding the best data visualization
                for your dataset.
                <a
                  href="https://www.data-to-viz.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Data to Viz Website
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">Corey Schafer (YouTube):</span> Provides excellent, in-depth tutorials
                on Python libraries like Matplotlib and Seaborn.
                <a
                  href="https://youtu.be/bX2M5tQ0PGE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Matplotlib and Seaborn Tutorial
                  </span>
                </a>
              </li>
            </ul>

            <p className="font-bold text-lg mt-8 text-[#28ffd4]">Machine Learning & Deep Learning</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Google's Machine Learning Crash Course:</span> A fast-paced, practical
                introduction to machine learning concepts.
                <a
                  href="https://developers.google.com/machine-learning/crash-course"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Google's ML Crash Course
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">Scikit-learn User Guide:</span> The official documentation for the
                most popular ML library in Python.
                <a
                  href="https://scikit-learn.org/stable/tutorial/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Scikit-learn User Guide
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">TensorFlow and PyTorch Docs:</span> Official documentation for the
                two leading deep learning frameworks.
                <a
                  href="https://www.tensorflow.org/guide"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">TensorFlow Guide</span>
                </a>
                <a
                  href="https://pytorch.org/tutorials/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">PyTorch Tutorials</span>
                </a>
              </li>
            </ul>

            <p className="font-bold text-lg mt-8 text-[#28ffd4]">Hands-on Practice & Portfolio Building</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Kaggle:</span> The best platform for finding datasets, joining competitions, and
                building your portfolio.
                <a
                  href="https://www.kaggle.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">Kaggle (Website)</span>
                </a>
              </li>
              <li>
                <span className="font-bold">GitHub:</span> Essential for version control and showcasing your projects.
                <a
                  href="https://docs.github.com/en/get-started"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">GitHub Documentation</span>
                </a>
              </li>
              <li>
                <span className="font-bold">Google Colab:</span> A free online environment for Python and machine learning.
                <a
                  href="https://colab.research.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">Google Colab</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeFullResources}
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