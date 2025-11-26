import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function SecurityPage({ closeSecurity, Done }) {
    const Nexthandler = () => {
        Done();
        closeSecurity();
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
                        onClick={closeSecurity}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    Security in Backend Development
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">Security</span> is one of the most 
                        critical aspects of backend development. A single vulnerability can lead 
                        to data leaks, financial loss, and broken trust with users.
                    </p>

                    <p>
                        Mastering backend security ensures your systems are robust, scalable, 
                        and resilient against common cyberattacks.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">What to Learn:</p>
                        <ul className="list-disc list-inside">
                            <li>Authentication & Authorization best practices</li>
                            <li>Secure password storage (bcrypt, Argon2)</li>
                            <li>OWASP Top 10 security risks</li>
                            <li>Input validation & sanitization</li>
                            <li>CSRF, XSS, SQL Injection, and prevention techniques</li>
                            <li>HTTPS, TLS/SSL encryption</li>
                            <li>Rate limiting & brute force protection</li>
                            <li>Environment variables & secret management</li>
                            <li>Secure API design (CORS, JWT, OAuth2)</li>
                            <li>Logging, monitoring & intrusion detection</li>
                        </ul>

                        <p className="font-bold">Popular Tools & Libraries:</p>
                        <ul className="list-disc list-inside">
                            <li>Helmet.js (security headers)</li>
                            <li>bcrypt / Argon2 (password hashing)</li>
                            <li>jsonwebtoken (JWT for tokens)</li>
                            <li>OAuth2.0 / OpenID Connect (Auth standards)</li>
                            <li>CSURF (CSRF protection)</li>
                            <li>Rate-limiter-flexible / Nginx rate limiting</li>
                            <li>Vault / AWS Secrets Manager</li>
                        </ul>

                        <p className="font-bold">Resources to Learn Security:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://owasp.org/Top10/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        OWASP Top 10 Security Risks
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://cheatsheetseries.owasp.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        OWASP Cheat Sheet Series
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/qqH2kArlT4w"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Web Security Crash Course – freeCodeCamp
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/j0IYCyBdzfA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Node.js Security Best Practices – Fireship
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={closeSecurity}
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