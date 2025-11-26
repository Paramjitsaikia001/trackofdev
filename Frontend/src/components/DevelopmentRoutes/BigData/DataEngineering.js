import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function DataEngineeringPage({ closeDataEngineering, Done }) {
  const Nexthandler = () => {
    Done();
    closeDataEngineering();
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
            onClick={closeDataEngineering}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 2: Data Engineering Basics 🧬
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Data engineering is about building robust systems and pipelines that get data from
            point A to point B. This stage focuses on the core principles of data modeling and
            formats, which are critical for building efficient pipelines.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">ETL vs. ELT:</span> Understand the difference between
                Extract, Transform, Load and the more modern Extract, Load, Transform.
              </li>
              <li>
                <span className="font-bold">Data Modeling:</span> Learn how to organize data. Concepts like
                relational schemas, normalization, and dimensional modeling are crucial.
              </li>
              <li>
                <span className="font-bold">OLTP vs. OLAP:</span> Understand the difference between Online Transactional
                Processing (e.g., a bank transaction) and Online Analytical Processing (e.g., business intelligence reports).
              </li>
              <li>
                <span className="font-bold">Data Formats:</span> Get familiar with formats like CSV, JSON, and
                binary formats like Avro and Parquet, which are highly optimized for big data.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/D2_95u5-Dq0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Intro to Data Engineering - freeCodeCamp
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/D6e_E02Jq2Q"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Data Engineering Concepts in 10 Minutes - Seattle Data Guy
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://coursera.org/learn/introduction-to-data-engineering"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Introduction to Data Engineering (Coursera)
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeDataEngineering}
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