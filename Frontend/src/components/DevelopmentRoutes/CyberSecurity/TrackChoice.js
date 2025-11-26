import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function TrackChoicePage({ closeTrackChoice, Done }) {
  const Nexthandler = () => {
    Done();
    closeTrackChoice();
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
            onClick={closeTrackChoice}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 7: Choose a Track
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            After building a foundational understanding of both attacking and defending, you're
            ready to choose a specialization. While it's good to be well-rounded, focusing on a
            specific track will help you build deep, job-ready skills.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">Cybersecurity Tracks:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Red Team / Ethical Hacking:</span>
                Focuses on proactively finding vulnerabilities in systems.
                <ul className="list-circle list-inside ml-5">
                  <li><span className="font-bold">Job Titles:</span> Penetration Tester, Ethical Hacker.</li>
                  <li><span className="font-bold">Focus on:</span> Exploitation, tool development, and reporting.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Blue Team / SOC Analyst:</span>
                Focuses on defending against attacks by monitoring systems, detecting threats, and
                responding to incidents.
                <ul className="list-circle list-inside ml-5">
                  <li><span className="font-bold">Job Titles:</span> Security Operations Center (SOC) Analyst, Threat Hunter.</li>
                  <li><span className="font-bold">Focus on:</span> Log analysis, SIEMs, and incident response.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">AppSec / DevSecOps:</span>
                Integrates security into the software development lifecycle.
                <ul className="list-circle list-inside ml-5">
                  <li><span className="font-bold">Job Titles:</span> Application Security Engineer, DevSecOps Engineer.</li>
                  <li><span className="font-bold">Focus on:</span> Secure coding practices, vulnerability scanning in CI/CD pipelines.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Cloud Security:</span>
                Securing cloud environments like AWS, Azure, and GCP.
                <ul className="list-circle list-inside ml-5">
                  <li><span className="font-bold">Job Titles:</span> Cloud Security Architect, Cloud Security Engineer.</li>
                  <li><span className="font-bold">Focus on:</span> Identity and Access Management (IAM), cloud-native security services.</li>
                </ul>
              </li>
            </ul>

            <p className="font-bold">Resources to Explore Tracks:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/lRsk1I9oWkY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Red Team vs Blue Team Explained - Black Hat Talk
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/s8nF-W8tTGo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    What is DevSecOps? - IBM Cloud
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/0-c_N4xH4sI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    What is Cloud Security? - Cyber V
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeTrackChoice}
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