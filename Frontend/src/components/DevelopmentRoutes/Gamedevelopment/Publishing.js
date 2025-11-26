import { useState } from 'react';
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function PublishingPage({ closePublishing, Done }) {
  const Nexthandler = () => {
    Done();
    closePublishing();
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
            onClick={closePublishing}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Game Publishing & Marketing
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Once your game is developed, the next crucial step is getting it into the hands of players.
            <span className="text-[#23daff] font-bold">Game publishing and marketing</span> involve
            preparing your game for release, distributing it through various platforms, and
            promoting it to your target audience. The video highlights platforms like the Google
            Play Store, Steam, and Epic Games Store [00:09:13].
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Platform-Specific Requirements:</span> Understanding the
                guidelines and technical requirements for each platform (e.g., submission process,
                age ratings, content policies).
              </li>
              <li>
                <span className="font-bold">Store Presence:</span> Creating compelling store pages with
                screenshots, trailers, and descriptions.
              </li>
              <li>
                <span className="font-bold">Legal Aspects:</span> Copyright, trademarks, End User
                License Agreements (EULAs), privacy policies.
              </li>
              <li>
                <span className="font-bold">Monetization Models:</span> Free-to-play, premium, in-app
                purchases, subscriptions.
              </li>
              <li>
                <span className="font-bold">Marketing & Promotion:</span>
                <ul className="list-circle list-inside ml-5">
                  <li>Building a community (Discord, social media).</li>
                  <li>Press kits and reaching out to game journalists/influencers.</li>
                  <li>Creating effective trailers and marketing assets.</li>
                  <li>Participating in game jams and exhibitions.</li>
                </ul>
              </li>
              <li>Post-launch support, updates, and community management.</li>
            </ul>

            <p className="font-bold">Popular Publishing Platforms:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">PC:</span> Steam, Epic Games Store, GOG.com, Itch.io.
              </li>
              <li>
                <span className="font-bold">Mobile:</span> Google Play Store (Android), Apple App Store (iOS).
              </li>
              <li>
                <span className="font-bold">Console:</span> PlayStation Store, Xbox Games Store, Nintendo eShop.
              </li>
              <li>
                <span className="font-bold">Itch.io:</span> Popular for indie developers and game jams.
              </li>
            </ul>

            <p className="font-bold">Resources to Learn Game Publishing & Marketing:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://partner.steamgames.com/doc/gettingstarted/onboarding"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Steamworks Documentation (Getting Started)</span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://play.google.com/console/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Google Play Console Help</span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/M_eX15f9R_c"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    How to Launch Your Indie Game - GDC Talk
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/jJqD-M02t8w"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Indie Game Marketing & PR Guide - Game Dev Academy
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://itch.io/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Itch.io Creator Docs</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closePublishing}
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