import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function RedTeamPage({ closeRedTeam, Done }) {
  const Nexthandler = () => {
    Done();
    closeRedTeam();
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
            onClick={closeRedTeam}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 5: Learn Common Attacks (Red Team Basics)
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            The Red Team's job is to think like an attacker to find vulnerabilities and weaknesses in a
            system. This step introduces you to some of the most common attacks used today. Your goal is
            to not only execute the attack but also understand how it works and, most importantly, how to
            fix it.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Web Attacks:</span> Focus on the OWASP Top 10 vulnerabilities.
                <ul className="list-circle list-inside ml-5">
                  <li><span className="font-bold">SQL Injection (SQLi):</span> Manipulating a database via web input.</li>
                  <li><span className="font-bold">Cross-Site Scripting (XSS):</span> Injecting malicious scripts into a website.</li>
                  <li><span className="font-bold">Broken Authentication:</span> Exploiting weak login systems.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Network Scanning:</span> Discovering open ports and services on a network.
              </li>
              <li>
                <span className="font-bold">Vulnerability Scanning:</span> Using automated tools to find common flaws.
              </li>
            </ul>

            <p className="font-bold">Popular Tools:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Burp Suite Community Edition:</span> The standard tool for
                web penetration testing, used to intercept and modify HTTP/S traffic.
              </li>
              <li>
                <span className="font-bold">Nmap (Network Mapper):</span> A powerful tool for network discovery and
                security auditing.
              </li>
              <li>
                <span className="font-bold">sqlmap:</span> An open-source penetration testing tool that automates
                the process of detecting and exploiting SQL injection flaws.
              </li>
              <li>
                <span className="font-bold">Metasploit Framework:</span> A tool for developing and executing
                exploit code.
              </li>
            </ul>

            <p className="font-bold">Resources to Learn Red Team Basics:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://owasp.org/www-project-top-ten/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">OWASP Top 10</span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://portswigger.net/burp/documentation/community"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Burp Suite Documentation</span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/A2h_81tK2nQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    SQL Injection Lab - The Cyber Mentor
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/s5L34T3tO24"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Nmap Crash Course - Network Chuck
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeRedTeam}
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