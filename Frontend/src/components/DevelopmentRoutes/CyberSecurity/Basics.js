import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function BasicsPage({ closeBasics, Done }) {
  const Nexthandler = () => {
    Done();
    closeBasics();
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
            onClick={closeBasics}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 1: Basics & Mindset
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Before you dive into tools and hacking, you need to understand the core principles of
            cybersecurity. This step is about developing the right mindset: understanding what you're
            trying to protect and why, and most importantly, practicing ethically in a safe environment.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">What is Cybersecurity?</span> The practice of protecting
                systems, networks, and programs from digital attacks.
              </li>
              <li>
                <span className="font-bold">The CIA Triad:</span>
                <ul className="list-circle list-inside ml-5">
                  <li><span className="font-bold">Confidentiality:</span> Keeping data secret.</li>
                  <li><span className="font-bold">Integrity:</span> Ensuring data is accurate and trustworthy.</li>
                  <li><span className="font-bold">Availability:</span> Making sure systems and data are accessible when needed.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Key Terminology:</span> Learn the difference between a vulnerability
                (a weakness), a threat (a potential danger), and a risk (the potential for loss).
              </li>
              <li>
                <span className="font-bold">Ethical Hacking Rules:</span> Never test on systems without
                explicit, written permission. Your personal lab is your playground.
              </li>
            </ul>

            <p className="font-bold">Resources to Learn Basics:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/zR5M7F6gU8I"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Cybersecurity Full Course for Beginners - freeCodeCamp.org
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.comptia.org/certifications/security"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">CompTIA Security+ Exam Objectives</span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.sans.org/cyber-security-courses/introduction-cyber-security/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">SANS Institute Introduction to Cybersecurity</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeBasics}
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