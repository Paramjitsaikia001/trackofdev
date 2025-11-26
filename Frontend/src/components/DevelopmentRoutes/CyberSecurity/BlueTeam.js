import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function BlueTeamPage({ closeBlueTeam, Done }) {
  const Nexthandler = () => {
    Done();
    closeBlueTeam();
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
            onClick={closeBlueTeam}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 6: Learn Defense (Blue Team Basics)
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            The Blue Team's role is to defend against attacks. This is often seen as a more challenging
            and rewarding path, as it requires a deep understanding of how systems are supposed to
            work. This step focuses on monitoring, logging, and incident response.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Threat Detection:</span> How to identify signs of an attack.
              </li>
              <li>
                <span className="font-bold">Log Analysis:</span> Understanding what logs are and how to
                read them for suspicious activity (e.g., failed logins, new processes).
              </li>
              <li>
                <span className="font-bold">SIEM (Security Information and Event Management):</span>
                Learn how a SIEM works to collect and analyze logs from many sources.
              </li>
              <li>
                <span className="font-bold">Incident Response:</span> The process of handling a security breach.
              </li>
              <li>
                <span className="font-bold">Network Traffic Analysis:</span> Deeper analysis of packets
                to detect malicious activity.
              </li>
            </ul>

            <p className="font-bold">Popular Tools:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Sysmon:</span> A Windows service that monitors and logs activity
                for detailed analysis.
              </li>
              <li>
                <span className="font-bold">Wireshark:</span> For network packet analysis.
              </li>
              <li>
                <span className="font-bold">Wazuh:</span> A free and open-source SIEM that helps you collect,
                analyze, and manage logs.
              </li>
              <li>
                <span className="font-bold">The ELK Stack (Elasticsearch, Logstash, Kibana):</span> A
                powerful suite for centralized logging and visualization.
              </li>
              <li>
                <span className="font-bold">Zeek:</span> A powerful network analysis framework.
              </li>
            </ul>

            <p className="font-bold">Resources to Learn Blue Team Basics:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/rNqf-u9iO7k"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    What is a SOC Analyst? - John Hammond
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/Bq_18_f-b6Y"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Getting Started with Wazuh - David Bombal
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.elastic.co/what-is/elk-stack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Introduction to the ELK Stack</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeBlueTeam}
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