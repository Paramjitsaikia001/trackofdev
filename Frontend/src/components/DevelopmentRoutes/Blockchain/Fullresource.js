import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function FullResources({ closeFullResources, Done }) {
  const [isFullScreen, setFullScreen] = useState(false);

  const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

  const Nexthandler = () => {
    Done();
    closeFullResources();
  };

  return (
    <section
      className={getFullscreenClasses(isFullScreen)}
      style={{ boxShadow: "0 0 10px 0px #000000" }}
    >
      <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
        {/* Header */}
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
          Full Free Resources & Key Points
        </h2>

        {/* Description */}
        <p className="mb-4">
          Here’s a curated list of <span className="text-[#23daff] font-bold">free resources</span> 
          to learn blockchain development and important 
          <span className="text-[#23daff] font-bold"> points to notice</span> while becoming 
          a professional blockchain developer.
        </p>

        {/* Key Points */}
        <div className="flex flex-col my-5 gap-4">
          <p className="font-bold">⚡ Key Points to Notice:</p>
          <ul className="list-disc list-inside">
            <li>Master blockchain fundamentals: consensus, cryptography, smart contracts.</li>
            <li>Learn Solidity, EVM concepts, and contract deployment workflows.</li>
            <li>Understand gas optimization, security practices, and audits.</li>
            <li>Experiment with DeFi, NFTs, and Layer 2 solutions.</li>
            <li>Practice building, testing, and documenting projects.</li>
            <li>Contribute to open-source protocols and libraries.</li>
            <li>Stay updated with ecosystem news, governance, and upgrades.</li>
          </ul>
        </div>

        {/* Free Resources */}
        <div className="flex flex-col my-5 gap-4">
          <p className="font-bold">📚 Free Learning Resources:</p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
              <a
                href="https://ethereum.org/en/developers/docs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[#28ffd4] underline">Ethereum Developer Docs</span>
              </a>
            </div>
            <div className="flex gap-3">
              <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
              <a
                href="https://soliditylang.org/docs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[#28ffd4] underline">Solidity Official Documentation</span>
              </a>
            </div>
            <div className="flex gap-3">
              <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">blog</span>
              <a
                href="https://blog.openzeppelin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[#28ffd4] underline">OpenZeppelin Blog – Security Insights</span>
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                play_arrow
              </span>
              <a
                href="https://www.youtube.com/@freecodecamp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[#28ffd4] underline">FreeCodeCamp – Blockchain & Solidity Tutorials</span>
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                play_arrow
              </span>
              <a
                href="https://www.youtube.com/@PatrickCollins"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[#28ffd4] underline">Patrick Collins – Full Blockchain Course</span>
              </a>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
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