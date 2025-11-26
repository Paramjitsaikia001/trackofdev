import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function CyberLabPage({ closeCyberLab, Done }) {
  const Nexthandler = () => {
    Done();
    closeCyberLab();
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
            onClick={closeCyberLab}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 4: Build Your Cyber Lab
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Your personal cyber lab is your sandbox—a safe, isolated environment where you can
            practice, experiment, and learn without risking legal trouble. This is where you'll
            apply all the theory you've learned in the previous steps.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">What to Do:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Install a Virtualization Platform:</span> Get
                <span className="font-bold"> VirtualBox</span> or <span className="font-bold">VMware Player</span> to run
                multiple operating systems on your computer.
              </li>
              <li>
                <span className="font-bold">Set up Attacker Machine:</span> Install <span className="font-bold">Kali Linux</span>, a
                Linux distribution pre-loaded with hundreds of cybersecurity tools.
              </li>
              <li>
                <span className="font-bold">Set up Target Machines:</span> Install vulnerable operating systems like
                <span className="font-bold"> Windows 10/11</span> and <span className="font-bold">Ubuntu</span>. This will be your
                target for attacks.
              </li>
              <li>
                <span className="font-bold">Install Vulnerable Apps:</span> Add applications designed to be hacked,
                such as <span className="font-bold">Damn Vulnerable Web App (DVWA)</span> and <span className="font-bold">OWASP Juice Shop</span>,
                to practice common web attacks.
              </li>
              <li>
                <span className="font-bold">Configure the Network:</span> Ensure your VMs are on a private,
                host-only network so they can communicate with each other but not with the outside internet.
              </li>
            </ul>

            <p className="font-bold">Resources & Downloads:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.virtualbox.org/wiki/Downloads"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Download VirtualBox</span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.kali.org/get-kali/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Download Kali Linux</span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://owasp.org/www-project-damn-vulnerable-web-application/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Damn Vulnerable Web App (DVWA)</span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://owasp.org/www-project-juice-shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">OWASP Juice Shop</span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/J-sJ0oK01o8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    How to Set Up a Virtual Hacking Lab - The Cyber Mentor
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeCyberLab}
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