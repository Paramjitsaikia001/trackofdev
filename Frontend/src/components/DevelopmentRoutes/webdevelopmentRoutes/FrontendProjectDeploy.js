import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function FrontendProjectDeploymentpage({ closeFrotendProjectDeploy, Done }) {
    const [isFullScreen, setFullScreen] = useState(false);

    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

    const nextHandler = () => {
        Done();
        closeFrotendProjectDeploy();
    };

    return (
        <section
            className={getFullscreenClasses(isFullScreen)}
            style={{ boxShadow: "0 0 10px 0px #000000" }}
        >
            <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    <span 
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden" 
                        onClick={fullscreenHandler}
                    >
                        {getFullscreenIconName(isFullScreen)}
                    </span>
                    <span onClick={closeFrotendProjectDeploy} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Frontend Project Deployment</h2>
                <div className="flex flex-col gap-2">
                    <p><span className="text-[#23daff] font-bold">Frontend project deployment (HTML, CSS, and JavaScript)</span> is the process of publishing your web application so users can access it online. It involves hosting the static files (HTML, CSS, JavaScript) on a server and configuring the domain for public access. Modern deployment platforms simplify this process by providing seamless integration with version control systems like GitHub and offering free or paid hosting solutions.</p>
                    <p>If a website were a human body, deployment would be its public presence, enabling others to see and interact with the final polished version of the project. Deployment ensures your project is available, performant, and accessible on the internet.</p>
                    <div className="projectideas flex flex-col gap-4">
                        <h1 className="font-bold">Projects  you can make using <span className="text-[#23daff]">HTML</span> ,<span className="text-[#23daff]">CSS</span> and <span className="text-[#23daff]">JavaScript</span>:</h1>
                        <ul className="flex flex-col gap-2 pl-8">
                            <li className="list-decimal"> Clone of any Website Frontend Part</li>
                            <li className="list-decimal"> Games using JavaScript Logic like - tic tac tao</li>
                            <li className="list-decimal">Own porfolio </li>
                            <li className="list-decimal">Calculator</li>
                            <li className="list-decimal text-[#ffd724]">Also try to deploy this project using github or other platforms</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3 text-md pt-4">
                        <h2 className="font-bold">Steps to Deploy Your HTML, CSS, and JS Project:</h2>
                        <ul className="flex flex-col gap-2 pl-5">
                            <li className="list-decimal flex flex-col gap-2">
                                <h4 className="font-bold">1.Prepare Your Files:</h4>
                                <ul className="flex flex-col gap-1 pl-6">
                                    <li className="list-disc">Ensure your project folder is well-organized, with all files (HTML, CSS, JavaScript, images, etc.) included and linked correctly.</li>
                                    <li className="list-disc">Test your project locally to confirm everything works as expected.</li>
                                </ul>
                            </li>
                            <li className="list-decimal flex flex-col gap-2">
                                <h4 className="font-bold">2.Choose a Hosting Platform:</h4>
                                <ul className="flex flex-col gap-1 pl-6">
                                    <li className="list-disc">For beginners, GitHub Pages is a free and simple option for hosting static projects.</li>
                                    <li className="list-disc">Alternatives include Netlify and Vercel, which offer additional features like custom domains and continuous deployment.</li>
                                </ul>
                            </li>
                            <li className="list-decimal flex flex-col gap-2">
                                <h4 className="font-bold">3.Deploy Your Project:</h4>
                                <ul className="flex flex-col gap-1 pl-6">
                                    <li className="list-disc">For GitHub Pages: Push your project to a repository and enable GitHub Pages in the repository settings.</li>
                                    <li className="list-disc">For Netlify: Drag and drop your project folder on the Netlify dashboard or link your GitHub repository for automatic deployment.</li>
                                    <li className="list-disc">For Vercel: Sign in, drag and drop your project, or connect your GitHub repository to deploy.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3 mt-4">
                        <h3 className="font-bold">Popular Deployment Platforms:</h3>
                        <ul className="flex flex-col gap-2 pl-5">
                            <li className="pl-2">
                                <h3 className="font-bold">1.GitHub Pages:
                                </h3>
                                <ul className="pl-5">
                                    <li className="list-disc">
                                        Free hosting for static websites directly from GitHub repositories.
                                    </li>
                                    <li className="list-disc">
                                        Simple setup by enabling Pages in the repository settings.</li>
                                    <li className="list-disc ">
                                        <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">
                                            <p className="text-[#1ef8ff] underline">GitHub Pages Guide</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="pl-2">
                                <h3 className="font-bold">2.Netlify:</h3>
                                <ul className="pl-5">
                                    <li className="list-disc">
                                        Free tier available with custom domain support.
                                    </li>
                                    <li className="list-disc">
                                        Automatic Git-based deployment.</li>
                                    <li className="list-disc">
                                        Supports features like serverless functions and continuous deployment.
                                    </li>
                                    <li className="list-disc ">
                                        <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
                                            <p className="text-[#1ef8ff] underline">Netlify Official Site</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="pl-2">
                                <h3 className="font-bold">3.Vercel:
                                </h3>

                                <ul className="pl-5">
                                    <li className="list-disc">
                                        Ideal for Next.js and other modern frameworks.
                                    </li>
                                    <li className="list-disc">
                                        One-click GitHub integration and preview environments.</li>
                                    <li className="list-disc">
                                        Fast and scalable edge network.
                                    </li>
                                    <li className="list-disc ">
                                        <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
                                            <p className="text-[#1ef8ff] underline">Vercel Official Site</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="pl-2">
                                <h3 className="font-bold">4.Firebase Hosting:</h3>
                                <ul className="pl-5">
                                    <li className="list-disc">
                                        Ideal for dynamic frontend projects and Progressive Web Apps (PWAs).
                                    </li>
                                    <li className="list-disc">
                                        Provides hosting, database, and analytics.</li>

                                    <li className="list-disc ">
                                        <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
                                            <p className="text-[#1ef8ff] underline">Firebase Hosting Documentation</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="pl-2">
                                <h3 className="font-bold">5.Surge:
                                </h3>
                                <ul className="pl-5">
                                    <li className="list-disc">
                                        Command-line-based deployment for static sites.
                                    </li>
                                    <li className="list-disc">
                                        Automatic Git-based deployment.</li>
                                    <li className="list-disc">
                                        Free for basic projects with custom domains.
                                    </li>
                                    <li className="list-disc ">
                                        <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
                                            <p className="text-[#1ef8ff] underline">Surge Official Site</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="resource flex flex-col gap-4 pt-4">

                        <h2 className="font-bold">Resources to Learn Frontend Deployment:                  </h2>
                        <div className="flex gap-3 items-center">
                            <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                play_arrow
                            </span>
                            <a href="https://youtu.be/Bzwlt3qf1dM?si=KEnBx9O6ICvpwcku" target="_blank" rel="noopener noreferrer">
                                <span className="text-[#28ffd4] underline">Deploy your project on GitHub for free. HTML/CSS/JS project. Static website.</span>
                            </a>
                        </div>
                        <div>
                            <p> Visit the Above platforms....</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={closeFrotendProjectDeploy} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={nextHandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}
