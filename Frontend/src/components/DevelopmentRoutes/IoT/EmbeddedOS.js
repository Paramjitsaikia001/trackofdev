import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function EmbeddedOSPage({ closeEmbeddedOS, Done }) {
  const Nexthandler = () => {
    Done();
    closeEmbeddedOS();
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
            onClick={closeEmbeddedOS}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 6: Embedded OS & RTOS 🧠
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            For more complex IoT devices, you'll need an operating system designed for them.
            A <span className="text-[#23daff] font-bold">Real-Time Operating System (RTOS)</span> is crucial for applications that
            require predictable timing, such as motor control or critical sensor monitoring.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">RTOS Concepts:</span> Understand core concepts like tasks,
                scheduling, interrupts, and power management to create efficient, low-power devices.
              </li>
              <li>
                <span className="font-bold">FreeRTOS:</span> The most popular open-source RTOS. Learn how to
                create tasks and manage their execution on a microcontroller.
              </li>
              <li>
                <span className="font-bold">Zephyr:</span> A new, modern RTOS with strong community and industry
                support, gaining popularity for its modular design and security features.
              </li>
              <li>
                <span className="font-bold">Multitasking:</span> Learn how to run multiple functions simultaneously
                on a single microcontroller core without complex `if-else` loops.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/S4-2eL5m5a8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    FreeRTOS Course for STM32 - FastBit Embedded Brains
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://docs.zephyrproject.org/latest/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Zephyr Project Documentation</span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.coursera.org/learn/introduction-to-iot-and-embedded-systems"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Introduction to IoT and Embedded Systems (Coursera)
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeEmbeddedOS}
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