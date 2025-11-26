import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function OraclesAutomation({ closeOraclesAutomation, Done }) {
  const [isFullScreen, setFullScreen] = useState(false);
  const fullscreenHandler = () => {
    setFullScreen(prev => !prev);
  };

  const Nexthandler = () => {
    Done();
    closeOraclesAutomation();
  };

  return (
    <section
      className={getFullscreenClasses(isFullScreen)}
      style={{ boxShadow: "0 0 10px 0px #000000" }}
    >
      <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
        {/* Header */}
        <div className="flex pb-4 justify-between items-center w-[100%]">
          <div />
          <div className="flex pb-4 justify-between items-center w-[100%]">
            <span
              className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden" onClick={fullscreenHandler}
            >
              {getFullscreenIconName(isFullScreen)}
            </span>
            <span
              className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
              onClick={closeOraclesAutomation}
            >
              close
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Oracles & Automation
        </h2>

        {/* Description */}
        <p className="mb-4">
          Smart contracts cannot fetch real-world data on their own. <strong>Oracles</strong> like Chainlink bring off-chain data (price feeds, APIs, randomness) on-chain, enabling DeFi and other real-world applications. For recurring tasks, <strong>automation services</strong> like Chainlink Keepers or Gelato Network let contracts self-execute without manual triggers.
        </p>

        {/* What to Learn */}
        <div className="mb-6">
          <h3 className="mb-2 font-semibold">What to Learn:</h3>
          <ul className="list-disc list-inside">
            <li>Create a lottery dApp using Chainlink VRF for randomness.</li>
            <li>Fetch live ETH/USD price using Chainlink Price Feeds.</li>
            <li>Automate recurring token transfers using Chainlink Automation.</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="mb-6">
          <h3 className="mb-2 font-semibold">Resources:</h3>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <span className="material-symbols-outlined text-xs bg-[#3348ff] text-white px-2 py-1 rounded">doc</span>
              <a
                href="https://docs.chain.link/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[#28ffd4] underline">Chainlink Official Documentation</span>
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <span className="material-symbols-outlined text-xs bg-[#3348ff] text-white px-2 py-1 rounded">blog</span>
              <a
                href="https://learn.chain.link/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[#28ffd4] underline">Chainlink Learning Hub</span>
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <span className="material-symbols-outlined text-xs bg-[#3348ff] text-white px-2 py-1 rounded">art_track</span>
              <a
                href="https://docs.gelato.network/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[#28ffd4] underline">Gelato Automation Docs</span>
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <span className="material-symbols-outlined text-xs bg-red-600 text-white px-2 py-1 rounded">play_arrow</span>
              <a
                href="https://youtu.be/7xAZ1I2jWY8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[#28ffd4] underline">Chainlink Automation &amp; Keepers Explained (YouTube)</span>
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <span className="material-symbols-outlined text-xs bg-[#3348ff] text-white px-2 py-1 rounded">blog</span>
              <a
                href="https://www.rareskills.io/post/chainlink-vrf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[#28ffd4] underline">RareSkills – Chainlink VRF Tutorial</span>
              </a>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={closeOraclesAutomation}
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
