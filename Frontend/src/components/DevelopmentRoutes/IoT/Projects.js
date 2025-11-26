import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function ProjectsPage({ closeProjects, Done }) {
  const Nexthandler = () => {
    Done();
    closeProjects();
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
            onClick={closeProjects}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 12: Projects (Portfolio) 🚀
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Your portfolio is your resume in the world of IoT. It's the tangible proof of your
            skills and a record of your ability to build an end-to-end solution. This stage is all about
            building and publishing comprehensive projects.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">Project Ideas:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Smart Home Automation:</span> Use an ESP32 to control
                lights or appliances with a relay, and create a mobile app or web dashboard to control them.
              </li>
              <li>
                <span className="font-bold">Environmental Monitoring System:</span> Use sensors (e.g., DHT11 for
                temperature/humidity) with an ESP32. Send the data via MQTT to a cloud service and visualize
                it in a Grafana dashboard.
              </li>
              <li>
                <span className="font-bold">Wearable Health Tracker:</span> Build a simple wearable with an
                accelerometer and a Bluetooth Low Energy (BLE) module. Create a mobile app to collect and
                visualize the movement data.
              </li>
              <li>
                <span className="font-bold">Edge AI Project:</span> Use a camera and TensorFlow Lite on an
                ESP32 to detect and count objects (e.g., cars or people).
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://iotdesignpro.com/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    IoT Design Pro Projects
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/k1FfWlU_9yY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Build a Smart Home System - Dr. D-Flo
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
            onClick={closeProjects}
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