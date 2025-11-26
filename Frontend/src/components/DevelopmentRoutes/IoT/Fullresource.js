import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function Fullresource({ closeFullResources, Done }) {
  const Nexthandler = () => {
    Done();
    closeFullResources();
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
            onClick={closeFullResources}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Full IoT Resources 📚
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Here is a comprehensive list of free resources that cover the entire IoT development
            roadmap, from foundational skills to advanced topics and hands-on projects.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">Foundational Skills & Hardware</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">freeCodeCamp.org:</span> Offers full courses on C++, Python, Linux, and more.
                <a
                  href="https://youtu.be/zR5M7F6gU8I"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Python Full Course
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">SparkFun Electronics:</span> Provides free tutorials and guides for electronics basics and popular microcontrollers like Arduino and ESP32.
                <a
                  href="https://learn.sparkfun.com/tutorials"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    SparkFun Tutorials
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">Arduino Official Documentation:</span> The definitive guide for getting started with Arduino.
                <a
                  href="https://www.arduino.cc/en/docs/getting-started"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Arduino Docs
                  </span>
                </a>
              </li>
            </ul>

            <p className="font-bold text-lg mt-8 text-[#28ffd4]">Communication & Connectivity</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Confluent Developer Kafka Tutorials:</span> Excellent free tutorials for learning Apache Kafka, a key tool for IoT data streams.
                <a
                  href="https://developer.confluent.io/learn-kafka/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Confluent Kafka Tutorials
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">Eclipse Mosquitto:</span> A popular open-source MQTT broker.
                <a
                  href="https://mosquitto.org/documentation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Mosquitto Documentation
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">AWS IoT Device SDK Documentation:</span> A great resource for securely connecting devices to the cloud.
                <a
                  href="https://aws.github.io/aws-iot-device-sdk-cpp/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    AWS IoT Device SDK
                  </span>
                </a>
              </li>
            </ul>

            <p className="font-bold text-lg mt-8 text-[#28ffd4]">IoT Cloud, Analytics, & Edge</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Grafana:</span> The leading open-source platform for visualizing time-series data.
                <a
                  href="https://youtu.be/kC6E86TfN7M"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Grafana Dashboard Tutorial (YouTube)
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">Edge Impulse:</span> A platform for building and deploying ML models on embedded devices.
                <a
                  href="https://www.edgeimpulse.com/tutorials"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Edge Impulse Tutorials
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">InfluxDB:</span> A time-series database optimized for IoT data.
                <a
                  href="https://www.influxdata.com/learn/getting-started-with-influxdb/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Getting Started with InfluxDB
                  </span>
                </a>
              </li>
            </ul>

            <p className="font-bold text-lg mt-8 text-[#28ffd4]">Projects & Career</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">IoT Design Pro Projects:</span> Provides tutorials and project ideas for a strong portfolio.
                <a
                  href="https://iotdesignpro.com/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    IoT Design Pro Projects
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">GitHub:</span> The best place to host your project code.
                <a
                  href="https://www.github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    GitHub
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">How to Become an IoT Developer:</span> A comprehensive career guide.
                <a
                  href="https://www.coursera.org/articles/how-to-become-an-iot-developer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Coursera Career Guide
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeFullResources}
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