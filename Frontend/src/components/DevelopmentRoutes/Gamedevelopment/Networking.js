import { useState } from 'react';
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function NetworkingPage({ closeNetworking, Done }) {
  const Nexthandler = () => {
    Done();
    closeNetworking();
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
            onClick={closeNetworking}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Networking for Multiplayer Games
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Developing <span className="text-[#23daff] font-bold">multiplayer games</span> requires
            a strong understanding of networking principles. This involves transmitting data
            between players' computers over a local network or the internet, ensuring a smooth and
            synchronized experience. The video emphasizes the need to understand how to transmit
            data across a network for multiplayer functionality [00:08:41].
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Network Protocols:</span> TCP (reliable) vs. UDP (unreliable, faster).
                UDP is often preferred for game data like player positions due to its speed.
              </li>
              <li>
                <span className="font-bold">Client-Server Architecture:</span> Understanding how clients
                (players' games) communicate with a central server.
              </li>
              <li>
                <span className="font-bold">Peer-to-Peer (P2P) Networking:</span> Where clients communicate
                directly with each other (less common for large-scale games).
              </li>
              <li>
                <span className="font-bold">Data Synchronization:</span> Ensuring all players see the same
                game state (e.g., character positions, actions).
              </li>
              <li>
                <span className="font-bold">Latency and Lag Compensation:</span> Techniques to minimize the
                impact of network delays.
              </li>
              <li>
                <span className="font-bold">Serialization/Deserialization:</span> Converting game data into
                a format for network transmission and back again.
              </li>
              <li>Security considerations for multiplayer games.</li>
            </ul>

            <p className="font-bold">Popular Tools & Frameworks:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Unity Netcode / Mirror:</span> Networking solutions for Unity.
              </li>
              <li>
                <span className="font-bold">Unreal Engine Networking:</span> Built-in networking features of Unreal.
              </li>
              <li>
                <span className="font-bold">Photon PUN / Fusion:</span> Third-party networking solutions
                popular for indie games.
              </li>
              <li>
                <span className="font-bold">RakNet / ENet:</span> Low-level networking libraries.
              </li>
            </ul>

            <p className="font-bold">Resources to Learn Networking:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/U6QGX5vB398"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Introduction to Networking for Game Development - freeCodeCamp.org
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://docs.unity3d.com/Packages/com.unity.netcode.for.gameobjects@1.0/manual/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Unity Netcode Documentation</span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://docs.unrealengine.com/5.0/en-US/networking-and-multiplayer-in-unreal-engine/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Unreal Engine Networking Docs</span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/Wj8F2jS5XQk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Multiplayer Game Development in Unity - Dapper Dino
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeNetworking}
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