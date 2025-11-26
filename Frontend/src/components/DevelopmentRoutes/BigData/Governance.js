import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function GovernancePage({ closeGovernance, Done }) {
  const Nexthandler = () => {
    Done();
    closeGovernance();
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
            onClick={closeGovernance}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 11: Data Governance & Security 🛡️
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            As data becomes a critical asset, ensuring its integrity, privacy, and security is paramount.
            <span className="text-[#23daff] font-bold"> Data Governance</span> is the practice of managing data
            availability, usability, integrity, and security across an organization.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Data Catalogs & Lineage:</span> Understand how to document your data assets
                (catalogs) and track their journey through the pipelines (lineage).
              </li>
              <li>
                <span className="font-bold">Access Controls & Encryption:</span> Learn to manage who can access data
                (e.g., IAM roles) and how to secure it at rest and in transit.
              </li>
              <li>
                <span className="font-bold">Data Masking & PII:</span> Understand how to de-identify or mask sensitive
                information, such as Personally Identifiable Information (PII), to ensure privacy.
              </li>
              <li>
                <span className="font-bold">Compliance:</span> Get familiar with common regulations like GDPR and CCPA.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.tableau.com/learn/articles/data-governance-best-practices"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Data Governance Best Practices - Tableau
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/83i4I9l-8t4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Intro to Data Governance - Alex the Analyst
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.collibra.com/us/en/data-governance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    What is Data Governance? - Collibra
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeGovernance}
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