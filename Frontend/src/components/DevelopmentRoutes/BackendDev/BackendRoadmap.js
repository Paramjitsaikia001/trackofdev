import { useState, useContext } from "react";
import Header from "../../layout/Header";
import MobileNav from "../../navigation/mobilenav";

// Import pages (create them later in ./BackendDev)
import NodeBasicsPage from "../webdevelopmentRoutes/NodeJs";
import PackageManagerPage from "../webdevelopmentRoutes/Packagemanager";
import ExpressPage from "../webdevelopmentRoutes/expresspage";
import NestJSPage from "../BackendDev/NestJSPage";
import DatabaseSQLPage from "../BackendDev/DatabaseSQLPage";
import DatabaseNoSQLPage from "../BackendDev/DatabaseNoSQLPage";
import ORMPage from "../BackendDev/ORMPage";
import AuthPage from "../BackendDev/AuthPage";
import APIPage from "../BackendDev/APIPage";
import RealtimePage from "../BackendDev/RealtimePage";
import SecurityPage from "../BackendDev/SecurityPage";
import TestingPage from "../BackendDev/TestingPage";
import DevOpsPage from "../BackendDev/DevOpsPage";
import ScalabilityPage from "../BackendDev/ScalabilityPage";
import MonitoringPage from "../BackendDev/MonitoringPage";
import CloudPage from "../BackendDev/CloudPage";
import SystemDesignPage from "../BackendDev/SystemDesignPage";
import CareerPrepPage from "../BackendDev/CareerPrepPage";
import Fullresource from "./FullResource";
import Development from "../../../hooks/developments.hooks"
import ActivityContext from "../../../Context/activity.context";
import { toast } from "sonner"



