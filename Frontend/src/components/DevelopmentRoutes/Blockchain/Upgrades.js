import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function UpgradesAccessControl({ closeUpgradesAccessControl, Done }) {
  const [isFullScreen, setFullScreen] = useState(false);

  const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

  const Nexthandler = () => {
    Done();
    closeUpgradesAccessControl();
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
            onClick={closeUpgradesAccessControl}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Upgrades & Access Control
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Learn how to make smart contracts upgradeable using{" "}
            <span className="text-[#23daff] font-bold">proxy patterns</span>{" "}
            (Transparent, UUPS, Beacon) and manage contract permissions securely
            with{" "}
            <span className="text-[#23daff] font-bold">
              role-based access control
            </span>
            . Master OpenZeppelin's{" "}
            <span className="text-[#23daff] font-bold">Ownable</span>,{" "}
            <span className="text-[#23daff] font-bold">AccessControl</span>, and
            upgrade plugins to ensure contracts remain flexible and secure over
            time.
          </p>

          {/* Learning list */}
          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>Proxy Patterns</li>
              <li>UUPS / Transparent / Beacon</li>
              <li>Ownable</li>
              <li>AccessControl</li>
            </ul>

            <p className="font-bold">Tools:</p>
            <ul className="list-disc list-inside">
              <li>OpenZeppelin Upgrades Plugin</li>
              <li>Hardhat</li>
            </ul>

            <p className="font-bold">Resources to Learn Upgrades & Access Control:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">
                  doc
                </span>
                <a
                  href="https://docs.openzeppelin.com/contracts/4.x/access-control"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Access Control
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">
                  doc
                </span>
                <a
                  href="https://docs.openzeppelin.com/upgrades-plugins/1.x/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Upgrades Plugins
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">
                  blog
                </span>
                <a
                  href="https://blog.openzeppelin.com/proxy-patterns/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Proxy Patterns
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://www.youtube.com/watch?v=bdXJmWajZRY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">YouTube</span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">
                  art
                </span>
                <a
                  href="https://www.rareskills.io/post/openzeppelin-access-control"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Article</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={closeUpgradesAccessControl}
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