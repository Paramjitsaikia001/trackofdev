import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function DistributedProcessingPage({ closeDistributedProcessing, Done }) {
  const Nexthandler = () => {
    Done();
    closeDistributedProcessing();
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
            onClick={closeDistributedProcessing}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 5: Distributed Processing (Spark) ✨
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            While Hadoop is the foundation, <span className="text-[#23daff] font-bold">Apache Spark</span> is the
            modern workhorse of big data. It's significantly faster than MapReduce, thanks to its
            in-memory processing. You'll spend most of your time as a data engineer working with Spark.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Spark Core & RDDs:</span> Understand the core architecture and the Resilient
                Distributed Dataset (RDD), the fundamental data structure of Spark.
              </li>
              <li>
                <span className="font-bold">DataFrame API:</span> This is what you'll use daily. Learn how to
                manipulate structured data in Spark using DataFrames, similar to Pandas.
              </li>
              <li>
                <span className="font-bold">Spark SQL:</span> Run SQL queries on data stored in Spark.
              </li>
              <li>
                <span className="font-bold">Spark Streaming:</span> Learn how to process real-time data with
                Spark, a more advanced but crucial skill.
              </li>
              <li>
                <span className="font-bold">Performance Tuning:</span> Master concepts like partitioning, caching,
                and joins to optimize your Spark jobs for speed and efficiency.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://spark.apache.org/docs/latest/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Apache Spark Official Documentation
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/0k2f-e8b9sA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Apache Spark Full Course - freeCodeCamp
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.mygreatlearning.com/pyspark/free-courses"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    PySpark Free Courses - Great Learning
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeDistributedProcessing}
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