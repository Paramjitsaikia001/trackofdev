import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";
export default function PackageManager({ closePM, Done }) {
   const Nexthandler = () => {
       Done();
       closePM();
   }
  const [isFullScreen, setFullScreen] = useState(false);
    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };
    return (
        <section className={getFullscreenClasses(isFullScreen)} style={{boxShadow: "0 0 10px 0px #000000"}}>
            <div className="bg-[#0e1542] text-white pb-0 px-4  h-[100%]">
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    <span
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"
                        onClick={fullscreenHandler}
                    >
                        {getFullscreenIconName(isFullScreen)}
                    </span>

                    <span
                        onClick={closePM}
                        class="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
               <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Package Manager </h2>
               <div className="flex flex-col gap-1">
                   <p>A <span className="text-[#23daff] font-bold">package manager </span> is a tool that simplifies the process of installing, updating, and managing software dependencies in a project. For web development, package managers like **npm** (Node Package Manager) and **yarn** are widely used to manage libraries, frameworks, and tools required for building modern applications. They allow developers to easily integrate third-party code, automate dependency updates, and maintain consistency across projects.
                   </p>
                   <p>If a website were a human body, the package manager would be its supply chain, ensuring all necessary components (like organs and nutrients) are delivered and maintained efficiently. It streamlines the workflow by handling versioning, resolving conflicts, and enabling collaboration, making it a critical part of the development ecosystem.
                   </p>
                   <div className="flex flex-col my-5 gap-4">
                       <p className="font-bold">There is no need to learn more about Package manager But you should have idea about it:</p>
                       <p>You can learn after Nodejs or Expressjs</p>
                       <div className="flex flex-col gap-4">
                           <div className="flex gap-3">
                               <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                               <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management" target="_blank" rel="noopener noreferrer">
                                   <span className="text-[#28ffd4] underline">Package management basics-mozilla</span>
                               </a>
                           </div>
                     
                           <div className="flex gap-3 items-center">
                               <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                   play_arrow
                               </span>
                               <a href="https://youtu.be/0W8-3RwvJwc?si=AGUDSjo3WOle0LYC" target="_blank" rel="noopener noreferrer">
                                   <span className="text-[#28ffd4] underline">What are Package Managers? NPM, APT, Chocolatey, Homebrew and Many More by The Git Guild</span>
                               </a>
                           </div>
                           <div className="flex gap-3 items-center">
                               <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                   play_arrow
                               </span>
                               <a href="https://youtu.be/P3aKRdUyr0s?si=LL9Wq2EwjP8K4VEx" target="_blank" rel="noopener noreferrer">
                                   <span className="text-[#28ffd4] underline">What is NPM, and why do we need it? | Tutorial for beginners by Coder Coder</span>
                               </a>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="flex justify-between">
                   <button onClick={closePM} className=" px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                   <button onClick={Nexthandler} className=" px-4 py-2 bg-blue-600 text-white rounded">Done</button>
               </div>
           </div>
       </section>
   );
}
