import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function FullresourceDevOps({ closeFullResources, Done }) {
    const Nexthandler = () => {
        Done();
        closeFullResources();
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
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    <span className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"

                                            onClick={fullscreenHandler}

                                        >
            {getFullscreenIconName(isFullScreen)}
          </span>
                    <span onClick={closeFullResources} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Cloud Computing & DevOps</h2>

                {/* Intro */}
                <p className="mb-6">
                    This page provides a comprehensive guide with free resources and key points to help you become a professional in Cloud Computing and DevOps.
                </p>

                {/* Core Fundamentals */}
                <div className="border border-[#38bdf8] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#38bdf8] mb-2">1. Core Fundamentals</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Linux:** Cloud and DevOps are built on Linux. Master the command line, file systems, and shell scripting.</li>
                        <li>**Networking:** Understand basic networking concepts like the OSI model, DNS, and firewalls.</li>
                        <li>**Programming:** Learn a language like Python or Go for automation and scripting.</li>
                        <li>**Git:** Version control is essential for managing code and infrastructure.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/sWbXc_eJ8w4" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Linux for Beginners - FreeCodeCamp
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/rfscVS0vtbw" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Python Full Course for Beginners - FreeCodeCamp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Cloud & IaC */}
                <div className="border border-[#0288d1] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#0288d1] mb-2">2. Cloud Platforms & IaC</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Cloud Fundamentals:** Get familiar with AWS, Azure, or GCP. Understand IaaS, PaaS, and SaaS.</li>
                        <li>**Infrastructure as Code (IaC):** Learn to manage infrastructure with code. Terraform is the industry standard.</li>
                        <li>**Containers:** Master Docker for building and managing application containers.</li>
                        <li>**Orchestration:** Learn Kubernetes for scaling and managing containers in production.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/S_WwWz0aHgg" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                HashiCorp Terraform Course - FreeCodeCamp
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/X48VuDVv09A" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Kubernetes Course - FreeCodeCamp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Automation & Monitoring */}
                <div className="border border-[#7952b3] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#7952b3] mb-2">3. Automation & Monitoring</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**CI/CD:** Build automated pipelines for continuous integration and delivery using tools like Jenkins, GitLab CI/CD, or GitHub Actions.</li>
                        <li>**Configuration Management:** Use Ansible to automate server setup and configuration.</li>
                        <li>**Monitoring & Logging:** Implement monitoring with Prometheus and visualize with Grafana. Set up centralized logging with the ELK Stack.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/W0ff1u4p278" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                GitLab CI/CD Crash Course - The Net Ninja
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/TzI_pL4hKss" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                ELK Stack Crash Course - FreeCodeCamp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Advanced & Career */}
                <div className="border border-[#8f8f8f] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#8f8f8f] mb-2">4. Advanced & Career Prep</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Advanced Cloud:** Explore microservices, serverless, and advanced networking.</li>
                        <li>**SRE:** Learn Site Reliability Engineering principles like SLOs and error budgets.</li>
                        <li>**Certifications:** Aim for certifications like AWS Certified DevOps Engineer - Professional to validate your skills.</li>
                        <li>**Portfolio:** Build projects that showcase your entire CI/CD pipeline, from code to deployment.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://sre.google/books/" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Google SRE Books
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/FjIuCqD4fF4" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Exam Prep for AWS DevOps Pro - FreeCodeCamp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button onClick={closeFullResources} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}