import { useState } from 'react';
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function GitPage({ closeGit, Done }) {
  const Nexthandler = () => {
    Done();
    closeGit();
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
            onClick={closeGit}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Version Control with Git
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            <span className="text-[#23daff] font-bold">Git</span> is a distributed version control
            system essential for tracking changes in code, collaborating with teams, and managing
            different versions of your game project. In game development, where multiple people
            (programmers, artists, designers) often work on the same project, Git and platforms
            like GitHub are indispensable for maintaining order and preventing conflicts. The video
            explicitly states the need to learn Git for collaboration [00:06:34].
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Basic Git Commands:</span> `git init`, `git add`, `git commit`,
                `git status`, `git log`.
              </li>
              <li>
                <span className="font-bold">Branching and Merging:</span> `git branch`, `git checkout`,
                `git merge`, `git rebase`.
              </li>
              <li>
                <span className="font-bold">Remote Repositories:</span> `git clone`, `git push`, `git pull`,
                `git fetch` (especially with GitHub or GitLab).
              </li>
              <li>Resolving merge conflicts.</li>
              <li>Understanding `.gitignore` for game project specific files.</li>
              <li>Collaborative workflows.</li>
            </ul>

            <p className="font-bold">Popular Tools & Platforms:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Git:</span> The core version control system.
              </li>
              <li>
                <span className="font-bold">GitHub:</span> A popular web-based hosting service for Git
                repositories, offering collaboration features.
              </li>
              <li>
                <span className="font-bold">GitLab:</span> Another comprehensive platform for Git
                repositories, offering CI/CD and other DevOps features.
              </li>
              <li>
                <span className="font-bold">Bitbucket:</span> A Git repository management solution often
                used with Jira for project management.
              </li>
              <li>
                <span className="font-bold">Sourcetree / GitKraken:</span> Graphical User Interfaces (GUIs)
                for Git to visualize and manage repositories.
              </li>
            </ul>

            <p className="font-bold">Resources to Learn Git:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://git-scm.com/doc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">Git Official Documentation</span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/RGOj5yH7evk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Git & GitHub Crash Course - freeCodeCamp.org
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://docs.github.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">GitHub Docs</span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                  play_arrow
                </span>
                <a
                  href="https://youtu.be/qcjRj4lQ7jM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Learn Git in 10 Minutes - CodeWithHarry (as suggested in video [00:06:42])
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeGit}
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