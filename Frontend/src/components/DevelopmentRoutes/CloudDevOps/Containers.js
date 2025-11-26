import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function Containers({ closeContainers, Done }) {
  const [isFullScreen, setFullScreen] = useState(false);

  const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

  const Nexthandler = () => {
    Done();
    closeContainers();
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
            onClick={closeContainers}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Containerization & Orchestration
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Containers package applications and their dependencies, while
            orchestration tools manage and scale them. **Docker** and
            **Kubernetes** are the undisputed leaders in this space.
          </p>

          {/* Learning list */}
          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Docker:</span> Learn to write
                `Dockerfile`s, build images, and manage containers.
              </li>
              <li>
                <span className="font-bold">Kubernetes:</span> Understand core
                concepts like Pods, Deployments, Services, and Namespaces.
              </li>
              <li>
                <span className="font-bold">Helm:</span> Use Helm to package and
                deploy applications on Kubernetes.
              </li>
            </ul>

            <p className="font-bold">Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">
                  doc
                </span>
                <a
                  href="https://docs.docker.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Docker Documentation
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://www.youtube.com/watch?v=X48VuDVv09A"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    FreeCodeCamp - Kubernetes Course
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={closeContainers}
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