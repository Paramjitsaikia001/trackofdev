import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function AuthPage({ closeAuth, Done }) {
    const [isFullScreen, setFullScreen] = useState(false);

    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

    const Nexthandler = () => {
        Done();
        closeAuth();
    };

    return (
        <section
            className={getFullscreenClasses(isFullScreen)}
            style={{ boxShadow: "0 0 10px 0px #000000" }}
        >
            <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
                {/* Header controls */}
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    <span 
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden" 
                        onClick={fullscreenHandler}
                    >
                        {getFullscreenIconName(isFullScreen)}
                    </span>
                    <span onClick={closeAuth} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    Authentication & Authorization
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">Authentication</span> is the process of verifying 
                        <em> who the user is </em>, while 
                        <span className="text-[#23daff] font-bold"> Authorization</span> determines 
                        <em> what actions the user is allowed to perform </em>.  
                        Both are critical in backend development to secure APIs and protect data.
                    </p>

                    <p>
                        Implementing strong auth systems prevents unauthorized access and ensures only the right 
                        users can perform certain operations.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">What to Learn:</p>
                        <ul className="list-disc list-inside">
                            <li>Authentication vs Authorization (Difference)</li>
                            <li>Session-based Authentication</li>
                            <li>JWT (JSON Web Token)</li>
                            <li>OAuth 2.0 and OpenID Connect</li>
                            <li>API Key Authentication</li>
                            <li>Role-Based Access Control (RBAC)</li>
                            <li>Permission-Based Access Control</li>
                            <li>Single Sign-On (SSO)</li>
                            <li>Password Hashing (bcrypt, Argon2)</li>
                            <li>Best Practices (rate limiting, refresh tokens, logout, etc.)</li>
                        </ul>

                        <p className="font-bold">Tools & Libraries:</p>
                        <ul className="list-disc list-inside">
                            <li>Passport.js (Node.js)</li>
                            <li>JWT libraries (jsonwebtoken in Node.js)</li>
                            <li>Auth0 / Firebase Authentication</li>
                            <li>OAuth providers (Google, GitHub, Facebook login)</li>
                            <li>Helmet.js (security middleware)</li>
                        </ul>

                        <p className="font-bold">Resources to Learn Authentication & Authorization:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.passportjs.org/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Passport.js Documentation</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://jwt.io/introduction/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">JWT (JSON Web Token) Guide</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/7Q17ubqLfaM" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">JWT Authentication Tutorial – freeCodeCamp</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/oXxbB5kv9OA" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">OAuth 2.0 Simplified – Fireship</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button onClick={closeAuth} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}