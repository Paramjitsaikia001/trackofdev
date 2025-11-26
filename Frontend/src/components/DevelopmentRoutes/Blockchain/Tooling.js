import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function ToolingSetupPage({ closeToolingSetup, Done }) {
    const Nexthandler = () => {
        Done();
        closeToolingSetup();
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
                        onClick={closeToolingSetup}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    Tooling Setup
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-6">
                    <p>
                        <span className="text-[#23daff] font-bold">Blockchain development tooling</span> 
                        provides the environment for writing, compiling, testing, and deploying smart contracts.  
                        Setting up the right tools early saves time and avoids errors.
                    </p>

                    {/* Node.js and npm/pnpm */}
                    <div className="border border-[#28ffd4] rounded-lg p-4">
                        <h3 className="text-xl font-bold text-[#28ffd4] mb-2">Node.js + Package Managers</h3>
                        <ul className="list-disc list-inside mb-3">
                            <li>Install Node.js (LTS recommended)</li>
                            <li>Use npm, yarn, or pnpm for dependency management</li>
                            <li>Understand package.json basics</li>
                        </ul>
                        <p className="font-bold">Download:</p>
                        <a
                            href="https://nodejs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#28ffd4] underline"
                        >
                            Node.js Official Site
                        </a>
                    </div>

                    {/* Hardhat */}
                    <div className="border border-[#ffab40] rounded-lg p-4">
                        <h3 className="text-xl font-bold text-[#ffab40] mb-2">Hardhat</h3>
                        <ul className="list-disc list-inside mb-3">
                            <li>Compile and deploy smart contracts</li>
                            <li>Local Ethereum testnet (Hardhat Network)</li>
                            <li>Debugging and stack traces</li>
                            <li>Plugin ecosystem (ethers.js, Waffle, OpenZeppelin)</li>
                        </ul>
                        <p className="font-bold">Docs:</p>
                        <a
                            href="https://hardhat.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#28ffd4] underline"
                        >
                            Hardhat Official Docs
                        </a>
                    </div>

                    {/* Foundry */}
                    <div className="border border-[#42b883] rounded-lg p-4">
                        <h3 className="text-xl font-bold text-[#42b883] mb-2">Foundry</h3>
                        <ul className="list-disc list-inside mb-3">
                            <li>Fast Rust-based toolkit</li>
                            <li>Forge (testing and deployment)</li>
                            <li>Cast (interacting with contracts)</li>
                            <li>Cheaper gas estimates in tests</li>
                        </ul>
                        <p className="font-bold">Docs:</p>
                        <a
                            href="https://book.getfoundry.sh/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#28ffd4] underline"
                        >
                            Foundry Book
                        </a>
                    </div>

                    {/* Truffle */}
                    <div className="border border-[#ff5722] rounded-lg p-4">
                        <h3 className="text-xl font-bold text-[#ff5722] mb-2">Truffle</h3>
                        <ul className="list-disc list-inside mb-3">
                            <li>Legacy but still popular</li>
                            <li>Integrated with Ganache for local blockchain</li>
                            <li>Strong migration system</li>
                        </ul>
                        <p className="font-bold">Docs:</p>
                        <a
                            href="https://trufflesuite.com/docs/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#28ffd4] underline"
                        >
                            Truffle Suite Docs
                        </a>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button
                        onClick={closeToolingSetup}
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
