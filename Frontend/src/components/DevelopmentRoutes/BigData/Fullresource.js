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
          Full Big Data Resources 📚
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Here is a comprehensive list of free resources that cover the entire Big Data development
            roadmap, from foundational skills to advanced topics and hands-on practice.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">Foundational Skills</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">freeCodeCamp.org:</span> Full courses on Python, Linux, and Git.
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
                <span className="font-bold">Mode Analytics SQL Tutorial:</span> An excellent, free guide to SQL.
                <a
                  href="https://mode.com/sql-tutorial/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Mode Analytics SQL Tutorial
                  </span>
                </a>
              </li>
            </ul>

            <p className="font-bold text-lg mt-8 text-[#28ffd4]">Big Data Frameworks</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Apache Hadoop Official Docs:</span> The authoritative source for Hadoop HDFS and MapReduce.
                <a
                  href="https://hadoop.apache.org/docs/current/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">Hadoop Docs</span>
                </a>
              </li>
              <li>
                <span className="font-bold">Apache Spark Official Docs:</span> Essential for mastering Spark Core, SQL, and Streaming.
                <a
                  href="https://spark.apache.org/docs/latest/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">Spark Docs</span>
                </a>
              </li>
              <li>
                <span className="font-bold">Apache Kafka Official Docs:</span> The go-to resource for learning real-time data streaming.
                <a
                  href="https://kafka.apache.org/documentation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">Kafka Docs</span>
                </a>
              </li>
              <li>
                <span className="font-bold">Apache Airflow Official Docs:</span> Learn how to build and manage data pipelines.
                <a
                  href="https://airflow.apache.org/docs/apache-airflow/stable/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">Airflow Docs</span>
                </a>
              </li>
            </ul>

            <p className="font-bold text-lg mt-8 text-[#28ffd4]">Cloud & Infrastructure</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Docker & Kubernetes Full Course:</span> A comprehensive video on containerization.
                <a
                  href="https://youtu.be/pve6yM_W-K4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Docker & K8s Course - freeCodeCamp
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">Google Cloud Training:</span> Provides free labs and tutorials for GCP's big data services.
                <a
                  href="https://cloud.google.com/training"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Google Cloud Training
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">Microsoft Learn:</span> Free learning paths for Azure big data services.
                <a
                  href="https://learn.microsoft.com/en-us/training/browse/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Microsoft Learn
                  </span>
                </a>
              </li>
            </ul>

            <p className="font-bold text-lg mt-8 text-[#28ffd4]">Advanced & Career Topics</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Data Engineering Salary Guide:</span> Insights on the career path and compensation.
                <a
                  href="https://www.coursera.org/in/articles/data-engineer-salary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Data Engineer Salary
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">MLOps Crash Course:</span> Learn how to manage ML models in production.
                <a
                  href="https://youtu.be/0-t3J4wD1eA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    MLOps Crash Course - Krish Naik
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">ProjectPro:</span> Offers tutorials and project ideas for big data.
                <a
                  href="https://www.projectpro.io/data-science-in-python-tutorial/mlops-python-tutorial-for-beginners"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    MLOps Python Tutorial
                  </span>
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