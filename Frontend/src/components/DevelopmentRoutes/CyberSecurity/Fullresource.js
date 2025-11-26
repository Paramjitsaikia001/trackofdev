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
          Full Cybersecurity Resources
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Here is a comprehensive list of free resources that cover the entire cybersecurity roadmap,
            from foundational knowledge to hands-on practice and certifications.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg">General Learning & Foundational Concepts</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">freeCodeCamp.org:</span> Offers full, free video courses
                on Cybersecurity, Networking, and Linux. A perfect starting point for beginners.
                <a
                  href="https://youtu.be/zR5M7F6gU8I"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Cybersecurity Full Course
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">Professor Messer:</span> Provides free, high-quality
                video courses for CompTIA certifications, which are an excellent foundation.
                <a
                  href="https://youtu.be/9bnqYf_O5s4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    CompTIA Security+ Full Course
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">The Cyber Mentor (YouTube):</span> Great for ethical hacking
                and red team fundamentals, with hands-on labs and tutorials.
                <a
                  href="https://youtu.be/J-sJ0oK01o8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    How to Set Up a Virtual Hacking Lab
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">Linux Journey:</span> An interactive, step-by-step
                website to learn Linux commands and concepts for free.
                <a
                  href="https://linuxjourney.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Linux Journey Website
                  </span>
                </a>
              </li>
            </ul>

            <p className="font-bold text-lg mt-8">Hands-on Practice Platforms</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">TryHackMe:</span> A guided, hands-on learning platform
                for cybersecurity. It offers a large number of beginner-friendly "rooms" to practice
                specific skills.
                <a
                  href="https://tryhackme.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    TryHackMe
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">Hack The Box:</span> A more challenging platform for
                advanced learners, offering virtual machines to practice penetration testing.
                <a
                  href="https://www.hackthebox.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Hack The Box
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">OWASP Juice Shop:</span> An intentionally vulnerable web application
                to practice web attacks in a safe environment.
                <a
                  href="https://owasp.org/www-project-juice-shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    OWASP Juice Shop
                  </span>
                </a>
              </li>
            </ul>

            <p className="font-bold text-lg mt-8">Essential Tools & Documentation</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Wireshark:</span> The go-to tool for network protocol analysis.
                <a
                  href="https://youtu.be/3TjRk-lY-8k"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Wireshark for Beginners (YouTube)
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">Burp Suite Community Edition:</span> The industry standard for
                web application penetration testing.
                <a
                  href="https://portswigger.net/burp/documentation/community"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Official Documentation
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">Nmap:</span> The most popular tool for network discovery and security
                auditing.
                <a
                  href="https://nmap.org/docs.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Nmap Official Documentation
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">Wazuh:</span> A free and open-source SIEM for log analysis and security monitoring.
                <a
                  href="https://youtu.be/Bq_18_f-b6Y"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    Getting Started with Wazuh (YouTube)
                  </span>
                </a>
              </li>
            </ul>

            <p className="font-bold text-lg mt-8">Certifications</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">CompTIA Security+ (Beginner):</span> A vendor-neutral certification
                that proves foundational knowledge in cybersecurity.
                <a
                  href="https://www.comptia.org/certifications/security"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    CompTIA Security+ Exam Info
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">eJPT (Intermediate - Red Team):</span> An excellent hands-on, practical
                penetration testing certification.
                <a
                  href="https://www.elearnsecurity.com/course/ejpt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    eJPT Info Page
                  </span>
                </a>
              </li>
              <li>
                <span className="font-bold">BTL1 (Intermediate - Blue Team):</span> A hands-on certification
                focused on security operations and incident response.
                <a
                  href="https://securityblue.team/btl1-certification/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline block ml-4">
                    BTL1 Info Page
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