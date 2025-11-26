import { useState } from 'react';
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function GraphicsPage({ closeGraphics, Done }) {
  const Nexthandler = () => {
    Done();
    closeGraphics();
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
            onClick={closeGraphics}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Graphics Processing
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            <span className="text-[#23daff] font-bold">Graphics Processing</span> involves how games
            render visual elements on screen. While game engines handle much of this, understanding
            the underlying principles allows for deeper optimization, custom effects, and troubleshooting.
            This is particularly relevant for those aiming to specialize in rendering or create
            cutting-edge visual experiences. The video mentions understanding how OpenGL, CUDA, and
            shaders work [00:08:33].
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Rendering Pipeline:</span> The steps from 3D models to 2D screen pixels.
              </li>
              <li>
                <span className="font-bold">Shaders:</span> Programs that run on the GPU to define how
                objects look (vertex shaders, fragment/pixel shaders).
              </li>
              <li>
                <span className="font-bold">Graphics APIs:</span>
                <ul className="list-circle list-inside ml-5">
                  <li><span className="font-bold">OpenGL:</span> A cross-platform graphics API.</li>
                  <li><span className="font-bold">DirectX:</span> Microsoft's graphics API for Windows and Xbox.</li>
                  <li><span className="font-bold">Vulkan:</span> A low-overhead, cross-platform 3D graphics and compute API.</li>
                  <li><span className="font-bold">Metal:</span> Apple's low-overhead graphics API.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Texture Mapping:</span> Applying images to 3D models.
              </li>
              <li>
                <span className="font-bold">Lighting Models:</span> How light interacts with surfaces (Phong, PBR).
              </li>
              <li>
                <span className="font-bold">Post-processing Effects:</span> Bloom, anti-aliasing, depth of field.
              </li>
              <li>
                <span className="font-bold">CUDA/GPU Programming (Advanced):</span> For highly parallel computations, though often abstracted by engines.
              </li>
            </ul>

            <p className="font-bold">Why it's Important:</p>
            <ul className="list-disc list-inside">
              <li>Creating visually appealing and performant games.</li>
              <li>Optimizing graphics for different hardware.</li>
              <li>Implementing custom visual effects and unique art styles.</li>
              <li>Understanding bottlenecks in rendering.</li>
            </ul>

            <p className="font-bold">Resources to Learn Graphics Processing:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://learnopengl.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">LearnOpenGL.com</span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/K-8gRk_M-F4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Computer Graphics Tutorial - freeCodeCamp.org
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.scratchapixel.com/index.php"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Scratchapixel 2.0 - Computer Graphics from Scratch</span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://raytracing.github.io/books/RayTracingInOneWeekend.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Ray Tracing in One Weekend (book)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeGraphics}
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