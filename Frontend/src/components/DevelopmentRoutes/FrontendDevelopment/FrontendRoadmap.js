import { useState, useContext } from "react";
import Header from "../../layout/Header";
import MobileNav from "../../navigation/mobilenav";
import HTMLPage from "../webdevelopmentRoutes/Htmlpage"
import CSSPage from "../webdevelopmentRoutes/CSSpage"
import Jspage from "../webdevelopmentRoutes/Javascriptpage";
import VersionControl from "../webdevelopmentRoutes/Versioncontrol"
import FrontendFrameworksPage from "./FrontendFW";
import CSSFrameworksPage from "./CSSFW";
import WebAnimationPage from "./WebAnimation";
import AdvancedJavaScriptPage from "./AdvancedJavaScriptPage";
import BuildToolsPage from "./BuildTools";
import StateManagementPage from "./StateMang";
import TypeScriptPage from "./TypeScript";
import TestingPage from "./TestingPage";
import PerformanceOptimizationPage from "./Perfomance";
import ThreeDModelingPage from "./Treedmodel";
import AdFrameworkPage from "./AdFramework";
import UIUX from "./UIXPric";
import Jobprep from "./PortJOB";
import Continouslearn from "./Continous";
import FullResource from "./FullResource";
import Development from "../../../hooks/developments.hooks";

import ActivityContext from "../../../Context/activity.context";
import { toast } from "sonner";

