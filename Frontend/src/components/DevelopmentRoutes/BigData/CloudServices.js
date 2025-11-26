import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function CloudServicesPage({ closeCloudServices, Done }) {
  const Nexthandler = () => {
    Done();
    closeCloudServices();
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
            onClick={closeCloudServices}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 10: Cloud Managed Services ☁️
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            While open-source tools are essential for understanding the fundamentals, most
            companies today use <span className="text-[#23daff] font-bold">cloud managed services</span>. These platforms
            handle the infrastructure and cluster management for you, so you can focus on building
            pipelines.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">AWS Big Data Services:</span> Learn services like <span className="font-bold">Amazon EMR</span> (for
                Hadoop/Spark), <span className="font-bold">Kinesis</span> (for streaming), and <span className="font-bold">Glue</span> (for ETL).
              </li>
              <li>
                <span className="font-bold">Google Cloud Platform (GCP) Services:</span> Explore
                <span className="font-bold"> BigQuery</span> (a serverless data warehouse), <span className="font-bold">Dataflow</span> (for streaming),
                and <span className="font-bold">Dataproc</span> (for Hadoop/Spark clusters).
              </li>
              <li>
                <span className="font-bold">Microsoft Azure Services:</span> Get familiar with
                <span className="font-bold"> Azure Databricks</span> (a unified analytics platform) and <span className="font-bold">Azure Synapse Analytics</span>.
              </li>
              <li>
                <span className="font-bold">Cost & Security:</span> Understand how to manage costs and
                implement security best practices using cloud Identity and Access Management (IAM).
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.mygreatlearning.com/aws/free-courses"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Free AWS Courses - Great Learning
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://cloud.google.com/training"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Google Cloud Training
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://learn.microsoft.com/en-us/training/browse/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Microsoft Learn
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeCloudServices}
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