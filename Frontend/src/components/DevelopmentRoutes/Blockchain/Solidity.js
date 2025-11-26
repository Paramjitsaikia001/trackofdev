import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function SolidityFoundationsPage({ closeSolidityFoundations, Done }) {
    const [isFullScreen, setFullScreen] = useState(false);

    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

    const Nexthandler = () => {
        Done();
        closeSolidityFoundations();
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
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"
                        onClick={fullscreenHandler}
                    >
                        {getFullscreenIconName(isFullScreen)}
                    </span>
                    <span
                        onClick={closeSolidityFoundations}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    Solidity Foundations
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-6">
                    <p>
                        <span className="text-[#23daff] font-bold">Solidity</span> is the primary 
                        smart contract language for Ethereum and EVM-compatible chains.  
                        Learning its syntax and patterns is essential for secure and efficient blockchain apps.
                    </p>

                    {/* Syntax and Basics */}
                    <div className="border border-[#28ffd4] rounded-lg p-4">
                        <h3 className="text-xl font-bold text-[#28ffd4] mb-2">Syntax and Basics</h3>
                        <ul className="list-disc list-inside mb-3">
                            <li>Data types (uint, int, address, bool, string)</li>
                            <li>Structs and Enums</li>
                            <li>Functions and visibility (public, private, internal, external)</li>
                            <li>Control flow (if, for, while, require, assert, revert)</li>
                        </ul>
                        <p className="font-bold">Resource:</p>
                        <a
                            href="https://docs.soliditylang.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#28ffd4] underline"
                        >
                            Solidity Official Docs
                        </a>
                    </div>

                    {/* Smart Contract Basics */}
                    <div className="border border-[#ffab40] rounded-lg p-4">
                        <h3 className="text-xl font-bold text-[#ffab40] mb-2">Smart Contract Basics</h3>
                        <ul className="list-disc list-inside mb-3">
                            <li>Contract structure</li>
                            <li>State variables and storage</li>
                            <li>Mappings and arrays</li>
                            <li>Events and logging</li>
                        </ul>
                        <p className="font-bold">Video:</p>
                        <a
                            href="https://youtu.be/gyMwXuJrbJQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#28ffd4] underline"
                        >
                            Solidity Crash Course – freeCodeCamp
                        </a>
                    </div>

                    {/* Deployment Practice */}
                    <div className="border border-[#42b883] rounded-lg p-4">
                        <h3 className="text-xl font-bold text-[#42b883] mb-2">Practice and Deployment</h3>
                        <ul className="list-disc list-inside mb-3">
                            <li>Write HelloWorld.sol</li>
                            <li>Deploy on Remix IDE</li>
                            <li>Test on Ethereum testnets</li>
                        </ul>
                        <p className="font-bold">Try Here:</p>
                        <a
                            href="https://remix.ethereum.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#28ffd4] underline"
                        >
                            Remix IDE
                        </a>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button
                        onClick={closeSolidityFoundations}
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
