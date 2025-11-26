import { useState, useContext } from "react";
import CodeEditor from "./codeEditor";
import Hyperpage from "./Htmlpage";
import Header from "../../layout/Header";
import CSSpage from "./CSSpage";
import Jspage from "./Javascriptpage";
import PackageManager from "./Packagemanager";
import NodeJSpage from "./NodeJs";
import Expresspage from "./expresspage";
import DBMSpage from "./DBMS";
import VersionControlSystems from "./Versioncontrol";
import FrontendProjectDeploymentpage from "./FrontendProjectDeploy";
import APIpage from "./APIpage";
import FullstackDeploymentpage from "./FullstackProjectDeployment";
import ProjectBuild from "./ProjectBuild";
import LibraryandFramework from "./LibraryandFramework";
import ReactPage from "./ReactPage";
import AngularPage from "./AngularPage";
import VuePage from "./VuePage";
import NextForReact from "./NextForReact";
import NustPage from "./NustPage";
import AngularUniversalPage from "./AngularUniversalPage";
import BootstrapPage from "./Bootstrap";
import Tailwindcss from "./Tailwindcss";
import MaterialUIPage from "./Material_UI";
import FullResources from "./FullResources";
import ReactContextAPI from "./reactContextAPI"
import ReduxPage from "./reduxpage";
import ZustandPage from "./ZustandPage";
import Development from "../../../hooks/developments.hooks";
import Reviews from "../../forms/Review";
import MobileNav from "../../navigation/mobilenav";

import ActivityContext from "../../../Context/activity.context";
import { toast } from "sonner";

// const roadmap = [
//     {
//         id: 1,
//         name: "Code Editor",
//         handler: "codeeditorhandler",
//         des: "A code editor is a software application designed for editing source code. Popular editors include VS Code, Sublime Text, and Atom."
//     },
//     {
//         id: 2,
//         name: "HTML",
//         handler: "HTMLhandler",
//         des: "HTML (HyperText Markup Language) is the standard language for creating web pages and web applications."
//     },
//     {
//         id: 3,
//         name: "CSS",
//         handler: "CSShandler",
//         des: "CSS (Cascading Style Sheets) styles and layouts web pages for visual appeal and responsiveness."
//     },
//     {
//         id: 4,
//         name: "JavaScript",
//         handler: "JShandler",
//         des: "JavaScript adds interactivity to web pages. Learn ES6+ syntax, DOM manipulation, and event handling."
//     },
//     {
//         id: 5,
//         name: "Version Control Systems",
//         handler: "VCShandler",
//         des: "Version control systems like Git help manage code changes and collaboration. Learn Git and platforms like GitHub."
//     },
//     {
//         id: 6,
//         name: "Frontend Project Deployment",
//         handler: "FrontendProjectDeployhandler",
//         des: "Deploy frontend projects using platforms like GitHub Pages, Netlify, or Vercel."
//     },
//     {
//         id: 7,
//         name: "Package Manager",
//         handler: "PMhandler",
//         des: "Package managers like npm or yarn help manage dependencies in your project."
//     },
//     {
//         id: 8,
//         name: "Node.js",
//         handler: "NodeJShandler",
//         des: "Node.js is a runtime environment for executing JavaScript outside the browser, mainly for server-side development."
//     },
//     {
//         id: 9,
//         name: "Express.js",
//         handler: "Expresshandler",
//         des: "Express.js is a minimal and flexible Node.js web application framework for building APIs and web servers."
//     },
//     {
//         id: 10,
//         name: "Database Management",
//         handler: "DBMShandler",
//         des: "Learn how to manage databases for efficient data storage and retrieval."
//     },
//     {
//         id: 11,
//         name: "APIs",
//         handler: "APIhandler",
//         des: "APIs allow software systems to communicate and share data. Learn RESTful API concepts."
//     },
//     {
//         id: 12,
//         name: "Full Stack Project Deployment",
//         handler: "fullstackDeploymenthandler",
//         des: "Deploy full stack applications using cloud platforms and CI/CD pipelines."
//     },
//     {
//         id: 13,
//         name: "Project Build",
//         handler: "ProjectBuildhandler",
//         des: "Build, test, and deploy your application from ideation to production."
//     },
//     {
//         id: 14,
//         name: "Library and Framework",
//         handler: "LibraryFrameworkhandler",
//         des: "Learn about libraries and frameworks to speed up development and maintain code quality."
//     },
//     {
//         id: 15,
//         name: "React",
//         handler: "Reacthandler",
//         des: "React is a popular JavaScript library for building user interfaces."
//     },
//     {
//         id: 16,
//         name: "Angular",
//         handler: "Angularhandler",
//         des: "Angular is a powerful framework for building scalable web applications."
//     },
//     {
//         id: 17,
//         name: "Vue",
//         handler: "Vuehandler",
//         des: "Vue.js is a progressive JavaScript framework for building user interfaces."
//     },
//     {
//         id: 18,
//         name: "Next.js (SSR for React)",
//         handler: "NextForReactHandler",
//         des: "Next.js enables server-side rendering and static site generation for React apps."
//     },
//     {
//         id: 19,
//         name: "Nuxt.js (SSR for Vue)",
//         handler: "NuxtHandler",
//         des: "Nuxt.js enables server-side rendering and static site generation for Vue apps."
//     },
//     {
//         id: 20,
//         name: "Angular Universal (SSR for Angular)",
//         handler: "AngularUniversalHandler",
//         des: "Angular Universal enables server-side rendering for Angular apps."
//     },
//     {
//         id: 21,
//         name: "Bootstrap",
//         handler: "BootstrapHandler",
//         des: "Bootstrap is a popular CSS framework for building responsive web designs."
//     },
//     {
//         id: 22,
//         name: "Tailwind CSS",
//         handler: "TailwindcssHandler",
//         des: "Tailwind CSS is a utility-first CSS framework for rapid UI development."
//     },
//     {
//         id: 23,
//         name: "Material-UI",
//         handler: "MaterialUIHandler",
//         des: "Material-UI is a React component library that implements Google's Material Design."
//     },
//     {
//         id: 24,
//         name: "React Context API",
//         handler: "ReactContextAPIhandler",
//         des: "React Context API provides a way to manage state globally in React apps."
//     },
//     {
//         id: 25,
//         name: "Redux",
//         handler: "Reduxhandler",
//         des: "Redux is a state management library for JavaScript apps, commonly used with React."
//     },
//     {
//         id: 26,
//         name: "Zustand",
//         handler: "zustandhandler",
//         des: "Zustand is a small, fast, and scalable state management solution for React."
//     },
// ];



