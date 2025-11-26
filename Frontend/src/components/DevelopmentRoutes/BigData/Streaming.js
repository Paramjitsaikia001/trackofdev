import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function StreamingPage({ closeStreaming, Done }) {
  const Nexthandler = () => {
    Done();
    closeStreaming();
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
            onClick={closeStreaming}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 6: Streaming & Messaging (Kafka) 🌊
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Modern applications require real-time analytics. This is where <span className="text-[#23daff] font-bold">stream processing</span>
            comes in, allowing you to process data as it is generated. <span className="font-bold">Apache Kafka</span> is the
            industry-leading platform for handling this high-velocity data.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Kafka Basics:</span> Understand the core architecture: brokers, topics,
                producers (that send messages), and consumers (that read messages).
              </li>
              <li>
                <span className="font-bold">Producers & Consumers:</span> Learn to build and configure applications that
                read from and write to Kafka topics.
              </li>
              <li>
                <span className="font-bold">Connect & Streams:</span> Explore how Kafka Connect simplifies integrating
                databases and other systems, and how Kafka Streams is used for real-time data transformation.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://developer.confluent.io/learn-kafka/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Confluent Developer Kafka Tutorials
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/i7F11wE9q34"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Apache Kafka Full Course - freeCodeCamp
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.datacamp.com/tutorial/apache-kafka-for-beginners-a-comprehensive-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Apache Kafka for Beginners - DataCamp
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeStreaming}
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