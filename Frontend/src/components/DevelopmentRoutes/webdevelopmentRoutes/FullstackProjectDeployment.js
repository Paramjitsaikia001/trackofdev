import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function FullstackDeploymentpage({ closeDeployment, Done }) {
    const [isFullScreen, setFullScreen] = useState(false);

    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

    const nextHandler = () => {
        Done();
        closeDeployment();
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
                    <span onClick={closeDeployment} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Fullstack Project Deployment</h2>
                <div className="flex flex-col gap-1">
                    <p>Deploying a full stack web project involves several steps, from setting up your server to configuring your database and deploying your frontend and backend code. Here are the steps and resources to help you deploy your project successfully.</p>

                    <div className="section mt-4">
                        <h3 className="text-xl mb-2">Step 1: Choose a Hosting Provider</h3>
                        <p>Select a hosting provider that suits your project's needs. Popular options include:</p>
                        <ul className="list-disc list-inside">
                            <li><a href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Heroku</a></li>
                            <li><a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Netlify</a></li>
                            <li><a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Vercel</a></li>
                            <li><a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">AWS</a></li>
                            <li><a href="https://azure.microsoft.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Azure</a></li>
                        </ul>
                    </div>

                    <div className="section mt-4">
                        <h3 className="text-xl mb-2">Step 2: Set Up Your Server</h3>
                        <p>Configure your server to host your backend and frontend applications. This may involve setting up a virtual machine, container, or serverless function.</p>
                        <h4 className="text-lg mt-2">Resources:</h4>
                        <ul className="list-disc list-inside">
                            <li><a href="https://www.digitalocean.com/community/tutorials" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">DigitalOcean Tutorials</a></li>
                            <li><a href="https://docs.docker.com/get-started/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Docker Get Started</a></li>
                            <li><a href="https://aws.amazon.com/getting-started/hands-on/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">AWS Hands-On Tutorials</a></li>
                        </ul>
                    </div>

                    <div className="section mt-4">
                        <h3 className="text-xl mb-2">Step 3: Configure Your Database</h3>
                        <p>Set up your database and ensure it is accessible from your server. Popular database options include:</p>
                        <ul className="list-disc list-inside">
                            <li>SQL Databases (e.g., PostgreSQL, MySQL)</li>
                            <li>NoSQL Databases (e.g., MongoDB, Firebase)</li>
                        </ul>
                        <h4 className="text-lg mt-2">Resources:</h4>
                        <ul className="list-disc list-inside">
                            <li><a href="https://www.postgresql.org/docs/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">PostgreSQL Documentation</a></li>
                            <li><a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">MySQL Documentation</a></li>
                            <li><a href="https://docs.mongodb.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">MongoDB Documentation</a></li>
                            <li><a href="https://firebase.google.com/docs" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Firebase Documentation</a></li>
                        </ul>
                    </div>

                    <div className="section mt-4">
                        <h3 className="text-xl mb-2">Step 4: Deploy Your Backend</h3>
                        <p>Deploy your backend code to your server. Ensure your API endpoints are accessible and your server is running smoothly.</p>
                        <h4 className="text-lg mt-2">Resources:</h4>
                        <ul className="list-disc list-inside">
                            <li><a href="https://devcenter.heroku.com/articles/getting-started-with-nodejs" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Heroku - Getting Started with Node.js</a></li>
                            <li><a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/nodejs-getstarted.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">AWS Elastic Beanstalk - Node.js</a></li>
                            <li><a href="https://www.digitalocean.com/community/tutorials/how-to-deploy-a-node-js-application-on-ubuntu-20-04" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">DigitalOcean - Deploy a Node.js Application</a></li>
                        </ul>
                    </div>

                    <div className="section mt-4">
                        <h3 className="text-xl mb-2">Step 5: Deploy Your Frontend</h3>
                        <p>Deploy your frontend code to your server or a static site hosting service. Ensure your frontend is connected to your backend API.</p>
                        <h4 className="text-lg mt-2">Resources:</h4>
                        <ul className="list-disc list-inside">
                            <li><a href="https://docs.netlify.com/get-started/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Netlify - Get Started</a></li>
                            <li><a href="https://vercel.com/docs" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Vercel Documentation</a></li>
                            <li><a href="https://create-react-app.dev/docs/deployment/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Create React App - Deployment</a></li>
                        </ul>
                    </div>

                    <div className="section mt-4">
                        <h3 className="text-xl mb-2">Step 6: Monitor and Maintain</h3>
                        <p>Set up monitoring and logging for your application to ensure it runs smoothly. Regularly update your dependencies and fix any issues that arise.</p>
                        <h4 className="text-lg mt-2">Resources:</h4>
                        <ul className="list-disc list-inside">
                            <li><a href="https://docs.datadoghq.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Datadog Documentation</a></li>
                            <li><a href="https://www.elastic.co/guide/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Elastic Stack Documentation</a></li>
                            <li><a href="https://aws.amazon.com/cloudwatch/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">AWS CloudWatch</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between mt-6">
                    <button onClick={closeDeployment} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={nextHandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}