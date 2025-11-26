import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function BatchProcessingPage({ closeBatchProcessing, Done }) {
  const Nexthandler = () => {
    Done();
    closeBatchProcessing();
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

            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden" onClick={fullscreenHandler}
          >
            {getFullscreenIconName(isFullScreen)}
          </span>
          <span
            onClick={closeBatchProcessing}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 4: Batch Processing (Hadoop) 📦
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Batch processing is about analyzing large volumes of data that have been collected
            over time. The foundational framework for this is Hadoop's <span className="text-[#23daff] font-bold">MapReduce</span>,
            which divides a large problem into smaller tasks that can be processed in parallel across
            a cluster of computers.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">MapReduce Concepts:</span> Understand the "Map" phase (splitting and processing
                data) and the "Reduce" phase (aggregating the results).
              </li>
              <li>
                <span className="font-bold">YARN (Yet Another Resource Negotiator):</span> Learn how YARN acts
                as Hadoop's operating system, managing resources and scheduling jobs.
              </li>
              <li>
                <span className="font-bold">Job Execution:</span> Learn to run a simple word count or other
                classic MapReduce-style jobs to solidify your understanding.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.projectpro.io/hadoop-tutorial/hadoop-mapreduce-tutorial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Hadoop MapReduce Tutorial - ProjectPro
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/pXzYf4f6T5k"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    MapReduce Tutorial with Python - The Big Data Guy
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    MapReduce Official Tutorial
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeBatchProcessing}
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