import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function CloudPlatformsPage({ closeCloudPlatforms, Done }) {
  const Nexthandler = () => {
    Done();
    closeCloudPlatforms();
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
            onClick={closeCloudPlatforms}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 7: IoT Cloud Platforms ☁️
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            To build a scalable and robust IoT solution, you need a cloud platform to manage
            your devices, ingest data, and process it. These platforms handle the complexities
            of device provisioning, security, and messaging at a massive scale.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Device Provisioning:</span> Learn how to securely onboard a new device to your cloud account.
              </li>
              <li>
                <span className="font-bold">Device Management:</span> Use services like <span className="font-bold">AWS IoT Device Management</span> or
                <span className="font-bold"> Azure IoT Device Provisioning Service</span> to manage and monitor a fleet of devices.
              </li>
              <li>
                <span className="font-bold">Authentication & Messaging:</span> Understand how devices authenticate securely and
                send data via message brokers.
              </li>
              <li>
                <span className="font-bold">Device Shadow:</span> Learn how device shadows can store the last reported state of a device,
                even when it's offline.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://aws.amazon.com/iot-core/getting-started/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    AWS IoT Core Getting Started
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-iot-hub-intro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Azure IoT Hub Documentation</span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/P5z7-oHh220"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Intro to AWS IoT Core - James Bruton
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeCloudPlatforms}
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