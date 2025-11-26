import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function ObservabilityPage({ closeObservability, Done }) {
  const Nexthandler = () => {
    Done();
    closeObservability();
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
            onClick={closeObservability}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 12: Observability & Performance 👁️
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Building a data pipeline is one thing; ensuring it's reliable, fast, and always running
            is another. <span className="text-[#23daff] font-bold">Data observability</span> gives you the ability to
            monitor the health of your pipelines and debug issues proactively.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Data Quality:</span> Learn to validate your data at every step.
                Tools like <span className="font-bold">Great Expectations</span> help automate this.
              </li>
              <li>
                <span className="font-bold">Monitoring & Alerting:</span> Understand how to collect metrics (e.g., job
                run time, data volume) and set up alerts for when something goes wrong.
              </li>
              <li>
                <span className="font-bold">Logging:</span> Learn best practices for logging to help in debugging.
              </li>
              <li>
                <span className="font-bold">Performance Tuning:</span> Go deeper on topics like partition tuning and
                shuffle management to make your big data jobs run faster.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.decube.io/post/open-source-data-observability"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Open Source Data Observability Tools
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/k6mJ06L2yLw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Data Observability Explained - Databricks
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://docs.greatexpectations.io/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Great Expectations Documentation
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeObservability}
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