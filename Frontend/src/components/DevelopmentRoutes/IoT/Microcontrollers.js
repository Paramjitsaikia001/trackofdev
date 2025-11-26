import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function MicrocontrollersPage({ closeMicrocontrollers, Done }) {
  const Nexthandler = () => {
    Done();
    closeMicrocontrollers();
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
            onClick={closeMicrocontrollers}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 2: Microcontrollers & Hardware 🤖
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Microcontrollers are the "brains" of IoT devices. This is where you get hands-on
            with hardware, writing code that directly controls the physical world.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Hardware Platforms:</span> Start with an easy-to-use platform like
                <span className="font-bold"> Arduino</span>, then move to more powerful, Wi-Fi-enabled boards like the <span className="font-bold">ESP32</span>.
              </li>
              <li>
                <span className="font-bold">Digital & Analog I/O:</span> Learn how to control digital pins (on/off) and
                read analog signals from sensors.
              </li>
              <li>
                <span className="font-bold">Communication Interfaces:</span> Understand core protocols for
                connecting components on a circuit board:
                <ul className="list-circle list-inside ml-5">
                  <li><span className="font-bold">I²C:</span> For communicating with multiple sensors.</li>
                  <li><span className="font-bold">SPI:</span> A faster protocol for displays and storage.</li>
                  <li><span className="font-bold">UART:</span> Used for serial communication to a computer.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Projects:</span> Build simple projects like blinking an LED, reading a temperature sensor, or controlling a motor.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.arduino.cc/en/Guide/HomePage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Arduino Official Guide
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/Xy9XfBq-a1U"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    ESP32 Beginner's Guide - Random Nerd Tutorials
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://learn.sparkfun.com/tutorials/electronics-for-beginners/all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Electronics for Beginners - SparkFun
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeMicrocontrollers}
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