import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function FrontendIntegration({ closeFrontendIntegration, Done }) {
  const [isFullScreen, setFullScreen] = useState(false);
  const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };
  const handleDone = () => {
    Done();
    closeFrontendIntegration();
  };

  return (
    <section
      className={getFullscreenClasses(isFullScreen)}
      style={{
        boxShadow:
          "0 8px 32px 0 rgba(31, 38, 135, 0.37), 0 1.5px 8px 0 rgba(0,0,0,0.25)",
      }}
    >
      <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%] w-full max-w-2xl rounded-xl shadow-lg flex flex-col">
        {/* Header with fullscreen toggle and close */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={fullscreenHandler}
              className="text-[#00d9ff] hover:bg-[#25305b] rounded-full p-2 transition-colors"
              title={isFullScreen === "left-[60%]" ? "Expand" : "Shrink"}
            >
              <span
                                      className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"
                                      onClick={fullscreenHandler}
                                  >
                                      {getFullscreenIconName(isFullScreen)}
                                  </span>
            </button>
          </div>
          <button
            onClick={closeFrontendIntegration}
            className="text-[#00d9ff] hover:bg-[#25305b] rounded-full p-2 transition-colors"
            title="Close"
          >
            <span className="material-icons align-middle text-2xl">close</span>
          </button>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Frontend Integration
        </h2>

        {/* Description */}
        <p className="mb-6 text-base leading-relaxed">
          Learn how to connect your smart contracts with web applications using{" "}
          <span className="text-[#23daff] font-bold">Ethers.js</span> and{" "}
          <span className="text-[#23daff] font-bold">Web3.js</span>. Build{" "}
          <span className="text-[#23daff] font-bold">decentralized apps (dApps)</span> that interact with blockchain networks through{" "}
          <span className="text-[#23daff] font-bold">MetaMask</span> or{" "}
          <span className="text-[#23daff] font-bold">WalletConnect</span>. Practice by creating a simple dApp with{" "}
          <span className="text-[#23daff] font-bold">user authentication</span>,{" "}
          <span className="text-[#23daff] font-bold">transactions</span>, and real-time blockchain data display.
        </p>

        {/* Resources Sections */}
        <div className="space-y-4">
          {/* Ethers.js Section */}
          <div className="border border-[#23daff] rounded-md p-4">
            <h3 className="text-lg font-semibold text-[#23daff] mb-1">Ethers.js</h3>
            <ul className="list-disc list-inside ml-3">
              <li>
                <a
                  href="https://docs.ethers.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00d9ff] hover:underline"
                >
                  Ethers.js Documentation
                </a>
              </li>
            </ul>
          </div>
          {/* Web3.js Section */}
          <div className="border border-[#23daff] rounded-md p-4">
            <h3 className="text-lg font-semibold text-[#23daff] mb-1">Web3.js</h3>
            <ul className="list-disc list-inside ml-3">
              <li>
                <a
                  href="https://web3js.readthedocs.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00d9ff] hover:underline"
                >
                  Web3.js Documentation
                </a>
              </li>
            </ul>
          </div>
          {/* MetaMask Section */}
          <div className="border border-[#23daff] rounded-md p-4">
            <h3 className="text-lg font-semibold text-[#23daff] mb-1">MetaMask</h3>
            <ul className="list-disc list-inside ml-3">
              <li>
                <a
                  href="https://docs.metamask.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00d9ff] hover:underline"
                >
                  MetaMask Developer Docs
                </a>
              </li>
            </ul>
          </div>
          {/* Video Course Section */}
          <div className="border border-[#23daff] rounded-md p-4">
            <h3 className="text-lg font-semibold text-[#23daff] mb-1">Video Course</h3>
            <ul className="list-disc list-inside ml-3">
              <li>
                <a
                  href="https://www.youtube.com/watch?v=gyMwXuJrbJQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00d9ff] hover:underline"
                >
                  FreeCodeCamp Web3.js & Ethers.js Course
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mt-8 mb-2">
          <button
            onClick={closeFrontendIntegration}
            className="bg-[#25305b] hover:bg-[#00d9ff] hover:text-black text-[#00d9ff] px-6 py-2 rounded-md font-semibold transition-all duration-150"
          >
            Close
          </button>
          <button
            onClick={handleDone}
            className="bg-[#00d9ff] hover:bg-[#25305b] text-black hover:text-[#00d9ff] px-6 py-2 rounded-md font-semibold transition-all duration-150"
          >
            Done
          </button>
        </div>
      </div>
    </section>
  );
}
