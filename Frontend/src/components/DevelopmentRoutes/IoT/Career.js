import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function CareerPage({ closeCareer, Done }) {
  const Nexthandler = () => {
    Done();
    closeCareer();
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
            onClick={closeCareer}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 13: Career Scaling 📈
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            You have the foundational skills and a portfolio of projects. This final stage is about
            transitioning from a hobbyist or student to a professional. It's where you learn how
            to scale your skills to a professional, industry-level career.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">Career & Scaling Concepts:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Deployment at Scale:</span> Learn the challenges of managing
                and updating thousands or millions of devices. Understand automated provisioning and
                firmware updates.
              </li>
              <li>
                <span className="font-bold">IoT Standards:</span> Get familiar with industry standards
                and organizations like OCF and oneM2M that ensure interoperability.
              </li>
              <li>
                <span className="font-bold">Emerging Technologies:</span> Study new technologies that
                impact IoT, such as 5G for faster connectivity and digital twins for creating virtual
                representations of physical assets.
              </li>
              <li>
                <span className="font-bold">Professional Networking:</span> Join online forums and local meetups
                to connect with other IoT professionals and learn about job opportunities.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.coursera.org/articles/how-to-become-an-iot-developer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    How to Become an IoT Developer - Coursera
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/kC6E86TfN7M"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Digital Twins Explained - IBM Technology
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://www.cisco.com/c/en/us/solutions/internet-of-things/what-is-5g-iot.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    What is 5G IoT? - Cisco
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeCareer}
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