export default function BackendRoadmap() {
    const [activeId, setActiveId] = useState(null);
    const { createActivity } = useContext(ActivityContext);

    // State management for detail pages
    const [shownodepage, setnodepage] = useState(false);
    const [showpackagepage, setpackagepage] = useState(false);
    const [showexpresspage, setexpresspage] = useState(false);
    const [showsqlpage, setsqlpage] = useState(false);
    const [shownosqlpage, setnosqlpage] = useState(false);
    const [showormpage, setormpage] = useState(false);
    const [showauthpage, setauthpage] = useState(false);
    const [showapipage, setapipage] = useState(false);
    const [showrealtimepage, setrealtimepage] = useState(false);
    const [showsecuritypage, setsecuritypage] = useState(false);
    const [showtestingpage, settestingpage] = useState(false);
    const [showdevopspage, setdevopspage] = useState(false);
    const [showscalabilitypage, setscalabilitypage] = useState(false);
    const [showmonitoringpage, setmonitoringpage] = useState(false);
    const [showcloudpage, setcloudpage] = useState(false);
    const [showsystemdesignpage, setsystemdesignpage] = useState(false);
    const [showcareerpage, setcareerpage] = useState(false);
    const [showfullresource, setFullResource] = useState(false);

    const handlers = {
        nodepagehandler: () => setnodepage(!shownodepage),
        packagepagehandler: () => setpackagepage(!showpackagepage),
        expresspagehandler: () => setexpresspage(!showexpresspage),
        sqlpagehandler: () => setsqlpage(!showsqlpage),
        nosqlpagehandler: () => setnosqlpage(!shownosqlpage),
        ormpagehandler: () => setormpage(!showormpage),
        authpagehandler: () => setauthpage(!showauthpage),
        apipagehandler: () => setapipage(!showapipage),
        realtimepagehandler: () => setrealtimepage(!showrealtimepage),
        securitypagehandler: () => setsecuritypage(!showsecuritypage),
        testingpagehandler: () => settestingpage(!showtestingpage),
        devopspagehandler: () => setdevopspage(!showdevopspage),
        scalabilitypagehandler: () => setscalabilitypage(!showscalabilitypage),
        monitoringpagehandler: () => setmonitoringpage(!showmonitoringpage),
        cloudpagehandler: () => setcloudpage(!showcloudpage),
        systemdesignpagehandler: () => setsystemdesignpage(!showsystemdesignpage),
        careerpagehandler: () => setcareerpage(!showcareerpage),
        fullresourcehandler: () => setFullResource(!showfullresource)
    };

    const { data: roadmap, loading, error } = Development();

    // normalize steps for backend (index 3 in roadmap array)
    const backendSteps = roadmap?.[3]?.roadmapSteps ?? [];

    if (loading) {
        return <h1>loading</h1>;
    }
    if (error) {
        return <h2 className='text-white'>Something went wrong!</h2>;
    }

    // AddActivity: mark a roadmap step completed (similar to appdevelopmet)
    const AddActivity = async (id) => {
        if (!backendSteps?.[id]) {
            console.warn('AddActivity: invalid step id', id);
            return;
        }
        try {
            const stepName = backendSteps[id].name;
            const roadmapId = roadmap?.[3]?.route ?? roadmap?.[3]?.title;
            const res = await createActivity({
                roadmpStepsId: stepName,
                roadmapId: roadmapId
            });
            toast.success(`${stepName} completed successfully!`);
            console.log('AddActivity response', res);
        } catch (err) {
            console.error('AddActivity error', err);
        }
    };

    return (
        <section className="flex flex-col items-center justify-center h-full lg:w-[80%] w-[100%] gap-3 overflow-hidden">
            {/* Conditional renders for detail pages */}
            {shownodepage && <NodeBasicsPage closeNodeJS={() => setnodepage(false)} Done={() => AddActivity(0)} />}
            {showpackagepage && <PackageManagerPage closePM={() => setpackagepage(false)} Done={() => AddActivity(1)} />}
            {showexpresspage && <ExpressPage closeexpress={() => setexpresspage(false)} Done={() => AddActivity(2)} />}
            {showsqlpage && <DatabaseSQLPage closeSQL={() => setsqlpage(false)} Done={() => AddActivity(3)} />}
            {shownosqlpage && <DatabaseNoSQLPage closeNoSQL={() => setnosqlpage(false)} Done={() => AddActivity(4)} />}
            {showormpage && <ORMPage closeOrm={() => setormpage(false)} Done={() => AddActivity(5)} />}
            {showauthpage && <AuthPage closeAuth={() => setauthpage(false)} Done={() => AddActivity(6)} />}
            {showapipage && <APIPage closeApi={() => setapipage(false)} Done={() => AddActivity(7)} />}
            {showrealtimepage && <RealtimePage closeRealTime={() => setrealtimepage(false)} Done={() => AddActivity(8)} />}
            {showsecuritypage && <SecurityPage closeSecurity={() => setsecuritypage(false)} Done={() => AddActivity(9)} />}
            {showtestingpage && <TestingPage closeTesting={() => settestingpage(false)} Done={() => AddActivity(10)} />}
            {showdevopspage && <DevOpsPage closeDeploy={() => setdevopspage(false)} Done={() => AddActivity(11)} />}
            {showscalabilitypage && <ScalabilityPage closeScale={() => setscalabilitypage(false)} Done={() => AddActivity(12)} />}
            {showmonitoringpage && <MonitoringPage closeMonitor={() => setmonitoringpage(false)} Done={() => AddActivity(13)} />}
            {showcloudpage && <CloudPage closeCloudInfra={() => setcloudpage(false)} Done={() => AddActivity(14)} />}
            {showsystemdesignpage && <SystemDesignPage closeSystemDesign={() => setsystemdesignpage(false)} Done={() => AddActivity(15)} />}
            {showcareerpage && <CareerPrepPage closeCareer={() => setcareerpage(false)} Done={() => AddActivity(16)} />}
            {showfullresource && <Fullresource closeFullResources={() => setFullResource(false)} />}

            {/* Header */}
            <div className="flex justify-center p-4 w-[100%]">
                <Header />
            </div>

            {/* Section title */}
            <div className="flex justify-center items-center gap-2 text-white text-xl border-b-2 border-white md:w-[90%] w-[100%]">
                <h1>BACKEND DEVELOPMENT</h1>
                <span className="material-symbols-outlined hover:text-[#198de0] cursor-pointer">
                    help
                </span>
            </div>

            {/* Roadmap Timeline */}
            <div className="conater relative w-full h-full">
                <div className="divider h-full items-center bg-white w-1 rounded-full absolute left-2 sm:left-[50%]"></div>

                <div className="flex flex-col justify-center w-full">
                    {backendSteps.map((item) => {
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
            <div onClick={handlers.handleFullResource} className="fixed bottom-[5rem] md:bottom-1 right-1 z-10">
                <button className="bg-[#198de0] hover:bg-[#ffff] px-3 py-3 rounded-2xl font-bold flex gap-2">
                    full course Resource
                    <span className="material-symbols-outlined">text_snippet</span>
                </button>
            </div>
            <MobileNav />
        </section>
    );
}
