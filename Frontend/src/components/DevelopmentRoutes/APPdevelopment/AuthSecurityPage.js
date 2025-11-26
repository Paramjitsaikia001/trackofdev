import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function AuthSecurityPage({ closeAuth, Done }) {
    const Nexthandler = () => {
        Done();
        closeAuth();
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
                        onClick={closeAuth}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    Authentication & Security
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">Authentication & Security</span> 
                        ensures only authorized users can access your app while keeping 
                        sensitive data protected. Mobile apps must combine secure login 
                        methods with proper encryption and safe storage practices.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Core Authentication Methods:</p>
                        <ul className="list-disc list-inside">
                            <li>Email & Password Authentication</li>
                            <li>Social Logins (Google, Facebook, Apple Sign-In, GitHub)</li>
                            <li>Multi-Factor Authentication (MFA)</li>
                            <li>Biometric Authentication (Fingerprint, FaceID)</li>
                        </ul>

                        <p className="font-bold">Security Concepts to Master:</p>
                        <ul className="list-disc list-inside">
                            <li>JWT (JSON Web Tokens) & Refresh Tokens</li>
                            <li>OAuth 2.0 & OpenID Connect</li>
                            <li>Secure Storage (Keychain for iOS, Keystore for Android, SecureStore)</li>
                            <li>Encrypted Communication (HTTPS, SSL/TLS)</li>
                            <li>Protecting API keys & environment variables</li>
                            <li>Preventing common attacks (XSS, CSRF, SQL Injection, Man-in-the-Middle)</li>
                        </ul>

                        <p className="font-bold">Popular Libraries & Tools:</p>
                        <ul className="list-disc list-inside">
                            <li><span className="font-semibold">React Native</span>: Firebase Auth, Auth0 SDK, react-native-keychain</li>
                            <li><span className="font-semibold">Flutter</span>: firebase_auth, google_sign_in, local_auth, flutter_secure_storage</li>
                        </ul>

                        <p className="font-bold">Best Practices:</p>
                        <ul className="list-disc list-inside">
                            <li>Never store passwords in plain text</li>
                            <li>Use HTTPS for all network requests</li>
                            <li>Implement token expiration and refresh flows</li>
                            <li>Secure sensitive files & keys in environment configs</li>
                            <li>Regularly audit and update dependencies</li>
                        </ul>

                        <p className="font-bold">Resources to Learn:</p>
                        <div className="flex flex-col gap-4">
                            {/* Firebase Auth Docs */}
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://firebase.google.com/docs/auth"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Firebase Authentication Docs
                                    </span>
                                </a>
                            </div>
                            {/* Auth0 Docs */}
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://auth0.com/docs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Auth0 Authentication Docs
                                    </span>
                                </a>
                            </div>
                            {/* YouTube Tutorials */}
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/ql4J6SpLXZA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        React Native Firebase Authentication Tutorial – Programming with Mash
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/PKwu15ldZ7k"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Flutter Firebase Authentication Tutorial – The Net Ninja
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={closeAuth}
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