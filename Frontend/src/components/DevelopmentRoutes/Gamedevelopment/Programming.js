import { useState } from 'react';
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function ProgrammingPage({ closeProgramming, Done }) {
  const Nexthandler = () => {
    Done();
    closeProgramming();
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
            onClick={closeProgramming}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Master Basic Programming
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            A strong foundation in <span className="text-[#23daff] font-bold">programming</span> is
            the absolute first step in game development. Before you even touch a game engine,
            you need to understand how to write code, control program flow, and manage data.
            This will enable you to implement game logic, create interactions, and solve problems
            efficiently. The video recommends 6-8 months for beginners to get comfortable with
            these basics [00:02:05].
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>Variables and Data Types</li>
              <li>Conditional Statements (if/else, switch)</li>
              <li>Loops (for, while)</li>
              <li>Functions and Procedures</li>
              <li>Basic Object-Oriented Programming (OOP) concepts</li>
              <li>Input/Output operations</li>
              <li>Debugging skills</li>
            </ul>

            <p className="font-bold">Recommended Languages:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">C/C++:</span> Highly recommended for understanding low-level
                concepts and performance-critical game development (as mentioned in the video [00:01:52]).
              </li>
              <li>
                <span className="font-bold">C#:</span> The primary language for Unity, a popular game engine.
              </li>
              <li>
                <span className="font-bold">Python:</span> Good for scripting, tool development, and
                some lightweight game development due to its simplicity.
              </li>
              <li>
                <span className="font-bold">JavaScript:</span> Excellent for browser-based 2D games
                (e.g., with Kaboom.js [00:02:18]).
              </li>
            </ul>

            <p className="font-bold">Resources to Learn Programming:</p>
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
                  <span className="text-[#28ffd4] underline">
                    C++ Full Course for free - freeCodeCamp.org
                  </span>
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
                  <span className="text-[#28ffd4] underline">
                    C# Full Course for free - freeCodeCamp.org
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/rfscVS0vtbw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Python Full Course for free - freeCodeCamp.org
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.learncpp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">LearnCpp.com</span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">C# Documentation (Microsoft)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeProgramming}
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