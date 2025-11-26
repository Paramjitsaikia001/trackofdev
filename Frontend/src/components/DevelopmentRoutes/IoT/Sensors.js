import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function SensorsPage({ closeSensors, Done }) {
  const Nexthandler = () => {
    Done();
    closeSensors();
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
            onClick={closeSensors}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 3: Sensors & Actuators 📡
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Sensors and actuators are the "eyes, ears, and hands" of IoT devices. This stage
            involves connecting your microcontroller to components that can measure the environment
            (sensors) and perform actions (actuators).
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Common Sensors:</span> Work with standard sensors like the
                <span className="font-bold"> DHT11/22</span> (temperature/humidity), <span className="font-bold">PIR</span> (motion), and
                <span className="font-bold"> ultrasonic sensors</span> (distance).
              </li>
              <li>
                <span className="font-bold">Actuators:</span> Learn to control actuators that affect the real world,
                such as <span className="font-bold">relays</span> (to switch on/off appliances), <span className="font-bold">motors</span>, and buzzers.
              </li>
              <li>
                <span className="font-bold">Signal Conditioning:</span> Understand the basics of converting sensor output
                into a clean, usable signal for your microcontroller.
              </li>
              <li>
                <span className="font-bold">Projects:</span> Build projects that combine both sensors and actuators,
                like a motion-activated light or a fan that turns on based on temperature.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.circuitbasics.com/arduino-sensors-tutorial/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Arduino Sensors Tutorial - Circuit Basics
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/mF1m4Q2_E3U"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    10 Arduino Sensor Projects - Random Nerd Tutorials
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.adafruit.com/category/153"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Adafruit Learning System (Projects & Guides)
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeSensors}
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