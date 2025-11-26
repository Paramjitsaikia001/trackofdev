import { useState } from 'react';
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function GameEnginesPage({ closeGameEngines, Done }) {
  const Nexthandler = () => {
    Done();
    closeGameEngines();
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
            onClick={closeGameEngines}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Choose a Game Engine
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            <span className="text-[#23daff] font-bold">Game engines</span> are software frameworks
            designed to simplify the process of game development. They provide pre-built tools for
            graphics rendering, physics simulation, audio, animation, and more, allowing developers
            to focus on game design and logic rather than building everything from scratch. The video
            highlights Unity and Unreal Engine as the two major players [00:03:05].
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>User Interface (UI) of your chosen engine</li>
              <li>Scene management and object placement</li>
              <li>Scripting within the engine (C# for Unity, C++ / Blueprints for Unreal)</li>
              <li>Asset import and management</li>
              <li>Physics and collision detection</li>
              <li>Animation systems</li>
              <li>Audio integration</li>
              <li>Building and deploying games</li>
            </ul>

            <p className="font-bold">Popular Game Engines:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Unity:</span>
                Uses C#. Excellent for 2D, 3D, mobile, and AR/VR games. Known for its ease of use
                and large community.
              </li>
              <li>
                <span className="font-bold">Unreal Engine:</span>
                Uses C++ and Blueprints (visual scripting). Known for its high-fidelity graphics,
                making it popular for AAA titles.
              </li>
              <li>
                <span className="font-bold">Godot Engine:</span>
                A free and open-source engine (as mentioned in the video [00:04:39]). Supports GDScript,
                C#, and C++. Good for 2D and 3D games, and gaining popularity.
              </li>
              <li>
                <span className="font-bold">GameMaker Studio 2:</span>
                Primarily for 2D game development, using its own GML (GameMaker Language).
              </li>
            </ul>

            <p className="font-bold">Resources to Learn Game Engines:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://docs.unity3d.com/Manual/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Unity Official Documentation</span>
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
                  <span className="text-[#28ffd4] underline">
                    Unity Full Course - freeCodeCamp.org
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://docs.unrealengine.com/5.0/en-US/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Unreal Engine Official Documentation</span>
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
                  <span className="text-[#28ffd4] underline">
                    Unreal Engine 5 Full Course - freeCodeCamp.org
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://docs.godotengine.org/en/stable/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Godot Engine Official Documentation</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeGameEngines}
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