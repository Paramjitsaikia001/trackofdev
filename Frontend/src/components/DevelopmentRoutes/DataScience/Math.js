import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function MathPage({ closeMath, Done }) {
  const Nexthandler = () => {
    Done();
    closeMath();
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
            onClick={closeMath}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 2: Understand Math & Stats 📈
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Data science is not just about writing code; it's about understanding the "why" behind the
            algorithms. A solid grasp of <span className="text-[#23daff] font-bold">mathematics and statistics</span>
            is essential for interpreting data, building effective models, and avoiding common pitfalls.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">Key Concepts to Master:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Statistics:</span>
                <ul className="list-circle list-inside ml-5">
                  <li><span className="font-bold">Descriptive Stats:</span> Mean, median, mode, variance, and standard deviation.</li>
                  <li><span className="font-bold">Inferential Stats:</span> Hypothesis testing, p-values, and confidence intervals.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Linear Algebra:</span> Vectors, matrices, and their operations are fundamental to how machine learning
                algorithms process and transform data.
              </li>
              <li>
                <span className="font-bold">Probability:</span> Learn about distributions (e.g., normal, Poisson), Bayes' theorem, and conditional probability.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/Vj5C-F-1_mI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Probability and Statistics Full Course - freeCodeCamp.org
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.khanacademy.org/math/statistics-probability"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Khan Academy: Statistics and Probability
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://docs.scipy.org/doc/scipy/reference/linalg.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">SciPy Linear Algebra Documentation</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeMath}
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