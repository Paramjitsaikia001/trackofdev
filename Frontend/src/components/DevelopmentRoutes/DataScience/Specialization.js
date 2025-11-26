import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function SpecializationPage({ closeSpecialization, Done }) {
  const Nexthandler = () => {
    Done();
    closeSpecialization();
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
            onClick={closeSpecialization}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 7: Specialize & Learn Tools 🛠️
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Once you have a strong foundation, it's time to explore a specialized area of data science.
            This can make you a more valuable candidate and allow you to work on problems that truly
            interest you. You should also begin to learn about the tools used for deployment and
            production.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">Possible Specializations:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Natural Language Processing (NLP):</span> Focus on analyzing,
                understanding, and generating human language. Essential for chatbots, sentiment analysis, and LLMs.
              </li>
              <li>
                <span className="font-bold">Computer Vision (CV):</span> Work with image and video data.
                Used in facial recognition, object detection, and self-driving cars.
              </li>
              <li>
                <span className="font-bold">Data Engineering:</span> The process of building and maintaining
                the systems and infrastructure for collecting, storing, and processing data.
              </li>
              <li>
                <span className="font-bold">AI/MLOps:</span> Focus on deploying, monitoring, and managing
                machine learning models in production environments.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Additional Tools & Skills:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Cloud Platforms:</span> Learn how to use services on AWS, Azure,
                or GCP to store and process large datasets.
              </li>
              <li>
                <span className="font-bold">Deployment Frameworks:</span> Use tools like Flask, FastAPI, or
                Streamlit to turn your Python code into a web application.
              </li>
              <li>
                <span className="font-bold">Version Control:</span> Master Git and GitHub for collaborative
                development and code management.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/uFw_z9sU0xI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    NLP Full Course - freeCodeCamp.org
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/p60rN-z_J8M"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Computer Vision Full Course - freeCodeCamp.org
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://streamlit.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Streamlit Documentation</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeSpecialization}
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