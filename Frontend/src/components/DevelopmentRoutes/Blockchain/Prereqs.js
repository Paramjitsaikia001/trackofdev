import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function PrereqsPage({ closePrereqs, Done }) {
    const Nexthandler = () => {
        Done();
        closePrereqs();
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
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    <span className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"

                                            onClick={fullscreenHandler}

                                        >
            {getFullscreenIconName(isFullScreen)}
          </span>
                    <span onClick={closePrereqs} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Prereqs (Foundations)</h2>

                {/* Content */}
                <div className="flex flex-col gap-6">
                    <p>
                        <span className="text-[#23daff] font-bold">Foundations</span> are crucial before jumping into blockchain development.  
                        You’ll need a solid grasp of cryptography, networking, and basic developer tooling to build confidently.  
                        Below is the breakdown of what to cover first.
                    </p>

                    {/* Cryptography & Networks */}
                    <div className="border border-[#28ffd4] rounded-lg p-4">
                        <h3 className="text-xl font-bold text-[#28ffd4] mb-2">Cryptography & Networks</h3>
                        <ul className="list-disc list-inside mb-3">
                            <li>Hashes, digital signatures, public/private keys</li>
                            <li>Consensus basics: PoW, PoS</li>
                            <li>P2P networking and how blockchains propagate data</li>
                            <li>Mental model: accounts, EOA vs contract, gas, state, storage</li>
                        </ul>
                        <p className="font-bold">Resources:</p>
                        <div className="flex flex-col gap-3 mt-2">
                            <div className="flex gap-3">
                                <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                                <a href="https://cryptobook.nakov.com/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                    Practical Cryptography for Developers
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                                <a href="https://youtu.be/SSo_EIwHSd4" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                    Blockchain Basics Explained – Simply Explained
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Developer Environment */}
                    <div className="border border-[#ffb300] rounded-lg p-4">
                        <h3 className="text-xl font-bold text-[#ffb300] mb-2">Developer Environment</h3>
                        <ul className="list-disc list-inside mb-3">
                            <li>Install Node.js (LTS) and package manager (pnpm/yarn)</li>
                            <li>Set up VS Code with Solidity & Prettier extensions</li>
                            <li>Learn Git and GitHub workflows (branches, PRs, commits)</li>
                            <li>Organize repos with a clean mono-repo structure early</li>
                        </ul>
                        <p className="font-bold">Resources:</p>
                        <div className="flex flex-col gap-3 mt-2">
                            <div className="flex gap-3">
                                <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                                <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                    Node.js Official Docs
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                                <a href="https://youtu.be/RGOj5yH7evk" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                    Git & GitHub Crash Course – Traversy Media
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button onClick={closePrereqs} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}
