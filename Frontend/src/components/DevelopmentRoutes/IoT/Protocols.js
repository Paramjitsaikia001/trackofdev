import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function ProtocolsPage({ closeProtocols, Done }) {
  const Nexthandler = () => {
    Done();
    closeProtocols();
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
            onClick={closeProtocols}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 4: Communication Protocols 🗣️
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            The world of IoT is held together by communication protocols. This stage is about
            understanding the different ways devices talk to each other and to the internet,
            based on factors like range, power consumption, and data transfer rate.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Short-Range Protocols:</span>
                <ul className="list-circle list-inside ml-5">
                  <li><span className="font-bold">Bluetooth & BLE (Bluetooth Low Energy):</span> For low-power communication to smartphones.</li>
                  <li><span className="font-bold">ZigBee:</span> A mesh network protocol for smart home devices.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Long-Range Protocols:</span>
                <ul className="list-circle list-inside ml-5">
                  <li><span className="font-bold">Wi-Fi:</span> High bandwidth, but high power consumption.</li>
                  <li><span className="font-bold">LoRaWAN:</span> Low-power, long-range protocol for wide-area IoT networks.</li>
                  <li><span className="font-bold">NB-IoT & LTE-M:</span> Cellular technologies for IoT.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Messaging Protocols:</span>
                <ul className="list-circle list-inside ml-5">
                  <li><span className="font-bold">MQTT:</span> The de-facto standard for IoT messaging. Learn about its publish/subscribe model.</li>
                  <li><span className="font-bold">HTTP/REST:</span> Simple, but can be inefficient for constrained devices.</li>
                </ul>
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.balena.io/docs/learn/iot-protocols/iot-protocols/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    IoT Protocols Explained - Balena
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/kLg3e6l5p0o"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    MQTT Protocol Full Course - freeCodeCamp
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.digi.com/blog/iot-network-protocols"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Guide to IoT Network Protocols - Digi
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeProtocols}
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