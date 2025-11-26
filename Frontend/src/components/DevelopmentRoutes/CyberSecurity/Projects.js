import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function ProjectsPage({ closeProjects, Done }) {
  const Nexthandler = () => {
    Done();
    closeProjects();
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
            onClick={closeProjects}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 8: Projects to Prove Skills
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Knowledge is only valuable if you can apply it. Cybersecurity is a hands-on field, and
            projects are the best way to demonstrate your abilities to potential employers. Projects
            also help you solidify your understanding and troubleshoot real-world problems.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">Project Ideas:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Build a Simple Port Scanner:</span> Use Python to write a tool that
                scans a host for open ports. This proves your networking and basic programming skills.
              </li>
              <li>
                <span className="font-bold">Perform a Penetration Test on Your Lab:</span> Use your Kali Linux VM
                to find vulnerabilities in a target VM and write a professional report detailing your findings
                and remediation steps.
              </li>
              <li>
                <span className="font-bold">Set up a SIEM:</span> Install and configure Wazuh or the ELK stack
                in your lab. Forward logs from a target machine to the SIEM and create alerts for
                suspicious activity (e.g., three failed login attempts).
              </li>
              <li>
                <span className="font-bold">Secure a Sample Web Application:</span> Take a vulnerable web app
                (or a simple one you build yourself) and implement security fixes like input validation,
                Cross-Site Request Forgery (CSRF) protection, and HTTP security headers.
              </li>
              <li>
                <span className="font-bold">CTF Walkthroughs on a Blog:</span> For each beginner-level CTF
                (Capture The Flag) challenge you solve on platforms like TryHackMe, write a detailed
                blog post explaining your process.
              </li>
            </ul>

            <p className="font-bold">Resources for Project Ideas:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/tM-oQkLp9G0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Python Port Scanner - John Hammond
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/o31p831m7Cg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    How to Write a Pentest Report - The Hacker Lab
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://tryhackme.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">TryHackMe (Hands-on Labs)</span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.hackthebox.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Hack The Box (Hands-on Labs)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeProjects}
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