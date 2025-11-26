import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function CloudInfraPage({ closeCloudInfra, Done }) {
    const Nexthandler = () => {
        Done();
        closeCloudInfra();
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
                        onClick={closeCloudInfra}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    Cloud & Infrastructure in Backend Development
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">Cloud & Infrastructure</span> knowledge 
                        allows backend developers to design, deploy, and manage applications in scalable 
                        and resilient environments.  
                        Modern applications often rely on cloud platforms for compute, storage, networking, 
                        and deployment automation.
                    </p>

                    <p>
                        Mastering these concepts ensures your backend apps are **highly available, cost-efficient, and production-ready**.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">What to Learn:</p>
                        <ul className="list-disc list-inside">
                            <li>Cloud fundamentals (IaaS, PaaS, SaaS)</li>
                            <li>Major cloud providers (AWS, Azure, GCP)</li>
                            <li>Compute services (EC2, App Engine, Azure VM)</li>
                            <li>Serverless computing (AWS Lambda, Azure Functions)</li>
                            <li>Storage & Databases (S3, Cloud SQL, DynamoDB, CosmosDB)</li>
                            <li>Networking basics (VPC, load balancers, DNS)</li>
                            <li>Infrastructure as Code (Terraform, AWS CDK, Pulumi)</li>
                            <li>Containerization & Orchestration (Docker, Kubernetes, ECS, AKS, GKE)</li>
                            <li>CI/CD pipelines in the cloud</li>
                            <li>Monitoring & scaling in the cloud (CloudWatch, Azure Monitor, Stackdriver)</li>
                        </ul>

                        <p className="font-bold">Popular Tools & Platforms:</p>
                        <ul className="list-disc list-inside">
                            <li>AWS, Microsoft Azure, Google Cloud Platform</li>
                            <li>Docker & Kubernetes</li>
                            <li>Terraform / Pulumi (IaC)</li>
                            <li>NGINX, HAProxy (load balancing)</li>
                            <li>Cloudflare (DNS, CDN, security)</li>
                            <li>Heroku, Vercel, Netlify (PaaS deployment)</li>
                        </ul>

                        <p className="font-bold">Resources to Learn Cloud & Infrastructure:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://aws.amazon.com/getting-started/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        AWS Getting Started Guide
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://cloud.google.com/docs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Google Cloud Documentation
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/3hLmDS179YE"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        AWS Cloud Crash Course – freeCodeCamp
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/X48VuDVv0do"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Kubernetes Full Course – freeCodeCamp
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={closeCloudInfra}
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