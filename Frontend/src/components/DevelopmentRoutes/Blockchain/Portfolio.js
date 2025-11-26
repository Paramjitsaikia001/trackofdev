import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function PortfolioBuildout({ closePortfolio, Done }) {
  const [isFullScreen, setFullScreen] = useState(false);

  const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

  const Nexthandler = () => {
    Done();
    closePortfolio();
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
            onClick={closePortfolio}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Portfolio Buildout
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Apply everything you’ve learned to build production-grade projects
            showcasing your blockchain skills. Focus on{" "}
            <span className="text-[#23daff] font-bold">upgradeable contracts</span>,{" "}
            <span className="text-[#23daff] font-bold">NFT collections</span>,{" "}
            <span className="text-[#23daff] font-bold">DeFi apps</span>, and one
            advanced-path project with thorough documentation, tests, and
            deployment on testnets.
          </p>

          {/* Learning list */}
          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">What to Build:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Upgradeable ERC-20:</span> Mint,
                airdrop, and integrate a UI dashboard.
              </li>
              <li>
                <span className="font-bold">NFT Collection:</span> On-chain
                metadata, subgraph indexing, IPFS hosting, and marketplace
                listing flow.
              </li>
              <li>
                <span className="font-bold">Mini AMM:</span> Add/remove
                liquidity, view analytics with subgraph integration.
              </li>
              <li>
                <span className="font-bold">Advanced Path Project:</span>{" "}
                Implement a project from Solana/Rust, Substrate/Polkadot, ZK, or
                StarkNet.
              </li>
            </ul>

            <p className="font-bold">Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">
                  doc
                </span>
                <a
                  href="https://docs.openzeppelin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    OpenZeppelin Docs – Upgradeable Contracts & Security
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">
                  doc
                </span>
                <a
                  href="https://thegraph.com/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    The Graph – Indexing & Subgraphs
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">
                  doc
                </span>
                <a
                  href="https://ipfs.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    IPFS Docs – Decentralized File Storage
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">
                  doc
                </span>
                <a
                  href="https://ethereum.org/en/developers/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Ethereum Developer Docs – Testnet & Deployment
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">
                  art
                </span>
                <a
                  href="https://solidity-by-example.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Solidity by Example – Practice & Patterns
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={closePortfolio}
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