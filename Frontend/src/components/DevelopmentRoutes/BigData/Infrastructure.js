import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function InfrastructurePage({ closeInfrastructure, Done }) {
  const Nexthandler = () => {
    Done();
    closeInfrastructure();
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
            onClick={closeInfrastructure}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 9: Infrastructure & Deployment 🏗️
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            To run your data pipelines and applications at scale, you need to understand the
            underlying infrastructure. This stage focuses on modern practices for packaging,
            deploying, and managing your code and resources.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Containers (Docker):</span> Learn how to package your application and its dependencies
                into a single, portable container using Docker.
              </li>
              <li>
                <span className="font-bold">Orchestration (Kubernetes):</span> Master Kubernetes to automatically deploy, scale,
                and manage your containerized applications.
              </li>
              <li>
                <span className="font-bold">Infrastructure as Code (IaC):</span> Learn to provision and manage your cloud
                infrastructure using code, with a tool like <span className="font-bold">Terraform</span>, for reproducible and scalable
                deployments.
              </li>
              <li>
                <span className="font-bold">Resource Managers:</span> Understand how big data frameworks use resource managers
                like YARN or Kubernetes to allocate resources on a cluster.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/pve6yM_W-K4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Docker & Kubernetes Full Course - freeCodeCamp
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/T4n0xJ-W_80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Terraform Course for Beginners - freeCodeCamp
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.coursera.org/learn/ibm-containers-docker-kubernetes-openshift"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Containers w/ Docker, Kubernetes & OpenShift (Coursera)
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeInfrastructure}
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