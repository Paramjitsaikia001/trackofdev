import { useState } from 'react';
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function DSA_Page({ closeDSA, Done }) {
  const Nexthandler = () => {
    Done();
    closeDSA();
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
            onClick={closeDSA}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Learn Data Structures & Algorithms
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            <span className="text-[#23daff] font-bold">Data Structures and Algorithms (DSA)</span>
            are fundamental for writing efficient and optimized code, which is critical in game
            development. Games demand high performance; even a few milliseconds of lag can ruin
            the user experience. Understanding DSA helps you manage game data effectively and
            implement game logic that runs smoothly across various devices. The video emphasizes
            that DSA is crucial for creating good game logic [00:05:09].
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Data Structures:</span> Arrays, Linked Lists, Stacks, Queues,
                Trees (Binary Trees, BSTs), Graphs, Hash Tables, Heaps.
              </li>
              <li>
                <span className="font-bold">Algorithms:</span> Sorting (Bubble, Merge, Quick), Searching
                (Linear, Binary), Graph Traversal (DFS, BFS), Dynamic Programming, Greedy Algorithms.
              </li>
              <li>Time and Space Complexity (Big O notation)</li>
              <li>Memory management and optimization</li>
            </ul>

            <p className="font-bold">Why DSA is Important in Game Development:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Game Object Management:</span> Efficiently store and retrieve
                game entities (e.g., using quadtrees or octrees for spatial partitioning).
              </li>
              <li>
                <span className="font-bold">Pathfinding:</span> Algorithms like A* (mentioned in the video [00:09:04])
                rely on graph data structures.
              </li>
              <li>
                <span className="font-bold">Collision Detection:</span> Optimized algorithms to check for
                intersections between game objects.
              </li>
              <li>
                <span className="font-bold">Rendering:</span> Organizing render data for efficient processing
                by the GPU.
              </li>
              <li>
                <span className="font-bold">Networking:</span> Efficiently packing and unpacking data for
                multiplayer games.
              </li>
            </ul>

            <p className="font-bold">Resources to Learn Data Structures & Algorithms:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/RBSGSk-A56E"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Data Structures & Algorithms - Full Course for free - freeCodeCamp.org
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.geeksforgeeks.org/data-structures/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">GeeksforGeeks - Data Structures</span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.javatpoint.com/data-structure-tutorial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Javatpoint - Data Structure Tutorial</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeDSA}
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