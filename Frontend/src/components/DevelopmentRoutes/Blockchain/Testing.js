import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function TestingQualityPage({ closeTestingQuality, Done }) {
    const Nexthandler = () => {
        Done();
        closeTestingQuality();
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
                        onClick={closeTestingQuality}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    Testing & Quality
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-6">
                    <p>
                        <span className="text-[#23daff] font-bold">Testing & quality assurance</span> 
                        ensures smart contracts behave correctly and securely.  
                        Strong test coverage and auditing practices reduce risks of vulnerabilities 
                        and unexpected behaviors.
                    </p>

                    {/* Unit & Integration Testing */}
                    <div className="border border-[#28ffd4] rounded-lg p-4">
                        <h3 className="text-xl font-bold text-[#28ffd4] mb-2">Unit & Integration Testing</h3>
                        <ul className="list-disc list-inside mb-3">
                            <li>Mocha + Chai for assertions</li>
                            <li>Waffle (Hardhat plugin) for Solidity testing</li>
                            <li>Foundry’s Forge framework for Rust-speed tests</li>
                        </ul>
                        <p className="font-bold">Resources:</p>
                        <a
                            href="https://hardhat.org/hardhat-runner/docs/guides/test-contracts"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#28ffd4] underline"
                        >
                            Hardhat Testing Guide
                        </a>
                    </div>

                    {/* Security Analysis */}
                    <div className="border border-[#ffab40] rounded-lg p-4">
                        <h3 className="text-xl font-bold text-[#ffab40] mb-2">Static Analysis & Security Tools</h3>
                        <ul className="list-disc list-inside mb-3">
                            <li>Slither (static analysis for vulnerabilities)</li>
                            <li>MythX (security scanner)</li>
                            <li>Echidna (property-based fuzz testing)</li>
                        </ul>
                        <p className="font-bold">Docs:</p>
                        <a
                            href="https://github.com/crytic/slither"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#28ffd4] underline"
                        >
                            Slither on GitHub
                        </a>
                    </div>

                    {/* Gas & Performance */}
                    <div className="border border-[#42b883] rounded-lg p-4">
                        <h3 className="text-xl font-bold text-[#42b883] mb-2">Gas & Performance Testing</h3>
                        <ul className="list-disc list-inside mb-3">
                            <li>Measure gas costs of functions</li>
                            <li>Optimize loops and storage operations</li>
                            <li>Use Hardhat Gas Reporter plugin</li>
                        </ul>
                        <p className="font-bold">Docs:</p>
                        <a
                            href="https://github.com/cgewecke/hardhat-gas-reporter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#28ffd4] underline"
                        >
                            Hardhat Gas Reporter
                        </a>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button
                        onClick={closeTestingQuality}
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
