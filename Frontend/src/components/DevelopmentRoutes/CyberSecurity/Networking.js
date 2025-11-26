import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function NetworkingPage({ closeNetworking, Done }) {
  const Nexthandler = () => {
    Done();
    closeNetworking();
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
            onClick={closeNetworking}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 2: Networking Basics
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Cybersecurity is all about protecting networks, so you must know how they work. This step
            covers the fundamental concepts of how devices communicate and data travels across the
            internet. Without a strong understanding of networking, you cannot defend or attack a
            system effectively.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">IP Addresses:</span> How devices are uniquely identified on a network.
              </li>
              <li>
                <span className="font-bold">DNS (Domain Name System):</span> The "phone book" of the internet that
                translates human-readable domain names into IP addresses.
              </li>
              <li>
                <span className="font-bold">OSI & TCP/IP Models:</span> Conceptual frameworks that explain how
                network communication works in layers.
              </li>
              <li>
                <span className="font-bold">Protocols:</span> HTTP, HTTPS, FTP, SSH, and how they are used.
              </li>
              <li>
                <span className="font-bold">Packet Analysis:</span> How to capture and inspect data packets
                traveling on a network.
              </li>
            </ul>

            <p className="font-bold">Tools to Practice:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Wireshark:</span> A network protocol analyzer to capture and
                inspect network traffic.
              </li>
              <li>
                <span className="font-bold">Command-line tools:</span>
                <ul className="list-circle list-inside ml-5">
                  <li><span className="font-bold">`ping`:</span> To test connectivity.</li>
                  <li><span className="font-bold">`traceroute` / `tracert`:</span> To map the path data takes.</li>
                  <li><span className="font-bold">`nslookup` / `dig`:</span> To query DNS servers.</li>
                  <li><span className="font-bold">`curl`:</span> To transfer data with URLs.</li>
                </ul>
              </li>
            </ul>

            <p className="font-bold">Resources to Learn Networking:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/P8b38k4K9tI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Networking Fundamentals Full Course - freeCodeCamp.org
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/3TjRk-lY-8k"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Wireshark for Beginners - Network Chuck
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.comptia.org/certifications/network"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">CompTIA Network+ Exam Objectives</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeNetworking}
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