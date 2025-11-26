import { useState } from 'react';
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function AIPage({ closeAI, Done }) {
  const Nexthandler = () => {
    Done();
    closeAI();
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
            onClick={closeAI}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Artificial Intelligence (AI) in Games
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            <span className="text-[#23daff] font-bold">Artificial Intelligence (AI)</span> in game
            development refers to the techniques used to create intelligent and believable behavior
            for Non-Player Characters (NPCs), enemies, and environmental interactions. This makes
            games more engaging and challenging for players. The video specifically mentions
            learning basic AI algorithms like A* for pathfinding [00:08:55].
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Pathfinding Algorithms:</span>
                <ul className="list-circle list-inside ml-5">
                  <li><span className="font-bold">A* Algorithm:</span> Widely used for efficient pathfinding on a graph or grid.</li>
                  <li>Dijkstra's Algorithm, Breadth-First Search (BFS).</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Finite State Machines (FSMs):</span> A common way to model AI behavior by
                defining different states and transitions between them (e.g., Patrol, Chase, Attack).
              </li>
              <li>
                <span className="font-bold">Behavior Trees:</span> A more modular and flexible approach to
                designing complex AI behaviors.
              </li>
              <li>
                <span className="font-bold">Decision Trees/Making:</span> How AI characters make choices.
              </li>
              <li>
                <span className="font-bold">Flocking/Swarming:</span> Simulating group behaviors.
              </li>
              <li>Line of Sight and Hearing (Perception).</li>
              <li>Steering Behaviors (e.g., seeking, fleeing, wandering).</li>
            </ul>

            <p className="font-bold">Why it's Important:</p>
            <ul className="list-disc list-inside">
              <li>Creating believable and challenging enemies.</li>
              <li>Developing helpful or realistic NPC companions.</li>
              <li>Implementing dynamic and responsive game environments.</li>
              <li>Enhancing player immersion and engagement.</li>
            </ul>

            <p className="font-bold">Resources to Learn Game AI:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/LwS_2-M4D_8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Game AI Basics: Pathfinding with A* - Sebastian Lague
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/aR6wt6G-MUA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Introduction to Game AI - freeCodeCamp.org
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.redblobgames.com/pathfinding/a-star/introduction.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Red Blob Games - A* Pathfinding</span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://gameprogrammingpatterns.com/state.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Game Programming Patterns: State Pattern</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeAI}
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