export default function WebDevelopment() {
    const [activeId, setActiveId] = useState(null);

    // Activity context
    const { createActivity } = useContext(ActivityContext);

    // Step modals
    const [showCodeEditor, setCodeEditor] = useState(false);
    const [showHTML, setHTML] = useState(false);
    const [showCSS, setCSS] = useState(false);
    const [showJS, setJS] = useState(false);
    const [showPM, setPM] = useState(false);
    const [showNodeJS, setNodeJS] = useState(false);
    const [showExpress, setExpress] = useState(false);
    const [showDBMS, setDBMS] = useState(false);
    const [showVCS, setVCS] = useState(false);
    const [showFrontendProjectDeploy, setFrontendProjectDeploy] = useState(false);
    const [showAPI, setAPI] = useState(false);
    const [showfullstackDeployment, setfullstackDeployment] = useState(false);
    const [showProjectBuild, setProjectBuild] = useState(false);
    const [showLibraryFramework, setLibraryFramework] = useState(false);
    const [showReact, setReact] = useState(false);
    const [showAngular, setAngular] = useState(false);
    const [showVue, setVue] = useState(false);
    const [showNextForReact, setNextForReact] = useState(false);
    const [showNuxt, setNuxt] = useState(false);
    const [showAngularUniversal, setAngularUniversal] = useState(false);
    const [showBootstrap, setBootstrap] = useState(false);
    const [showTailwindcss, setTailwindcss] = useState(false);
    const [showMaterialUI, setMaterialUI] = useState(false);
    const [showReactContextAPI, setshowReactContextAPI] = useState(false);
    const [showReduxPage, setshowReduxPage] = useState(false);
    const [showZustandPage, setZustandPage] = useState(false);
    const [showFullResources, setFullResources] = useState(false);
    const [showDetails, setDetails] = useState(false);

    // Handlers
    const codeeditorhandler = () => setCodeEditor(!showCodeEditor);
    const HTMLhandler = () => setHTML(!showHTML);
    const CSShandler = () => setCSS(!showCSS);
    const JShandler = () => setJS(!showJS);
    const PMhandler = () => setPM(!showPM);
    const NodeJShandler = () => setNodeJS(!showNodeJS);
    const Expresshandler = () => setExpress(!showExpress);
    const DBMShandler = () => setDBMS(!showDBMS);
    const VCShandler = () => setVCS(!showVCS);
    const FrontendProjectDeployhandler = () => setFrontendProjectDeploy(!showFrontendProjectDeploy);
    const APIhandler = () => setAPI(!showAPI);
    const fullstackDeploymenthandler = () => setfullstackDeployment(!showfullstackDeployment);
    const ProjectBuildhandler = () => setProjectBuild(!showProjectBuild);
    const LibraryFrameworkhandler = () => setLibraryFramework(!showLibraryFramework);
    const Reacthandler = () => setReact(!showReact);
    const Angularhandler = () => setAngular(!showAngular);
    const Vuehandler = () => setVue(!showVue);
    const NextForReactHandler = () => setNextForReact(!showNextForReact);
    const NuxtHandler = () => setNuxt(!showNuxt);
    const AngularUniversalHandler = () => setAngularUniversal(!showAngularUniversal);
    const BootstrapHandler = () => setBootstrap(!showBootstrap);
    const TailwindcssHandler = () => setTailwindcss(!showTailwindcss);
    const MaterialUIHandler = () => setMaterialUI(!showMaterialUI);
    const FullResourcesHandler = () => setFullResources(!showFullResources);
    const DetailPageHandler = () => setDetails(!showDetails);
    const ReactContextAPIhandler = () => setshowReactContextAPI(!showReactContextAPI);
    const Reduxhandler = () => setshowReduxPage(!showReduxPage);
    const zustandhandler = () => setZustandPage(!showZustandPage);

    const handlers = {
        codeeditorhandler,
        HTMLhandler,
        CSShandler,
        JShandler,
        PMhandler,
        NodeJShandler,
        Expresshandler,
        DBMShandler,
        VCShandler,
        FrontendProjectDeployhandler,
        APIhandler,
        fullstackDeploymenthandler,
        ProjectBuildhandler,
        LibraryFrameworkhandler,
        Reacthandler,
        Angularhandler,
        Vuehandler,
        NextForReactHandler,
        NuxtHandler,
        AngularUniversalHandler,
        BootstrapHandler,
        TailwindcssHandler,
        MaterialUIHandler,
        ReactContextAPIhandler,
        Reduxhandler,
        zustandhandler,
    };

    const { data: roadmap, loading, error } = Development()
    console.log("Roadmap data:", roadmap?.[1]?.roadmapSteps);
    if (loading) {
        return <h1>loading</h1>
    }
    if (error) {
        return <h2 className='text-white'>Something went wrong!</h2>
    }

    const WebRoadmap = roadmap?.[1]?.roadmapSteps ?? [];

    // AddActivity: record completed step via ActivityContext
    const AddActivity = async (id) => {
        try {
            if (!WebRoadmap?.[id]) {
                console.warn("AddActivity: invalid step id", id);
                return;
            }
            const stepName = WebRoadmap[id].name;
            const roadmapId = roadmap?.[1]?.route ?? roadmap?.[1]?.title ?? "web-development";
            await createActivity({
                roadmpStepsId: stepName,
                roadmapId: roadmapId
            });
            toast.success(`${stepName} completed successfully!`);
        } catch (err) {
            console.error("AddActivity error", err);
            toast.error("Failed to record activity");
        }
    };

    // One-step test replaced by AddActivity usage
    const oneStepDone = () => AddActivity(0);

    console.log("Roadmap data:", roadmap?.[1]?.roadmapSteps?.[0]?.isDone);

    return (
        <section className="flex flex-col items-center justify-center h-full lg:w-[80%] w-[100%] gap-3 overflow-hidden">
            {/* Modals */}
            {showCodeEditor && <CodeEditor closeEditor={() => setCodeEditor(false)} Done={() => AddActivity(0)} />}
            {showHTML && <Hyperpage closeHTML={() => setHTML(false)} Done={() => AddActivity(1)} />}
            {showCSS && <CSSpage closeCSS={() => setCSS(false)} Done={() => AddActivity(2)} />}
            {showJS && <Jspage closejs={() => setJS(false)} Done={() => AddActivity(3)} />}
            {showPM && <PackageManager closePM={() => setPM(false)} Done={() => AddActivity(6)} />}
            {showNodeJS && <NodeJSpage closeNodeJS={() => setNodeJS(false)} Done={() => AddActivity(7)} />}
            {showExpress && <Expresspage closeexpress={() => setExpress(false)} Done={() => AddActivity(8)} />}
            {showDBMS && <DBMSpage closeDBMS={() => setDBMS(false)} Done={() => AddActivity(9)} />}
            {showVCS && <VersionControlSystems closeVCS={() => setVCS(false)} Done={() => AddActivity(4)} />}
            {showFrontendProjectDeploy && <FrontendProjectDeploymentpage closeFrotendProjectDeploy={() => setFrontendProjectDeploy(false)} Done={() => AddActivity(5)} />}
            {showAPI && <APIpage closeAPI={() => setAPI(false)} Done={() => AddActivity(10)} />}
            {showfullstackDeployment && <FullstackDeploymentpage closeDeployment={() => setfullstackDeployment(false)} Done={() => AddActivity(11)} />}
            {showProjectBuild && <ProjectBuild closeProjectBuild={() => setProjectBuild(false)} Done={() => AddActivity(12)} />}
            {showLibraryFramework && <LibraryandFramework closeLibraryFramework={() => setLibraryFramework(false)} Done={() => AddActivity(13)} />}
            {showReact && <ReactPage closeReact={() => setReact(false)} Done={() => AddActivity(14)} />}
            {showAngular && <AngularPage closeAngular={() => setAngular(false)} Done={() => AddActivity(15)} />}
            {showVue && <VuePage closeVue={() => setVue(false)} Done={() => AddActivity(16)} />}
            {showNextForReact && <NextForReact closeNextForReact={() => setNextForReact(false)} Done={() => AddActivity(17)} />}
            {showNuxt && <NustPage closeNuxt={() => setNuxt(false)} Done={() => AddActivity(18)} />}
            {showAngularUniversal && <AngularUniversalPage closeAngularUniversal={() => setAngularUniversal(false)} Done={() => AddActivity(19)} />}
            {showBootstrap && <BootstrapPage closeBootstrap={() => setBootstrap(false)} Done={() => AddActivity(20)} />}
            {showTailwindcss && <Tailwindcss closeTailwindcss={() => setTailwindcss(false)} Done={() => AddActivity(21)} />}
            {showMaterialUI && <MaterialUIPage closeMaterialUI={() => setMaterialUI(false)} Done={() => AddActivity(22)} />}
            {showFullResources && <FullResources closeFullResources={() => setFullResources(false)} />}
            {showReactContextAPI && <ReactContextAPI closeContextAPI={() => setshowReactContextAPI(false)} Done={() => AddActivity(23)} />}
            {showReduxPage && <ReduxPage closeRedux={() => setshowReduxPage(false)} Done={() => AddActivity(24)} />}
            {showZustandPage && <ZustandPage closeZustand={() => setZustandPage(false)} Done={() => AddActivity(25)} />}

            <div className='flex justify-center p-4 w-[100%]'>
                <Header />
            </div>

            {/* header  */}
            <div className="flex justify-center items-center gap-2 text-white text-xl border-b-2 border-white md:w-[90%] w-[100%]">
                <h1>FULL STACK WEB DEVELOPMENT</h1>
                <div className="relative inline-block">
                    <span
                        onClick={DetailPageHandler}
                        className="material-symbols-outlined hover:text-[#198de0] cursor-pointer"
                    >
                        help
                    </span>
                </div>
            </div>

            {/* Roadmap timeline */}
            <div className="conater relative w-full h-full">
                <div className="divider h-full items-center bg-white w-1 rounded-full absolute left-2 sm:left-[50%]"></div>
                <div className="flex flex-col justify-center w-full">
                    {WebRoadmap.map((item) => (
                        <div
                            key={item.id}
                            className={`flex items-center w-full my-4  ${item.id % 2 === 0 ? "sm:justify-end pl-4 pr-4" : "sm:justify-start pl-4 pr-4"
                                }`}
                        >
                            <div className={`w-[95%] sm:w-1/2 flex items-center h-fit sm:h-[8rem] `}>
                                <div
                                    className={`flex items-center w-full ${item.id % 2 === 0 ? "sm:justify-start " : "sm:justify-start sm:flex-row-reverse"
                                        }`}
                                >
                                    <div className="line w-[2rem] h-1 bg-white"></div>
                                    <div
                                        onClick={() => {
                                            if (item.handler) {
                                                handlers[item.handler]?.();
                                            }
                                        }}
                                        className={`relative w-[80%] sm:h-[5rem] text-center rounded-xl cursor-pointer bg-[#eeeeeedd] py-4 px-2 hover:bg-[#9aa3f6] transition-all duration-300`}
                                        onMouseEnter={() => setActiveId(item.id)}
                                        onMouseLeave={() => setActiveId(null)}
                                    >
                                        <h4 className="text-lg text-center font-semibold text-gray-800 ">{item.name}</h4>
                                        <div
                                            className={`overflow-hidden hidden sm:block transition-all duration-500 ease-in-out ${activeId === item.id ? "max-h-[500px] mt-2" : "max-h-0"
                                                }`}
                                        >
                                            <p className="text-sm text-gray-600 bg-white p-4 rounded-lg shadow-md">
                                                {item.des}
                                            </p>
                                        </div>
                                        <div
                                            className={` sm:hidden block transition-all duration-500 ease-in-out 
                                                `}
                                        >
                                            <p className="text-sm text-gray-600 bg-white p-4 rounded-lg shadow-md">
                                                {item.des}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Full Resources Button */}
            <div onClick={handlers.FullResourcesHandler} className="fixed bottom-[5rem] md:bottom-1 right-1 z-10">
                <button className="bg-[#198de0] hover:bg-[#ffff] px-3 py-3 rounded-2xl font-bold flex gap-2">
                    full course Resource
                    <span className="material-symbols-outlined">text_snippet</span>
                </button>
            </div>
            <Reviews />
            <MobileNav />
        </section>
    );
}