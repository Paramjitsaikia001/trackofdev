import { useState } from 'react';
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function Fullresource({ closeFullResources, Done }) {
  const Nexthandler = () => {
    Done();
    closeFullResources();
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
          <span
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"
                        onClick={fullscreenHandler}
                    >
                        {getFullscreenIconName(isFullScreen)}
                    </span>
          <span
            onClick={closeFullResources}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Full Game Development Resources
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            This section provides a consolidated list of recommended resources covering various
            aspects of game development, from foundational programming to advanced engine usage and
            publishing.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">General Game Development Portals & Learning Platforms:</p>
            <ul className="list-disc list-inside">
              <li>
                <a
                  href="https://www.gamedev.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">GameDev.net</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.gamasutra.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Game Developer (formerly Gamasutra)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/c/GameDev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Game Dev (YouTube Channel)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.freecodecamp.org/news/tag/game-development/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">freeCodeCamp Game Development Articles & Tutorials</span>
                </a>
              </li>
            </ul>

            <p className="font-bold">Online Courses & Tutorials:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/z9bZufudPq8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">C++ Full Course for free - freeCodeCamp.org</span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/GhQdlIFL_YQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">C# Full Course for free - freeCodeCamp.org</span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/gB1F9HT_c7w"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Unity Full Course - freeCodeCamp.org</span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/YgB-JtSg8i0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Unreal Engine 5 Full Course - freeCodeCamp.org</span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/RBSGSk-A56E"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Data Structures & Algorithms - Full Course for free - freeCodeCamp.org</span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/RGOj5yH7evk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Git & GitHub Crash Course - freeCodeCamp.org</span>
                </a>
              </div>
            </div>

            <p className="font-bold">Asset Stores & Creation Tools:</p>
            <ul className="list-disc list-inside">
              <li>
                <a
                  href="https://assetstore.unity.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Unity Asset Store</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.unrealengine.com/marketplace/en-US/assets"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Unreal Engine Marketplace</span>
                </a>
              </li>
              <li>
                <a
                  href="https://craftpix.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Craftpix.net (Free 2D/3D assets, mentioned in video [00:07:06])</span>
                </a>
              </li>
              <li>
                <a
                  href="https://itch.io/game-assets"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Itch.io Game Assets (Free/Paid)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://blender.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Blender (Free 3D modeling software)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.aseprite.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Aseprite (Pixel art and animation software)</span>
                </a>
              </li>
            </ul>

            <p className="font-bold">Communities & Forums:</p>
            <ul className="list-disc list-inside">
              <li>
                <a
                  href="https://forum.unity.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Unity Forums</span>
                </a>
              </li>
              <li>
                <a
                  href="https://forums.unrealengine.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Unreal Engine Forums</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/r/gamedev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">r/gamedev (Reddit)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeFullResources}
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