export default function FrontendRoadmap() {
    const [activeId, setActiveId] = useState(null);
    const { createActivity } = useContext(ActivityContext);

    const [showhtmlpage, sethtmlpage] = useState(false);
    const [showcsspage, setcsspage] = useState(false)
    const [showjspage, setjspage] = useState(false)
    const [showversioncontrolpage, setversioncontrolpage] = useState(false)
    const [showadvancejspage, setadvancejspage] = useState(false)
    const [showfrontendFWpage, setfrontendFWpage] = useState(false)
    const [showcssFWpage, setcssFWpage] = useState(false)
    const [showWebanimation, setWebanimation] = useState(false)
    const [showbuildtoolspage, setbuildtoolspage] = useState(false)
    const [showstatemanagementpage, setstatemanagementpage] = useState(false)
    const [showtypescriptpage, settypescriptpage] = useState(false)
    const [showtestingpage, settestingpage] = useState(false)
    const [showperformancepage, setperformancepage] = useState(false)
    const [show3dmodelingpage, set3dmodelingpage] = useState(false)
    const [showadframworks, setadframworks] = useState(false)
    const [showuiux, setuiux] = useState(false)
    const [showjobprep, setjobprep] = useState(false)
    const [showcontinouslearn, setcontinouslearn] = useState(false)
    const [showfullresource, setfullresource] = useState(false)

    const htmlpagehandler = () => {
        sethtmlpage(!showhtmlpage);
    }
    const csspagehandler = () => {
        setcsspage(!showcsspage);
    }
    const jspagehandler = () => {
        setjspage(!showjspage);
    }
    const versioncontrolpagehandler = () => {
        setversioncontrolpage(!showversioncontrolpage);
    }
    const advancejspagehandler = () => {
        setadvancejspage(!showadvancejspage);
    }
    const frontendFWpagehandler = () => {
        setfrontendFWpage(!showfrontendFWpage);
    }
    const cssFWpagehandler = () => {
        setcssFWpage(!showcssFWpage);
    }
    const webanimationpagehandler = () => {
        setWebanimation(!showWebanimation);
    }
    const buildtoolspagehandler = () => {
        setbuildtoolspage(!showbuildtoolspage);
    }
    const statemanagementpagehandler = () => {
        setstatemanagementpage(!showstatemanagementpage);
    }
    const typescriptpagehandler = () => {
        settypescriptpage(!showtypescriptpage);
    }
    const testingpagehandler = () => {
        settestingpage(!showtestingpage);
    }
    const performancepagehandler = () => {
        setperformancepage(!showperformancepage);
    }
    const modelingpagehandler = () => {
        set3dmodelingpage(!show3dmodelingpage);
    }
    const Adframworkshandler = () => {
        setadframworks(!showadframworks);
    }
    const uiuxpagehandler = () => {
        setuiux(!showuiux);
    }
    const jobpreppagehandler = () => {
        setjobprep(!showjobprep);
    }
    const continouslearnpagehandler = () => {
        setcontinouslearn(!showcontinouslearn);
    }
    const fullresourcehandler = () => {
        setfullresource(!showfullresource);
    }

    const handlers =
    {
        htmlpagehandler,
        csspagehandler,
        jspagehandler,
        versioncontrolpagehandler,
        advancejspagehandler,
        frontendFWpagehandler,
        cssFWpagehandler,
        webanimationpagehandler,
        buildtoolspagehandler,
        statemanagementpagehandler,
        typescriptpagehandler,
        testingpagehandler,
        performancepagehandler,
        modelingpagehandler,
        Adframworkshandler,
        uiuxpagehandler,
        jobpreppagehandler,
        continouslearnpagehandler,
        fullresourcehandler
    }

    const { data: roadmap, loading, error } = Development()

    const FrontendRoadmap = roadmap?.[2]?.roadmapSteps ?? []

    if (loading) {
        return <h1>loading</h1>
    }
    if (error) {
        return <h2 className='text-white'>Something went wrong!</h2>
    }

    // AddActivity: record completed step via ActivityContext (indices match handlers order)
    const AddActivity = async (id) => {
        if (!FrontendRoadmap?.[id]) {
            console.warn("AddActivity: invalid step id", id);
            return;
        }
        try {
            const stepName = FrontendRoadmap[id].name;
            const roadmapId = roadmap?.[2]?.route ?? roadmap?.[2]?.title ?? "frontend";
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

    return (
        <section className="flex flex-col items-center justify-center h-full lg:w-[80%] w-[100%] gap-3 overflow-hidden">

            {showhtmlpage && <HTMLPage closeHTML={() => sethtmlpage(false)} Done={() => AddActivity(0)} />}
            {showcsspage && <CSSPage closeCSS={() => setcsspage(false)} Done={() => AddActivity(1)} />}
            {showjspage && <Jspage closejs={() => setjspage(false)} Done={() => AddActivity(2)} />}
            {showversioncontrolpage && <VersionControl closeVCS={() => setversioncontrolpage(false)} Done={() => AddActivity(3)} />}
            {showadvancejspage && <AdvancedJavaScriptPage closeAdvancedJavaScript={() => setadvancejspage(false)} Done={() => AddActivity(4)} />}
            {showfrontendFWpage && <FrontendFrameworksPage closeFrontendFrameworks={() => setfrontendFWpage(false)} Done={() => AddActivity(5)} />}
            {showcssFWpage && <CSSFrameworksPage closeCSSFrameworks={() => setcssFWpage(false)} Done={() => AddActivity(6)} />}
            {showWebanimation && <WebAnimationPage closeWebAnimation={() => setWebanimation(false)} Done={() => AddActivity(7)} />}
            {showbuildtoolspage && <BuildToolsPage closeBuildTools={() => setbuildtoolspage(false)} Done={() => AddActivity(8)} />}
            {showstatemanagementpage && <StateManagementPage closeAdvancedState={() => setstatemanagementpage(false)} Done={() => AddActivity(9)} />}
            {showtypescriptpage && <TypeScriptPage closeTypeScript={() => settypescriptpage(false)} Done={() => AddActivity(10)} />}
            {showtestingpage && <TestingPage closeTesting={() => settestingpage(false)} Done={() => AddActivity(11)} />}
            {showperformancepage && <PerformanceOptimizationPage closePerformance={() => setperformancepage(false)} Done={() => AddActivity(12)} />}
            {show3dmodelingpage && <ThreeDModelingPage closeThreeDModeling={() => set3dmodelingpage(false)} Done={() => AddActivity(13)} />}
            {showadframworks && <AdFrameworkPage closeAdvancedFrameworks={() => setadframworks(false)} Done={() => AddActivity(14)} />}
            {showuiux && <UIUX closeUIUX={() => setuiux(false)} Done={() => AddActivity(15)} />}
            {showjobprep && <Jobprep closePortfolio={() => setjobprep(false)} Done={() => AddActivity(16)} />}
            {showcontinouslearn && <Continouslearn closeStayingUpdated={() => setcontinouslearn(false)} Done={() => AddActivity(17)} />}
            {showfullresource && <FullResource closeFullResources={() => setfullresource(false)} />}

            <div className='flex justify-center p-4 w-[100%]'>
                <Header />
            </div>

            {/* header  */}
            <div className="flex justify-center items-center gap-2 text-white text-xl border-b-2 border-white md:w-[90%] w-[100%]">
                <h1>FRONTEND DEVELOPMENT</h1>
                <div className="relative inline-block">
                    {/* Button */}
                    <span
                        className="material-symbols-outlined hover:text-[#198de0] cursor-pointer"
                    >
                        help
                    </span>
                </div>
            </div>

            {/* main content  */}
            <div className="conater relative w-full h-full">
                <div className="divider h-full items-center bg-white w-1 rounded-full absolute left-2 sm:left-[50%]"></div>

                <div className="flex flex-col justify-center w-full">

                    {FrontendRoadmap.map((item) => {


                        return (
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
                        );
                    })}
                </div>
            </div>
            {/* Full Resources Button */}
            <div onClick={fullresourcehandler} className="fixed bottom-[5rem] md:bottom-1 right-1 z-10">
                <button className="bg-[#198de0] hover:bg-[#ffff] px-3 py-3 rounded-2xl font-bold flex gap-2">
                    full course Resource
                    <span className="material-symbols-outlined">text_snippet</span>
                </button>
            </div>
            <MobileNav />
        </section>
    );
}