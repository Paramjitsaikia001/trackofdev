import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function OrchestrationPage({ closeOrchestration, Done }) {
  const Nexthandler = () => {
    Done();
    closeOrchestration();
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
            onClick={closeOrchestration}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 8: Orchestration & Pipelines (Airflow) ⚙️
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            As your data workflows become more complex, you need a way to automate, schedule, and
            monitor them. <span className="text-[#23daff] font-bold">Orchestration tools</span> like Apache Airflow
            are a data engineer's best friend for this task.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Apache Airflow:</span> Understand the core concepts:
                <ul className="list-circle list-inside ml-5">
                  <li><span className="font-bold">DAGs (Directed Acyclic Graphs):</span> The workflow you define.</li>
                  <li><span className="font-bold">Operators:</span> The individual tasks in your workflow.</li>
                  <li><span className="font-bold">Scheduler:</span> The component that triggers your workflows.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Pipeline Design:</span> Learn best practices for building robust and
                idempotent (repeatable) data pipelines.
              </li>
              <li>
                <span className="font-bold">CI/CD:</span> Learn how to integrate your data pipelines into a continuous
                integration/continuous delivery system for automated testing and deployment.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://airflow.apache.org/docs/apache-airflow/stable/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Apache Airflow Official Documentation
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/A622-c3aXzU"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Apache Airflow Full Course - freeCodeCamp
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.projectpro.io/article/airflow-tutorial-on-how-to-use-apache-airflow/920"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Airflow Tutorial for Beginners - ProjectPro
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeOrchestration}
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