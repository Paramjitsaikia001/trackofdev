import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function NextForReact({ closeNextForReact, Done }) {
   const Nexthandler = () => {
      Done();
      closeNextForReact();
   }
    const [isFullScreen, setFullScreen] = useState(false);
    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };
   return (
      <section className={getFullscreenClasses(isFullScreen)} style={{ boxShadow: "0 0 10px 0px #000000" }}>
         <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
            <div className='flex pb-4 justify-between items-center w-[100%]'>
               <span
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"
                        onClick={fullscreenHandler}
                    >
                        {getFullscreenIconName(isFullScreen)}
                    </span>
               <span onClick={closeNextForReact} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                  close
               </span>
            </div>
            <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Next.js</h2>
            <div className="flex flex-col gap-1">
               <p><span className="text-[#23daff] font-bold">Next.js</span> is a popular React framework for building server-side rendered (SSR) and static web applications. Developed and maintained by Vercel, Next.js provides a comprehensive solution for building fast, scalable, and SEO-friendly web applications.</p>

               <p>Next.js works by allowing developers to create pages that can be pre-rendered at build time (static generation) or on each request (server-side rendering). This approach ensures that web applications are highly performant and can handle dynamic content efficiently.</p>

               <p>Next.js also includes a wide range of features, such as file-based routing, API routes, and built-in CSS and Sass support, which help streamline the development process. It is designed to work seamlessly with React, making it easy for developers to build complex and interactive user interfaces.</p>

               <p>Learning Next.js is highly beneficial for web developers due to its growing popularity and adoption in the industry. Many companies, from startups to large enterprises, use Next.js for their web applications, making it a valuable skill in the job market.</p>

               <div className="flex flex-col my-5 gap-4">
                  <p className="font-bold">Resources to become an expert in Next.js:</p>
                  <div className="flex flex-col gap-4">
                     <div className="flex gap-3">
                        <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                        <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
                           <span className="text-[#28ffd4] underline">Next.js Documentation</span>
                        </a>
                     </div>
                     <div className="flex gap-3">
                        <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                        <a href="https://www.freecodecamp.org/news/the-next-js-handbook/" target="_blank" rel="noopener noreferrer">
                           <span className="text-[#28ffd4] underline">Next.js Handbook - freeCodeCamp</span>
                        </a>
                     </div>
                     <div className="flex gap-3 items-center">
                        <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                           play_arrow
                        </span>
                        <a href="https://youtu.be/mTz0GXj8NN0" target="_blank" rel="noopener noreferrer">
                           <span className="text-[#28ffd4] underline">Next.js Crash Course - Traversy Media</span>
                        </a>
                     </div>
                     <div className="flex gap-3 items-center">
                        <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                           play_arrow
                        </span>
                        <a href="https://youtu.be/1WmNXEVia8I" target="_blank" rel="noopener noreferrer">
                           <span className="text-[#28ffd4] underline">Next.js Tutorial for Beginners - freeCodeCamp.org</span>
                        </a>
                     </div>
                     <div className="flex gap-3 items-center">
                        <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                           play_arrow
                        </span>
                        <a href="https://youtu.be/Sklc_fQBmcs" target="_blank" rel="noopener noreferrer">
                           <span className="text-[#28ffd4] underline">Next.js Full Course - JavaScript Mastery</span>
                        </a>
                     </div>
                     <div className="flex gap-3 items-center">
                        <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                           play_arrow
                        </span>
                        <a href="https://youtu.be/IkOVe40Sy0U" target="_blank" rel="noopener noreferrer">
                           <span className="text-[#28ffd4] underline">Next.js & React - The Complete Guide - Academind</span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex justify-between">
               <button onClick={closeNextForReact} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
               <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
            </div>
         </div>
      </section>
   );
}