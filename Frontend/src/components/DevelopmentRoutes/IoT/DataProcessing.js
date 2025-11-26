import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function DataProcessingPage({ closeDataProcessing, Done }) {
  const Nexthandler = () => {
    Done();
    closeDataProcessing();
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
            onClick={closeDataProcessing}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 8: Data Processing & Analytics 📊
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Once you've collected data from your devices, you need a way to store, process, and
            analyze it. This stage focuses on the backend systems that handle the data pipeline
            from ingestion to visualization.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Stream Processing:</span> Use frameworks like <span className="font-bold">Apache Spark Streaming</span> or
                <span className="font-bold"> Apache Kafka Streams</span> to process real-time data as it arrives.
              </li>
              <li>
                <span className="font-bold">Time-Series Databases:</span> Learn to use specialized databases
                like <span className="font-bold">InfluxDB</span> or <span className="font-bold">TimescaleDB</span>, which are optimized for storing and querying
                time-stamped data from sensors.
              </li>
              <li>
                <span className="font-bold">Data Warehouses:</span> Learn to use data warehouses (e.g., Google BigQuery)
                for large-scale analytical queries.
              </li>
              <li>
                <span className="font-bold">Visualization:</span> Connect your data to tools like <span className="font-bold">Grafana</span>, <span className="font-bold">Power BI</span>, or
                <span className="font-bold"> Tableau</span> to create dashboards and reports.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.influxdata.com/products/influxdb-cloud-free/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    InfluxDB Cloud (Free Tier)
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
                  href="https://grafana.com/tutorials/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Grafana Tutorials</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeDataProcessing}
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