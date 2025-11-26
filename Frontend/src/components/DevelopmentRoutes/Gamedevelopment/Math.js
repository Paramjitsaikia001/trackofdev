import { useState } from 'react';
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function MathPage({ closeMath, Done }) {
  const Nexthandler = () => {
    Done();
    closeMath();
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
            onClick={closeMath}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Understand Game Physics & Math
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            <span className="text-[#23daff] font-bold">Mathematics and Physics</span> are the backbone
            of realistic game interactions and simulations. From calculating projectile trajectories
            to simulating character movement and collisions, a solid understanding of these
            disciplines is crucial. The video emphasizes the need to understand 2D/3D coordinate
            systems, projectile motion, distance, and velocity to accurately simulate real-world
            physics [00:07:45].
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">What to Learn (Key Concepts):</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Linear Algebra:</span> Vectors (addition, subtraction,
                dot product, cross product), Matrices (transformations, rotations, scaling).
              </li>
              <li>
                <span className="font-bold">Trigonometry:</span> Sine, Cosine, Tangent for angles,
                rotations, and directions.
              </li>
              <li>
                <span className="font-bold">Calculus (Basic):</span> Understanding rates of change
                (velocity, acceleration) and integration for accumulated effects.
              </li>
              <li>
                <span className="font-bold">2D/3D Coordinate Systems:</span> How objects are positioned
                and oriented in space [00:07:50].
              </li>
              <li>
                <span className="font-bold">Kinematics:</span> Distance, velocity, acceleration, and
                projectile motion [00:07:59].
              </li>
              <li>
                <span className="font-bold">Newtonian Physics:</span> Forces, mass, gravity, friction.
              </li>
              <li>Collision Detection principles.</li>
              <li>Quaternions (for advanced rotations in 3D).</li>
            </ul>

            <p className="font-bold">Why it's Crucial:</p>
            <ul className="list-disc list-inside">
              <li>Realistic movement of characters and objects.</li>
              <li>Accurate projectile paths (e.g., bullets, arrows).</li>
              <li>Implementing gravity, friction, and other environmental forces.</li>
              <li>Controlling camera movements and object transformations.</li>
              <li>Developing AI behaviors that interact realistically with the game world.</li>
            </ul>

            <p className="font-bold">Resources to Learn Game Physics & Math:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/f5gK0y5f0qQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Mathematics for Game Developers - unity3d.com
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/MGU5B59V0hU"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    3D Math Primer for Game Programmers - GDC Talk
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.khanacademy.org/math/algebra-basics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Khan Academy (Algebra, Trigonometry, Calculus)</span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://openstax.org/subjects/science"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">OpenStax Physics (College Level)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeMath}
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