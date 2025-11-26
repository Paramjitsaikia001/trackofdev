import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function CareerPage({ closeCareer, Done }) {
  const Nexthandler = () => {
    Done();
    closeCareer();
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
          <span

                                  className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"

                                  onClick={fullscreenHandler}

                              >

            {getFullscreenIconName(isFullScreen)}

                              </span>
          <span
            onClick={closeCareer}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 15: Career & Scaling Moves 📈
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            You have the skills, the projects, and the knowledge. This final stage is about
            transitioning from learning to a career and thinking about scaling your skills to a
            professional level.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">Career & Salary Insights:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Job Titles:</span> Common roles include Data Engineer, Big Data
                Developer, and Data Architect.
              </li>
              <li>
                <span className="font-bold">Average Salary:</span> As of 2025, the average salary for a data engineer
                in India is approximately ₹9.6 L. With 5-9 years of experience, this can grow to
                ₹10-20 L per year.
              </li>
              <li>
                <span className="font-bold">Resume Tips:</span> Your projects and skills matter more than
                degrees. Highlight your ability to build end-to-end pipelines.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Advanced Concepts:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Cost Optimization:</span> Learn how to manage costs on cloud
                platforms by choosing the right instance types and services.
              </li>
              <li>
                <span className="font-bold">Multi-Cluster & Multi-Region Architectures:</span> Understand how to
                design systems that are robust, highly available, and can handle a global scale.
              </li>
              <li>
                <span className="font-bold">SLAs & Runbooks:</span> Learn to define and monitor Service Level
                Agreements (SLAs) for your pipelines and create "runbooks" for automated issue resolution.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.coursera.org/in/articles/data-engineer-salary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Data Engineering Salary Guide - Coursera
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/kC6E86TfN7M"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Big Data Architect Career - TechLead
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.coursera.org/articles/big-data-architecture"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Big Data Architecture Explained - Coursera
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeCareer}
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