import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function TestingPage({ closeTesting, Done }) {
    const Nexthandler = () => {
        Done();
        closeTesting();
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
                    <span onClick={closeTesting} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Testing & Quality Assurance</h2>

                {/* Intro */}
                <p className="mb-6">
                    **Testing** ensures reliable, bug-free applications. Learn Jest, React Testing Library, or Cypress for unit and end-to-end testing to validate functionality and enhance user experience in production environments.
                </p>

                {/* Unit & Component Testing */}
                <div className="border border-[#38bdf8] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#38bdf8] mb-2">Unit & Component Testing (Jest, RTL)</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Jest**: A powerful JavaScript testing framework with a focus on simplicity.</li>
                        <li>**React Testing Library (RTL)**: A library for testing React components from a user's perspective.</li>
                        <li>Learn to test individual functions, components, and hooks in isolation.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://jestjs.io/docs/getting-started" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Jest Official Docs
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/u95C_F8-lXw" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                React Testing Library Tutorial - The Net Ninja
                            </a>
                        </div>
                    </div>
                </div>

                {/* End-to-End Testing */}
                <div className="border border-[#0288d1] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#0288d1] mb-2">End-to-End (E2E) Testing (Cypress)</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Cypress**: A popular E2E testing framework that runs tests in a real browser.</li>
                        <li>Simulate user behavior and test entire application flows from start to finish.</li>
                        <li>Ideal for validating critical user journeys and integrations.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://docs.cypress.io/guides/overview/why-cypress" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Cypress Official Docs
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/W8QyY1nE8zM" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Cypress Crash Course - Traversy Media
                            </a>
                        </div>
                    </div>
                </div>

                {/* Best Practices */}
                <div className="border border-[#7952b3] rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-[#7952b3] mb-2">Best Practices</h3>
                    <ul className="list-disc list-inside mb-3">
                        <li>**Test Pyramid**: Understand the balance between unit, integration, and E2E tests.</li>
                        <li>**TDD (Test-Driven Development)**: Write tests before you write code to guide development.</li>
                        <li>**Mocking**: Learn to mock API calls and external services to isolate your tests.</li>
                    </ul>
                    <p className="font-bold">Resources:</p>
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex gap-3">
                            <span className="bg-[#3348ff] text-white px-2 rounded-md">doc</span>
                            <a href="https://kentcdodds.com/blog/unit-vs-integration-vs-e2e-tests" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                Unit vs. Integration vs. E2E Tests - Kent C. Dodds
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="material-symbols-outlined px-[10px] bg-red-600 text-white rounded-md">play_arrow</span>
                            <a href="https://youtu.be/J5XNCl4m5dY" target="_blank" rel="noopener noreferrer" className="text-[#28ffd4] underline">
                                What is TDD? - Traversy Media
                            </a>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button onClick={closeTesting} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}