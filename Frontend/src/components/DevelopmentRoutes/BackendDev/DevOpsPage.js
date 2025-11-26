import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function DeploymentPage({ closeDeploy, Done }) {
    const Nexthandler = () => {
        Done();
        closeDeploy();
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
                        onClick={closeDeploy}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    Deployment & DevOps for Backend Development
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">Deployment & DevOps</span> 
                        ensure your backend apps run reliably in production.  
                        They focus on **automation, scaling, monitoring, and CI/CD pipelines** 
                        to keep applications secure and performant.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">What to Learn:</p>
                        <ul className="list-disc list-inside">
                            <li>Basics of server setup (Linux, SSH, Nginx/Apache)</li>
                            <li>Hosting platforms (VPS, Cloud, Serverless)</li>
                            <li>CI/CD (Continuous Integration & Deployment)</li>
                            <li>Containers & Orchestration (Docker, Kubernetes)</li>
                            <li>Monitoring & Logging (Prometheus, Grafana, ELK stack)</li>
                            <li>Scaling: Load balancing & Auto-scaling</li>
                            <li>Environment variables & Secrets management</li>
                            <li>Infrastructure as Code (Terraform, Ansible)</li>
                        </ul>

                        <p className="font-bold">Popular Tools & Platforms:</p>
                        <ul className="list-disc list-inside">
                            <li>Heroku, Vercel, Netlify (simple deployments)</li>
                            <li>AWS, GCP, Azure (cloud providers)</li>
                            <li>Docker & Kubernetes (containers & orchestration)</li>
                            <li>GitHub Actions, GitLab CI, Jenkins (CI/CD)</li>
                            <li>Nginx / Apache (reverse proxy & load balancer)</li>
                            <li>PM2 (Node.js process manager)</li>
                        </ul>

                        <p className="font-bold">Resources to Learn Deployment & DevOps:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://docs.docker.com/get-started/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Docker Official Docs
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://kubernetes.io/docs/home/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Kubernetes Documentation
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/9zUHg7xjIqQ"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Docker & Kubernetes Crash Course – TechWorld with Nana
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/ScfC6Y8sZ2A"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        CI/CD with GitHub Actions – freeCodeCamp
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={closeDeploy}
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