import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function CapstonePage({ closeCapstone, Done }) {
  const Nexthandler = () => {
    Done();
    closeCapstone();
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
            onClick={closeCapstone}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 14: Capstone Projects (Portfolio) 🚀
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Your portfolio is your resume in the world of big data. It's the tangible proof of your
            skills and a record of your ability to solve real-world problems. This stage is all about
            building and publishing end-to-end projects.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">Project Ideas:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Batch ETL Pipeline:</span> Build a pipeline that takes a large
                dataset, processes it using a batch job (e.g., Spark), stores it in a data lake
                (like S3), and loads it into a data warehouse for analysis.
              </li>
              <li>
                <span className="font-bold">Streaming Pipeline:</span> Create a real-time data pipeline. Use
                a producer to send data (e.g., simulated sensor data) to Kafka, process it with
                Spark Structured Streaming, and store the results in a serving store.
              </li>
              <li>
                <span className="font-bold">Cloud-Native Solution:</span> Implement an end-to-end pipeline
                using only managed cloud services (e.g., Kinesis for streaming, EMR for processing,
                and Redshift for warehousing on AWS).
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.datacamp.com/blog/data-analytics-projects-all-levels"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    End-to-End Project Ideas - DataCamp
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/qJ3_eS6xL60"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Big Data Project Walkthrough - Alex The Analyst
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    GitHub (Project Hosting)
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeCapstone}
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