import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function TokenStandards({ closeTokenStandards, Done }) {
  const [isFullScreen, setFullScreen] = useState(false);
  const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };
  const handleDone = () => {
    Done();
    closeTokenStandards();
  };

  return (
    <section
      className={getFullscreenClasses(isFullScreen)}
      style={{
        boxShadow:
          "0 4px 32px 0 rgba(0, 0, 0, 0.45), 0 0.5px 1.5px 0 rgba(0, 0, 0, 0.18)",
      }}
    >
      <div className="relative bg-[#0e1542] text-white pb-0 px-4 h-[100%] w-full max-w-2xl rounded-xl shadow-lg flex flex-col">
        {/* Top bar: Fullscreen and Close */}
        <div className="flex items-center justify-between mb-2 w-full">
          <button
            onClick={fullscreenHandler}
            className="material-icons text-[#23daff] hover:bg-[#23daff] hover:text-[#0e1542] rounded-full p-1 transition-colors"
            title={isFullScreen ? "Shrink" : "Expand"}
            style={{ fontSize: "2rem" }}
          >
            {getFullscreenIconName(isFullScreen)}
          </button>
          <button
            onClick={closeTokenStandards}
            className="material-icons text-red-400 hover:bg-red-500 hover:text-white rounded-full p-1 transition-colors"
            title="Close"
            style={{ fontSize: "2rem" }}
          >
            close
          </button>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2 text-center font-bold">
          Token Standards
        </h2>

        {/* Description */}
        <p className="text-base mb-6 leading-relaxed">
          Understand and implement Ethereum token standards like{" "}
          <span className="text-[#23daff] font-bold">ERC-20</span> (fungible tokens),{" "}
          <span className="text-[#23daff] font-bold">ERC-721</span> (NFTs), and{" "}
          <span className="text-[#23daff] font-bold">ERC-1155</span> (multi-token). Learn about extensions such as{" "}
          <span className="text-[#23daff] font-bold">EIP-2612</span> permits,{" "}
          <span className="text-[#23daff] font-bold">ERC-2981</span> royalties, and role-based access control.
          Practice by building your own <span className="text-[#23daff] font-bold">ERC-20</span> with airdrop features and an NFT collection with on-chain metadata.
        </p>

        {/* Resources */}
        <div className="flex flex-col gap-4 w-full">
          {/* ERC-20 */}
          <div className="border border-[#23daff] rounded-lg bg-[#12206c] p-4">
            <div className="flex items-center mb-1">
              <span className="material-icons text-[#23daff] mr-2" style={{ fontSize: "1.3rem" }}>token</span>
              <span className="font-semibold text-lg text-[#23daff]">ERC-20 (Fungible Token)</span>
            </div>
            <ul className="ml-6 list-disc text-sm">
              <li>
                <a
                  href="https://eips.ethereum.org/EIPS/eip-20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#23daff] hover:text-[#00d9ff]"
                >
                  ERC-20 Specification (EIP-20)
                </a>
              </li>
              <li>
                <a
                  href="https://docs.openzeppelin.com/contracts/4.x/erc20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#23daff] hover:text-[#00d9ff]"
                >
                  OpenZeppelin ERC-20 Docs
                </a>
              </li>
            </ul>
          </div>

          {/* ERC-721 */}
          <div className="border border-[#23daff] rounded-lg bg-[#12206c] p-4">
            <div className="flex items-center mb-1">
              <span className="material-icons text-[#23daff] mr-2" style={{ fontSize: "1.3rem" }}>collections</span>
              <span className="font-semibold text-lg text-[#23daff]">ERC-721 (NFT)</span>
            </div>
            <ul className="ml-6 list-disc text-sm">
              <li>
                <a
                  href="https://eips.ethereum.org/EIPS/eip-721"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#23daff] hover:text-[#00d9ff]"
                >
                  ERC-721 Specification (EIP-721)
                </a>
              </li>
              <li>
                <a
                  href="https://docs.openzeppelin.com/contracts/4.x/erc721"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#23daff] hover:text-[#00d9ff]"
                >
                  OpenZeppelin ERC-721 Docs
                </a>
              </li>
            </ul>
          </div>

          {/* ERC-1155 */}
          <div className="border border-[#23daff] rounded-lg bg-[#12206c] p-4">
            <div className="flex items-center mb-1">
              <span className="material-icons text-[#23daff] mr-2" style={{ fontSize: "1.3rem" }}>layers</span>
              <span className="font-semibold text-lg text-[#23daff]">ERC-1155 (Multi-Token)</span>
            </div>
            <ul className="ml-6 list-disc text-sm">
              <li>
                <a
                  href="https://eips.ethereum.org/EIPS/eip-1155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#23daff] hover:text-[#00d9ff]"
                >
                  ERC-1155 Specification (EIP-1155)
                </a>
              </li>
              <li>
                <a
                  href="https://docs.openzeppelin.com/contracts/4.x/erc1155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#23daff] hover:text-[#00d9ff]"
                >
                  OpenZeppelin ERC-1155 Docs
                </a>
              </li>
            </ul>
          </div>

          {/* Extensions */}
          <div className="border border-[#23daff] rounded-lg bg-[#12206c] p-4">
            <div className="flex items-center mb-1">
              <span className="material-icons text-[#23daff] mr-2" style={{ fontSize: "1.3rem" }}>extension</span>
              <span className="font-semibold text-lg text-[#23daff]">Extensions</span>
            </div>
            <ul className="ml-6 list-disc text-sm">
              <li>
                <a
                  href="https://eips.ethereum.org/EIPS/eip-2612"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#23daff] hover:text-[#00d9ff]"
                >
                  EIP-2612 (Permit Extension)
                </a>
              </li>
              <li>
                <a
                  href="https://eips.ethereum.org/EIPS/eip-2981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#23daff] hover:text-[#00d9ff]"
                >
                  ERC-2981 (NFT Royalty Standard)
                </a>
              </li>
            </ul>
          </div>

          {/* Video */}
          <div className="border border-[#23daff] rounded-lg bg-[#12206c] p-4">
            <div className="flex items-center mb-1">
              <span className="material-icons text-[#23daff] mr-2" style={{ fontSize: "1.3rem" }}>ondemand_video</span>
              <span className="font-semibold text-lg text-[#23daff]">Video</span>
            </div>
            <ul className="ml-6 list-disc text-sm">
              <li>
                <a
                  href="https://www.youtube.com/watch?v=9uEmNgHzPhQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#23daff] hover:text-[#00d9ff]"
                >
                  ERC-20 & ERC-721 Explained (YouTube)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-8 mb-4">
          <button
            onClick={closeTokenStandards}
            className="px-6 py-2 bg-[#e83e58] hover:bg-[#ff4e6b] text-white font-bold rounded-lg shadow transition-colors"
          >
            Close
          </button>
          <button
            onClick={handleDone}
            className="px-6 py-2 bg-[#23daff] hover:bg-[#00d9ff] text-[#0e1542] font-bold rounded-lg shadow transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </section>
  );
}
