import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function L2CrossChain({ closeL2CrossChain, Done }) {
  const [isFullScreen, setFullScreen] = useState(false);

  const fullscreenHandler = () => {
    setFullScreen(prev => !prev);
  };

  const Nexthandler = () => {
    Done();
    closeL2CrossChain();
  };

  return (
    <section
      className={getFullscreenClasses(isFullScreen)}
      style={{ boxShadow: "0 0 10px 0px #000000" }}
    >
      <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
        {/* Header controls */}
        <div className="flex pb-4 justify-between items-center w-[100%]">
        <span
              className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden" onClick={fullscreenHandler}
            >
              {getFullscreenIconName(isFullScreen)}
            </span>
          <span
            onClick={closeL2CrossChain}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          L2s & Cross-chain
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Layer 2 solutions and cross-chain protocols improve scalability and
            interoperability in blockchain ecosystems. Understanding{" "}
            <span className="text-[#23daff] font-bold">rollups</span>,{" "}
            <span className="text-[#23daff] font-bold">bridges</span>, and{" "}
            <span className="text-[#23daff] font-bold">message passing</span>{" "}
            ensures efficient deployment and secure asset transfers across
            multiple networks.
          </p>

          {/* Learning list */}
          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                Deploy a smart contract on Ethereum L1 and an L2 (Optimism /
                Arbitrum).
              </li>
              <li>
                Build a cross-chain messenger that relays messages between L1
                and L2.
              </li>
              <li>
                Create a demo bridge for token transfers between two testnets.
              </li>
            </ul>

            <p className="font-bold">Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">
                  doc
                </span>
                <a
                  href="https://ethereum.org/en/developers/docs/layer-2-scaling/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Ethereum.org – Layer 2 Scaling
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">
                  doc
                </span>
                <a
                  href="https://optimism.io/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Optimism Documentation
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">
                  doc
                </span>
                <a
                  href="https://developer.offchainlabs.com/docs/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Arbitrum Developer Docs
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">
                  doc
                </span>
                <a
                  href="https://docs.chainbridge.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    ChainBridge Docs – Cross-chain bridges
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/QjL4-z8I3Lw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Layer 2 & Cross-chain Explained – Finematics
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={closeL2CrossChain}
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